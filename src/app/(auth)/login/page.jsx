import { handleGithubLogin, login } from "@/libs/action";
import styles from "./login.module.css";

const Login = async () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form action={login} className={styles.form}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button>Login with Credentials</button>
          </form>
          <form className={styles.form} action={handleGithubLogin}>
            <button>Login with Github</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
