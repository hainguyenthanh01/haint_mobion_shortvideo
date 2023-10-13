import React, { useEffect, useRef, useState } from "react";
// import ShareDialog from "../Dialogs/ShareDialog";
import { useNavigate, useParams } from "react-router-dom";
// import { useChanel } from "../hooks/useChanel";
import shareImg from "../assets/img/Share.svg";
// import useScrollListener from "../Dialogs/ScrollCheck";
// import chanelServices from "../services/chanel";
import ImgBoxEmpty from "./ImgBoxEmpty";
// import { getUser } from "../utils/localStorage";
// import LoginRequiredDialog from "../Dialogs/LoginRequiredDialog";
import LoadMore from "./LoadMore";
import { useToggle } from "@react-hookz/web";

let isLastPage = false;

function Channel() {
  // const { channelId } = useParams();
  // const [openShare, setOpenShare] = useState(false);
  // const [showLoginRequiredDialog, setShowLoginRequiredDialog] = useState(false);

  // const navigate = useNavigate();

  // const [allVideo, setAllVideo] = useState([]);
  // const [params, setParams] = useState({
  //   id: channelId,
  //   limit: 10,
  //   offset: 0,
  //   page: "shorts",
  // });
  // const { listChanel, isLoading, refetchChanel } = useChanel(params);

  // const user = getUser();

  // const followChannelHandler = async (id, currentStatus) => {
  //   if (!user) {
  //     setShowLoginRequiredDialog(true);
  //     return;
  //   }
  //   const payload = {
  //     id,
  //     status: 1,
  //     notification_type: 1,
  //   };
  //   if (currentStatus) {
  //     payload.status = 0;
  //   }
  //   const data = await chanelServices.followChannel(payload);

  //   if (data.responseCode === "200") {
  //     refetchChanel();
  //   }
  // };

  // useEffect(() => {
  //   if (channelId) {
  //     isLastPage = false;
  //     setAllVideo([]);
  //     setParams({
  //       id: channelId,
  //       limit: 10,
  //       offset: 0,
  //       page: "shorts",
  //     });
  //   }
  // }, [channelId]);

  // useEffect(() => {
  //   if (listChanel?.newest_video.content) {
  //     if (listChanel?.newest_video.content.length < params.limit) {
  //       isLastPage = true;
  //     }
  //     if (params.offset > 0) {
  //       const newData = [...allVideo, ...listChanel.newest_video.content];
  //       setAllVideo(newData);
  //     } else {
  //       setAllVideo(listChanel.newest_video.content);
  //     }
  //   }
  // }, [listChanel]);
  // const scroll = useScrollListener();
  // useEffect(() => {
  //   if (
  //     window.innerHeight + window.scrollY + 280 >= document.body.offsetHeight &&
  //     !isLastPage &&
  //     !isLoading
  //   ) {
  //     //Code request API
  //     // isLastPage
  //     setParams((old) => ({
  //       ...old,
  //       offset: old.offset + old.limit,
  //     }));
  //   }
  // }, [scroll.y, scroll.lastY, isLastPage]);
  const [follow, setFollow] = useToggle(false);
  const followChannelHandler = async () => {
    setFollow()};
  const listChanel = [{}];

  const allVideo = [
    {
      imgBG:
        "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      imgAv:
        "https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      userName: "Lê Bống tiktok",
      view: "3,8K",
    },
    {
      imgBG:
        "https://i.pinimg.com/originals/aa/6b/8f/aa6b8ffa59a8d2cd830205ec11457706.gif",
      name: "Châu Khải Phong",
      imgAv:
        "https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      userName: "Châu Khải Phong Music",
      view: "2K",
    },
    {
      imgBG:
        "https://gifdb.com/images/high/naruto-fire-rasengan-vq0j2diwfw4mv5kq.gif",
      name: "Lê Bống",
      imgAv:
        "https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      userName: "Lê Bống tiktok",
      view: "3,8K",
    },
    {
      imgBG:
        "https://i.pinimg.com/originals/0e/0d/9f/0e0d9fc7a1e651ff13bd0499bb94d593.gif",
      name: "Châu Khải Phong",
      imgAv:
        "https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      userName: "Châu Khải Phong Music",
      view: "2K",
    },
    {
      imgBG:
        "https://yt3.googleusercontent.com/VUoCb4XKNUy021qgpI2MY-JW-EkJBjKlg_mekGoNY0OlSXAtB73zt51UFIRDcl34mgKrENDlIQ=s900-c-k-c0x00ffffff-no-rj",
      name: "Lê Bống",
      view: "3,8K",
    },
    {
      imgBG:
        "https://i.pinimg.com/originals/5b/de/11/5bde11ea1070b61017992608d6e6e2a6.gif",
      name: "Châu Khải Phong",
      view: "2K",
    },
    {
      imgBG:
        "https://static2-images.vnncdn.net/files/publish/2022/9/27/302088233-1159194098341093-4658673666846962306-n-776.jpg",
      name: "Lê Bống",
      view: "3,8K",
    },
    {
      imgBG:
        "https://media.tenor.com/clFnzvrjIM0AAAAC/zoro-slash-bub-made-it.gif",
      name: "Châu Khải Phong",
      view: "2K",
    },
    {
      imgBG:
        "https://i.vietgiaitri.com/2021/9/17/do-ban-le-bong-da-dao-keo-bo-phan-nao-tren-guong-mat-de-co-duoc-nhan-sac-hot-girl-nhu-hien-tai-f4a-6034809.jpg",
      name: "Lê Bống",
      view: "3,8K",
    },
    {
      imgBG:
        "https://media.tenor.com/ZvkygSP_96EAAAAd/roronoa-zoro-one-piece.gif",
      name: "Châu Khải Phong",
      view: "2K",
    },
    {
      imgBG:
        "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      view: "3,8K",
    },
  ];

  return (
    <div className="channel-page container">
      <div className="channel-page__info">
        <div className="channel-page__info-head">
          {/* nếu có sự kiện live thì thêm class channel-page__info-live  */}
          <div
            className="channel-page__info-avatar 
          "
          >
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/0/09/DoMixi1989.jpg"
              }
              alt=""
            />
            {/* <button className="btn btn--blue">LIVE</button> */}
          </div>
          <div className="channel-page__info-name">
            {/* <h2>{listChanel?.detail?.name}</h2> */}
            <h2>Mixi Gaming</h2>

            <button
              className={
                follow
                  ? "btn btn--lightGray"
                  : "btn btn--white"
              }
              // onClick={() =>
              //   followChannelHandler(
              //     listChanel?.detail.id,
              //     listChanel?.detail.isFollow
              //   )
              // }
              onClick={followChannelHandler}
            >
              {follow ? "Đã theo dõi" : "Theo dõi"}
            </button>
          </div>
          <div className="channel-page__info-groupBtn">
            {/* <button onClick={() => setOpenShare(true)}> */}
            <button>
              <img src={shareImg} alt="" height={24} width={24} />
            </button>
            {/* <button>
              <img src="/ThreeDot.svg" alt="" />
            </button> */}
          </div>
        </div>
        <div className="channel-page__view">
          <div className="channel-page__view-number">
            {" "}
            {/* {listChanel?.detail?.num_follow} */}
            1.1M
            <span>Người theo dõi</span>
          </div>
          <div className="channel-page__view-number">
            {" "}
            {/* {listChanel?.detail?.totalLike} */}
            20M
            <span>Thích</span>
          </div>
        </div>
        {/* {listChanel?.detail?.description && (
          <div className="channel-page__des">
            <p name="" id="" disabled>
              {listChanel?.detail?.description}
            </p>
          </div>
        )} */}
       
          <div className="channel-page__des">
            <p name="" id="" disabled>
            ♦️ Cho Kuape xèng mua bánh ở đêi: ►101871164337 Vietinbank <br /> ►playerduo.com/chiee22 Join my discord: https://discord.gg/BkSYyXbaxC
            </p>
          </div>
        
      </div>

      {allVideo?.length > 0 ? (
        <div className="box-search">
          <div className="list-channel">
            {allVideo?.map((item, index) => (
              <div className="card-channel">
                <div className="card-channel__img">
                  <img
                    // onClick={() => {
                    //   navigate(
                    //     `/?type=channel&obj_id=${channelId}&video_id=${item.id}`
                    //   );
                    // }}
                    src={item?.imgBG}
                    alt=""
                  />
                  <div className="card-channel__plate"></div>
                </div>

                <div className="card-channel__info">
                  <h3
                    className="card-channel__title"
                    // onClick={() => {
                    //   navigate(
                    //     `/?type=channel&obj_id=${channelId}&video_id=${item.id}`
                    //   );
                    // }}
                  >
                    {item?.name}
                  </h3>
                  <p className="card-channel__view">{item?.view} lượt xem</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <ImgBoxEmpty text={`Nội dung đang được cập nhật`} />
      )}
      {
        <div style={{ marginTop: 100 }}>
          {" "}
          <LoadMore />
        </div>
      }
      {/* <ShareDialog
        open={openShare}
        setOpen={setOpenShare}
        link={window.location.href}
      />
      <LoginRequiredDialog
        open={showLoginRequiredDialog}
        setOpen={setShowLoginRequiredDialog}
      /> */}
    </div>
  );
}

export default Channel;
