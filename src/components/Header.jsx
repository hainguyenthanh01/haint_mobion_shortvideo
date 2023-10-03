import React, { useRef, useState, useEffect } from "react";
import { useClickOutside } from "@react-hookz/web/esm/useClickOutside";
import useToggle from "../hooks/useToggle";
import {
  Link,
  createSearchParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

// import { getData, getUser, setData } from "../utils/localStorage";
// import { useGetAuth } from "../hooks/useAuth";
import menuHeader from "../assets/img/Menu.svg";
import search from "../assets/img/Search.svg";
import clock from "../assets/img/Clock.svg";
import trend from "../assets/img/Trend.svg";
import logo from "../assets/img/Logo.png";
import bell from "../assets/img/bell.svg";
import PFprofile from "../assets/img/profile-menu/profile.svg";
import PFpackage from "../assets/img/profile-menu/package.svg";
import PFpassword from "../assets/img/profile-menu/password.svg";
import PFlogout from "../assets/img/profile-menu/logout.svg";
// import { useSearch } from "../hooks/useSearch";
// import useDebounce from "../utils/hooks/useDebounce";
// import Notification from "./Notification";
// import PackageDialog from "../Dialogs/PackageDialog";
// import LogoutRequiredDialog from "../Dialogs/LogoutRequiredDialog";
import { Button, Menu, MenuItem } from "@mui/material";
// import { usePackage } from "../hooks/usePackage";
// import { setReqPage } from "../utils/auth";

function Header({ setShowMenu = () => {}, showMenu }) {
  const [showSearchBox, setShowSearchBox] = useToggle(false);
  // const location = useLocation();
  // const navigate = useNavigate();
  // const notificationRef = useRef(null);
  // const profileRef = useRef(null);
  const searchRef = useRef(null);
  // const user = getUser();
  const listHotSearch = [
    {
      text: "Tây Du Ký",
    },
    {
      text: "Châu Khải Phong",
    },
    {
      text: "ABC",
    },
    {
      text: "Lê Bống",
    },
    {
      text: "Lê Bảo",
    },
  ];
  useClickOutside(searchRef, () => {
    setShowSearchBox();
  });

  return (
    <header className="header">
      <div className="header__left">
        <img
          src={menuHeader}
          alt="menu icon"
          className="header__menuIcon"
          onClick={() => {
            setShowMenu();
            localStorage.setItem("open__menu", showMenu ? "0" : "1");
          }}
        />
        {/* <Link> */}
        <img
          className="header__logo"
          src={logo}
          alt=""
          width={154}
          height={56}
        />
        {/* </Link> */}
      </div>
      <div className="searchBox">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Tìm kiếm"
          onClick={setShowSearchBox}
        />
        <img src={search} alt="search icon" className="header__searchIcon" />
        {showSearchBox && (
          <div ref={searchRef} className="search-box">
            {/* <div className="search-box__history">
              <img src={clock} alt="clock icon" />
            </div> */}
            <p className="search-box__trend-title">Top xu hướng</p>
            <div className="search-box__trend">
              {listHotSearch.map((item, index) => {
                return (
                  <div
                    // onClick={() => {
                    //   setInputSearch(item);
                    //   openSearchResultTab(item);
                    // }}
                    className="search-box__item"
                  >
                    <img src={trend} alt="trend icon" />
                    <p className="search-box__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <p className="search-box__trend-title">Kênh</p>
          </div>
        )}
      </div>
      <div className="header__right">
        <button
          // onClick={setShowPackage}
          className="header__btnBuy btn btn--red"
          style={{ borderRadius: "6px" }}
        >
          Mua gói
        </button>
        <button
          // onClick={() => navigate("/login")}
          className="header__login btn btn--blue"
          style={{
            borderRadius: "6px",
            background: "transparent",
            border: "1px solid hsla(0,0%,100%,.1)",
            opacity: ".9",
          }}
        >
          Đăng Nhập
        </button>
      </div>
    </header>
  );
}
export default Header;
