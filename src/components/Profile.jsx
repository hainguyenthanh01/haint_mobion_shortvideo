import React, { useEffect, useState } from "react";
// import EditProfileDialog from "../Dialogs/EditProfileDialog";
import useToggle from "../hooks/useToggle";
// import { useUser } from "../hooks/useUser";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Cart from "../assets/img/Cart.svg";
import Edit from "../assets/img/Edit.svg";
import ImgBoxEmpty from "./ImgBoxEmpty";
// import { usePackage } from "../hooks/usePackage";
import iconStar from "../assets/img/iconStar.png";

function Profile() {
  const [tabRecent, setTabRecent] = useState(true);
  const navigate = useNavigate();
  // const [hasPremium, setHasPremium] = useToggle(false);
  const [openProfileEdit, setOpenProfileEdit] = useState(false);
  // const { myPackage } = usePackage(false, true);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.size > 0) {
      searchParams.forEach((value, key) => {
        if (key === "tab" && value === "follow-channel") {
          setTabRecent(false);
        }
      });
    }
  }, [searchParams]);
  // const {
  //   userInfo,
  //   premiumData,
  //   followChannel,
  //   recentVideo,
  //   uploadProfileImage,
  //   updateProfileData,
  //   isLoading,
  // } = useUser(true);
  const myPackage = [
    {
      name: "Chưa có gói",
    },
  ];

  const followChannel = [
    {
      avatarImage:
        "https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      channel_name: "Lê Bống",
      num_follow: "3,8K",
    },
  ];
  const recentVideo = [
    {
      imgBG:
        "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      channelAvatar:
        "https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      channelName: "Lê Bống tiktok",
      view: "3,8K",
    },
    {
      imgBG:
        "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      channelAvatar:
        "https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      channelName: "Châu Khải Phong Music",
      view: "2K",
    },
    {
      imgBG:
        "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      channelAvatar:
        "https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      channelName: "Lê Bống tiktok",
      view: "3,8K",
    },
    {
      imgBG:
        "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      channelAvatar:
        "https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      channelName: "Châu Khải Phong Music",
      view: "2K",
    },
    {
      imgBG:
        "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      channelAvatar:
        "https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      channelName: "Lê Bống tiktok",
      view: "3,8K",
    },
    {
      imgBG:
        "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      channelAvatar:
        "https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      channelName: "Châu Khải Phong Music",
      view: "2K",
    },
    {
      imgBG:
        "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      channelAvatar:
        "https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      channelName: "Lê Bống tiktok",
      view: "3,8K",
    },
    {
      imgBG:
        "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      channelAvatar:
        "https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      channelName: "Châu Khải Phong Music",
      view: "2K",
    },
    {
      imgBG:
        "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      channelAvatar:
        "https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      channelName: "Lê Bống tiktok",
      view: "3,8K",
    },
    {
      imgBG:
        "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      channelAvatar:
        "https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      channelName: "Châu Khải Phong Music",
      view: "2K",
    },
    {
      imgBG:
        "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      channelAvatar:
        "https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      channelName: "Lê Bống tiktok",
      view: "3,8K",
    },
    {
      imgBG:
        "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      channelAvatar:
        "https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      channelName: "Châu Khải Phong Music",
      view: "2K",
    },

    {
      imgBG:
        "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      channelAvatar:
        "https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      channelName: "Lê Bống tiktok",
      view: "3,8K",
    },
    {
      imgBG:
        "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      channelAvatar:
        "https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      channelName: "Châu Khải Phong Music",
      view: "2K",
    },
  ];
  return (
    <div className="channel-page container">
      <div className="channel-page__info">
        <div className="channel-page__info-head">
          <div className="channel-page__info-avatar">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/754/541/105/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"
              alt=""
            />
          </div>
          <div className="channel-page__info-name">
            <h2>One Piece</h2>
            <button
              className={myPackage ? "btn btn--green" : " btn btn--red"}
              // onClick={setHasPremium}
              // style={{display: "flex", alignItems: "baseline"}}
            >
              {myPackage ? (
                <span>
                  <img width={25} height={25} src={iconStar} />{" "}
                  {myPackage?.name}
                </span>
              ) : (
                "Chưa có gói"
              )}
            </button>
          </div>
          <div className="channel-page__info-groupBtn">
            <button onClick={() => setOpenProfileEdit(true)}>
              <img src={Edit} alt="" />
            </button>
          </div>
        </div>
        <div className="channel-page__view">
          <div className="channel-page__view-number">
            {/* {userInfo?.followCount} */} 45
            <span>Đang theo dõi</span>
          </div>
        </div>
      </div>

      <div className="tab-channel">
        <button
          className={tabRecent ? "tab-channel-active" : ""}
          onClick={() => setTabRecent(true)}
        >
          Xem gần đây
        </button>
        <button
          className={tabRecent ? "" : "tab-channel-active"}
          onClick={() => setTabRecent(false)}
        >
          Kênh theo dõi
        </button>
      </div>

      {tabRecent &&
        (recentVideo?.length > 0 ? (
          <div className="list-channel">
            {recentVideo?.map(
              ({
                // coverImage,
                // channelId,
                // channel_slug,
                imgBG,
                name,
                // id,
                // play_times,
                view,
                channelAvatar,
                channelName,
              }) => (
                <div className="card-channel">
                  <div
                    // onClick={() => {
                    //   navigate(`/?type=watch_later&video_id=${id}`);
                    // }}
                    className="card-channel__img"
                  >
                    <img src={imgBG} alt="" />
                    <div className="card-channel__plate">
                      <a>
                        <img src={channelAvatar} alt="" />
                      </a>
                      <a style={{ flex: "1" }}>
                        <div className="card__user-name">{channelName}</div>
                      </a>
                    </div>
                  </div>

                  <div className="card-channel__info">
                    <h3
                      // onClick={() => {
                      //   navigate(`/?type=watch_later&video_id=${id}`);
                      // }}
                      className="card-channel__title"
                    >
                      {name}
                    </h3>
                    <p className="card-channel__view">{`${view} lượt xem`}</p>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <ImgBoxEmpty text={`Không có nội dung nào xem gần đây`} />
        ))}

      {!tabRecent &&
        (followChannel?.length > 0 ? (
          <div className="follow-channel">
            {followChannel?.map(
              ({
                channel_id,
                avatarImage,
                channel_name,
                channel_slug,
                num_follow,
              }) => (
                <Link
                  // to={`/channel/${channel_slug}`}
                  className="follow-channel__item"
                  // key={channel_id}
                >
                  <img
                    src={avatarImage}
                    alt=""
                    className="follow-channel__item__img"
                  />
                  <div className="follow-channel__info">
                    <h5 className="follow-channel__name">{channel_name}</h5>
                    <p className="follow-channel__follower">
                      {num_follow} theo dõi
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        ) : (
          <ImgBoxEmpty text={`Bạn chưa theo dõi kênh nào`} />
        ))}

      {/* <EditProfileDialog
        open={openProfileEdit}
        setOpen={setOpenProfileEdit}
        profileData={userInfo}
        uploadProfileImage={uploadProfileImage}
        updateProfileData={updateProfileData}
      /> */}
    </div>
  );
}

export default Profile;
