import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import CustButton from "../../Components/Button";

const TicTacToe = () => {
  const [cell, setCell] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [currInd, setCurrInd] = useState(0);

  useEffect(() => {
    const findWinner = calculateWinner(currInd);
    if (findWinner) {
      setWinner(findWinner);
    } else {
      if (!cell.includes("")) {
        setWinner("Match Drawn, Click reset to restart the game");
      }
    }
  }, [cell]);

  const addValues = (i: number) => {
    if (winner) return;
    const updatedCell = [...cell];
    updatedCell[i] = currentPlayer;
    setCurrInd(i);
    setCell(updatedCell);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetBtn = () => {
    setCell(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner("");
  };

  const checkRowsAndCols = (
    start: number,
    step: number,
    n: number,
    player: string
  ) => {
    for (let i = 0; i < n; i++) {
      if (cell[start + i * step] !== player) {
        return false;
      }
    }

    return true;
  };

  const calculateWinner = (i: number) => {
    const n = Math.sqrt(cell.length);
    const player = cell[i];
    if (!player) return null;

    const row = Math.floor(i / n);
    const rowStart = row * n;
    const col = i % n;
    const colStart = col;

    if (checkRowsAndCols(rowStart, 1, n, player)) {
      return player;
    }
    if (checkRowsAndCols(colStart, n, n, player)) {
      return player;
    }
    if (row === col) {
      if (checkRowsAndCols(0, n + 1, n, player)) {
        return player;
      }
    }
    if (row + col === n - 1) {
      if (checkRowsAndCols(n - 1, n - 1, n, player)) {
        return player;
      }
    }
  };

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      {winner ? (
        <h3>{winner.includes("Drawn") ? winner : `${winner} wins`}</h3>
      ) : null}
      <CustButton btntxt="Reset" onClick={resetBtn} />
      <div className={styles.mainGameBox}>
        {cell.map((box: string, i: number) => (
          <div key={i} className={styles.cellBox} onClick={() => addValues(i)}>
            {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
