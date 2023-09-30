import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/index'
import ToolBox from './components/ToolBox'

function App() {
  const [Tool ,setTool] = useState('pencil');

  return (
    <>
      <Menu setTool={setTool}/>
      <ToolBox Tool={Tool}/>
    </>
  )
}

export default App
