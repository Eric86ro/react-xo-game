import styles from "./board-turn.module.css";
import XMarkSVG from "../../assets/x.svg?react";
import OMarkSVG from "../../assets/o.svg?react";
import Heading from "../../common/heading/heading";

const BoardTurn = (props) => {
  return (
    <div className={styles["container"]}>
      {props.isXTurn ? (
        <XMarkSVG className={styles["mark-svg"]} />
      ) : (
        <OMarkSVG className={styles["mark-svg"]} />
      )}
      <Heading size="xs" color="var(--text-color)">
        TURN
      </Heading>
    </div>
  );
};

export default BoardTurn;
