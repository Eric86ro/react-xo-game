import Button from "../../common/button/button";
import Logo from "../../common/logo/logo";
import MenuPick from "../menu-pick/menu-pick";
import styles from "./menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles["container"]}>
      <Logo />
      <MenuPick />
      <Link to="/board">
        <Button variant={"secondary"}>NEW GAME (VS CPU)</Button>
      </Link>
    </div>
  );
};

export default Menu;
