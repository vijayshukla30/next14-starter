import React from "react";
import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/libs/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Code Dexterous
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
