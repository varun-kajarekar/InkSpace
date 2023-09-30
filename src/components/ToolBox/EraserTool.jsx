

const EraserTool = () => {
    return (
        <div className="absolute left-1/2 bottom-[72px] translate-x-[-50%]  bg-white px-5 py-2.5 rounded-md h-auto w-[297.5px]">            
        <span className="block text-center font-bold">Brush Size</span>
            <input className="w-full h-1 " type="range" min="0" max="100" />
        </div>
    );
}
export default EraserTool;