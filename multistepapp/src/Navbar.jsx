import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* 'Link' serves as a '<a>' tag in a regular javascript navbar while the 'to' in link is usef in place of 'href' to direct a web browser which web pag to open */}
      <div className={styles.navbar}>
        <Link to="/"> Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
