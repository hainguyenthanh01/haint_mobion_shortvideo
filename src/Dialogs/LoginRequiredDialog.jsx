import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LoginRequiredDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

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
        <h3 className="login-required__title">Thông báo</h3>
        <div className="login-required__des">
          Vui lòng đăng nhập để sử dụng tính năng này
        </div>
        <div className="login-required__btn">
          <button
            className="btn"
            onClick={handleClose}
            style={{ background: "rgb(39,39,40)", color: "white" }}
          >
            Để sau
          </button>
          <Link to={"/login"}>
            <button className="btn btn--red">Đăng nhập</button>
          </Link>
        </div>
      </div>
    </Dialog>
  );
}

export default LoginRequiredDialog;
