import { useState, useRef, useEffect } from "react";
import "./Canvas.css";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const {
    elementType,
    colour,
    brushWidth,
    elements,
    setElements,
    action,
    setAction,
  } = props;

  console.log("elements", elements);
  const [selectedElement, setSelectedElement] = useState(null);

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
    context.stroke();

    context.lineCap = "round";

    elements.forEach((el) => {
      const { type } = el;
      if (type === "line") {
        const { x1, y1, x2, y2, bColour, bWidth } = el;
        context.beginPath();
        context.strokeStyle = bColour;
        context.lineWidth = bWidth;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
      } else if (type === "rect") {
        const { x1, y1, x2, y2, bColour, bWidth } = el;
        context.beginPath();
        context.strokeStyle = bColour;
        context.lineWidth = bWidth;
        context.rect(x1, y1, x2 - x1, y2 - y1);
        if (el.fColour) {
          context.fillStyle = el.fColour;
          context.fill();
        }
        context.stroke();
      } else if (type === "brush") {
        context.putImageData(el.freeLine, 0, 0);
      }
    });

    if (elementType === "clear") {
      context.fillStyle = "white";
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.fill();
    }

    contextRef.current = context;
  }, [elements, colour, brushWidth, elementType]);

  const createElement = (
    id,
    x1,
    y1,
    x2,
    y2,
    type,
    bColour,
    bWidth,
    fColour
  ) => {
    return { id, x1, y1, x2, y2, type, bColour, bWidth, fColour };
  };

  const distance = (a, b) =>
    Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

  const getElementAtPosition = (x, y, elements) => {
    return elements.find((element) => {
      const { type } = element;
      if (type === "rect") {
        const { x1, y1, x2, y2 } = element;
        const minX = Math.min(x1, x2);
        const maxX = Math.max(x1, x2);
        const minY = Math.min(y1, y2);
        const maxY = Math.max(y1, y2);
        return x >= minX && x <= maxX && y >= minY && y <= maxY;
      } else {
        const { x1, y1, x2, y2 } = element;
        const a = { x: x1, y: y1 };
        const b = { x: x2, y: y2 };
        const c = { x, y };
        const offset = distance(a, b) - (distance(a, c) + distance(b, c));
        return Math.abs(offset) < 1;
      }
    });
  };

  const updateElement = (
    id,
    x1,
    y1,
    x2,
    y2,
    type,
    bColour,
    bWidth,
    fColour
  ) => {
    const updatedElement = createElement(
      id,
      x1,
      y1,
      x2,
      y2,
      type,
      bColour,
      bWidth,
      fColour
    );
    const elementsCopy = [...elements];
    elementsCopy[id] = updatedElement;
    setElements(elementsCopy);
  };

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    if (elementType === "select") {
      const element = getElementAtPosition(offsetX, offsetY, elements);
      if (element) {
        if (action === "fill" && element.type === "rect") {
          const { id, x1, y1, x2, y2, type, bColour, bWidth } = element;
          updateElement(id, x1, y1, x2, y2, type, bColour, bWidth, colour);
        } else if (action === "remove") {
          setElements((prev) => prev.filter((el) => el !== element));
        } else {
          const elOffsetX = offsetX - element.x1;
          const elOffsetY = offsetY - element.y1;
          setAction("moving");
          setSelectedElement({ ...element, elOffsetX, elOffsetY });
        }
      }
    } else if (elementType === "brush") {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      //setElement -- give brush offset x, offset y
      setAction("drawing");
    } else if (elementType === "line" || elementType === "rect") {
      let id;
      if (elements.length > 0) {
        const lastIndex = elements.length - 1;
        id = elements[lastIndex].id + 1;
      } else {
        id = 0;
      }
      const element = createElement(
        id,
        offsetX,
        offsetY,
        offsetX,
        offsetY,
        elementType,
        colour,
        brushWidth,
        null
      );
      setElements((prev) => [...prev, element]);
      setAction("drawing");
    }
  };

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    if (elementType === "select" && action !== "fill") {
      e.target.style.cursor = getElementAtPosition(offsetX, offsetY, elements)
        ? "move"
        : "default";
    }

    if (action === "drawing") {
      if (elementType === "brush") {
        contextRef.current.strokeStyle = colour;
        contextRef.current.lineWidth = brushWidth;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
      } else {
        const index = elements.length - 1;
        const { x1, y1, bColour, bWidth, fColour } = elements[index];

        updateElement(
          index,
          x1,
          y1,
          offsetX,
          offsetY,
          elementType,
          bColour,
          bWidth,
          fColour
        );
      }
    } else if (action === "moving") {
      const {
        id,
        x1,
        x2,
        y1,
        y2,
        type,
        bColour,
        bWidth,
        fColour,
        elOffsetX,
        elOffsetY,
      } = selectedElement;
      const width = x2 - x1;
      const height = y2 - y1;
      const newX1 = offsetX - elOffsetX;
      const newY1 = offsetY - elOffsetY;
      updateElement(
        id,
        newX1,
        newY1,
        newX1 + width,
        newY1 + height,
        type,
        bColour,
        bWidth,
        fColour
      );
    }
  };

  const handleMouseUp = () => {
    setAction((prev) => {
      if (prev === "fill" || prev === "remove") {
        return prev;
      } else {
        return "none";
      }
    });
    setSelectedElement(null);
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

  console.log(action);

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
