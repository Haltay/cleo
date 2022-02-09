import React from "react";

// import imageTop from "../../../assets/info/IMG_20201112_084047.jpg";
import styles from "./info.module.css";

import infoData from "./infoData";
import InfoCard from "./infoCard";

const Info = () => {
  return (
    <div className={styles.info}>
      <h1>Cleo Chilminding Information</h1>

      <div className={styles.card}>
        {infoData.map((info) => (
          <InfoCard
            key={info.title}           
            title={info.title}
            content={info.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
