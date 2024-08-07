import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>11.02.2023</span>
            <span className={styles.catgory}>CULTURE</span>
        </div>
        <Link href='/'>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, similique est?</h1>

        </Link>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque quaerat nulla excepturi explicabo assumenda sed? Deleniti reprehenderit accusamus enim facere ratione numquam consectetur debitis vitae. Similique eum totam iure ducimus quia cumque error, dolorem earum nulla tempora, veritatis culpa molestiae illum dolor. Eaque!</p>
        <Link href="/" className={styles.link} > Read More</Link>
      </div>
    </div>
  );
};

export default Card;
