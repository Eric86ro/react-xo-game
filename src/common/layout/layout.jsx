import styles from "./layout.module.css";

const Layout = (props) => {
    return (
      <main className={styles["container"]}>
        <div className={styles["alignment"]}>{props.children}</div>
        
      </main>
    );
};

export default Layout;