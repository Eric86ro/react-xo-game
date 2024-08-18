import styles from "./button.module.css";
import React from "react";

const Button = (props) => {
  const size = React.useMemo(() => {
    switch (props.size) {
      case "lg":
        return "size-lg";
      case "md":
        return "size-md";
      default:
        return "size-lg";
    }
  }, [props.size]);

  const variant = React.useMemo(() => {
    switch (props.variant) {
      case "primary":
        return "variant-primary";
      case "secondary":
        return "variant-secondary";
      case "tertiary":
        return "variant-tertiary";
      case "quaternary":
        return "variant-quaternary";
      default:
        return "variant-primary";
    }
  }, [props.variant]);

  return (
    <button
      className={`${styles["container"]} ${styles[size]} ${styles[variant]} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
