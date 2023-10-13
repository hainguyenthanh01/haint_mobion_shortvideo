import React, { useRef, useState } from "react";
import avatar from "../assets/img/Avatar.png"
import Delete from "../assets/img/Delete.svg"
import Emo from "../assets/img/Emo.svg"
import Send from "../assets/img/Send.svg"

function LiveChat({ setShowLiveChat }) {
  const [isLogin, setIsLogin] = useState(false);
  const inputRef = useRef();
  return (
    <div className="chat">
      <div className="chat__head">
        <h3 className="chat__title">Trò chuyện trực tuyến</h3>
        <img
          src={Delete}
          alt=""
          className="chat__deleteIcon"
          onClick={() => setShowLiveChat(false)}
        />
        <div className="chat__line"></div>
      </div>
      <div className="chat__box">
        {[1, 2, 3].map((item) => (
          <div key={item} className="user">
            <img src={avatar} alt="" className="user__avatar" />
            <div className="user__name">Mixi gaming</div>
            <div className="user__message">Có quá đáng lắm không nếu như .....</div>
          </div>
        ))}

        <div className="chat__line"></div>
      </div>
      <div className="chat__message">
        <input ref={inputRef} type="text" className="chat__message-input" />
        {isLogin ? (
          <div className="">
            <img src={Emo} alt="" className="chat__message-emo" />
            <img src={Send} alt="" className="chat__message-send" />
          </div>
        ) : (
          <p className="chat__message-des">
            Bạn cần{" "}
            <span
              onClick={() => {
                setIsLogin(true);
                inputRef.current.focus();
              }}
            >
              đăng nhập
            </span>{" "}
            để bắt đầu trò chuyện
          </p>
        )}
      </div>
    </div>
  );
}

export default LiveChat;
