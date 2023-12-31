import { useDispatch,useSelector } from 'react-redux';
import { changecolor , changeBrushSize } from '../../slice/toolboxSlice'
import { COLORS } from '../../constant.js'


const BrushTool = () => {

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const {color,size} = useSelector((state) => state.toolbox[activeMenuItem])
    
    const dispatch = useDispatch()

    

    const updatecolor = (newColor)=>{
        dispatch(changecolor({item:activeMenuItem,color:newColor}))
    }

    const updateBrushSize = (e)=>{
        dispatch(changeBrushSize({item:activeMenuItem,size:e.target.value}))
    }

    return (
        <div className="absolute left-1/2 bottom-[72px] translate-x-[-50%]  bg-white px-5 py-2.5 rounded-md h-auto w-[297.5px]">
            <div className="flex flex-wrap mb-5 justify-between">
                {/* i dont know why this is not working */}
                {/* {
                    COLORS.map((Tempcolor)=>{
                        return <div className={`h-7 w-7 rounded-md cursor-pointer border-2 hover:border-black ${color===Tempcolor?`bg-${Tempcolor}-500 border-black`:`bg-${Tempcolor}-500/50 border-slate-300`}  mx-1 hover:bg-${Tempcolor}-500`} onClick={()=>updatecolor(Tempcolor)} key={Tempcolor}/>
                    })
                } */}
                <div className={`h-7 w-7 rounded-md cursor-pointer border-2 hover:border-black ${color==='white'?`bg-white border-black`:`bg-white border-slate-300`}   hover:bg-white`} onClick={()=>updatecolor('white')}/>
                <div className={`h-7 w-7 rounded-md cursor-pointer border-2 hover:border-black ${color==='yellow'?`bg-yellow-500 border-black`:`bg-yellow-500/50 border-slate-300`}  hover:bg-yellow-500`} onClick={()=>updatecolor('yellow')}/>
                <div className={`h-7 w-7 rounded-md cursor-pointer border-2 hover:border-black ${color==='pink'?`bg-pink-500 border-black`:`bg-pink-500/50 border-slate-300`}   hover:bg-pink-500`} onClick={()=>updatecolor('pink')}/>
                <div className={`h-7 w-7 rounded-md cursor-pointer border-2 hover:border-black ${color==='red'?`bg-red-500 border-black`:`bg-red-500/50 border-slate-300`}  hover:bg-red-500`} onClick={()=>updatecolor('red')}/>
                <div className={`h-7 w-7 rounded-md cursor-pointer border-2 hover:border-black ${color==='green'?`bg-green-500 border-black`:`bg-green-500/50 border-slate-300`}  hover:bg-green-500`} onClick={()=>updatecolor('green')}/>
                <div className={`h-7 w-7 rounded-md cursor-pointer border-2 hover:border-black ${color==='blue'?`bg-blue-500 border-black`:`bg-blue-500/50 border-slate-300`}  hover:bg-blue-500`} onClick={()=>updatecolor('blue')}/>
                <div className={`h-7 w-7 rounded-md cursor-pointer border-2 hover:border-black ${color==='purple'?`bg-purple-500 border-black`:`bg-purple-500/50 border-slate-300`}  hover:bg-purple-500`} onClick={()=>updatecolor('purple')}/>


            </div>
                <span className="block text-center font-bold">Brush Size</span>
            <input className="w-full h-1" type="range" step={1} value={size} min="0" max="50"  onChange={updateBrushSize} />
        </div>

);
}
export default BrushTool;

