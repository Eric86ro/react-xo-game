import CONSTANTS from "../../common/constants";
import BoardMetric from "../board-metric/board-metric";
import styles from "./board-footer.module.css";
import React from "react";

const BoardFooter = (props) => {
  const [chosenPlayer, setChosenPlayer] = React.useState(CONSTANTS.PLAYER_X);
  const [statistics, setStatistics] = React.useState({
    playerXWins: 0,
    playerOWins: 0,
    tiedRounds: 0,
  });

  React.useEffect(() => {
    if (props.winPlayer === null) {
      const lsPlayerXWins = localStorage.getItem(
        CONSTANTS.LOCAL_STORAGE.PLAYER_X_WINS
      );
      const lsPlayerOWins = localStorage.getItem(
        CONSTANTS.LOCAL_STORAGE.PLAYER_O_WINS
      );
      const lsTiedRounds = localStorage.getItem(
        CONSTANTS.LOCAL_STORAGE.TIED_ROUNDS
      );
      setStatistics({
        playerXWins: lsPlayerXWins || 0,
        playerOWins: lsPlayerOWins || 0,
        tiedRounds: lsTiedRounds || 0,
      });
    }
  }, [props.winPlayer]);

  React.useEffect(() => {
    const lsChosenPlayer = localStorage.getItem(
      CONSTANTS.LOCAL_STORAGE.PLAYER_TYPE
    );
    setChosenPlayer(lsChosenPlayer);
  }, []);

  return (
    <div className={styles["container"]}>
      <BoardMetric
        background="var(--app-color-1)"
        text={chosenPlayer === CONSTANTS.PLAYER_X ? "X (YOU)" : "X (CPU)"}
        heading={statistics.playerXWins}
      />
      <BoardMetric
        background="var(--background-color-3)"
        text="TIES"
        heading={statistics.tiedRounds}
      />
      <BoardMetric
        background="var(--app-color-3)"
        text={chosenPlayer === CONSTANTS.PLAYER_O ? "O (YOU)" : "O (CPU)"}
        heading={statistics.playerOWins}
      />
    </div>
  );
};

export default BoardFooter;
