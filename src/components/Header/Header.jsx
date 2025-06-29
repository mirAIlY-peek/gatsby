import React from "react";
import { Link } from "gatsby";
import * as styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <h1>My Blog</h1>
                </Link>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.navLink}>
                        Главная
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
