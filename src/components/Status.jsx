import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Status = () => {

  const { currentPlayer, winner, isDraw } = useContext(GameContext);

  if(winner){
    return <h2 className={`mt-6 px-6 py-3 text-xl font-bold rounded-xl shadow-lg
${winner === "X" ? "bg-blue-500 text-white" : "bg-pink-500 text-white"}`}>
  🎉 Player {winner} Wins!</h2>
  }

  if(isDraw){
    return <h2 className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold text-xl rounded-xl shadow-lg">
        🤝 It's a Draw!</h2>
  }

  return <h2 className="mt-6 p-4 bg-slate-800 rounded-lg shadow-lg text-lg">Player {currentPlayer} Turn</h2>
}

export default Status;