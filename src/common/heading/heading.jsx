import styles from "./heading.module.css";
import React from "react";

const Heading = (props) => {
  const size = React.useMemo(() => {
    switch (props.size) {
      case "xs":
        return "size-xs";
      case "sm":
        return "size-sm";
      case "md":
        return "size-md";
      case "lg":
        return "size-lg";
      default:
        return "size-lg";
    }
  }, [props.size]);

  return (
    <h1
      style={{ color: props.color }}
      className={`${styles["container"]} ${styles[size]}`}
    >
      {props.children}
    </h1>
  );
};

export default Heading;
