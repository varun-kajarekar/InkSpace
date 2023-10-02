import './App.css'
import Menu from './components/Menu/index'
import ToolBox from './components/ToolBox'
import Board from './components/Board'

function App() {
  return (
    <div className='overflow-hidden'>
      <Menu/>
      <ToolBox/>
      <Board/>
    </div>
  )
}

export default App
