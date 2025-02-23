import React from "react";
import { useParams } from "react-router-dom";

function AIOcean() {
  const params = useParams();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 ">
        <div className="aiocean__background"></div>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          Khám Phá Đại Dương AI và Học Máy
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
          Bước vào hành trình khám phá những ứng dụng mạnh mẽ và tiềm năng vô hạn của AI và Machine Learning trong cuộc sống và trong công nghiệp.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="text-center">
          <img
            src="https://placehold.co/100x100"
            alt="Biểu tượng đại diện cho Computer Vision"
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Artificial Intelligence
          </h2>
          <p className="text-gray-600 mb-4">
            Những lời mở đầu về những khái niệm đầu tiên khi bước vào lĩnh vực Trí tuệ nhân tạo.
          </p>
          <a href="/ai-ocean/computer-vision">

          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
            Tìm hiểu thêm
          </button>
          </a>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/100x100"
            alt="Biểu tượng đại diện cho Natural Language Processing"
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Machine Learning
          </h2>
          <p className="text-gray-600 mb-4">
            Cùng tìm hiểu các phương pháp máy học cơ bản và phổ biến hiện nay.
          </p>
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
            Tìm hiểu thêm
          </button>
        </div>

        <div className="text-center">
          <img
            src="https://placehold.co/100x100"
            alt="Biểu tượng đại diện cho Graph and Structured Data"
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Deep Learning
          </h2>
          <p className="text-gray-600 mb-4">
            Tìm hiểu thêm về Deep Learning và các ứng dụng của nó.

          </p>
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <img
            src="https://placehold.co/100x100"
            alt="Biểu tượng đại diện cho Computer Vision"
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Computer Vision
          </h2>
          <p className="text-gray-600 mb-4">
            Tìm hiểu cách máy tính có thể phân tích và hiểu hình ảnh từ thế giới thực, từ nhận diện đối tượng đến phân tích cảm xúc.
          </p>
          <a href="/ai-ocean/computer-vision">

          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
            Tìm hiểu thêm
          </button>
          </a>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/100x100"
            alt="Biểu tượng đại diện cho Natural Language Processing"
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            NLP and LLM
          </h2>
          <p className="text-gray-600 mb-4">
            Khám phá cách AI có thể hiểu, phân tích và tương tác với ngôn ngữ con người, từ chatbot đến dịch máy.
          </p>
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
            Tìm hiểu thêm
          </button>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/100x100"
            alt="Biểu tượng đại diện cho Audio and Speech"
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Audio and Speech
          </h2>
          <p className="text-gray-600 mb-4">
            Tìm hiểu cách công nghệ nhận diện và phân tích giọng nói đang thay đổi cách chúng ta giao tiếp với máy móc.
          </p>
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
            Tìm hiểu thêm
          </button>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/100x100"
            alt="Biểu tượng đại diện cho Graph and Structured Data"
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Knowledge Graphs
          </h2>
          <p className="text-gray-600 mb-4">
            Khám phá cách thức phân tích và trực quan hóa dữ liệu phức tạp để đưa ra quyết định thông minh hơn.
          </p>
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </div>
  );
}  

export default AIOcean;
