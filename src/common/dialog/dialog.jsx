import styles from "./dialog.module.css";

const Dialog = (props) => {
  return props.isOpen ? (
    <>
      <div className={styles["overlay"]} />
      <div className={styles["container"]}>{props.children}</div>
    </>
  ) : null;
};

export default Dialog;
