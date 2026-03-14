import {useContext} from "react";
import {GameContext} from "../context/GameContext.jsx";
import Square from "./Square.jsx";

const Board = () => {
  const {board} = useContext(GameContext);
    return (
   <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
  <div className="grid grid-cols-3 gap-3">
    {board.map((value, index) => (
      <Square key={index} value={value} index={index}/>
    ))}
  </div>
</div>
    );
};

export default Board;