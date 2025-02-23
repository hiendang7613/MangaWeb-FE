import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";

function Home() {
  const params = useParams();
  const slides = [
    {
      id: 1,
      img: "a.png",
      alt: "Slide 1",
    },
    {
      id: 2,
      img: "a.png",
      alt: "Slide 2",
    },
    {
      id: 3,
      img: "a.png",
      alt: "Slide 3",
    },
  ];

  return (
    <main className="">
      <div className="mb-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-[200px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="main-content justify-center">
        <div className=" flex flex-wrap -mx-2 p-8 justify-center main-block">
          <div className="w-full lg:w-8/12 px-2">
            <section className="mb-4">
              <h2 className="text-xl font-bold mb-2">NetTruyen đề cử</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
                <div className="bg-white p-0 rounded ">
                  <div className="image-box">
                    <img
                      alt="Tôn Cầu Bàng Phong"
                      className="w-full h-full object-cover mb-2 rounded"
                      src="b.jpg"
                    />
                    <div className="image-box-stat">
                      <span className="pull-left">
                        <i className="image-box-icon fa fa-eye"></i> 10K
                        <i className="image-box-icon fa fa-comment"></i> 2,938
                        <i className="image-box-icon fa fa-heart"></i> 12,980
                      </span>
                    </div>
                  </div>
                  <h3 className="figcaption">
                    Thưa Ngài, Tôi Cảm Thấy Khó Chịu
                  </h3>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                </div>

                <div className="bg-white p-0 rounded ">
                  <div className="image-box">
                    <img
                      alt="Tôn Cầu Bàng Phong"
                      className="w-full h-full object-cover mb-2 rounded"
                      src="b.jpg"
                    />
                  </div>
                  <h3 className="figcaption">
                    Thưa Ngài, Tôi Cảm Thấy Khó Chịu
                  </h3>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                </div>

                <div className="bg-white p-0 rounded ">
                  <div className="image-box">
                    <img
                      alt="Tôn Cầu Bàng Phong"
                      className="w-full h-full object-cover mb-2 rounded"
                      src="b.jpg"
                    />
                  </div>
                  <h3 className="figcaption">
                    Thưa Ngài, Tôi Cảm Thấy Khó Chịu
                  </h3>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                </div>

                <div className="bg-white p-0 rounded ">
                  <div className="image-box">
                    <img
                      alt="Tôn Cầu Bàng Phong"
                      className="w-full h-full object-cover mb-2 rounded"
                      src="b.jpg"
                    />
                  </div>
                  <h3 className="figcaption">
                    Thưa Ngài, Tôi Cảm Thấy Khó Chịu
                  </h3>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-4">
              <h2 className="text-xl font-bold mb-2">
                NetTruyen - Truyện tranh online
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <div className="bg-white p-0 rounded ">
                  <div className="image-box">
                    <img
                      alt="Tôn Cầu Bàng Phong"
                      className="w-full h-full object-cover mb-2 rounded"
                      src="b.jpg"
                    />
                  </div>
                  <h3 className="figcaption">
                    Thưa Ngài, Tôi Cảm Thấy Khó Chịu
                  </h3>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                </div>
                <div className="bg-white p-0 rounded ">
                  <div className="image-box">
                    <img
                      alt="Tôn Cầu Bàng Phong"
                      className="w-full h-full object-cover mb-2 rounded"
                      src="b.jpg"
                    />
                  </div>
                  <h3 className="figcaption">
                    Thưa Ngài, Tôi Cảm Thấy Khó Chịu
                  </h3>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                </div>
                <div className="bg-white p-0 rounded ">
                  <div className="image-box">
                    <img
                      alt="Tôn Cầu Bàng Phong"
                      className="w-full h-full object-cover mb-2 rounded"
                      src="b.jpg"
                    />
                  </div>
                  <h3 className="figcaption">
                    Thưa Ngài, Tôi Cảm Thấy Khó Chịu
                  </h3>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                </div>
                <div className="bg-white p-0 rounded ">
                  <div className="image-box">
                    <img
                      alt="Tôn Cầu Bàng Phong"
                      className="w-full h-full object-cover mb-2 rounded"
                      src="b.jpg"
                    />
                  </div>
                  <h3 className="figcaption">
                    Thưa Ngài, Tôi Cảm Thấy Khó Chịu
                  </h3>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                  <div className="div-caption">
                    <a className="chapcaption">Chapter 572</a>{" "}
                    <i className="chap-time">1 ngày trước</i>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex justify-center mt-4">
              <nav className="inline-flex">
                <a
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700"
                  href="#"
                >
                  1
                </a>
                <a
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700"
                  href="#"
                >
                  2
                </a>
                <a
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700"
                  href="#"
                >
                  3
                </a>
                <a
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700"
                  href="#"
                >
                  4
                </a>
                <a
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700"
                  href="#"
                >
                  5
                </a>
                <a
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700"
                  href="#"
                >
                  6
                </a>
                <a
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700"
                  href="#"
                >
                  7
                </a>
                <span className="px-3 py-1 border border-gray-300 bg-white text-gray-700">
                  ...
                </span>
                <a
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700"
                  href="#"
                >
                  585
                </a>
                <a
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700"
                  href="#"
                >
                  586
                </a>
              </nav>
            </div>
          </div>

          <div className="w-full lg:w-4/12 px-2  pl-4">
            <h1 className="text-lg mb-4">Xu hướng</h1>

            <section className="mb-4">
              <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="border-b">
                  <ul className="flex">
                    <li className="w-1/3 text-center py-2 border-b-2 border-purple-500">
                      <a className="text-black font-semibold" href="#">
                        Top Tháng
                      </a>
                    </li>
                    <li className="w-1/3 text-center py-2">
                      <a className="text-gray-500" href="#">
                        Top Tuần
                      </a>
                    </li>
                    <li className="w-1/3 text-center py-2">
                      <a className="text-gray-500" href="#">
                        Top Ngày
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pl-3 pt-4">
                  <div className="flex items-center mb-4 rank-box">
                    <span className="txt-rank">01</span>
                    <div className="img-rank-box">
                      <img
                        alt="Image of Hoá Ra Ta Đã Vô Địch Từ Lâu"
                        className="w-12 h-12 rounded mr-2"
                        src="https://storage.googleapis.com/a1aa/image/1XlIzymbvlJaPJRb1SyUehQ7fjbSXxE0OHSBBtykzFMfvHSoA.jpg"
                      />
                    </div>
                    <div>
                      <a className="txt-rank-cap">
                        Hoá Ra Ta Đã Vô Địch Từ Lâu
                      </a>
                      <div>
                        <a className="txt-rank-chapter">Chapter 234</a>
                        <span className="txt-rank-view">
                          <i className="fas fa-eye mr-1"></i> 13
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 rank-box">
                    <span className="txt-rank">01</span>
                    <div className="img-rank-box">
                      <img
                        alt="Image of Hoá Ra Ta Đã Vô Địch Từ Lâu"
                        className="w-12 h-12 rounded mr-2"
                        src="https://storage.googleapis.com/a1aa/image/1XlIzymbvlJaPJRb1SyUehQ7fjbSXxE0OHSBBtykzFMfvHSoA.jpg"
                      />
                    </div>
                    <div>
                      <a className="txt-rank-cap">
                        Hoá Ra Ta Đã Vô Địch Từ Lâu
                      </a>
                      <div>
                        <a className="txt-rank-chapter">Chapter 234</a>
                        <span className="txt-rank-view">
                          <i className="fas fa-eye mr-1"></i> 13
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 rank-box">
                    <span className="txt-rank">01</span>
                    <div className="img-rank-box">
                      <img
                        alt="Image of Hoá Ra Ta Đã Vô Địch Từ Lâu"
                        className="w-12 h-12 rounded mr-2"
                        src="https://storage.googleapis.com/a1aa/image/1XlIzymbvlJaPJRb1SyUehQ7fjbSXxE0OHSBBtykzFMfvHSoA.jpg"
                      />
                    </div>
                    <div>
                      <a className="txt-rank-cap">
                        Hoá Ra Ta Đã Vô Địch Từ Lâu
                      </a>
                      <div>
                        <a className="txt-rank-chapter">Chapter 234</a>
                        <span className="txt-rank-view">
                          <i className="fas fa-eye mr-1"></i> 13
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 rank-box">
                    <span className="txt-rank">01</span>
                    <div className="img-rank-box">
                      <img
                        alt="Image of Hoá Ra Ta Đã Vô Địch Từ Lâu"
                        className="w-12 h-12 rounded mr-2"
                        src="https://storage.googleapis.com/a1aa/image/1XlIzymbvlJaPJRb1SyUehQ7fjbSXxE0OHSBBtykzFMfvHSoA.jpg"
                      />
                    </div>
                    <div>
                      <a className="txt-rank-cap">
                        Hoá Ra Ta Đã Vô Địch Từ Lâu
                      </a>
                      <div>
                        <a className="txt-rank-chapter">Chapter 234</a>
                        <span className="txt-rank-view">
                          <i className="fas fa-eye mr-1"></i> 13
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 rank-box">
                    <span className="txt-rank">01</span>
                    <div className="img-rank-box">
                      <img
                        alt="Image of Hoá Ra Ta Đã Vô Địch Từ Lâu"
                        className="w-12 h-12 rounded mr-2"
                        src="https://storage.googleapis.com/a1aa/image/1XlIzymbvlJaPJRb1SyUehQ7fjbSXxE0OHSBBtykzFMfvHSoA.jpg"
                      />
                    </div>
                    <div>
                      <a className="txt-rank-cap">
                        Hoá Ra Ta Đã Vô Địch Từ Lâu
                      </a>
                      <div>
                        <a className="txt-rank-chapter">Chapter 234</a>
                        <span className="txt-rank-view">
                          <i className="fas fa-eye mr-1"></i> 13
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 rank-box">
                    <span className="txt-rank">01</span>
                    <div className="img-rank-box">
                      <img
                        alt="Image of Hoá Ra Ta Đã Vô Địch Từ Lâu"
                        className="w-12 h-12 rounded mr-2"
                        src="https://storage.googleapis.com/a1aa/image/1XlIzymbvlJaPJRb1SyUehQ7fjbSXxE0OHSBBtykzFMfvHSoA.jpg"
                      />
                    </div>
                    <div>
                      <a className="txt-rank-cap">
                        Hoá Ra Ta Đã Vô Địch Từ Lâu
                      </a>
                      <div>
                        <a className="txt-rank-chapter">Chapter 234</a>
                        <span className="txt-rank-view">
                          <i className="fas fa-eye mr-1"></i> 13
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="txt-rank">01</span>
                    <div className="img-rank-box">
                      <img
                        alt="Image of Hoá Ra Ta Đã Vô Địch Từ Lâu"
                        className="w-12 h-12 rounded mr-2"
                        src="https://storage.googleapis.com/a1aa/image/1XlIzymbvlJaPJRb1SyUehQ7fjbSXxE0OHSBBtykzFMfvHSoA.jpg"
                      />
                    </div>
                    <div>
                      <a className="txt-rank-cap">
                        Hoá Ra Ta Đã Vô Địch Từ Lâu
                      </a>
                      <div>
                        <a className="txt-rank-chapter">Chapter 234</a>
                        <span className="txt-rank-view">
                          <i className="fas fa-eye mr-1"></i> 13
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="p-0">
              <h1 className="text-lg mb-4">Thể loại</h1>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-lg">
                    <span>Action</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-lg">
                    <span>Adventure</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-lg">
                    <span>Comedy</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-lg">
                    <span>Drama</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-lg">
                    <span>Fantasy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
