import React, { createRef, useEffect, useState } from "react";
import Emoji from "../Emoji";
import { useClickOutside } from "@react-hookz/web";
import useToggle from "../../hooks/useToggle";
import { toast } from "react-toastify";
// import commentService from "../../services/comment";
import Emo from "../../assets/img/Emo.svg";
import Send from "../../assets/img/Send.svg";

function CommentForm({
  content_id,
  replyId = 0,
  refetch,
  increaseTotalComment,
  setActiveComment = () => {},
  parentForm = false,
  setShowAllComment = () => {},
}) {
  const inputRef = createRef();
  const emojiRef = createRef(null);

  const [inputValue, setInputValue] = useState("");
  // const [showEmoji, setShowEmoji] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const [showEmoji, setShowEmoji] = useToggle(false);

  useClickOutside(emojiRef, () => {
    setShowEmoji();
  });
  const pickEmoji = (e, { emoji }) => {
    // console.log(inputValue);
    const ref = inputRef.current;
    ref.focus();

    const start = inputValue.substring(0, ref.selectionStart);
    const end = inputValue.substring(ref.selectionStart);
    const text = start + emoji + end;
    setInputValue(text);
    inputRef.current.selectionEnd = cursorPosition;
    setCursorPosition(start.length + emoji.length);
  };
  const handleShowEmoji = () => {
    inputRef.current.focus();
    setShowEmoji(!showEmoji);
  };

  useEffect(() => {
    inputRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const sendMessage = async () => {
    const payload = {
      parent_id: replyId,
      comment: inputValue,
      content_id,
      type: "VOD",
    };

    // try {
    //   const data = await commentService.sendText(payload);
    //   if (data.responseCode === "200") {
    //     setInputValue("");
    //     // console.log("first")

    //     if (parentForm) {
    //       setActiveComment(null);
    //       setShowAllComment(true);
    //     }
    //     increaseTotalComment();
    //     refetch();
    //   } else {
    //     toast.error(data.message);
    //   }
    // } catch (error) {
    //   toast.error(error);
    // }
  };

  return (
    <div className="chat__message">
      <input
        type="text"
        ref={inputRef}
        className="chat__message-input"
        placeholder="Thêm bình luận..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setInputValue(e.target.value);
            sendMessage();
          }
        }}
      />
      <img
        src={Emo}
        alt=""
        className="chat__message-emo"
        onClick={handleShowEmoji}
      />
      {showEmoji && (
        <div className="chat__message-emoji" ref={emojiRef}>
          <Emoji pickEmoji={pickEmoji} />
        </div>
      )}
      <img
        src={Send}
        alt=""
        className="chat__message-send"
        onClick={sendMessage}
      />
    </div>
  );
}

export default CommentForm;
