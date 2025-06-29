import React from "react";
import Header from "../Header/Header";
import * as styles from "./Layout.module.css";
import "../../style/global.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 My Static Blog.</p>
            </footer>
        </div>
    );
};

export default Layout;
