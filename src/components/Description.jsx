import React from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import Avatar from "../assets/img/Avatar.png";

function Description({ item, followChannelHandler }) {
  return (
    <div className="card__info">
      <div className="card__user">
        {/* <Link to={`/channel/${item.videoData.channelSlug}`}> */}
          <img
            className="card__user-avatar"
            src={Avatar}
            alt=""
          />
        {/* </Link> */}
        {/* <Link to={`/channel/${item.videoData.channelSlug}`}> */}
          <div className="card__user-name">Châu Khải Phong</div>
        {/* </Link> */}

        <button
          className={item.isFollow ? "btn btn--gray" : "btn btn--white"}
          onClick={() =>
            followChannelHandler(
              item.videoData.channelId,
              item.isFollow,
              item.videoData.channelId
            )
          }
        >
          {item.isFollow ? "Đã theo dõi" : "Theo dõi"}
        </button>
      </div>
      <div className="card__bottom">
        <ShowMoreText
          lines={2}
          more="xem thêm"
          less="ẩn bớt"
          className="card__des"
          anchorClass="card__bottom_hasMore"
          expanded={false}
          truncatedEndingComponent={"... "}
        >
          {/* {item.videoData.name}
          {item.videoData.hashtag?.map((item) => (
            // <Link to={`/tag/${item.name}`} key={item.id}>
              <span>#{item.name}</span>
            // </Link>
          ))} */}
        </ShowMoreText>
      </div>
    </div>
  );
}

export default Description;
