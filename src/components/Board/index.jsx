import { useEffect, useRef } from "react";
import { useSelector ,useDispatch } from 'react-redux';
import { actionItemClick } from '../../slice/menuSlice';



const Board = ()=>{

    const canvasRef = useRef(null);
    const shouldDraw = useRef(false);

    const DrawHistory = useRef([]);
    const DrawHistoryPointer = useRef(0);



    const dispatch = useDispatch()

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const actionMenuItem = useSelector((state) => state.menu.actionMenuItem)
    const {color,size} = useSelector((state) => state.toolbox[activeMenuItem])


    useEffect(()=>{
        if(!canvasRef.current) return

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');        


        //DOWNLOAD , UNDO and REDO opertion
        if(actionMenuItem === 'download'){
            const URL = canvas.toDataURL();
            const img = document.createElement('a')
            img.href = URL;
            img.download = 'InkSpace.jpg'
            img.click()
        }else if(actionMenuItem === 'undo'){
            if(DrawHistoryPointer.current>0) DrawHistoryPointer.current-=1
            const imgData = DrawHistory.current[DrawHistoryPointer.current]
            context.putImageData(imgData, 0, 0)
        }else if(actionMenuItem == 'redo'){
            if(DrawHistoryPointer.current<DrawHistory.current.length-1) DrawHistoryPointer.current+=1
            const imgData = DrawHistory.current[DrawHistoryPointer.current]
            context.putImageData(imgData, 0, 0)
        }
        dispatch(actionItemClick(null))

    },[actionMenuItem]);



    // Change color and size of brush or eraser
    useEffect(()=>{
        if(!canvasRef.current) return

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');        
        context.strokeStyle = color
        context.lineWidth=size
    },[color,size])



  


    // For Drawing Logic
    useEffect(()=>{
        if(!canvasRef.current) return

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        context.strokeStyle = color
        context.lineWidth=size
        context.lineCap = "round";


        context.fillStyle = '#17191C';
        context.fillRect(0,0,window.innerWidth,window.innerHeight);
        
        // For PC

        const handleMouseDown = (e) => {
            
            shouldDraw.current = true
            context.beginPath()
            let x = e.clientX
            let y = e.clientY
            context.moveTo(x,y)
        }
        const handleMouseMove = (e) => {
            if (!shouldDraw.current) return

            let x = e.clientX
            let y = e.clientY

            context.lineTo(x,y)
            context.stroke()
        }
        const handleMouseUp = (e) => {
            shouldDraw.current = false

            // To store the imgdata
            const imgData = context.getImageData(0,0,canvas.width,canvas.height)
            DrawHistory.current.push(imgData)
            DrawHistoryPointer.current = DrawHistory.current.length - 1;          
        }
        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseup', handleMouseUp)




        // Mobile 
        const Touchstart = (e) => {
            e.preventDefault();
            shouldDraw.current = true
            context.beginPath()
            context.moveTo(e.touches[0].clientX,e.touches[0].clientY)
        }

        const Touchmove = (e) => {
            if (!shouldDraw.current) return
            e.preventDefault();

            context.lineTo(e.touches[0].clientX,e.touches[0].clientY)
            context.stroke()
        }

        const Touchend = (e) => {
            e.preventDefault();
            shouldDraw.current = false

        }

        canvas.addEventListener('touchstart', Touchstart)
        canvas.addEventListener('touchmove', Touchmove)
        canvas.addEventListener('touchend', Touchend)


        return () => {
            canvas.removeEventListener('touchstart', Touchstart)
            canvas.removeEventListener('touchmove', Touchmove)
            canvas.removeEventListener('touchend', Touchend)

            canvas.removeEventListener('mousedown', handleMouseDown)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseup', handleMouseUp)
        }


    },[]);


    

    return(
        
        <canvas className="canvas" ref={canvasRef} width="150" height="150"></canvas>
    );
}

export default Board