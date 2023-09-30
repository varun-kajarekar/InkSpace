import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/index'
import ToolBox from './components/ToolBox'
import Board from './components/Board'

function App() {
  const [Tool ,setTool] = useState('pencil');

  return (
    <div className='overflow-hidden'>
      <Menu setTool={setTool}/>
      <ToolBox Tool={Tool}/>
      <Board/>
    </div>
  )
}

export default App
