import React, { useEffect, useRef, useState } from "react";
import useToggle from "../hooks/useToggle";
// import { Link, useSearchParams } from "react-router-dom";
import VideoJS from "./VideoJS";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import Feature from "./Feature";
// import { useHome } from "../hooks/useHome";
import Muted from "../assets/img/muted.svg";
import Unmuted from "../assets/img/Unmuted.svg";
import ArrowLight from "../assets/img/ArrowLight.svg";

import { getUser } from "../utils/localStorage";
import { CircularProgress } from "@mui/material";
import Description from "./Description";
import Butterfly from "../assets/video/Butterfly.mp4";
import OnePiece from "../assets/video/OnePiece.mp4";
import Zoro from "../assets/video/Zoro.mp4";

function ShortVideo(pageId = "for_you") {
  const [showLoginRequiredDialog, setShowLoginRequiredDialog] = useState(false);
  const [isMuted, setIsMuted] = useToggle(false);
  const [swiperIndex, setSwiperIndex] = useState(0);
  // const [allData, setAllData] = useState([]);

  // const [videoParam, setVideoParam] = useState({
  //   limit: 12,
  //   offset: 0,
  //   id: pageId,
  //   page: "shorts",
  // });

  const user = getUser();

  // const [searchParams, setSearchParams] = useSearchParams();
  // const { allVideo, isLoading } = useHome(videoParam);

  const videoJsOptions = {
    autoplay: true,
    controls: true,

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
      progressControl: {},
      volumePanel: {},
      captionsButton: false,
      subsCapsButton: false,
      subtitlesButton: false,
      pictureInPictureToggle: false,
      audioTrackButton: false,
      fullscreenToggle: false,
      liveui: false,
      seekToLive: false,
      liveTracker: false,
    },
    userActions: {
      doubleClick: false,
    },
  };
  const followChannelHandler = async (id, currentStatus, channelId) => {
    const payload = {
      id,
      status: 1,
      notification_type: 1,
    };
    if (currentStatus) {
      payload.status = 0;
    }
  };
  //   const data = await chanelServices.followChannel(payload);

  //   if (data.responseCode === "200") {
  //     const newData = allData.map((item) =>
  //       item.videoData.channelId === channelId
  //         ? { ...item, isFollow: !currentStatus }
  //         : item
  //     );

  //     // // const newDataNew=

  //     // console.log(newData);

  //     setAllData(newData);
  //   }
  // };
  // useEffect(() => {
  //   if (searchParams.size > 0) {
  //     const newParam = { ...videoParam };
  //     searchParams.forEach((value, key) => {
  //       if (["type", "obj_id", "video_id"].includes(key)) {
  //         newParam[key] = value;
  //       }
  //     });

  //     setVideoParam(newParam);
  //   }
  // }, [searchParams]);
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
  const nextVideoHandler = () => {
    document.querySelector(".swiper-button-next").click();
  };
  const preVideoHandler = () => {
    document.querySelector(".swiper-button-prev").click();
  };

  const setVolumeInit = (flagMute) => {
    setIsMuted(flagMute);
    localStorage.setItem("muted", flagMute ? 1 : 0);
  };

  const volumeChangeHandler = () => {
    document.querySelector(".vjs-mute-control").click();
    localStorage.setItem("muted", isMuted ? 0 : 1);
    setIsMuted();
  };
  // const steams = {
  //   disableSeek: true,
  //   errorCode: 200,
  //   maxDuration: 60,
  //   maxProfile: "",
  //   message: "Thành công",
  //   msgProfile: "",
  //   numVideoFree: 0,
  //   popupObj: {
  //     is_register_sub: 1,
  //     confirm_register_sub:
  //       "Để xem tiếp video “Say Hi ! Chim Vành Khuyên Nhỏ”,…obiOn và nhận ngay ưu đãi lưu lượng data hấp dẫn.",
  //     package_id: 78,
  //     package_name: "Gói đặc biệt",
  //     package_fee: 6000,
  //   },
  //   urlStreaming:
  //     "http://s3media.mobion.vn/mobion-media-202307/uploads/2023/07/shortvideo1/short_video_1_abr.m3u8",
  // };
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
    <div className="short-video">
      <SwiperComponent
        direction="vertical"
        spaceBetween={44}
        modules={[Navigation, Mousewheel, Keyboard]}
        keyboard={true}
        slidesPerView={1}
        responsive={true}
        allowTouchMove={false}
        navigation
        lazy
        mousewheel={true}
        onSlideChange={(e) => {
          setSwiperIndex(e.realIndex);
          setIsMuted(false);
        }}
        // onReachEnd={(e) => {
        //   if (e.realIndex > 0) {
        //     setVideoParam((old) => ({
        //       ...old,
        //       offset: old.offset + old.limit,
        //     }));
        //   }
        // }}
        noSwipingClass="player"
      >
        {allData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="card__video">
                <div className="player">
                  {swiperIndex === index ? (
                    <VideoJS
                      options={{
                        ...videoJsOptions,
                        // poster: allData[index]?.videoData.coverImage,
                        sources: item.sources,
                      }}
                      setVolumeInit={(flagMute) => setVolumeInit(flagMute)}
                    />
                  ) : (
                    <div className="card__video__backdrop-img">
                      <CircularProgress color="inherit" />
                      : (
                      <img
                        src={
                          // allData[index]?.videoData.coverImage ||
                          "https://images.unsplash.com/photo-1680816740728-1bb49a507c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        }
                        alt=""
                      />
                      )
                    </div>
                  )}
                </div>
                {swiperIndex === index && (
                  <div className="card__header">
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
                <Description item={item} />
              </div>

              <Feature />
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
    </div>
  );
}

export default ShortVideo;
