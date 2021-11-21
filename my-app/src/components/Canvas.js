import { useState, useRef, useEffect } from "react";
import "./Canvas.css";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const { elementType } = props;
  const [elements, setElements] = useState([]);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.style.width = "100%";
    canvas.style.height = "70vh";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    context.fillStyle = "white";
    context.beginPath();
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.fill();

    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 1;

    elements.forEach((el) => {
      const { type } = el;
      if (type === "line") {
        const { x1, y1, x2, y2 } = el;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
      } else if (type === "rect") {
        const { x1, y1, x2, y2 } = el;
        context.rect(x1, y1, x2 - x1, y2 - y1);
      } else if (type === "brush") {
        context.putImageData(el.freeLine, 0, 0);
      }

      context.stroke();
    });

    contextRef.current = context;
  }, [elements]);

  const createElement = (x1, y1, x2, y2, type) => {
    return { x1, y1, x2, y2, type };
  };

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setDrawing(true);

    if (elementType === "brush") {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
    } else {
      const element = createElement(
        offsetX,
        offsetY,
        offsetX,
        offsetY,
        elementType
      );
      setElements((prev) => [...prev, element]);
    }
  };

  const handleMouseMove = (e) => {
    if (!drawing) {
      return;
    }
    const { offsetX, offsetY } = e.nativeEvent;

    if (elementType === "brush") {
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    } else {
      const index = elements.length - 1;
      const { x1, y1 } = elements[index];
      if (elementType === "brush") {
        const brush = setElements((prev) => [...prev, brush]);
      } else {
        const updatedElement = createElement(
          x1,
          y1,
          offsetX,
          offsetY,
          elementType
        );

        const elementsCopy = [...elements];
        elementsCopy[index] = updatedElement;
        setElements(elementsCopy);
      }
    }
  };

  const handleMouseUp = () => {
    setDrawing(false);
    if (elementType === "brush") {
      contextRef.current.closePath();
      const freeLine = contextRef.current.getImageData(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const element = { freeLine, type: elementType };
      setElements((prev) => [...prev, element]);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
};

export default Canvas;
