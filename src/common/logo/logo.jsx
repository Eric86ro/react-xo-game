import styles from "./logo.module.css";

const Logo = (props) => {
    return (
        <div className={`${styles["container"]} ${props.className}`}>
            <img src="/logo.svg" alt="XO Game - Logo" />
        </div>
    );
};

export default Logo;