import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import DeleteIcon from "../assets/img/DeleteIcon.svg";
import iconPopupPackage from "../assets/img/iconPopupPackage.svg";
import { Zoom } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom in={true} ref={ref} {...props} />;
});

export default function PackageDetailDialog({ open, setOpen, dataDetail }) {
  const handleClose = () => {
    setOpen(false);
  };
  const message =
    dataDetail &&
    `Quý khách vui lòng gửi yêu cầu đăng ký DV Short Video mobiOn gói cước ${
      dataDetail.name
    } (<span class="font-weight-bold">${
      dataDetail.fee
    }đ</span>/${dataDetail?.cycle?.toLowerCase()}).Để xác nhận đăng ký và gia hạn DV, soạn <span class="font-weight-bold text-danger">${
      dataDetail.command
    }</span> <span>gửi</span> <span class="font-weight-bold text-danger">  ${
      dataDetail.shortCode
    }
	</span> Chi tiết soạn <span class="font-weight-bold">HD</span> gửi <span class="font-weight-bold">9278</span> hoặc LH <span class="font-weight-bold">${
    dataDetail.serviceId
  }</span>(200đ/phút).`;
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          width: "550px",
          background: "#13151f",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "24px",
        },
      }}
    >
      <div className="package">
        <div className="package__header">
          <span>
            <h3 className="package__title">Thông báo</h3>
          </span>
        </div>
        <div className="package__body">
          <p
            className="package__data-description"
            dangerouslySetInnerHTML={{ __html: message }}
          ></p>
          <button onClick={handleClose} className="package__btnClose ">
            Đã hiểu
          </button>
        </div>
      </div>
    </Dialog>
  );
}
