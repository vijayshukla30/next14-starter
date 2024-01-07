import Image from "next/image";
import styles from "./page.module.css";
import { getPost } from "@/libs/data";
import PostUser from "@/components/postUser/postUser";

const Post = async ({ params }) => {
  const post = await getPost(params.slug);
  if (!post) {
    return;
  }
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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <PostUser userId={post.userId} />
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>01.01.2024</div>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default Post;
