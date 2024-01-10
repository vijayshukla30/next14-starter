import { getUsers } from "@/libs/data";
import Image from "next/image";
import { deleteUser } from "@/libs/action";
import styles from "./users.module.css";

const AdminUsers = async () => {
  const users = await getUsers();
  return users.map((user) => (
    <tr key={user._id}>
      <td>
        <div className={styles.user}>
          <Image
            src={user.avatar || "/noavatar.png"}
            alt={user.name}
            width={40}
            height={40}
            className={styles.userImage}
          />
          <span>{user.username}</span>
        </div>
      </td>
      <td>{user.email}</td>
      <td>createat</td>
      <td>{user.role}</td>
      <td>status</td>
      <td>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.view}`}>View</button>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user._id} />
            <button className={`${styles.button} ${styles.delete}`}>
              Delete
            </button>
          </form>
        </div>
      </td>
    </tr>
  ));
};

export default AdminUsers;
