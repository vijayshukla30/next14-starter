import { getUsers } from "@/libs/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/libs/action";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user._id} className={styles.user}>
          <div className={styles.detail}>
            <Image
              src={user.avatar || "/noavatar.png"}
              alt={user.name}
              width={50}
              height={50}
            />
            <span className={styles.title}>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user._id} />
            <button className={styles.deleteBtn}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
