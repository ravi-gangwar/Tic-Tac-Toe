import React from 'react'
import GameUi from './components/GameUi'
import ModePage from './page/ModePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ModePage/>}/>
      <Route path='/single-player' element={<GameUi/>}/>
      <Route path='/multi-player' element={<GameUi/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App