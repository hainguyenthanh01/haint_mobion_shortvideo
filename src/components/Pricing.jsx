import React from "react";
// import { usePackage } from "../hooks/usePackage";
import iconPackageHot from "../assets/img/iconPackageHot.svg";

function Pricing() {
  // const { myPackage } = usePackage(false, true);

  return (
    <div className="pricing">
      <h2 className="pricing__title">Gói cước của tôi</h2>
      <p className="pricing__des">
          Vui lòng đăng ký gói cước để có trải nghiệm tốt nhất
        </p>
      {/* {myPackage ? (
        <div
          style={{ width: "66.67%" }}
          className={`package__box-item ${
            myPackage.info_package.hot && "is-hot"
          }`}
        >
          <div className="package__data-item">
            <h3 class="package__data-item-title" style={{ marginBottom: 10 }}>
              {myPackage.name}
            </h3>
            <span
              style={{ fontSize: 32, lineHeight: 1.2 }}
              class="package__data-item-price"
            >{`${myPackage.fee}đ`}</span>
            <span
              style={{ fontSize: 16 }}
              class="package__data-item-sub"
            >{`/${myPackage?.cycle?.toLowerCase()}`}</span>
            <div className="package__box-note">
              <div class="package__data-item-note">
                {`Gia hạn theo ${myPackage?.cycle?.toLowerCase()}`}
              </div>

              <div class="package__data-item-note">
                {`Đăng ký ngày ${myPackage?.register_time}`}
              </div>
            </div>

            {myPackage.info_package.hot && (
              <img
                className="package__hot"
                src={iconPackageHot}
                alt="package icon"
              />
            )}
          </div>
          <div className="package__data-detail">
            <p className="package__data-description">{myPackage.description}</p>
          </div>
        </div>
      ) : ( */}

      {/* )} */}
    </div>
  );
}

export default Pricing;
