

const ToolBox = ()=>{
    return(
        <div className="absolute top-1/2 translate-y-[-50%]  bg-white ml-10 px-5 py-2.5 rounded-md h-40 w-56">
            <span className="block text-center font-bold mb-1">Stroke Color</span>
            <div className="flex flex-wrap mb-5">
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-yellow-500/50 mx-1 hover:bg-yellow-500"></div>
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-white hover:bg-white mx-1"></div>
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-red-500/50 hover:bg-red-500 mx-1"></div>
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-green-500/50 hover:bg-green-500 mx-1"></div>
                <div className="h-7 w-7 rounded-md cursor-pointer border-2 border-slate-400 hover:border-black bg-purple-500/50 hover:bg-purple-500 mx-1"></div>
            </div>
            <span className="block text-center font-bold">Brush Size</span>
            <input className="w-full h-2" type="range" min="0" max="10" />
        </div>

        // <div className="absolute top-1/2 translate-y-[-50%]  bg-white ml-10 px-5 py-2.5 rounded-md h-auto w-56">
        //     <span className="block text-center font-bold">Brush Size</span>
        //     <input className="w-full h-2 mb-5" type="range" min="0" max="10" />
        // </div>
    );
}
export default ToolBox;