import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/admin/posts/posts";
import AdminPostForm from "@/components/admin/postForm/postForm";
import AdminUsers from "@/components/admin/users/users";
import AdminUserForm from "@/components/admin/userForm/userForm";
import { auth } from "@/libs/auth";
const Admin = async () => {
  const session = await auth();
  console.log("session", session);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default Admin;
