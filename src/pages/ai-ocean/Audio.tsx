import React, { useEffect, useState } from "react";

function ComputerVision() {
  // States for notebook files, notebook content, error, and table of contents
  const [notebookFiles, setNotebookFiles] = useState({});
  const [notebookContent, setNotebookContent] = useState(null);
  const [toc, setToc] = useState([]);
  const [error, setError] = useState(null);
  const [notebook, setNotebook] = useState("wellcome"); // Default notebook

  // Get area and topic from the URL path
  const { pathname } = window.location;
  const segments = pathname.split("/");
  const area = segments[1];
  const topic = segments[2];

  // Fetch the list of notebook files based on area and topic
  useEffect(() => {
    fetch(`http://localhost:8000/api/list_notebooks/${area}/${topic}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch notebook files");
        }
        return response.json();
      })
      .then((data) => setNotebookFiles(data))
      .catch((error) => setError(error.message));
  }, [area, topic]);

  // Fetch the content of the selected notebook
  useEffect(() => {
    fetch(
      `http://localhost:8000/api/get_notebooks/${area}/${topic}/${notebook}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNotebookContent(data.html_content);
        setToc(data.toc); // Set table of contents from the response
      })
      .catch((error) => console.error("Error fetching notebook:", error));
  }, [area, topic, notebook]);

  return (
    <div className="flex">
      {/* Left Aside: Notebook Files List */}
      <aside className="w-1/4 p-6 border-r border-gray-200 min-h-[80vh]" style={{ boxShadow: '10px 0 15px -3px rgba(0, 0, 0, 0.1)' }}>
      <div className="mb-6">
          <input
            type="text"
            placeholder="Lọc tệp tin"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>
        <nav>
          <ul className="space-y-4">
            {Object.keys(notebookFiles).length > 0 ? (
              Object.keys(notebookFiles).map((section, index) => (
                <li key={index}>
                  <details open className="group">
                    <summary className="text-lg font-bold text-gray-800 cursor-pointer flex items-center group-hover:text-orange-500 transition-colors duration-300 ease-in-out">
                      {section}
                    </summary>
                    <ul className="ml-5 mt-2 space-y-2">
                      {notebookFiles[section].map((lesson, lessonIndex) => (
                        <li key={lessonIndex}>
                          <button
                            className="block text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                            onClick={() => setNotebook(section + "_" + lesson)}
                          >
                            {lesson}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))
            ) : (
              <li className="text-gray-500">
                No files found for {area} / {topic}
              </li>
            )}
          </ul>
        </nav>
      </aside>

      {/* Middle Layout: Render the Jupyter notebook */}
      <main className="w-3/4 p-8">
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: notebookContent }} />
        )}
      </main>
      {/* Right Aside: Table of Contents */}
      <aside className="w-1/4 p-6">
        <nav>
          <h2 className="text-lg font-bold mb-4 text-gray-800">
            Table of Contents
          </h2>
          <ul className="space-y-3">
            {toc.length > 0 ? (
              toc.map((item, index) => (
                <li key={index} className="relative pl-4">
                  <span className="absolute left-0 top-0 h-full w-1 bg-orange-500"></span>
                  <a
                    href={`#${item.id}`}
                    className="block text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors duration-300 ease-in-out"
                  >
                    {item.text}
                  </a>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No Table of Contents available</li>
            )}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default ComputerVision;
