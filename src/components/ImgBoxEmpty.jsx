import imgEmpty from "../assets/img/empty-esport.svg";

function ImgBoxEmpty({ text = "" }) {
  return (
    <div className="box-empty">
      <img className="box-empty__img" src={imgEmpty} />
      <div className="box-empty__text">{text}</div>
    </div>
  );
}

export default ImgBoxEmpty;
