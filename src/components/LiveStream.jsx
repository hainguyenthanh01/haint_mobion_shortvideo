import React, { useEffect, useRef, useState } from "react";
import LiveChat from "./LiveChat";
import CommentDialog from "../Dialogs/CommentDialog";
import ShareDialog from "../Dialogs/ShareDialog";
import useToggle from "../hooks/useToggle";
import VideoJS from "./VideoJS";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import { Link } from "react-router-dom";

import personLive from "../assets/img/person-live.svg";
import Muted from "../assets/img/muted.svg";
import Unmuted from "../assets/img/Unmuted.svg";
import Avatar from "../assets/img/Avatar.png";
import RedHeart from "../assets/img/RedHeart.svg";
import Love from "../assets/img/Love.svg";
import Comment from "../assets/img/Comment.svg";
import RedComment from "../assets/img/RedComment.svg";
import WhiteSave from "../assets/img/WhiteSave.svg";
import YellowSave from "../assets/img/YellowSave.svg";
import Share from "../assets/img/Share.svg";
import ArrowLight from "../assets/img/ArrowLight.svg";
// import { useHome } from "../hooks/useHome";

import Butterfly from "../assets/video/Butterfly.mp4";
import OnePiece from "../assets/video/OnePiece.mp4";
import Zoro from "../assets/video/Zoro.mp4";

function LiveStream({ pageId = "live" }) {
  const [showComment, setShowComment] = useState(false);
  const [showLiveChat, setShowLiveChat] = useToggle(false);
  const [showShare, setShowShare] = useState(false);
  const [followed, setFollowed] = useToggle(false);
  const [isMuted, setIsMuted] = useToggle(false);
  const [liked, setLiked] = useToggle(false);
  const [saved, setSaved] = useToggle(false);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [hasEllipsisText, setHasEllipsisText] = useState(true);
  // const [allData, setAllData] = useState([]);

  // const [videoParam, setVideoParam] = useState({
  //   limit: 12,
  //   offset: 0,
  //   id: pageId,
  //   page: "shorts",
  // });
  // const { allVideo, isLoading } = useHome(videoParam);

  // useEffect(() => {
  //   if (allVideo) {
  //     const newListData = allVideo?.content?.map((item) => ({
  //       src: item?.streams?.urlStreaming,
  //       type: "application/x-mpegURL",
  //       isFollow: item?.isFollowChannel,
  //       videoData: item,
  //     }));

  //     if (videoParam.offset === 0) {
  //       setAllData(newListData);
  //     } else {
  //       const newConcatData = [...allData, ...newListData];
  //       setAllData(newConcatData);
  //     }
  //   }
  // }, [allVideo, videoParam]);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    // playbackRates: [0.5, 1, 1.25, 1.5, 2],
    // responsive: true,
    // liveui: true,
    // width: 507,
    fluid: false,
    aspectRatio: "9:16",
    inactivityTimeout: 0,
    // poster:
    //   "http://simg1zen.myclip.vn/video1/2023/06/21/14/8f262b8e/sv_001.jpg",
    preload: "auto",
    responsive: true,
    liveDisplay: false,
    seek: false,
    live: false,
    html5: {
      vhs: {
        enableLowInitialPlaylist: true,
        limitRenditionByPlayerDimensions: true,
        overrideNative: true,
        smoothQualityChange: false,
        nativeTextTracks: false,
      },
    },
    flash: {
      vhs: {
        enableLowInitialPlaylist: true,
      },
    },
    controlBar: {
      playToggle: {},
      currentTimeDisplay: {},
      timeDivider: {},
      durationDisplay: {},
      remainingTimeDisplay: false,
      progressControl: false,
      volumePanel: {},
      captionsButton: false,
      subsCapsButton: false,
      subtitlesButton: false,
      // playbackRateMenuButton: false,
      audioTrackButton: false,
      fullscreenToggle: false,
      liveui: true,
      seekToLive: false,
      liveTracker: false,
    },
    userActions: {
      doubleClick: false,
    },
  };

  const listSource = [
    {
      src: "http://s3media.mobion.vn/mobion-media-202306/uploads/2023/06/19/1687157832927/8d754ccb5b63_abr.m3u8",
      type: "application/x-mpegURL",
      withCredentials: false,
    },
    {
      src: "http://s3media.mobion.vn/mobion-media-202203/uploads/2022/03/21/1647851726493/e5902012d667_abr.m3u8",
      type: "application/x-mpegURL",
      withCredentials: false,
    },

    {
      src: "http://s3media.mobion.vn/mobion-media-202203/uploads/2022/03/10/1646886928917/30bc9843b529_abr.m3u8",
      type: "application/x-mpegURL",
      withCredentials: false,
    },
  ];

  const nextVideoHandler = () => {
    document.querySelector(".swiper-button-next").click();
  };
  const preVideoHandler = () => {
    document.querySelector(".swiper-button-prev").click();
  };

  const handleCloseComment = () => setShowComment(false);

  const setVolumeInit = (flagMute) => {
    setIsMuted(flagMute);
    localStorage.setItem("muted", flagMute ? 1 : 0);
  };

  const volumeChangeHandler = () => {
    document.querySelector(".vjs-mute-control").click();
    localStorage.setItem("muted", isMuted ? 0 : 1);
    setIsMuted();
  };
  const allData = [
    {
      sources: [
        {
          src: Butterfly,
          type: "video/mp4",
        },
      ],
    },
    {
      sources: [
        {
          src: OnePiece,
          type: "video/mp4",
        },
      ],
    },
    {
      sources: [
        {
          src: Zoro,
          type: "video/mp4",
        },
      ],
    },
  ];

  return (
    <div className="short-video live-stream">
      <SwiperComponent
        direction="vertical"
        spaceBetween={44}
        modules={[Navigation, Mousewheel, Keyboard]}
        keyboard={true}
        allowTouchMove={false}
        slidesPerView={1}
        navigation
        lazy
        mousewheel={true}
        // breakpoints={{
        //   1280: {
        //     spaceBetween: 1,
        //   },
        // }}
        onSlideChange={(e) => {
          setShowLiveChat(false);
          setIsMuted(false);
          setSwiperIndex(e.realIndex);
        }}
        noSwipingClass="player"
      >
        {allData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="card__video">
                <div className="player">
                  {swiperIndex === index ? (
                    <VideoJS
                      options={{ ...videoJsOptions, sources: item.sources }}
                      setVolumeInit={(flagMute) => setVolumeInit(flagMute)}
                    />
                  ) : (
                    <div className="card__video__backdrop-img">
                      <img
                        src="https://images.unsplash.com/photo-1680816740728-1bb49a507c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                  )}
                </div>
                {swiperIndex === index && (
                  <div className="card__header">
                    <div className="live-info">
                      <button className="btn btn--red">TRỰC TIẾP</button>
                      <div className="live-info__person">
                        <img src={personLive} alt="person view live" />
                        <span>725</span>
                      </div>
                    </div>
                    {isMuted ? (
                      <img
                        src={Muted}
                        alt=""
                        className="card__speaker"
                        onClick={volumeChangeHandler}
                      />
                    ) : (
                      <img
                        src={Unmuted}
                        alt=""
                        className="card__speaker"
                        onClick={volumeChangeHandler}
                      />
                    )}
                  </div>
                )}
              </div>
              {showLiveChat && swiperIndex === index && (
                <LiveChat setShowLiveChat={setShowLiveChat} />
              )}

              <div className="feature">
                <div className="feature__group">
                  <button
                    className="feature__btn"
                    style={{
                      backgroundColor: liked
                        ? "#3C2325"
                        : "rgba(255, 255, 255, .08)",
                    }}
                    onClick={setLiked}
                  >
                    {liked ? (
                      <img src={RedHeart} alt="" />
                    ) : (
                      <img src={Love} alt="" />
                    )}
                  </button>
                  <p className="feature__number">1,1 N</p>
                </div>
                <div className="feature__group">
                  <button
                    className="feature__btn"
                    style={{
                      backgroundColor: showLiveChat
                        ? "white"
                        : "rgba(255, 255, 255, .08)",
                    }}
                    onClick={() => {
                      setShowLiveChat(true);
                    }}
                  >
                    {showLiveChat ? (
                      <img src={RedComment} alt="" />
                    ) : (
                      <img src={Comment} alt="" />
                    )}
                  </button>
                  <p className="feature__number">123</p>
                </div>
                <div className="feature__group">
                  <button
                    className="feature__btn"
                    onClick={setSaved}
                    style={{
                      backgroundColor: saved
                        ? "#36281C"
                        : "rgba(255, 255, 255, .08)",
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
                  <button
                    className="feature__btn"
                    onClick={() => setShowShare(true)}
                  >
                    <img src={Share} alt="" />
                  </button>
                  <p className="feature__number">Chia sẻ</p>
                </div>
                {/* <div className="feature__group">
                  <button className="feature__btn">
                    <img src="/Dot.svg" alt="" />
                  </button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <div className="short-video__redirect-btn">
        <img
          src={ArrowLight}
          alt=""
          onClick={preVideoHandler}
          style={{
            opacity: document
              .querySelector(".swiper-button-prev")
              ?.classList.contains("swiper-button-disabled")
              ? ".4"
              : "1",
          }}
        />
        <img
          src={ArrowLight}
          alt=""
          onClick={nextVideoHandler}
          style={{
            opacity: document
              .querySelector(".swiper-button-next")
              ?.classList.contains("swiper-button-disabled")
              ? ".4"
              : "1",
          }}
        />
      </div>
      <CommentDialog open={showComment} handleClose={handleCloseComment} />
      <ShareDialog open={showShare} setOpen={setShowShare} />
    </div>
  );
}

export default LiveStream;
