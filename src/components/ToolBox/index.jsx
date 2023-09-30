import BrushTool from "./BrushTool";
import EraserTool from "./EraserTool";


const ToolBox = ({Tool})=>{
    return Tool==='pencil'?<BrushTool/>:Tool==='eraser'?<EraserTool/>:<></>;
}
export default ToolBox;