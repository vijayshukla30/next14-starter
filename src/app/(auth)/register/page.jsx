import { register } from "@/libs/action";
import styles from "./register.module.css";
const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
