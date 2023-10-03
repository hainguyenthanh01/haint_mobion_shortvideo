import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import DeleteIcon from "../assets/img/DeleteIcon.svg";
import iconPopupPackage from "../assets/img/iconPopupPackage.svg";
import iconPackageHot from "../assets/img/iconPackageHot.svg";
// import { usePackage } from "../hooks/usePackage";
import { useToggle } from "@react-hookz/web";
import PackageDetailDialog from "./PackageDetailDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PackageDialog({ open, setOpen }) {
  // const { listPackage } = usePackage(open, false);
  const [showDetail, setShowDetail] = useToggle(false);
  const [itemSelected, setItemSelected] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  const listPackage = [{}];

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          position: "relative",
          paddingTop: "35px",
          background: "transparent",
          minWidth: "720px",
        },
      }}
    >
      <div className="package">
        <div className="package__head-icon">
          <img src={iconPopupPackage} alt="icon Package" />
        </div>
        <div className="package__header">
          <span>
            <h3 className="package__title">Mua gói</h3>
            <p>
              Xin chào Quý khách. Hãy chọn gói cước Short Video phù hợp với bạn:
            </p>
          </span>
          <img
            className="package__deleteIcon"
            src={DeleteIcon}
            alt="delete icon"
            onClick={() => setOpen(false)}
          />
        </div>
        <div
          className="package_body"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {listPackage?.map((item) => (
            <div
              onClick={() => {
                setItemSelected(item);
                setShowDetail(true);
              }}
              className={`package__box-item ${item.info_package && "is-hot"}`}
            >
              <div className="package__data-item">
                <h3 class="package__data-item-title">Gói đặc biệt</h3>
                <span class="package__data-item-price">6.000đ</span>
                <span class="package__data-item-sub">/ngày</span>
                <div class="package__data-item-note">Gia hạn theo ngày</div>
                {item.info_package ? (
                  <img
                    className="package__hot"
                    src={iconPackageHot}
                    alt="package icon"
                  />
                ) : null}
              </div>
              <div className="package__data-detail">
                <p className="package__data-description">
                  + 01Gb truy cập Internet mỗi ngày; <br/>
                  + Miễn cước data truy cập dịch vụ; <br />
                  + Thuê bao được xem không giới hạn các nội dung trong
                  chuyên trang Short Video của dịch vụ mobiOn trong 01 ngày.
                </p>
              </div>
            </div>
          ))}
        </div>
        <PackageDetailDialog
          open={showDetail}
          setOpen={setShowDetail}
          dataDetail={itemSelected}
        />
      </div>
    </Dialog>
  );
}
