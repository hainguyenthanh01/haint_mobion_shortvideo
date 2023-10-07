import React from "react";
import heart from "../assets/img/heart.svg";
import saved from "../assets/img/saved.svg";
import Emitting from "../assets/img/Emitting.svg";
import ImgBoxEmpty from "./ImgBoxEmpty";

function ShortStored({
  swiperIndex,
  slideTo = () => {},
  loveTab,
  setLoveTab = () => {},
  boxContentRef,
}) {
  const data = [
    {
      name: "Những đứa trẻ làng quê",
      img: "https://cdn.24h.com.vn/upload/1-2022/images/2022-01-17/Le-Bong-gay-tranh-cai-khi-di-thi-hoa-hau-lo-chan-cot-dinh-khac-xa-tren-anh-b1-1642383834-549-width1000height1501.jpeg",
    },
  ];
  return (
    <div className="short-loved">
      <div className="short-loved__header">
        <div
          onClick={() => setLoveTab(true)}
          className={
            loveTab
              ? "short-loved__title short-loved__title--red"
              : "short-loved__title"
          }
        >
          <img src={heart} alt="" />
          <span>Đã thích</span>
        </div>
        <div
          onClick={() => setLoveTab(false)}
          className={
            loveTab
              ? "short-loved__title"
              : "short-loved__title short-loved__title--red"
          }
        >
          <img src={saved} alt="" />
          <span>Lưu trữ</span>
        </div>
      </div>
      {data?.length > 0 ? (
        <div className="list-short" ref={boxContentRef}>
          {data?.length > 0 &&
            data.map((item, index) => (
              <div
                className="list-short__item"
                key={index}
                // onClick={() => slideTo(index)}
              >
                <img
                  // src={item.videoData?.coverImage || "VideoDemo.png"}
                  src={item.img}
                  alt="video đã thích"
                  className="list-short__item-img"
                />
                {index !== swiperIndex && (
                  <h4 className="list-short__des">{item.name}</h4>
                )}

                <div className="list-short__backdrop">
                  <img src={Emitting} alt="" width={32} height={32} />
                  <span>Đang xem </span>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <ImgBoxEmpty
          text={`Bạn chưa ${loveTab ? "thích" : "lưu trữ"} video nào`}
        />
      )}
    </div>
  );
}

export default ShortStored;
