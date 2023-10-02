import React, { useEffect, useState } from "react";
// import { useHastag } from "../hooks/useHastag";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ImageDefaultHastag from "./ImageDefaultHastag";
import ImgBoxEmpty from "./ImgBoxEmpty";
import Share from "../assets/img/Share.svg";
// import ShareDialog from "../Dialogs/ShareDialog";
// import Loading from "../Dialogs/Loading";
import LoadMore from "./LoadMore";

function HashTag() {
  // const location = useLocation();
  // const { hashtagId } = useParams();
  const navigate = useNavigate();
  // const [listDataHastag, setListDataHastag] = useState([]);
  // const [fetchData, setFetchData] = useState(false);
  // const [limit, setLimit] = useState(18);
  // const [offset, setOffset] = useState(0);
  // const [enbleFetch, setEnblefetch] = useState(true);
  // const [hastag, setHastag] = useState(hashtagId);
  // const [checkHastagChange, setCheckHastagChange] = useState(0);
  // const [openShare, setOpenShare] = useState(false);
  // const { listHastag, isFetching, isLoading, refetchHastag } = useHastag({
  //   querry: {
  //     id: `hashtag_detail_${hastag}`,
  //     limit: limit,
  //     offset: offset,
  //     page: "shorts",
  //   },
  //   enbleFetch: enbleFetch,
  // });
  // useEffect(() => {
  //   if (listHastag?.content?.length > 0) {
  //     if (offset > 0) {
  //       setListDataHastag([...listDataHastag, ...listHastag?.content]);
  //     } else {
  //       setListDataHastag(listHastag?.content);
  //     }
  //   }
  // }, [listHastag]);
  // useEffect(() => {
  //   if (hashtagId) {
  //     setHastag(hashtagId);
  //     if (hastag !== hashtagId) {
  //       setCheckHastagChange(new Date() * 1);
  //       setLimit(18);
  //       setOffset(0);
  //       window.scrollTo(0, 0);
  //     } else {
  //       setCheckHastagChange(0);
  //     }
  //   }
  // }, [hashtagId]);
  // useEffect(() => {
  //   if (
  //     (listHastag?.content?.length < limit &&
  //       !checkHastagChange &&
  //       fetchData) ||
  //     (!fetchData && !checkHastagChange)
  //   ) {
  //     setEnblefetch(false);
  //   } else {
  //     setEnblefetch(true);
  //     refetchHastag();
  //   }
  // }, [listHastag, checkHastagChange, fetchData]);
  // useEffect(() => {
  //   const handleFetchData = () => {
  //     if (
  //       window.scrollY + document.documentElement.clientHeight >=
  //         document.body.scrollHeight &&
  //       listHastag?.content?.length >= limit &&
  //       !isFetching
  //     ) {
  //       setOffset(offset + limit);
  //       setFetchData(true);
  //     } else {
  //       setFetchData(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleFetchData);
  //   return () => {
  //     window.removeEventListener("scroll", handleFetchData);
  //   };
  // }, [fetchData, listHastag, isFetching]);
  // if (isLoading) return <Loading />;

  const listDataHastag = [
    {
      imgBG: "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      imgAv:"https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      userName: "Lê Bống tiktok",
      view: "3,8K"

    },
    {
      imgBG: "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      imgAv:"https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      userName: "Châu Khải Phong Music",
      view: "2K"
    },
    {
      imgBG: "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      imgAv:"https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      userName: "Lê Bống tiktok",
      view: "3,8K"

    },
    {
      imgBG: "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      imgAv:"https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      userName: "Châu Khải Phong Music",
      view: "2K"
    },
    {
      imgBG: "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      imgAv:"https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      userName: "Lê Bống tiktok",
      view: "3,8K"

    },
    {
      imgBG: "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      imgAv:"https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      userName: "Châu Khải Phong Music",
      view: "2K"
    },
    {
      imgBG: "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      imgAv:"https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      userName: "Lê Bống tiktok",
      view: "3,8K"

    },
    {
      imgBG: "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      imgAv:"https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      userName: "Châu Khải Phong Music",
      view: "2K"
    },
    {
      imgBG: "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      imgAv:"https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      userName: "Lê Bống tiktok",
      view: "3,8K"

    },
    {
      imgBG: "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      imgAv:"https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      userName: "Châu Khải Phong Music",
      view: "2K"
    },
    {
      imgBG: "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      imgAv:"https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      userName: "Lê Bống tiktok",
      view: "3,8K"

    },
    {
      imgBG: "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      imgAv:"https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      userName: "Châu Khải Phong Music",
      view: "2K"
    },

    {
      imgBG: "https://static2-images.vnncdn.net/files/publish/2022/9/27/300547377-1226894978044272-2329636357935330016-n-780.jpg",
      name: "Lê Bống",
      imgAv:"https://ss-images.saostar.vn/w800/pc/1631721641909/saostar-w8sc5b97aapxhr5k.jpg",
      userName: "Lê Bống tiktok",
      view: "3,8K"

    },
    {
      imgBG: "https://yt3.googleusercontent.com/uu4Vt5F0XG4vS3A3PCNKW4-nC6vzocCCrfLAZWEIX8lKY-QwExGxTpfU-mCOeBC0Lp8BE-01=s900-c-k-c0x00ffffff-no-rj",
      name: "Châu Khải Phong",
      imgAv:"https://giadinh.mediacdn.vn/2019/10/23/phong11-1571818005585708233526.jpg",
      userName: "Châu Khải Phong Music",
      view: "2K"
    },
  ]
  return (
    <div className="channel-page container">
      <div className="channel-page__info">
        <div className="channel-page__info-head">
            <ImageDefaultHastag />
          <div className="channel-page__info-name">
            <h2>#lebao</h2>
            <p>1,5K lượt xem</p>
          </div>
          <div className="channel-page__info-groupBtn">
            <button>
            {/* <button onClick={() => setOpenShare(true)}> */}
              <img src={Share} alt="" width={24} height={24} />
            </button>
            {/* <button>
              <img src="/ThreeDot.svg" alt="" />
            </button> */}
          </div>
        </div>

        {/* {listDataHastag.description > 0 && (
          <div className="channel-page__des">
            <textarea
              name=""
              id=""
              cols="1"
              rows="4"
              defaultValue={listDataHastag?.description}
            />
          </div>
        )} */}
      </div>

      {listDataHastag.length > 0 ? (
        <div className="box-search">
          <div className="list-channel">
            {listDataHastag?.map((item) => (
              <div className="card-channel" key={item.id}>
                <div className="card-channel__img">
                  <img
                    // onClick={() => {
                    //   navigate(
                    //     `/?type=hashtag&obj_id=${hastag}&video_id=${item.id}`
                    //   );
                    // }}
                    src={item?.imgBG}
                    alt=""
                  />
                  <div className="card-channel__plate">
                    <Link >
                      <img src={item?.imgAv} alt="" />
                    </Link>
                    <Link
                      style={{ flex: "1" }}
                    >
                      <div className="card__user-name">{item?.userName}</div>
                    </Link>
                  </div>
                </div>

                <div className="card-channel__info">
                  <h3
                    // onClick={() => {
                    //   navigate(
                    //     `/?type=hashtag&obj_id=${hastag}&video_id=${item.id}`
                    //   );
                    // }}
                    className="card-channel__title"
                  >
                    {item?.name}
                  </h3>
                  <p className="card-channel__view">{`${item?.view} lượt xem`}</p>
                </div>
              </div>
            ))}
          </div>
          <LoadMore />
        </div>
      ) : (
        <ImgBoxEmpty text={`Nội dung đang được cập nhật`} />
      )}
      {/* <ShareDialog
        open={openShare}
        setOpen={setOpenShare}
        link={window.location.href}
      /> */}
    </div>
  );
}

export default HashTag;
