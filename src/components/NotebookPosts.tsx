import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const getCSRFToken = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/csrf-token/", {
      method: "GET",
      credentials: 'include',  // This ensures that cookies are included in the request
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to get CSRF token");
    }
  } catch (error) {
    console.error(error);
  }
};

function NotebookPosts() {
  const [posts, setPosts] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/upload/")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(""); // Reset error message
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('response===');

    // Fetch CSRF token before making the POST request
    await getCSRFToken();

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("content", file);
    formData.append("title", title);

    try {
      const csrfToken = Cookies.get("csrftoken"); // Get CSRF token from cookies
      const response = await fetch("http://localhost:8000/api/upload/", {
        method: "POST",
        body: formData,
        credentials: "include", // Include credentials to send cookies
        headers: {
          "X-CSRFToken": csrfToken, // Include the CSRF token in the request headers
        },
      });
      if (!response.ok) {
        throw new Error("Failed to upload file");
      }
      // Reset form state after successful upload
      setFile(null);
      setTitle("");
      setError("");
      const updatedPosts = await response.json();
      setPosts(updatedPosts);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Notebook Posts</h1>

      {/* File Upload Form */}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="file">Upload .ipynb file:</label>
          <input
            type="file"
            id="file"
            accept=".ipynb"
            onChange={handleFileChange}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default NotebookPosts;
