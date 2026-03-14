import { useContext, useState } from 'react'
import './App.css'
import Board from './components/Board.jsx'
import Status from './components/Status.jsx'
import Reset from './components/Reset.jsx'
import ScoreBoard from './components/ScoreBoard.jsx'
import Confetti from 'react-confetti';
import { GameContext } from './context/GameContext.jsx';

function App() {
  const {winner} = useContext(GameContext);
  console.log(winner);
  return (
    <>
<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white">{winner && <Confetti numberOfPieces={400} recycle={false}/>}
    <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
      Tic Tac Toe
      </h1>
      <ScoreBoard />
      <Board />
      <Status />
      <Reset />
    </div>
    </>
  )
}

export default App
