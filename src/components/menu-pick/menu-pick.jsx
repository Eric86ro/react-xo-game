import Button from "../../common/button/button";
import Heading from "../../common/heading/heading";
import styles from "./menu-pick.module.css";
import Text from "../../common/text/text";
import XMark from "../../assets/x.svg?react";
import OMark from "../../assets/o.svg?react";
import CONSTANTS from "../../common/constants";
import React from "react";

const MenuPick = () => {
  const [playerType, setPlayerType] = React.useState(CONSTANTS.PLAYER_X);

  const variantX =
    playerType === CONSTANTS.PLAYER_X ? "tertiary" : "quaternary";

  const variantO =
    playerType === CONSTANTS.PLAYER_O ? "tertiary" : "quaternary";

  const markXClassName =
    playerType === CONSTANTS.PLAYER_X
      ? styles["mark-unselected"]
      : styles["mark-selected"];

  const markOClassName =
    playerType === CONSTANTS.PLAYER_O
      ? styles["mark-unselected"]
      : styles["mark-selected"];

  const handleClick = (newPlayerType) => {
    setPlayerType(newPlayerType);
    localStorage.setItem(CONSTANTS.LOCAL_STORAGE.PLAYER_TYPE, newPlayerType);
  };

  React.useEffect(() => {
    const lsPlayerType = localStorage.getItem(
      CONSTANTS.LOCAL_STORAGE.PLAYER_TYPE
    );
    if (lsPlayerType) {
      setPlayerType(lsPlayerType);
    }
  }, []);

  return (
    <div className={styles["container"]}>
      <Heading size={"xs"} color={"var(--text-color)"}>
        PICK PLAYER 1’S MARK
      </Heading>
      <div className={styles["pick-container"]}>
        <Button
          size={"md"}
          variant={variantX}
          onClick={() => handleClick(CONSTANTS.PLAYER_X)}
        >
          <XMark className={markXClassName} />
        </Button>
        <Button
          size={"md"}
          variant={variantO}
          onClick={() => handleClick(CONSTANTS.PLAYER_O)}
        >
          <OMark className={markOClassName} />
        </Button>
      </div>
      <Text>REMEMBER: X GOES FIRST</Text>
    </div>
  );
};

export default MenuPick;
