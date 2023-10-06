import React, { useState } from "react";
import useToggle from "../hooks/useToggle";
// import CommentDialog from "../Dialogs/CommentDialog";
// import ShareDialog from "../Dialogs/ShareDialog";
import RedHeart from "../assets/img/RedHeart.svg";
import Love from "../assets/img/Love.svg";
import Comment from "../assets/img/Comment.svg";
import WhiteSave from "../assets/img/WhiteSave.svg";
import YellowSave from "../assets/img/YellowSave.svg";
import Share from "../assets/img/Share.svg";
// import videoService from "../services/video";
import { getUser } from "../utils/localStorage";
// import LoginRequiredDialog from "../Dialogs/LoginRequiredDialog";

function Feature({ featureData, allDataLove = [], setAllDataLove = () => {} }) {
  const [liked, setLiked] = useToggle(false);

  // const [liked, setLiked] = useToggle(featureData?.isFavourite);
  // const [likedCount, setLikedCount] = useState(featureData.likeCount);
  // const [totalCommentCount, setTotalCommentCount] = useState(
  //   featureData.totalComment
  // );
  // const [saved, setSaved] = useToggle(featureData?.isSave || false);
  const [saved, setSaved] = useToggle(false)
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showLoginRequiredDialog, setShowLoginRequiredDialog] = useState(false);

  const user = getUser();

  const likeHandler = async () => {
    setLiked()
    // if (!user) {
    //   setShowLoginRequiredDialog(true);
    //   return;
    // }
    // const payload = {
    //   id: featureData.id,
    //   status: 1,
    // };
    // if (liked) {
    //   payload.status = 0;
    // }

    // const data = await videoService.lovedVideo(payload);
    // let newLikeCount;
    // if (data.responseCode === "200") {
    //   if (payload.status) {
    //     newLikeCount = Number(likedCount) + 1;
    //   } else {
    //     if (allDataLove.length > 0) {
    //       const newData = allDataLove.filter(
    //         (item) => item.id !== featureData.id
    //       );
    //       setAllDataLove(newData);
    //     }
    //     newLikeCount = Number(likedCount) - 1;
    //   }

    //   setLikedCount(newLikeCount);
    //   setLiked();
    // }
  };
  const saveHandler = async () => {
    setSaved()
    // if (!user) {
    //   setShowLoginRequiredDialog(true);
    //   return;
    // }
    // const payload = {
    //   id: featureData.id,
    //   status: 1,
    // };
    // if (saved) {
    //   payload.status = 0;
    // }

    // const data = await videoService.savedVideo(payload);

    // if (data.responseCode === "200") {
    //   setSaved();
    // }
  };

  return (
    <>
      <div className="feature">
        <div className="feature__group">
          <button
            className="feature__btn"
            style={{
              backgroundColor: liked ? "#3C2325" : "rgba(255, 255, 255, .08)",
            }}
            onClick={likeHandler}
          >
            {liked ? <img src={RedHeart} alt="" /> : <img src={Love} alt="" />}
          </button>
          <p className="feature__number">234</p>
        </div>
        <div className="feature__group">
          <button
            className="feature__btn"
            onClick={() => {
              if (!user) {
                setShowLoginRequiredDialog(true);
                return;
              }
              setShowComment(true);
            }}
          >
            <img src={Comment} alt="" />
          </button>
          <p className="feature__number">123</p>
        </div>
        <div className="feature__group">
          <button
            className="feature__btn"
            onClick={saveHandler}
            style={{
              backgroundColor: saved ? "#36281C" : "rgba(255, 255, 255, .08)",
            }}
          >
            {saved ? (
              <img src={YellowSave} alt="" />
            ) : (
              <img src={WhiteSave} alt="" />
            )}
          </button>
          <p className="feature__number">Lưu</p>
        </div>
        <div className="feature__group">
          <button className="feature__btn" onClick={() => setShowShare(true)}>
            <img src={Share} alt="" />
          </button>
          <p className="feature__number">Chia sẻ</p>
        </div>
      </div>
      {/* <CommentDialog
        open={showComment}
        setOpen={setShowComment}
        content_id={featureData.id}
        totalCommentCount={totalCommentCount}
        setTotalCommentCount={setTotalCommentCount}
      /> */}
{/* 
      <LoginRequiredDialog
        open={showLoginRequiredDialog}
        setOpen={setShowLoginRequiredDialog}
      /> */}

      {/* <ShareDialog
        open={showShare}
        setOpen={setShowShare}
        link={featureData.link}
        itemId={featureData?.id}
      /> */}
    </>
  );
}

export default Feature;
