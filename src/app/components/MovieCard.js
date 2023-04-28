import React from "react";
import styles from "@/app/styles/common.module.css";

const MovieCard = ({ curElem }) => {
  const { id, type, title, synopsis } = curElem.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={curElem.jawSummary.backgroundImage.url}
            alt={title}
            width={250}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCard;
