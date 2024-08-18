import Logo from "../../common/logo/logo";
import Button from "../../common/button/button";
import RestartSVG from "../../assets/restart.svg?react";
import styles from "./board-header.module.css";
import BoardTurn from "../board-turn/board-turn";
import CONSTANTS from "../../common/constants";

const BoardHeader = (props) => {
  const handleClick = () => {
    props.setBoard(CONSTANTS.BOARD_GRID);
  };

  return (
    <div className={styles["container"]}>
      <Logo className={styles["logo"]} />
      <BoardTurn isXTurn={props.player === CONSTANTS.PLAYER_X} />
      <Button
        className={styles["button"]}
        variant="tertiary"
        size="md"
        onClick={handleClick}
      >
        <RestartSVG />
      </Button>
    </div>
  );
};

export default BoardHeader;
