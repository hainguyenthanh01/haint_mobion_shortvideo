import { useEffect, useRef, useState } from "react";
// import { useNotification } from "../hooks/useNotification";
import threeDot from "../assets/img/ThreeDot.svg";
import HideNoti from "../assets/img/HideNoti.svg";
import viewAll from "../assets/img/view-all.svg";
import { useNavigate } from "react-router-dom";
import ImgBoxEmpty from "./ImgBoxEmpty";
import LoadMore from "./LoadMore";

function Notification({ setShowNotification, showNotification }) {
  const refNoti = useRef(null);
  const navigate = useNavigate();
  const [reload, setReload] = useState(0);
  const [activeHide, setActiveHide] = useState("");
  const [fetchData, setFetchData] = useState(false);
  const [enableFetch, setEnablefetch] = useState(true);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [listDataNoiti, setListDataNoiti] = useState([]);
  // const {
  //   isFetching,
  //   listNoti,
  //   isLoading,
  //   refetch,
  //   updateClickReaded,
  //   updateAllReaded,
  //   updateHideNoti,
  // } = useNotification({
  //   param: {
  //     page: "shorts",
  //     limit: limit,
  //     offset: offset,
  //   },
  //   enable: enableFetch,
  // });
  // useEffect(() => {}, [reload]);
  // useEffect(() => {
  //   setOffset(0);
  //   setListDataNoiti([]);
  //   setEnablefetch(true);
  //   refetch();
  // }, showNotification);

  // useEffect(() => {
  //   const el = refNoti.current;
  //   const handleFetchData = () => {
  //     if (
  //       el.scrollTop + el.clientHeight >= el.scrollHeight &&
  //       listNoti?.length === limit &&
  //       !isFetching
  //     ) {
  //       setOffset(offset + limit);
  //       setFetchData(true);
  //     } else {
  //       setFetchData(false);
  //     }
  //   };
  //   el.addEventListener("scroll", handleFetchData);
  //   return () => {
  //     el.removeEventListener("scroll", handleFetchData);
  //   };
  // }, [fetchData, listNoti, isFetching]);
  // useEffect(() => {
  //   if (!fetchData) {
  //     setEnablefetch(false);
  //   } else {
  //     refetch();
  //     setEnablefetch(true);
  //   }
  // }, [fetchData]);
  // useEffect(() => {
  //   if (!isFetching && listNoti?.length > 0) {
  //     const checkOldData = listDataNoiti.find((it) => it.id === listNoti[0].id);
  //     if (checkOldData) {
  //       const oldData = listDataNoiti.slice(0, listDataNoiti.length - 4);
  //       setListDataNoiti([...oldData, ...listNoti]);
  //     } else if (offset === 0) {
  //       setListDataNoiti(listNoti);
  //     } else {
  //       setListDataNoiti([...listDataNoiti, ...listNoti]);
  //     }
  //   }
  //   // else if (listDataNoiti?.length > 0) {
  //   //   setOffset(offset - limit);
  //   //   setFetchData(true);
  //   //   refetch();
  //   // }
  // }, [isFetching, listNoti]);

  // const handleClickNoti = (item) => {
  //   updateClickReaded.mutateAsync({ id: item?.id });

  //   if (item?.objItem?.video_id) {
  //     navigate(`/?type=notify&video_id=${item?.objItem?.video_id}`);
  //     setShowNotification(false);
  //   } else {
  //     const newArr = listDataNoiti.map((it) => {
  //       if (it.id === item.id) {
  //         it.is_read = 1;
  //         return it;
  //       } else {
  //         return it;
  //       }
  //     });
  //     setListDataNoiti(newArr);
  //   }
  // };
  // if (isLoading) return <LoadMore />;
  const listDataNoitifi = [
    {
      avatar: "https://t.vietgiaitri.com/2021/1/1/soi-anh-check-in-cua-hot-girl-banh-trang-tran-meo-thay-ngay-ca-ro-cong-thuc-song-ao-bao-sao-rambo-chang-me-nhu-dieu-do-160-5488019.jpeg",
      title: "Mùa hoa phượng nở cũng là mùa chia tay, chia tay thời thơ mộng để bước vào đời nhiều hoài bão lớn lao",
      date: "1 tháng trước",
      image: "https://kenh14cdn.com/2020/11/11/1a-1605104374323717573314.jpg"
    },
    {
      avatar: "https://static2-images.vnncdn.net/files/publish/2022/9/27/302088233-1159194098341093-4658673666846962306-n-776.jpg",
      title: "Mùa hoa phượng nở cũng là mùa chia tay, chia tay thời thơ mộng để bước vào đời nhiều hoài bão lớn lao",
      date: "2 tháng trước",
      image: "https://static2-images.vnncdn.net/files/publish/2022/9/27/302315649-611685503760639-6530031217274355774-n-775.jpg"
    },
    {
      avatar: "https://yt3.googleusercontent.com/ytc/APkrFKaoYRIzw4l0ErP9VaIGspVYI8iM8-eIbcqF6npvDQ=s900-c-k-c0x00ffffff-no-rj",
      title: "Mùa hoa phượng nở cũng là mùa chia tay, chia tay thời thơ mộng để bước vào đời nhiều hoài bão lớn lao",
      date: "3 tháng trước",
      image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/7/21/932742/Untitled-Capture2205.jpg"
    },
    {
      avatar: "https://cf.shopee.vn/file/vn-11134207-7r98o-lks3a8ua94qj3b",
      title: "Mùa hoa phượng nở cũng là mùa chia tay, chia tay thời thơ mộng để bước vào đời nhiều hoài bão lớn lao",
      date: "4 tháng trước",
      image: "https://toigingiuvedep.vn/wp-content/uploads/2023/03/hinh-anh-do-mixi.jpg"
    },
  ]
  return (
    <>
      <div className="notification__header">
        <div className="notification__title">Thông báo</div>
        <img
          src={viewAll}
          alt=""
          className="notification__view-all"
          style={{ cursor: "pointer" }}
          // onClick={() => {
          //   updateAllReaded.mutateAsync({ page: "shorts" });
          //   refetch();
          //   setEnablefetch(true);
          // }}
        />
      </div>

      <div ref={refNoti} className="notification__list">
        {listDataNoitifi?.length > 0 ? (
          listDataNoitifi?.map((item) => (
            <div key={item} className="notification__item">
              {/* {!item?.is_read && <div className="notification__viewed"></div>} */}
              <img
                src={item?.avatar}
                alt="avatar-notification"
                className="notification__user-avatar"
                width={48}
                height={48}
                // onClick={() => {
                //   handleClickNoti(item);
                // }}
              />
              <div
                // onClick={() => {
                //   handleClickNoti(item);
                // }}
                className="notification__content"
              >
                <h4>{item?.title}</h4>
                <p>{item?.date}</p>
              </div>
              <img
                src={item?.image}
                alt="video-notification"
                className="notification__post"
                // onClick={() => {
                //   handleClickNoti(item);
                // }}
              />
              <img
                src={threeDot}
                alt="three dot "
                className="notification__three-dot"
                onClick={() => setActiveHide(item?.id)}
              />
              <button
                // onClick={() => {
                //   updateHideNoti.mutateAsync({ id: item?.id });
                //   const newArr = listDataNoiti.filter(
                //     (it) => it.id !== item?.id
                //   );
                //   setListDataNoiti(newArr);
                //   refetch();
                //   setEnablefetch(true);
                // }}
                className={`notification__btn-hide ${
                  activeHide === item?.id && "active"
                }`}
              >
                <img src={HideNoti} alt="icon ẩn thông báo" />
                Ẩn thông báo này
              </button>
            </div>
          ))
        ) : (
          <ImgBoxEmpty text={`Bạn chưa có thông báo nào`} />
        )}
        {/* { <LoadMore />} */}
      </div>
    </>
  );
}

export default Notification;
