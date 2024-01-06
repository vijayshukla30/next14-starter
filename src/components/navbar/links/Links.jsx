"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          isAdmin ? (
            <>
              <NavLink item={{ title: "Admin", path: "/admin" }} />
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <button>Logout</button>
          )
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Menu
      </button>
      {isOpen && (
        <div className={styles.mobileLinks}>
          {links.map((item) => (
            <NavLink item={item} key={item.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
