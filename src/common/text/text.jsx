import styles from "./text.module.css";

const Text = (props) => {
  return (
    <p className={styles["container"]} style={{ color: props.color }}>
      {props.children}
    </p>
  );
};

export default Text;
