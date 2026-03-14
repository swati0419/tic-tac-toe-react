import {useContext} from "react";
import {GameContext} from "../context/GameContext.jsx";

const Square = ({value, index}) => {
    const {makeMove, winningCombination} = useContext(GameContext);
    const isWinningSquare = winningCombination.includes(index);
    const textColorClass = value === 'X' ? 'text-blue-400 drop-shadow-lg' : 'text-pink-400 drop-shadow-lg';

    return (    
        <div onClick={() => makeMove(index)} className={`w-24 h-24 bg-slate-800 rounded-xl flex items-center justify-center text-4xl font-bold cursor-pointer hover:scale-105 transition ${isWinningSquare ? 'bg-green-500 text-black scale-105' : ''} ${textColorClass}`}>
            {value}
        </div>
    );
}

export default Square;