import { useState, useEffect } from "react";
// import CommentForm from "./CommentForm";
import Comment from "./Comment";

const Comments = ({
  increaseTotalComment,
  allComment,
  content_id,
  refetch,
}) => {
  const [activeComment, setActiveComment] = useState(null);
  const getReplies = (commentId) =>
    allComment?.filter(
      (backendComment) => backendComment.parent_id === commentId
    );

  //   createCommentApi(text, parentId).then((comment) => {
  //     setBackendComments([comment, ...backendComments]);
  //     setActiveComment(null);
  //   });
  // };

  //   const updateComment = (text, commentId) => {
  //     updateCommentApi(text).then(() => {
  //       const updatedBackendComments = backendComments.map((backendComment) => {
  //         if (backendComment.id === commentId) {
  //           return { ...backendComment, body: text };
  //         }
  //         return backendComment;
  //       });
  //       setBackendComments(updatedBackendComments);
  //       setActiveComment(null);
  //     });
  //   };
  //   const deleteComment = (commentId) => {
  //     if (window.confirm("Are you sure you want to remove comment?")) {
  //       deleteCommentApi().then(() => {
  //         const updatedBackendComments = backendComments.filter(
  //           (backendComment) => backendComment.id !== commentId
  //         );
  //         setBackendComments(updatedBackendComments);
  //       });
  //     }
  //   };

  // useEffect(() => {
  //   getCommentsApi().then((data) => {
  //     setBackendComments(data);
  //   });
  // }, []);

  return (
    <div className="comments">
      {allComment?.map((rootComment) => (
        <Comment
          key={rootComment.id}
          comment={rootComment}
          replies={getReplies(rootComment.id)}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
          content_id={content_id}
          refetch={refetch}
          increaseTotalComment={increaseTotalComment}
        />
      ))}
    </div>
  );
};

export default Comments;
