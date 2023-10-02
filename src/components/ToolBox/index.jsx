import BrushTool from "./BrushTool";
import EraserTool from "./EraserTool";
import { useSelector } from 'react-redux'


const ToolBox = ()=>{
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)

    return activeMenuItem==='pencil'?<BrushTool/>:activeMenuItem==='eraser'?<EraserTool/>:<></>;
}
export default ToolBox;