import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../helper";
// import { removeData } from "../utils/localStorage";
// import { removeDataCookie } from "../utils/cookie";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LogoutRequiredDialog({ open, setShowProfile,setUserState,setShowLogout }) {
  const handleClose = () => {
    removeUser();
    setShowLogout(false)
  };

  const navigate = useNavigate();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          height: "auto",
          minWidth: "720px",
          background: "#13151f",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "24px",
          color: "white",
        },
      }}
    >
      <div className="login-required">
        <h3 className="login-required__title">Bạn chắc chắn muốn đăng xuất?</h3>
        {/* <div className="login-required__des">
          Bận
        </div> */}
        <div className="login-required__btn">
          <button
            className="btn"
            onClick={handleClose}
            style={{ background: "rgb(39,39,40)", color: "white" }}
          >
            Để sau
          </button>

          <button
            onClick={() => {
              // removeData("user");
              // removeDataCookie("explg");
              setUserState(false);
              setShowProfile(false)
              navigate("/");
              handleClose()
            }}
            className="btn btn--red"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </Dialog>
  );
}

export default LogoutRequiredDialog;
