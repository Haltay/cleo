import React from "react";

import image1 from "../../../assets/gallery/54356091_268044324126929_7880109349899599872_n.jpg";
import image2 from "../../../assets/gallery/54516419_393507164538410_4446565876178616320_n.jpg";
import image3 from "../../../assets/gallery/54518998_376326252952952_7854661187634462720_n.jpg";

import styles from "./gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <h1>Gallery Cleo Chilminding</h1>
      <div className={styles.gallery__image}>
        <img src={image1} alt="cleochildminding-tree" />
        <img src={image2} alt="cleochildminding-tree" />
        <img src={image3} alt="cleochildminding-tree" />
        <img src={image1} alt="cleochildminding-tree" />
        <img src={image1} alt="cleochildminding-tree" />
        <img src={image2} alt="cleochildminding-tree" />
        <img src={image3} alt="cleochildminding-tree" />
        <img src={image1} alt="cleochildminding-tree" />
      </div>
    </div>
  );
};

export default Gallery;
