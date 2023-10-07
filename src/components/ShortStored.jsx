import React from "react";
import heart from "../assets/img/heart.svg";
import saved from "../assets/img/saved.svg";
import Emitting from "../assets/img/Emitting.svg";
import ImgBoxEmpty from "./ImgBoxEmpty";

function ShortStored({
  swiperIndex,
  slideTo,
  loveTab,
  setLoveTab=()=>{},
  boxContentRef,
}) {

  const data = [{
    name: "Những đứa trẻ làng quê"
  }]
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
                onClick={() => slideTo(index)}
              >
                <img
                  src={item.videoData?.coverImage || "VideoDemo.png"}
                  alt="video đã thích"
                  className="list-short__item-img"
                />
                {index !== swiperIndex && (
                  <h4 className="list-short__des">{item.name}</h4>
                )}
                {index === swiperIndex && (
                  <div className="list-short__backdrop">
                    <img src={Emitting} alt="" width={32} height={32} />
                    <span>Đang xem </span>
                  </div>
                )}
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
