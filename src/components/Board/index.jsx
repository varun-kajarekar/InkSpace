import { useEffect, useRef } from "react";

const Board = ()=>{

    const canvasRef = useRef(null);
    const shouldDraw = useRef(false);
    



    useEffect(()=>{
        if(!canvasRef.current) return

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        
        
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        
        context.strokeStyle = "white"
        context.lineWidth=5

        const handleMouseDown = (e) => {
            shouldDraw.current = true
            context.beginPath()
            context.moveTo(e.clientX, e.clientY)
        }

        const handleMouseMove = (e) => {
            if (!shouldDraw.current) return
            context.lineTo(e.clientX, e.clientY)
            context.stroke()
        }

        const handleMouseUp = (e) => {
            shouldDraw.current = false

        }

        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseup', handleMouseUp)


        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseup', handleMouseUp)

        }


    },[]);


    

    return(
        
        <canvas ref={canvasRef} width="150" height="150"></canvas>
    );
}

export default Board