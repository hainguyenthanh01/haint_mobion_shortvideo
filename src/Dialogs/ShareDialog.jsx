import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { toast } from "react-toastify";
import DeleteIcon from "../assets/img/DeleteIcon.svg";
import Viber from "../assets/img/Viber.svg";
import ShareIcon_Messenger from "../assets/icons/shareIcon/Messenger.svg";
import ShareIcon_Facebook from "../assets/icons/shareIcon/Facebook.svg";
import ShareIcon_WhatsApp from "../assets/icons/shareIcon/WhatsApp.svg";
import ShareIcon_Telegram from "../assets/icons/shareIcon/Telegram.svg";
import ShareIcon_Twitter from "../assets/icons/shareIcon/Twitter.svg";
import ShareIcon_Email from "../assets/icons/shareIcon/Email.svg";
import { linkConstants } from "../utils/constan";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShareDialog({ open, setOpen}) {
  const handleClose = () => {
    setOpen(false);
  };

  const menuShare = [
    // {
    //   id: "MS",
    //   text: "Messenger",
    //   icon: ShareIcon_Messenger,
    // },
    {
      id: "FB",
      text: "Facebook",
      icon: ShareIcon_Facebook,
    },
    {
      id: "WA",
      text: "WhatsApp",
      icon: ShareIcon_WhatsApp,
    },
    {
      id: "TG",
      text: "Telegram",
      icon: ShareIcon_Telegram,
    },
    {
      id: "TW",
      text: "Twitter",
      icon: ShareIcon_Twitter,
    },
    {
      id: "EM",
      text: "Email",
      icon: ShareIcon_Email,
    },
    {
      id: "VB",
      text: "Viber",
      icon: Viber,
    },
  ];
  const handleShare = (id) => {
    let link_web = "";
    switch (id) {
      // case "MS":
      //   link_web = linkConstants.LINK_SHARE_FB;
      //   break;
      case "FB":
        link_web = linkConstants.LINK_SHARE_FB;
        break;
      case "WA":
        link_web = linkConstants.LINK_SHARE_WHATSAPP;
        break;
      case "TG":
        link_web = linkConstants.LINK_SHARE_TELEGRAM;
        break;
      case "TW":
        link_web = linkConstants.LINK_SHARE_TWITTER;
        break;
      case "EM":
        link_web = linkConstants.LINK_SHARE_GOOGLE;
        break;
      case "VB":
        link_web = linkConstants.LINK_SHARE_VIBER;
        break;

      default:
        break;
    }
    const link_share = `${link_web}`;
    let w = 565;
    let h = 593;
    let y = window.outerHeight / 2 + window.screenY - w / 2;
    let x = window.outerWidth / 2 + window.screenX - h / 2;
    window.open(
      link_share,
      "Chia sẻ",
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
        w +
        ", height=" +
        h +
        ", top=" +
        y +
        ", left=" +
        x
    );
  };
  const handleCopy = (text) => {
    // var tempInput = document.createElement("input");
    // tempInput.value = text;
    // document.body.appendChild(tempInput);
    // console.log(tempInput.value);
    // tempInput.select();
    // console.log(document.body.appendChild(tempInput));
    // let copy = document.execCommand("Copy");
    // // document.body.removeChild(tempInput);
    // console.log(copy);
    // const el = document.getElementById(`input-link-${itemId}`);
    // const selected =
    //   document.getSelection().rangeCount > 0
    //     ? document.getSelection().getRangeAt(0)
    //     : false;
    // el.select();
    const success = document.execCommand("copy");
    // if (selected) {
    //   document.getSelection().removeAllRanges();
    //   document.getSelection().addRange(selected);
    // }
    if (success) {
      toast.success("Sao chép thành công", {
        position: "top-right",
      });
    }
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          height: "348px",
          minWidth: "720px",
          background: "#13151f",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "24px",
        },
      }}
    >
      <div className="share">
        <div className="share__header">
          <h3 className="share__title">Chia sẻ</h3>
          <img
            className="share__deleteIcon"
            src={DeleteIcon}
            alt="delete icon"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="share__lists">
          {menuShare.map((item) => (
            <div
              onClick={() => handleShare(item.id)}
              key={item.text}
              className="share__icon"
            >
              <img src={item.icon} alt="" />
              <p className="share__text">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="share__link">
          <input
            // id={`input-link-${itemId}`}
            type="text"
            className="share__input"
            value={"http://arabicatech.vn"}
            readOnly
            // disabled
          />
          <button
            className="btn btn--blue"
            onClick={
              () => handleCopy()
            }
          >
            Sao chép
          </button>
        </div>
      </div>
    </Dialog>
  );
}
