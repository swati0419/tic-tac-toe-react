import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const ResetButton = () => {

  const { resetGame } = useContext(GameContext);

  return (
<button
  onClick={resetGame}
  className="mt-6 px-6 py-2 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:scale-105"
>
  Reset Game
</button>
  );
};

export default ResetButton;