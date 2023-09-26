import React, { useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-contrib-quality-levels";
import hlsQualitySelector from "videojs-hls-quality-selector";
videojs.registerPlugin("hlsQualitySelector", hlsQualitySelector);
require("./Comments/LoadingVideo");
// videojs.registerComponent('PlayToggle', PlayToggle);

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, setVolumeInit, hasLoading = true } = props;

  // const handlePlayerReady = (player) => {
  //   playerRef.current = player;

  //   // You can handle player events here, for example:
  // };

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    let player = null;
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      player = playerRef.current = videojs(videoElement, options, () => {
        player.on("waiting", () => {
          // videojs.log("player is waiting");
        });

        player.on("dispose", () => {
          // videojs.log("player will dispose");
        });
      });

      if (hasLoading) {
        player.addChild("LoadingVideo", {});
      }

      // player.hlsQualitySelector();

      let qualityLevels = player.qualityLevels();
      qualityLevels.on("addqualitylevel", function (event) {
        let qualityLevel = event.qualityLevel;

        if (qualityLevel.height >= 720) {
          qualityLevel.enabled = true;
        } else {
          qualityLevel.enabled = false;
        }
      });

      const isMuted = localStorage.getItem("muted");
      if (isMuted == 1) {
        player.muted(true);
      } else player.muted(false);

      var promise = player.play();

      if (promise !== undefined) {
        promise
          .then(function () {})
          .catch(function (error) {
            if (player && !player.isDisposed_) {
              player.muted(true);
              player.play();
            }
          });
      }

      // player.fill(true)
      // player.aspectRatio('9:16');
      // player.aspectRatio('9:16')

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
    if (player && !player.isDisposed_) {
      let isPlaying = true;
      // Disable progressControl
      if (options.controlBar.progressControl !== false)
        player.controlBar.progressControl.disable();

      // disable right click
      player.on("contextmenu", function (e) {
        e.preventDefault();
      });

      player.on("timeupdate", function () {});
      player.on(["pause", "waiting"], function () {
        isPlaying = false;
      });
      player.on("play", () => {
        if (typeof setVolumeInit === "function") {
          setVolumeInit(player.muted());
        }
      });
      player.on("playing", () => {
        if (options.controlBar.progressControl !== false)
          player.controlBar.progressControl.enable();

        isPlaying = true;
      });

      player.on("ended", function () {
        player.currentTime(0);
        player.play();
      });

      window.addEventListener("keydown", function (e) {
        if (
          e.keyCode == 32 &&
          e.target == document.body &&
          player &&
          !player.isDisposed_
        ) {
          e.preventDefault();
          if (!isPlaying) {
            player.play();
          } else {
            if (player) player.pause();
          }
        }
      });
    }
  }, []);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;
