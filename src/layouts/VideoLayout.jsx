import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import useToggle from "../hooks/useToggle";
import { useEffect } from "react";
import ShortVideo from "../components/ShortVideo";

const VideoLayout = () => {
  const [showMenu, setShowMenu] = useToggle(true);

  useEffect(() => {
    if (localStorage.getItem("open__menu")) {
      setShowMenu(localStorage.getItem("open__menu") === "1" ? true : false);
    } else {
      localStorage.setItem("open__menu", "1");
    }
  }, []);


  return (
    <div className="wrapper-overflow">
      <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      <div className="main">
        <Sidebar showMenu={showMenu} />
        <div
          className="main__page"
          style={{ marginLeft: showMenu ? "271px" : "120px" }}
        >
          <ShortVideo/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default VideoLayout;
