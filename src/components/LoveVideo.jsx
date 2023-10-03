import React, { useEffect, useRef, useState } from "react";

import useToggle from "../hooks/useToggle";
import { Link } from "react-router-dom";
import ShortStored from "./ShortStored";
import VideoJS from "./VideoJS";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import Feature from "./Feature";
import { useLove } from "../hooks/useLove";

import Muted from "../assets/img/muted.svg";
import Unmuted from "../assets/img/Unmuted.svg";
import ArrowLight from "../assets/img/ArrowLight.svg";
import Description from "./Description";
import chanelServices from "../services/chanel";

let isScrollLoading = false;
let disabledScroll = false;
function LoveVideo() {
  const [isMuted, setIsMuted] = useToggle(false);

  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiperData, setSwiperData] = useState(null);
  const [loveTab, setLoveTab] = useState(true);
  const [allData, setAllData] = useState(true);
  const [videoParam, setVideoParam] = useState({
    limit: 12,
    offset: 0,
  });

  const { allLoveVideo, allSaveVideo } = useLove(videoParam);

  const followChannelHandler = async (id, currentStatus, channelId) => {
    const payload = {
      id,
      status: 1,
      notification_type: 1,
    };
    if (currentStatus) {
      payload.status = 0;
    }
    const data = await chanelServices.followChannel(payload);

    if (data.responseCode === "200") {
      const newData = allData.map((item) =>
        item.videoData.channelId === channelId
          ? { ...item, isFollow: !currentStatus }
          : item
      );

      setAllData(newData);
    }
  };

  const slideTo = (index) => swiperData.slideTo(index);

  const boxContentRef = useRef();

  useEffect(() => {
    const div = boxContentRef.current;
    if (div) {
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = boxContentRef.current;

        if (
          scrollTop + clientHeight + 200 >= scrollHeight &&
          !isScrollLoading &&
          !disabledScroll &&
          allData.length > 0
        ) {
          isScrollLoading = true;

          setVideoParam((old) => ({
            ...old,
            offset: old.offset + old.limit,
          }));
        }
      };
      div.addEventListener("scroll", handleScroll);

      return () => {
        div.removeEventListener("scroll", handleScroll);
      };
    }
  }, [boxContentRef.current, allData]);

  useEffect(() => {
    if (swiperData) {
      slideTo(0);
    }
  }, [loveTab]);

  useEffect(() => {
    disabledScroll = false;
    if (allLoveVideo && loveTab) {
      const newListData = allLoveVideo?.content.map((item) => ({
        src: item.streams.urlStreaming,
        type: "application/x-mpegURL",
        isFollow: item?.isFollowChannel,
        videoData: item,
        id: item.id,
      }));
      if (newListData.length < videoParam.limit) {
        disabledScroll = true;
      }
      if (videoParam.offset === 0) {
        setAllData(newListData);
      } else {
        const newConcatData = [...allData, ...newListData];
        setAllData(newConcatData);
      }
    } else if (allSaveVideo && !loveTab) {
      const newListData = allSaveVideo?.content.map((item) => ({
        src: item.streams.urlStreaming,
        type: "application/x-mpegURL",
        isFollow: item?.isFollowChannel,
        videoData: item,
        id: item.id,
      }));
      if (newListData.length < videoParam.limit) {
        disabledScroll = true;
      }

      if (videoParam.offset === 0) {
        setAllData(newListData);
      } else {
        const newConcatData = [...allData, ...newListData];
        setAllData(newConcatData);
      }
    }
  }, [allLoveVideo, allSaveVideo, loveTab]);

  const videoJsOptions = {
    autoplay: true,
    controls: true,

    fluid: false,
    aspectRatio: "9:16",
    inactivityTimeout: 0,
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
      // playbackRateMenuButton: false,
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

  const nextVideoHandler = () => {
    document.querySelector(".swiper-button-next").click();
  };
  const preVideoHandler = () => {
    document.querySelector(".swiper-button-prev").click();
  };

  //
  const setVolumeInit = (flagMute) => {
    setIsMuted(flagMute);
    localStorage.setItem("muted", flagMute ? 1 : 0);
  };

  const volumeChangeHandler = () => {
    document.querySelector(".vjs-mute-control").click();
    localStorage.setItem("muted", isMuted ? 0 : 1);
    setIsMuted();
  };
  return (
    <div className="love-video">
      <SwiperComponent
        direction="vertical"
        spaceBetween={44}
        modules={[Navigation, Mousewheel, Keyboard]}
        keyboard={true}
        allowTouchMove={false}
        slidesPerView={1}
        onReachEnd={(e) => {
          if (e.realIndex > 0) {
            setVideoParam((old) => ({
              ...old,
              offset: old.offset + old.limit,
            }));
          }
        }}
        navigation
        lazy
        mousewheel={true}
        onSwiper={setSwiperData}
        onSlideChange={(e) => {
          setSwiperIndex(e.realIndex);
          setIsMuted(false);
        }}
        noSwipingClass="player"
      >
        {allData?.length > 0 &&
          allData.map((item, index) => (
            <SwiperSlide key={item.videoData.id}>
              <div className="card">
                <div className="card__video">
                  <div className="player">
                    {swiperIndex === index ? (
                      <VideoJS
                        options={{
                          ...videoJsOptions,
                          poster: allData[index]?.videoData.coverImage,
                          sources: item,
                        }}
                        setVolumeInit={(flagMute) => setVolumeInit(flagMute)}
                      />
                    ) : (
                      <div className="card__video__backdrop-img">
                        <img
                          src={
                            allData[index].videoData?.coverImage ||
                            "https://images.unsplash.com/photo-1680816740728-1bb49a507c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                          }
                          alt=""
                        />
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
                  <Description
                    followChannelHandler={followChannelHandler}
                    item={item}
                  />
                </div>

                <Feature featureData={item.videoData} allDataLove={allData} setAllDataLove={setAllData} />
              </div>
            </SwiperSlide>
          ))}
      </SwiperComponent>

      <ShortStored
        data={allData}
        swiperIndex={swiperIndex}
        slideTo={slideTo}
        loveTab={loveTab}
        setLoveTab={setLoveTab}
        boxContentRef={boxContentRef}
      />

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

export default LoveVideo;
