import React from "react";
import styles from "./board-item.module.css";
import XOutlineMark from "../../assets/x_outline.svg?react";
import OOutlineMark from "../../assets/o_outline.svg?react";
import XMarkSVG from "../../assets/x.svg?react";
import OMarkSVG from "../../assets/o.svg?react";
import CONSTANTS from "../../common/constants";

const BoardItem = (props) => {
  const [playerType, setPlayerType] = React.useState(CONSTANTS.PLAYER_X);
  const [isHover, setIsHover] = React.useState(false);

  const outlineMark =
    playerType === CONSTANTS.PLAYER_X ? <XOutlineMark /> : <OOutlineMark />;
  const mark =
    props.player === CONSTANTS.PLAYER_X ? <XMarkSVG /> : <OMarkSVG />;

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleClick = () => {
    props.onClick();
    setIsHover(false);
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
    <div
      className={`${styles["container"]} ${
        props.isDisabled ? styles["disabled"] : ""
      }`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover && props.player === null ? outlineMark : null}
      {props.player !== null ? mark : null}
    </div>
  );
};

export default BoardItem;
