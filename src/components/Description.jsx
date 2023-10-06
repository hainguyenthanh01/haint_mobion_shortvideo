import React from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import Avatar from "../assets/img/Avatar.png";

function Description({ item, followChannelHandler }) {
  const data = [
    {
      name: "Châu Khải Phong Music",
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <div className="card__info">
          <div className="card__user">
            {/* <Link to={`/channel/${item.videoData.channelSlug}`}> */}
            <img className="card__user-avatar" src={Avatar} alt="" />
            {/* </Link> */}
            {/* <Link to={`/channel/${item.videoData.channelSlug}`}> */}
            <div className="card__user-name">{item.name}</div>
            {/* </Link> */}

            <button
              className={item.isFollow ? "btn btn--gray" : "btn btn--white"}
              onClick={followChannelHandler}
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
              Lê Bảo - Dự báo thời tiết
              {data.map(({ name, hashtag }) => (
                <Link>
                  <span>#lebao </span>
                  <span>#xuhuong2023 </span>
                  <span>#lebao </span>
                  <span>#testiq </span>
                  <span>#trendingtiktok#</span>
                </Link>
              ))}
            </ShowMoreText>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Description;
