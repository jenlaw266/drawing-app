import { useState, useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const useMove = () => {
    const [location, setLocation] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
      e.persist();
      setLocation((prev) => ({ ...prev, x: e.pageX, y: e.pageY }));
      contextRef.current.lineTo(e.pageX, e.pageY);
      contextRef.current.stroke();
    };
    return {
      x: location.x,
      y: location.y,
      handleMouseMove,
    };
  };

  const [draw, setDraw] = useState(false);
  const { x, y, handleMouseMove } = useMove();

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

  const handleMouseDown = () => {
    contextRef.current.beginPath();
    contextRef.current.moveTo(x, y);
    setDraw(true);
  };

  const handleMouseUp = () => {
    setDraw(false);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={draw ? handleMouseMove : () => {}}
      onMouseUp={handleMouseUp}
      {...props}
    />
  );
};

export default Canvas;
