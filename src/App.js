import { ToastContainer } from "react-toastify";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import "react-toastify/dist/ReactToastify.css";
import "./sass/app.scss";
import { useEffect } from "react";
import CommonLayout from "./layouts/CommonLayout"
import VideoLayout from "./layouts/VideoLayout"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ShortVideo from "./components/ShortVideo";

function App() {
  const content = useRoutes(routes);
  console.log(content);

  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: "#1A1D2A", color: "white" }}
      />
      {content}
      {/* <VideoLayout/> */}
      
    </>
  );
}

export default App;
