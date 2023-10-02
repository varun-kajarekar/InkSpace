import { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';


const Board = ()=>{

    const canvasRef = useRef(null);
    const shouldDraw = useRef(false);

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const {color,size} = useSelector((state) => state.toolbox[activeMenuItem])

    useEffect(()=>{
        if(!canvasRef.current) return

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');        
        context.strokeStyle = color
        context.lineWidth=size
    },[color,size])



  
    useEffect(()=>{
        if(!canvasRef.current) return

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        
        
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        context.strokeStyle = color
        context.lineWidth=size
        context.lineCap = "round";
        




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