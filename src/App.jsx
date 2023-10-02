import './App.css'
import Menu from './components/Menu/index'
import ToolBox from './components/ToolBox'
import Board from './components/Board'
import Header from './components/Header'

function App() {

  
  return (
    <div className='overflow-hidden'>
      <Header/>
      <Menu/>
      <ToolBox/>
      <Board/>
    </div>
  )
}

export default App
