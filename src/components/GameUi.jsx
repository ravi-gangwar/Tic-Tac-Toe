import React, { useState } from 'react';
import "./gameui.css"
function GameUi() {
  const [turn, setTurn] = useState('o')

  const [state, setstate] = useState(Array(9))



  return (
    <div className='h-[100vh] w-[100vw] bg-zinc-600 flex flex-col justify-center items-center'>
      <div className='min-h-[70%] min-w-[90%] lg:min-h-[70%] lg:min-w-[50%] md:min-h-[70%] md:min-w-[70%] sm:min-h-[70%] sm:min-w-[90%] relative bg-zinc-800 rounded-md flex flex-col'>
        <div className='min-h-[10%] bg-zinc-700 min-w-[100%] flex justify-around items-center'>
          <div className='h-[4rem] w-[4rem] bg-red-800 rounded-[50%] flex justify-center items-center'>1</div>
          <h1>Ravi</h1>
        </div>
        <div className='min-h-[80%] min-w-[100%] flex flex-col justify-around' >
          <div className='row1 min-h-[30%] min-w-[100%] flex justify-around items-center'>
            <div className='min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg'>
              { turn === null ? "" : turn === 'x' ? <img src="../assets/x.png"/> : <img src="../assets/o.png"/>}
            </div>
            <div className='min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg'></div>
            <div className='min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg'></div>
          </div>
          <div className='row2 min-h-[30%] min-w-[100%] flex justify-around items-center'>
          <div className='min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg'></div>
          <div className='min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg'></div>
          <div className='min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg'></div>
          </div>
          <div className='row3 min-h-[30%] min-w-[100%] flex justify-around items-center'>
          <div className='min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg'></div>
          <div className='min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg'></div>
          <div className='min-h-[60%] min-w-[20%] bg-cyan-50 rounded-lg'></div>
          </div>
        
        </div>
        <div className='min-h-[10%] bg-zinc-700 min-w-[100%] flex flex-row-reverse justify-around items-center'>
          <div className='h-[4rem] w-[4rem] bg-red-800 rounded-[50%] flex justify-center items-center'>1</div>
          <h1>User</h1>
        </div>
      </div>
    </div>
  );
}

export default GameUi;
