import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/18273081/pexels-photo-18273081/free-photo-of-scenic-cliff-at-stokksnes-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          incidunt vel ipsam obcaecati libero corporis consectetur aut sunt sint
          ut, iste error asperiores perferendis doloremque. Libero molestiae
          esse aperiam voluptates?
        </p>
        <Link className={styles.link} href="/blog/posts">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
