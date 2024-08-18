import CONSTANTS from "../common/constants";
import Layout from "../common/layout/layout";
import BoardFooter from "../components/board-footer/board-footer";
import BoardGrid from "../components/board-grid/board-grid";
import BoardHeader from "../components/board-header/board-header";
import WinLoseDialog from "../components/win-lose-dialog/win-lose-dialog";
import React from "react";

const BoardPage = () => {
  const [board, setBoard] = React.useState(CONSTANTS.BOARD_GRID);
  const [winPlayer, setWinPlayer] = React.useState(null);
  const [player, setPlayer] = React.useState(CONSTANTS.PLAYER_X);

  return (
    <Layout>
      <BoardHeader player={player} setBoard={setBoard}/>
      <BoardGrid
        board={board}
        setBoard={setBoard}
        winPlayer={winPlayer}
        setWinPlayer={setWinPlayer}
        player={player}
        setPlayer={setPlayer}
      />
      <BoardFooter winPlayer={winPlayer}/>
      <WinLoseDialog
        board={board}
        setBoard={setBoard}
        setWinPlayer={setWinPlayer}
        hasXWon={winPlayer === CONSTANTS.PLAYER_X}
        isOpen={Boolean(winPlayer)}
      />
    </Layout>
  );
};

export default BoardPage;
