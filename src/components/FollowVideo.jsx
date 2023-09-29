import React, { useEffect, useState } from "react";
import VideoJS from "./VideoJS";
// import { useFollow } from "../hooks/useFollow";
// import LoginRequiredDialog from "../Dialogs/LoginRequiredDialog";
import { getUser } from "../utils/localStorage";
import ShortVideo from "./ShortVideo";
// import chanelServices from "../services/chanel";
import ImgBoxEmpty from "./ImgBoxEmpty";
import { Link } from "react-router-dom";
// import Loading from "../Dialogs/Loading";

function FollowVideo() {
  const user = getUser();

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    muted: true,
    aspectRatio: "9:16",
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
  const allData = [
    {
      BGimg: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/56/8d/70/568d7021-7b8c-6c0c-b4b1-e7b07683c98c/cover.jpg/1200x1200bb.jpg",
      Avimg: "https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      name: "Châu Khải Phong Music"
    },
    {
      BGimg: "https://yt3.googleusercontent.com/J50LpbvY9PRKAKIfPOBDOJpxQvnVcxb0Hapj2ybL7kvLdtluG744OpnIBrtorybHCL_d637AnA=s900-c-k-c0x00ffffff-no-rj",
      Avimg: "https://static2.yan.vn/YanNews/2167221/201905/tieu-su-su-nghiep-va-cuoc-doi-ca-si-akira-phan-06205378.jpg",
      name: "Akira Phan Music"
    },
    {
      BGimg: "https://blog.wordsmine.com/wp-content/uploads/2023/06/Music-Club.jpeg",
      Avimg: "https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg",
      name: "Music"
    }
  ]

  return (
    <>
      {/* <ShortVideo> */}
        <div className="follow-list">
          {allData?.length > 0 ? (
            allData.map((item, index) => (
              <div
                className="follow-list__card"
                style={{
                  // background: item.videoData?.converImage ? "unset" : "#2985d9",
                  borderRadius: "20px",
                }}
                // key={item.videoData.channel_id}
                // onMouseOver={() => {
                //   if (!item.videoData.streams) return;
                //   previewVideoHandler(item.videoData.channel_id, true);
                // }}
                // onMouseOut={() => {
                //   if (!item.videoData.streams) return;
                //   previewVideoHandler(item.videoData.channel_id, false);
                // }}
              >
                {item.isPreviewVideo && (
                  <VideoJS
                    options={{
                      ...videoJsOptions,
                      sources: item,
                    }}
                    hasLoading={false}
                  />
                )}
                {/* {!item.isPreviewVideo && item.videoData?.converImage && ( */}
                  <img
                    src={item.BGimg}
                    alt=""
                    className="follow-list__card__img"
                  />
                {/* )} */}

                {
                  <div className="follow-list__detail">
                    {/* <Link to={`/channel/${item.videoData.channel_slug}`}> */}
                      <img
                        src={item.Avimg}
                        alt=""
                        width={48}
                        height={48}
                        className="follow-list__detail__img"
                      ></img>
                    {/* </Link> */}

                    <div
                      // to={`/channel/${item.videoData.channel_slug}`}
                      style={{ color: "white" }}
                      className="follow-list__detail__name"
                    >
                      {item.name}
                    </div>
                    {item.isFollow ? (
                      <button
                        className="follow-list__detail__btn"
                        // onClick={() =>
                        //   followChannelHandler(item.id, item.isFollow, index)
                        // }
                        style={{ background: "rgb(39,39,40)" }}
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-2 scale-75"
                        >
                          <path
                            d="M20 6 9 17l-5-5"
                            stroke="currentColor"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        Đang theo dõi
                      </button>
                    ) : (
                      <button
                        className="follow-list__detail__btn"
                        // onClick={() => {
                        //   if (!user) {
                        //     setShowLoginRequiredDialog(true);
                        //     return;
                        //   }
                        //   followChannelHandler(item.id, item.isFollow, index);
                        // }}
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-2 scale-75"
                        >
                          <path
                            d="M12 3v18M3 12h18"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        Theo dõi
                      </button>
                    )}
                  </div>
                }
                <div className="follow-list__backdrop"></div>
              </div>
            ))
          ) : (
            <ImgBoxEmpty text={`Nội dung đang được cập nhật`} />
          )}
          {/* <LoginRequiredDialog
            open={showLoginRequiredDialog}
            setOpen={setShowLoginRequiredDialog}
          /> */}
        </div>
      {/* </ShortVideo> */}
    </>
  );
}

export default FollowVideo;
