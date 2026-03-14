import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const ScoreBoard = () => {

  const { xScore, oScore } = useContext(GameContext);

  return (
    <div className="flex gap-10 text-xl mt-4">

      <h3 className="text-blue-400">
        X : {xScore}
      </h3>

      <h3 className="text-pink-400">
        O : {oScore}
      </h3>

    </div>
  );
};

export default ScoreBoard;