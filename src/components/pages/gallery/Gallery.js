import { useState } from "react";

import CloseIcon from '@mui/icons-material/Close';

import "./gallery.css";
import dataImg from "./GalleryImage";

const Gallery = () => {

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div className="gallery">
      <h1>Gallery Cleo Chilminding</h1>

      <div className={model ? "model open": "model"}>
        <img src={tempImgSrc} alt=''/>
        <CloseIcon onClick={()=> setModel(false)} />
      </div>

      <div className="gallery__image">
        {dataImg.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="" />
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Gallery;
