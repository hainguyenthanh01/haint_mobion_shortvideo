import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Comments from "../components/Comments/Comments";
// import CommentForm from "../Components/Comments/CommentForm";
import { Tooltip } from "@mui/material";
import { memo } from "react";
// import { useComment } from "../hooks/useComment";
import DeleteIcon from "../assets/img/DeleteIcon.svg";
import SortIcon from "../assets/img/SortIcon.svg";
import Comment from "../components/Comments/Comment";

let isScrollLoading = false;
let disabledScroll = false;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CommentDialog({
  open,
  setOpen,
  content_id,
  totalCommentCount,
  setTotalCommentCount,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const commentRef = React.useRef();

  const [params, setParams] = React.useState({
    type: "VOD",
    content_id,
    offset: 0,
    sort: "new",
  });
  // const [commentCount, setCommentCount] = React.useState(totalComment);
  // const [commentList, setCommentList] = React.useState([]);
  // const { allComment, isLoading, sendText, refetch } = useComment(params, open);
  const increaseTotalComment = () =>
    setTotalCommentCount((old) => Number(old) + 1);

  // console.log("isLoading", isLoading);

  // React.useEffect(() => {
  //   // disabledScroll = false;
  //   if (allComment) {
  //     // console.log(allComment);
  //     if (allComment.length < 10) {
  //       disabledScroll = true;
  //     } else {
  //       if (commentList.length === 10) {
  //         disabledScroll = false;
  //       }
  //     }

  //     // } else {
  //     //   if (disabledScroll) {
  //     //     disabledScroll = false;
  //     //   }
  //     //   return;
  //     // }
  //     // console.log(allComment);
  //     if (params.offset > 0) {
  //       const newData = [...commentList, ...allComment];
  //       setCommentList(newData);
  //     } else {
  //       setCommentList(allComment);
  //     }
  //   }
  // }, [allComment]);

  // React.useEffect(() => {
  //   if (!commentRef.current) return;
  //   const div = commentRef?.current;

  //   if (div) {
  //     const handleScroll = () => {
  //       // console.log(
  //       //   div?.scrollTop + div.clientHeight >= div.scrollHeight,
  //       //   !isLoading,
  //       //   !disabledScroll
  //       // );
  //       if (
  //         div.scrollTop + div.clientHeight >= div.scrollHeight &&
  //         !isLoading &&
  //         !disabledScroll
  //       ) {
  //         setParams((old) => ({
  //           ...old,
  //           offset: old.offset + 10,
  //         }));
  //       }
  //     };
  //     div?.addEventListener("scroll", handleScroll);

  //     return () => {
  //       div?.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, [commentRef?.current, isLoading, disabledScroll]);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          height: "calc(100% - 200px)",
          minWidth: "720px",
          background: "#13151f",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "24px",
        },
      }}
    >
      <div className="box-comment">
        <div className="box-comment__head">
          <div className="box-comment__title">
            Bình luận<span>{totalCommentCount || 0}</span>
          </div>
          <Tooltip
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "#151822",
                  "& .MuiTooltip-arrow": {
                    color: "#151822",
                  },
                },
              },
            }}
            title={
              <div className="box-comment__tooltip">
                <p
                  style={{
                    background: params.sort === "new" ? "#090b12" : "#151822",
                  }}
                  onClick={() => setParams((old) => ({ ...old, sort: "new" }))}
                >
                  Mới nhất xếp trước
                </p>
                <p
                  style={{
                    background: params.sort === "like" ? "#090b12" : "#151822",
                  }}
                  onClick={() => setParams((old) => ({ ...old, sort: "like" }))}
                >
                  Bình luận hàng đầu
                </p>
              </div>
            }
            placement="bottom-start"
          >
            <img src={SortIcon} alt="" className="box-comment__sortIcon" />
          </Tooltip>

          <img src={DeleteIcon} alt="" onClick={handleClose} />
        </div>
        <div
          className="box-comment__main"
          ref={(node) => {
            commentRef.current = node;
          }}
        >
          <div className="box-comment__box">
            <Comment
              increaseTotalComment={increaseTotalComment}
              // allComment={commentList}
              // content_id={content_id}
              // refetch={refetch}
            />
          </div>
        </div>

        {/* <CommentForm
          sendText={sendText}
          content_id={content_id}
          refetch={refetch}
          increaseTotalComment={increaseTotalComment}
          parentForm={true}
        /> */}
      </div>
    </Dialog>
  );
}

export default memo(CommentDialog);
