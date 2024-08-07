import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import { Comme } from "next/font/google";
import Comments from "@/components/comments/Comments";
import Menu from "@/components/Menu/Menu";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
                <span className={styles.username}>Nimrah sohail</span>
                <span className={styles.date}>5.08.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description
            }>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur praesentium voluptatum officia doloribus, porro nesciunt est laborum nihil aliquam inventore facilis minima exercitationem?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur praesentium voluptatum officia doloribus, porro nesciunt est laborum nihil aliquam inventore facilis minima exercitationem?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur praesentium voluptatum officia doloribus, porro nesciunt est laborum nihil aliquam inventore facilis minima exercitationem?</p>
            </div>
            <div className={styles.comment}>
                <Comments/>
            </div>
        </div>
        <Menu/>
      </div>
    </div>
  );
};

export default SinglePage;
