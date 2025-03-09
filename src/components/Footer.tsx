import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      {/* <section className="bg-gray-100 py-12 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Khám phá các chủ đề nổi bật khác
          </h2>
          <p className="text-gray-700 mb-8">
            Khám phá các bài viết mới khác về các chủ đề nổi bật khác trong quá
            trình lập mô hình, triển khai và các quy trình trong AI và lập trình
            khác.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Về các bài báo nổi bật</h3>
              <p className="text-gray-700">
                {" "}
                Các bài viết về các bài báo nổi bật gần đây.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Về các repo nổi bật</h3>
              <p className="text-gray-700">
                {" "}
                Các bài viết giới thiệu repo nổi bật gần đây.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <footer className="bg-gray-100 py-6 mt-6 footer-content">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <img
                src="/public/logo.jpeg"
                alt="CodeLearn Logo"
                className="h-10 w-10 mb-4"
              />
              <p className="text-gray-600">
                Website truyen...
              </p>
              <div className="flex mt-4">
                <a href="#" className="text-gray-600 mx-2">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 mx-2">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="text-gray-600 mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 mx-2">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Các tính năng khác</h3>
              <ul>
                <li className="text-gray-600 mb-2">Các chủ đề mới</li>
                <li className="text-gray-600 mb-2">Các bài báo mới</li>
                <li className="text-gray-600 mb-2">Các repo nổi bật</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Thông tin</h3>
              <ul>
                <li className="text-gray-600 mb-2">Về ...</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 mt-6">
            <p>Cung cấp bởi ....</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
