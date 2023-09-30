
const BrushTool = () => {
    return (
        <div className="absolute left-1/2 bottom-[72px] translate-x-[-50%]  bg-white px-5 py-2.5 rounded-md h-auto w-[297.5px]">
            <div className="flex flex-wrap mb-5">

                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-yellow-500/50 mx-1 hover:bg-yellow-500"></div>
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-white hover:bg-white mx-1"></div>
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-red-500/50 hover:bg-red-500 mx-1"></div>
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-green-500/50 hover:bg-green-500 mx-1"></div>
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-purple-500/50 hover:bg-purple-500 mx-1"></div>
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-pink-500/50 hover:bg-pink-500 mx-1"></div>
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-blue-500/50 hover:bg-blue-500 mx-1"></div>
            </div>
            <span className="block text-center font-bold">Brush Size</span>
            <input className="w-full h-1" type="range" min="0" max="100" />
        </div>
    );
}
export default BrushTool;