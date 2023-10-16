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
import Notification from "./Notification";
import PackageDialog from "../Dialogs/PackageDialog";
// import LogoutRequiredDialog from "../Dialogs/LogoutRequiredDialog";
import { Button, Menu, MenuItem } from "@mui/material";
// import { getUser } from "../utils/localStorage";
import { setUser,getUser } from "../helper";
// import { usePackage } from "../hooks/usePackage";
// import { setReqPage } from "../utils/auth";
import avtDefault from "../assets/img/Avatar.png"
import LogoutRequiredDialog from "../Dialogs/LogoutRequiredDialog";

function Header({ setShowMenu = () => {}, showMenu , userState, setUserState = ()=>{} }) {
  const [showPackage, setShowPackage] = useToggle(false);
  const [showSearchBox, setShowSearchBox] = useToggle(false);
  const [showNotification, setShowNotification] = useState(null)
  const [showProfile, setShowProfile] = useToggle(false);
  const [showLogout, setShowLogout] = useState(false);

  

  // const location = useLocation();
  const navigate = useNavigate();
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
  const menuProfile = [
    {
      text: "Xem hồ sơ",
      icon: PFprofile,
      url: "/profile",
    },
    {
      text: "Gói cước",
      icon: PFpackage,
      url: "/my-package",
    },
    {
      text: "Đổi mật khẩu",
      icon: PFpassword,
      url: "/none",
    },
    {
      text: "Đăng xuất",
      icon: PFlogout,
      url: "/logout",
    },
  ];

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
        <Link to={"/"}>
        <img
          className="header__logo"
          src={logo}
          alt=""
          width={154}
          height={56}
        />
        </Link>
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
          onClick={setShowPackage}
          className="header__btnBuy btn btn--red"
          style={{ borderRadius: "6px" }}
        >
          Mua gói
        </button>
        {userState && (
         <Button
            id="basic-button"
            aria-controls={showNotification ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={showNotification ? "true" : undefined}
            onClick={(event) => setShowNotification(event.currentTarget)}
            sx={{ minWidth: "auto", padding: 0 }}
          >
            <img src={bell} alt="bell" className="header__bellIcon" />
          </Button>)}
          <Menu
          id="basic-menu"
          anchorEl={showNotification}
          open={showNotification}
          onClose={() => setShowNotification(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <div  className="notification">
              {showNotification && (
                <Notification
                  showNotification={showNotification}
                  setShowNotification={setShowNotification}
                />
              )}
            </div>
          </MenuItem>
        </Menu>

        {userState && (
          <img
            onClick={setShowProfile}
            src="https://i.pinimg.com/originals/cc/75/1c/cc751c52d8545a7cbcbeba7e7b049b5c.gif"
            alt="Avatar-user"
            className="profile-menu__avatar"
          />
        )}
        {/* {userState && (
          <div onClick={()=>{navigate("/profile")}}><img src={avtDefault} alt="avt" /></div>
        )} */}
        {showProfile && userState && (
          <div className="profile-menu">
            <div className="profile-menu__header">
              <img
                // src={user?.avatarImage}
                src="https://i.pinimg.com/originals/cc/75/1c/cc751c52d8545a7cbcbeba7e7b049b5c.gif"
                alt="Avatar-user"
                className="profile-menu__avatar"
              />
              <div className="profile-menu__username">
                Hi, Luffy
                {/* {user?.fullname || user?.msisdn} */}
              </div>
            </div>
            <div className="profile-menu__list">
            {menuProfile.map((item) =>
                item.url === "/none" ? (
                  <div
                    key={item.text}
                    className="profile-menu__item"
                    // onClick={() => {
                    //   navigate("u/change-password");
                    // }}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="profile-menu__icon"
                    />
                    <p className="profile-menu__text">{item.text}</p>
                  </div>
                ) : item.url === "/logout" ? (
                  <div
                    key={item.text}
                    className="profile-menu__item"
                    onClick={() => {
                      setShowLogout(true);
                    }}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="profile-menu__icon"
                    />
                    <p className="profile-menu__text">{item.text}</p>
                  </div>
                ) : (
                  item.url !== "/none" && (
                    <Link to={item.url} key={item.text}>
                      <div key={item.text} className="profile-menu__item">
                        <img
                          src={item.icon}
                          alt=""
                          className="profile-menu__icon"
                        />
                        <p className="profile-menu__text">{item.text}</p>
                      </div>
                    </Link>
                  )
                )
              )}
            </div>
          </div>
        )}
        {!userState && <button
          // onClick={() => navigate("/login")}
          className="header__login btn btn--blue"
          style={{
            borderRadius: "6px",
            background: "transparent",
            border: "1px solid hsla(0,0%,100%,.1)",
            opacity: ".9",
          }}
          onClick={()=>{
            setUserState(true)
            setUser(true)     
        }}
        >
          Đăng Nhập
        </button>}

      </div>
      <PackageDialog open={showPackage} setOpen={setShowPackage} />
      <LogoutRequiredDialog
        open={showLogout}
        setShowLogout={setShowLogout}
        setUserState={setUserState}
        setShowProfile={setShowProfile}
      />
    </header>
  );
}
export default Header;
