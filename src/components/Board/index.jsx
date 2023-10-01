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
        context.lineWidth=10



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
            shouldDraw.current = true
            context.beginPath()
            context.moveTo(e.touches[0].clientX,e.touches[0].clientY)
        }

        const Touchmove = (e) => {
            if (!shouldDraw.current) return

            context.lineTo(e.touches[0].clientX,e.touches[0].clientY)
            context.stroke()
        }

        const Touchend = (e) => {
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
        
        <canvas ref={canvasRef} width="150" height="150"></canvas>
    );
}

export default Board