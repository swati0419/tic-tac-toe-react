import { createContext, useState} from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [winningCombination, setWinningCombination] = useState([]);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWin = (newBoard) => {
    let winnerFound = false;
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        setWinningCombination(pattern);
        winnerFound = true;
        if (newBoard[a] === "X") {
          setXScore((prev) => prev + 1);
        } else {
          setOScore((prev) => prev + 1);
        }
        }
    }
    if (!winnerFound && newBoard.every((cell) => cell)) {
          setIsDraw(true);
        }
    };
    const makeMove = (index) => {
        if (board[index] || winner || isDraw) return;
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        checkWin(newBoard);
        if (!winner && !isDraw){
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
    };
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
        setWinner(null);
        setIsDraw(false);
        setWinningCombination([]);
    };  
    return (
        <GameContext.Provider
        value={{
            board,
            currentPlayer,
            winner,
            isDraw,
            winningCombination,
            xScore,
            oScore,
            makeMove,
            resetGame
        }}>
            {children}
        </GameContext.Provider>
    );  
};