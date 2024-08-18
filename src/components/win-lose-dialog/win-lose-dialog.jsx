import Heading from "../../common/heading/heading";
import styles from "./win-lose-dialog.module.css";
import XMarkSVG from "../../assets/x.svg?react";
import OMarkSVG from "../../assets/o.svg?react";
import Button from "../../common/button/button";
import Dialog from "../../common/dialog/dialog";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../common/constants";

const setStatisticsInLocalStorage = (key) => {
  const lsPlayerWins = localStorage.getItem(key) || "0";
  localStorage.setItem(key, String(Number(lsPlayerWins) + 1));
};

const WinLoseDialog = (props) => {
  const navigate = useNavigate();

  const handleQuitClick = () => {
    // Go the main menu page
    navigate("/");
    // do other stuff

    // Remove statistics from local storage
    localStorage.removeItem(CONSTANTS.LOCAL_STORAGE.PLAYER_O_WINS);
    localStorage.removeItem(CONSTANTS.LOCAL_STORAGE.PLAYER_X_WINS);
    localStorage.removeItem(CONSTANTS.LOCAL_STORAGE.TIED_ROUNDS);
  };

  const handleNextRoundClick = () => {
    // Reset the board state to the initial grid array
    props.setBoard(CONSTANTS.BOARD_GRID);

    // Reset the player who win to default (to close the dialog)
    props.setWinPlayer(null);

    // Set the round statistics
    if (props.hasXWon) {
      setStatisticsInLocalStorage(CONSTANTS.LOCAL_STORAGE.PLAYER_X_WINS);
    } else {
      setStatisticsInLocalStorage(CONSTANTS.LOCAL_STORAGE.PLAYER_O_WINS);
    }
  };

  return (
    <Dialog isOpen={props.isOpen}>
      <div className={styles["container"]}>
        <Heading size="xs" color="var(--text-color)">
          {props.hasXWon ? "YOU WON" : "OH NO, YOU LOST..."}
        </Heading>
        <div className={styles["container__main"]}>
          {props.hasXWon ? <XMarkSVG /> : <OMarkSVG />}
          <Heading
            color={props.hasXWon ? "var(--app-color-2)" : "var(--app-color-4)"}
          >
            TAKES THE ROUND
          </Heading>
        </div>
        <div className={styles["container__buttons"]}>
          <Button size="md" variant="tertiary" onClick={handleQuitClick}>
            QUIT
          </Button>
          <Button size="md" onClick={handleNextRoundClick}>
            NEXT ROUND
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
export default WinLoseDialog;
