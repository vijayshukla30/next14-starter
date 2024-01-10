// import { Suspense } from "react";
// import styles from "./admin.module.css";
// import AdminPosts from "@/components/admin/posts/posts";
// import AdminPostForm from "@/components/admin/postForm/postForm";
// import AdminUsers from "@/components/admin/users/users";
// import AdminUserForm from "@/components/admin/userForm/userForm";
import { auth } from "@/libs/auth";
const Admin = async () => {
  const session = await auth();
  console.log("session", session);
  return <div>Admin</div>;
};

export default Admin;
