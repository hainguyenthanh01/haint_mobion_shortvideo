import React, { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import Clock from "../../assets/img/Clock.svg";
import Search from "../../assets/img/Search.svg";
import Trend from "../../assets/img/Trend.svg";
import ChannelImage from "../../assets/img/ChannelImage.svg";

function SearchBox({ inputSearch, setInputSearch }) {
  const [historyList, setHistoryList] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
  return (
    <div className="search-box__content">
      <div className="search-box__history">
        {historyList.map((item, index) => (
          <div key={item} className="search-box__item">
            <img src={Clock} alt="clock icon" />
            <p
              className="search-box__text"
              onClick={() => setInputSearch(`Ngủ một mình ${item.id}`)}
            >
              Ngủ một mình {item.id}
            </p>
            <span
              className="search-box__delete"
              // onClick={() =>
              //   setHistoryList((list) =>
              //     list.filter((item) => item.id !== item)
              //   )
              // }
            >
              Xóa
            </span>
          </div>
        ))}
        {inputSearch !== "" &&
          ["Gaming home", "Test", "Lmht", "Content", "Haha"].map((item) => (
            <div
              key={item}
              className="search-box__item"
              onClick={() => setInputSearch(item)}
            >
              <img src={Search} alt="clock icon" width={24} height={24} />
              <p
                className="search-box__text"
                onClick={() => setInputSearch("Ngủ một mình")}
              >
                {item}
              </p>
            </div>
          ))}
      </div>
      {inputSearch === "" && (
        <p className="search-box__trend-title">Top xu hướng</p>
      )}
      {inputSearch === "" && (
        <div className="search-box__trend">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="search-box__item">
              <img src={Trend} alt="trend icon" />
              <p className="search-box__text">Mixi Gaming {item}</p>
            </div>
          ))}
        </div>
      )}
      {inputSearch !== "" && <p className="search-box__trend-title">Kênh</p>}
      {inputSearch !== "" && (
        <div className="search-box__trend">
          {[1, 2, 3].map((item) => (
            <div key={item} className="search-box__item">
              <img
                src={ChannelImage}
                alt="trend icon"
                width={40}
                height={40}
                style={{ objectFit: "cover", borderRadius: "100%" }}
              />
              <p className="search-box__text">Gaming Home</p>
            </div>
          ))}
        </div>
      )}
      {inputSearch !== "" && (
        <p className="search-box__trend-title">{`Xem tất cả kết quả tìm cho “${inputSearch}”`}</p>
      )}
    </div>
  );
}

export default SearchBox;
