import React, { useEffect, useState } from 'react';
import './gameui.css'; // Import CSS file for styling
import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa";
function GameUi() {
  // State for current turn ('X' or 'O')
  const [turn, setTurn] = useState('O'); // Initial turn is 'O'
  // State to hold the game board state
  const [state, setState] = useState(Array(9).fill(null)); // Initialize game board with null values

  // Function to handle cell click
  const handleCellClick = (index) => {
    // Make sure the cell is empty before placing the symbol
    if (!state[index]) {
      // Create a copy of the current state array
      const newState = [...state];
      // Set the cell value to the current turn ('X' or 'O')
      newState[index] = turn;
      // Update the game board state
      setState(newState);
      // Toggle the turn for the next move
      setTurn(turn === 'X' ? 'O' : 'X');

    }
  };

  useEffect(()=> {
    winner(state);
  }, [state])

  // winner logic here
  const winner = (state)=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        alert(`Winner is:${state[a]}`)
        resetState();
        return;
      }
    }

    if (state.every(cell => cell)) {
      alert('Draw');
      resetState();
    }
  }



  const resetState = () => {
    setState(Array(9).fill(null))
  }

  return (
    <div className='h-screen w-screen bg-zinc-600 flex flex-col justify-center gap-5 items-center'>
      <h1 className='text-2xl lg:text-5xl sm:text-xl md:text-3xl text-white'>Tic Tac Toe</h1>
      <div className='game-board min-h-[70%] min-w-[90%] lg:min-h-[70%] lg:min-w-[50%] md:min-h-[70%] md:min-w-[70%] sm:min-h-[70%] sm:min-w-[90%] relative bg-zinc-800 rounded-md flex flex-col'>
        <div className='header min-h-[10%] bg-zinc-700 min-w-[100%] flex justify-around items-center'>
          <div className='player-indicator h-[4rem] w-[4rem] bg-red-800 rounded-[50%] flex justify-center items-center'>{turn}</div>
          <h1 className='text-5xl text-white'>Ravi</h1>
        </div>
        <div className='game-grid min-h-[80%] min-w-[100%] flex flex-col justify-around'>
          <div className='row min-h-[30%] min-w-[100%] flex justify-around items-center'>
            {state.slice(0, 3).map((cell, index) => (
              <div key={index} className='cell min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg flex justify-center items-center cursor-pointer' onClick={() => handleCellClick(index)}>
                {cell === 'X' ? <ImCross className='text-4xl'/> : cell === 'O' ? <FaRegCircle className='text-4xl'/> : null}
              </div>
            ))}
          </div>
          <div className='row min-h-[30%] min-w-[100%] flex justify-around items-center'>
            {state.slice(3, 6).map((cell, index) => (
              <div key={index + 3} className='cell min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg flex justify-center items-center cursor-pointer' onClick={() => handleCellClick(index + 3)}>
                {cell === 'X' ? <ImCross className='text-4xl'/> : cell === 'O' ? <FaRegCircle className='text-4xl'/> : null}
              </div>
            ))}
          </div>
          <div className='row min-h-[30%] min-w-[100%] flex justify-around items-center'>
            {state.slice(6).map((cell, index) => (
              <div key={index + 6} className='cell min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg flex justify-center items-center cursor-pointer' onClick={() => handleCellClick(index + 6)}>
                {cell === 'X' ? <ImCross className='text-4xl'/> : cell === 'O' ? <FaRegCircle className='text-4xl'/> : null}
              </div>
            ))}
          </div>
        </div>
        <div className='footer min-h-[10%] bg-zinc-700 min-w-[100%] flex flex-row-reverse justify-around items-center'>
          <div className='player-indicator h-[4rem] w-[4rem] bg-red-800 rounded-[50%] flex justify-center items-center'>1</div>
          <h1 className='text-5xl text-white'>You</h1>
        </div>
      </div>
      <button className="bg-zinc-300 hover:bg-zinc-700 text-black hover:text-white font-bold py-2 px-4 rounded" onClick={resetState}>Reset</button>

    </div>
  );
}

export default GameUi;
