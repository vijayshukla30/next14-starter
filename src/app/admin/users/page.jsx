import Search from "@/components/admin/search/search";
import styles from "./users.module.css";
import AdminUsers from "@/components/admin/users/users";
import Link from "next/link";
const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search User..." />
        <Link href="/admin/users/add" className={styles.addButton}>
          Add New
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Create At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <AdminUsers />
        </tbody>
      </table>
    </div>
  );
};

export default Users;
