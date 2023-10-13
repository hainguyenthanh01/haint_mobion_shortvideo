import React, { useEffect, useState } from "react";
import { Link, NavLink, Navigate, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeActive from "../assets/icons/HomeActive.svg";
import HomeNonActive from "../assets/icons/HomeNonActive.svg";
import PersonNon from "../assets/icons/PersonNon.svg";
import PersonActive from "../assets/icons/PersonActive.svg";
import LoveNon from "../assets/icons/LoveNon.svg";
import Love from "../assets/img/Love.svg";
import icon_Live from "../assets/icons/Live.svg";
import Mobifone from "../assets/img/Mobifone.png";
import Message from "../assets/img/Message.svg";
import Facebook from "../assets/img/Facebook.svg";
import { useToggle } from "@react-hookz/web";

import Akiraphan from "../assets/img/akiraphan.png";
import Phong from "../assets/img/phong.png";
import Vpop from "../assets/img/Vpop.png";
import TVShow from "../assets/icons/options/Tvshow.svg";
import Phim from "../assets/icons/options/Phim.svg";
import Nhac from "../assets/icons/options/Nhac.svg";
import ESport from "../assets/icons/options/Esport.svg";
import Kids from "../assets/icons/options/Kids.svg";
import TinNhanh from "../assets/icons/options/TinNhanh.png";
import { setUser } from "../helper";
import { getUser } from "../utils/localStorage";

function Sidebar({showMenu,userState,setUserState=()=>{}}) {
  const location = useLocation();
const [showFollowVideo, setShowFollowVideo] = useState(false);
  const [listAllSidebar, setListAllSidebar] = useState({});
  const navigate = useNavigate()

  const [showAllSuggest, setShowAllSuggest] = useToggle(false);
  const [showAllFollow, setShowAllFollow] = useToggle(false);
  const menuItems = [
    {
      text: "Dành cho bạn",
      url: "/danh-cho-ban",
      url2: "/",
      iconActive: HomeActive,
      icon: HomeNonActive,
      link:"/danh-cho-ban"
    },
    {
      text: "Đang theo dõi",
      url: "/dang-theo-doi",
      iconActive: PersonActive,
      icon: PersonNon,
      link:"/dang-theo-doi"
    },
    {
      text: "Trực tiếp",
      url: "/live",
      iconActive: icon_Live,
      icon: icon_Live,
      link:"/live"
    },
    {
      text: "Yêu thích",
      url: "/yeu-thich",
      iconActive: Love,
      icon: LoveNon,
      link:"/yeu-thich"
    },
  ];
  const menuChannel = [
    {
      text: "Akiraphan",
      image: Akiraphan,
      number: 3,
      link: "/channel/akiraphan"
    },
    {
      text: "Châu Khải Phong",
      image: Phong,
      number: 4,
      link: "/channel/chaukhaiphong"
    },
    {
      text: "V-Pop Hot",
      image: Vpop,
      number: 5,
      link: "/channel/vpop"
    },
  ];
  const discovery = [
    {
      text: "lebao",
      link: "/hashtag/lebao"
    },
    {
      text: "trending",
      link: "/hashtag/trending"
    },
    {
      text: "hot",
      link: "/hashtag/hot"
    },
    {
      text: "food",
      link: "/hashtag/food"
    },
    {
      text: "foryou",
      link: "/hashtag/foryou"
    },
    {
      text: "xuhuong",
      link: "/hashtag/xuhuong"
    },
  ];
  const service = [
    {
      text: "TV Show",
      image: TVShow,
      link: "http://tvshow.mobion.vn/",
      

    },
    {
      text: "Phim",
      image: Phim,
      link: "http://phim.mobion.vn/",
 
    },
    {
      text: "Nhạc",
      image: Nhac,
      link: "http://nhac.mobion.vn/",
 
    },
    {
      text: "eSports",
      image: ESport,
      link: "http://esport.mobion.vn/",
      
    },
    {
      text: "Kids",
      image: Kids,
      link: "http://kid.mobion.vn/",
  
    },
    {
      text: "Tin Nhanh",
      image: TinNhanh,
      link: "http://tinnhanh.mobion.vn/",
    },
  ];

  return (
    <div>
      <nav className={showMenu ? "sidebar show-sidebar" : "sidebar"}>
        <div className="menu">
          {menuItems.map(({ text, url,url2, icon, iconActive ,link }, index) => (
            <div
              key={text}
              className={`${showMenu ? "menu__item menu__show" : "menu__item"} ${
                location.pathname === "/" && url === "/danh-cho-ban" && "active"
              }`}
              // style={{
              //   display: url === "/yeu-thich" ? "none" : "flex",
              // }}
              onClick={()=>{
                navigate(link)}}
            >          
                {location.pathname === url ||
            (url2 && url2 === location.pathname) ? (
              <img
                className="menu__item-icon"
                src={iconActive}
                alt=""
                width={32}
                height={32}
              />
            ) : (
              <img
                className="menu__item-icon"
                src={icon}
                alt=""
                width={32}
                height={32}
              />
            )}
              <p className="menu__des">{text}</p>
            </div>
          ))}
          <div className="sidebar__line"></div>
        </div>
        {!userState &&(
        <div className="login">
          <p className="login__des">
            Hãy đăng nhập để thích video, bình luận và đăng ký kênh.
          </p>

          <button onClick={()=>{ 
            setUserState(true)
            setUser(true)}} className="login__button" >
            Đăng nhập
          </button>
          <div className="sidebar__line"></div>
        </div>)}
        {showMenu &&(
        <div className="channels-pri">
          <h3 className="channels-pri__title">
            Kênh đề xuất
          </h3>
          {menuChannel.map(({ text, link, image, number }) => 
             (
                <div
                  style={{ color: "white" }}
                >
                  <div className="channel" onClick={()=>{
                navigate(link)}}>
                    <img
                      src={image}
                      alt=""
                      className="channel__avatar"
                      width={40}
                      height={40}
                    />
                    <div className="channel__des">
                      <p className="channel__name">{text}</p>
                      <div className="channel__follow">
                        {number} theo dõi
                      </div>
                    </div>
                  </div>
                </div>
              ))
             }
              <a onClick={setShowAllSuggest}>
                <p className="channels-pri__view">Xem thêm</p>
              </a>
          <div className="sidebar__line"></div>
        </div>)}
        {showMenu &&(
        <div className="discovery">
          <h3 className="discovery__title">
            Khám phá
          </h3>
          <ul className="discovery__tags">
            {discovery.map(({ text, link }) => (
              <li className="discovery__tag">
                <div onClick={()=>{
                navigate(link)}}>#{text}</div>
              </li>
            ))}
          </ul>

          <div className="sidebar__line"></div>
        </div>)}
        {showMenu &&(
        <div className="service">
          <h3 className="service__title">
            Dịch vụ khác của Mobion
          </h3>
          <ul className="service__options">
            {service.map(
              ( item ) => (
                <li
                  className="service__option"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <img className="service__icon" src={item.image} alt="" />
                  <p className="service__des">{item.text}</p>
                </li>
              )
            )}
          </ul>
          <div className="sidebar__line"></div>
        </div>
        )}
        {showMenu &&(
        <div className="info">
          <p className="info__title">Bản quyền thuộc</p>
          <img src={Mobifone} className="info__img" alt="" />
          <p className="info__des">
            <span>Cơ quan chủ quản: </span>Trung tâm Dịch vụ Số MobiFone – Chi
            nhánh Tổng Công ty Viễn thông MobiFone.
          </p>
          <p className="info__number">
            <span>Điện thoại: </span> 9090 (200đ/phút)
          </p>
          <p className="info__number">
            <span>Email: </span> mobion-cskh@mobifone.vn
          </p>
          <div className="info__follow">
            <p>Kênh theo dõi</p>
            <img
              src={Message}
              className="info__icon"
              alt=""
              onClick={() =>
                window.open(
                  "https://www.facebook.com/mobiOn.VideoSocialNetwork",
                  "_blank"
                )
              }
            />
            <img
              src={Facebook}
              className="info__icon"
              alt=""
              onClick={() =>
                window.open(
                  "https://www.facebook.com/messages/t/100446761898574",
                  "_blank"
                )
              }
            />
          </div>
          <div className="sidebar__line"></div>
          <div className="info__download">
            <img
              src="http://mobion.vn/static/media/ic_appstore.71b0cc80.svg"
              className=""
              alt=""
              onClick={() =>
                window.open(
                  "https://apps.apple.com/vn/app/id1543357426?l=vi",
                  "_blank"
                )
              }
            />
            <img
              src="http://mobion.vn/static/media/ic_googleplay.29f8d1d0.svg"
              className=""
              alt=""
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.mobifone.mobion&pli=1",
                  "_blank"
                )
              }
            />
          </div>
        </div>
        )}
      </nav>
    </div>
  );
}
export default Sidebar;
