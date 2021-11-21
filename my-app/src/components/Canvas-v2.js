import { useState, useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [draw, setDraw] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.style.width = "100%";
    canvas.style.height = "60vh";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    context.fillStyle = "black";
    context.beginPath();
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.fill();

    context.lineCap = "round";
    context.strokeStyle = "white";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const handleMouseDown = ({ nativeEvent }) => {
    console.log("nativeevent", nativeEvent);
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setDraw(true);
  };

  const handleMouseMove = ({ nativeEvent }) => {
    if (!draw) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const handleMouseUp = () => {
    contextRef.current.closePath();
    setDraw(false);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      {...props}
    />
  );
};

export default Canvas;
