import Image from "next/image";
import styles from "./page.module.css";

const Post = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/18273081/pexels-photo-18273081/free-photo-of-scenic-cliff-at-stokksnes-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/18273081/pexels-photo-18273081/free-photo-of-scenic-cliff-at-stokksnes-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Author</div>
            <div className={styles.detailValue}>Vijay Shukla</div>
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>01.01.2024</div>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          amet maxime veritatis eos debitis veniam quidem aut obcaecati corrupti
          facilis, quae dignissimos officiis voluptas, nobis nulla quia
          inventore voluptatum quos.
        </div>
      </div>
    </div>
  );
};

export default Post;
