import CommentForm from "./CommentForm";
import useToggle from "../../hooks/useToggle";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material/";
// import commentService from "../../services/comment";
import { useState } from "react";
import Liked from "../../assets/img/Liked.svg";
import Unlike from "../../assets/img/Unliked.svg";
import { Link } from "react-router-dom";

const Comment = ({
  // comment,
  setActiveComment,
  activeComment,
  // parentId = 0,
  increaseTotalComment,
  // content_id,
  refetch,
}) => {
  const [showAllComment, setShowAllComment] = useToggle(false);
  // const [liked, setLiked] = useToggle(comment.is_like);
  // const [likedCount, setLikedCount] = useState(comment.like_count);
  // const isEditing =
  //   activeComment &&
  //   activeComment.id === comment.id &&
  //   activeComment.type === "editing";

  // const isReplying =
  //   activeComment &&
  //   activeComment.id === comment.id &&
  //   activeComment.type === "replying";
  // const fiveMinutes = 300000;
  // const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  // const canDelete =
  //   currentUserId === comment.userId && replies.length === 0 && !timePassed;
  // const canReply = Boolean(currentUserId);
  // const canEdit = currentUserId === comment.userId && !timePassed;
  // const replyId = parentId ? parentId : comment.id;
  // const createdAt = new Date(comment.createdAt).toLocaleDateString();

  const likeHandler = async () => {
    // const payload = {
    //   type: "VOD",
    //   comment_id: comment.id,
    //   content_id,
    // };

    // const data = await commentService.toggleLikeComment(payload);
    let newLikeCount;
    // if (data.responseCode === "200") {
    //   if (liked) {
    //     newLikeCount = Number(likedCount) - 1;
    //   } else {
    //     newLikeCount = Number(likedCount) + 1;
    //   }

    //   setLikedCount(newLikeCount);
    //   setLiked();
    // }
  };

  const comment = [
    {
      id: "1",
      avatar: "https://i.pinimg.com/originals/66/e8/34/66e8345c070894898b8b1f572bcffdf3.gif",
      name: "Luffy",
      comments: "Wao",
      time: "2 giờ trước",
    },
    {
      id: "2",
      avatar: "https://media.tenor.com/ZvkygSP_96EAAAAd/roronoa-zoro-one-piece.gif",
      name: "Zoro",
      comments: "Thật tuyệt",
      time: "3 giờ trước",
    },
  ];

  // console.log(comment)
  return (
    <>
      {comment?.map((item) => (
        <div className="comment">
          <div className="comment__img">
            <img
              src={item.avatar}
              alt=""
            />
          </div>
          <div className="comment__mid-part">
            <div className="comment__content">
              <div className="comment__author">{item.name}</div>
              <div className="comment__text">{item.comments}</div>
              <div className="comment__sub">
                <span className="comment__time">{item.time}</span>
                <span
                  className="comment__reply-btn"
                  // onClick={() =>
                  //   setActiveComment({type: "replying" })
                  // }
                >
                  Trả lời
                </span>
              </div>
            </div>
            {comment &&
              (showAllComment ? (
                <p className="comment__show-reply" onClick={setShowAllComment}>
                  Ẩn câu trả lời <KeyboardArrowUpOutlined />
                </p>
              ) : (
                <p className="comment__show-reply" onClick={setShowAllComment}>
                  Xem thêm câu trả lời khác ({comment.children?.length || 0}){" "}
                  <KeyboardArrowDownOutlined />
                </p>
              ))}

            {/* {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )} */}

            {/* {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )} */}
            {/* {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )} */}

            {/* {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )} */}
          </div>
          <div className="comment__actions">
            {/* <Tooltip
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "#1A1D2A",
                  "& .MuiTooltip-arrow": {
                    color: "#1A1D2A",
                  },
                },
              },
            }}
            title={
              <div className="comment__actions__deleteComment">
                <img src="bin.svg" alt="" />
                <span>Xóa bình luận</span>
              </div>
            }
            placement="bottom-start"
          >
            <img
              src="/ThreeDot.svg"
              alt=""
              className="comment__actions-option"
            />
          </Tooltip> */}
            {/* 
          {liked ? (
            <img
              src={Liked}
              alt=""
              className="comment__actions__img"
              onClick={likeHandler}
            />
          ) : (
            <img
              src={Unlike}
              alt=""
              className="comment__actions__img"
              onClick={likeHandler}
            />
          )} */}
            {/* <span>{likedCount || 0}</span> */}
          </div>
        </div>
      ))}
      {/* {isReplying && ( */}
        <CommentForm
          submitLabel="Reply"
          // replyId={replyId}
          // content_id={content_id}
          refetch={refetch}
          increaseTotalComment={increaseTotalComment}
          setActiveComment={setActiveComment}
          setShowAllComment={setShowAllComment}
        />
      {/* )} */}
      {comment > 0 && showAllComment && (
        <div className="replies">
          {comment.children.map((reply) => (
            <Comment
              comment={reply}
              // key={reply.id}
              setActiveComment={setActiveComment}
              activeComment={activeComment}
              refetch={refetch}
              increaseTotalComment={increaseTotalComment}
              // parentId={comment.id}
              // content_id={content_id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Comment;
