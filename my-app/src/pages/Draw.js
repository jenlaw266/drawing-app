import "./Draw.css";
import Canvas from "../components/Canvas";
import {
  FaMousePointer,
  FaMinus,
  FaSquare,
  FaPaintBrush,
  FaFillDrip,
  FaTrash,
  FaStickyNote,
} from "react-icons/fa";
import { useState } from "react";

const Draw = () => {
  const [elementType, setElementType] = useState("brush");
  const [brushWidth, setBrushWidth] = useState(20);
  const [colour, setColour] = useState("black");
  const [elements, setElements] = useState([]);
  const [action, setAction] = useState("none"); //none, drawing, moving, remove, fill

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-1">
              <div className="tile is-parent box">
                <div className="content">
                  <article>
                    <button
                      className="button"
                      onClick={() => {
                        setAction("none");
                        setElementType("brush");
                      }}
                    >
                      <span className="icon is-small">
                        <FaPaintBrush />
                      </span>
                    </button>
                  </article>
                  <article>
                    <button
                      className="button"
                      onClick={() => {
                        setAction("none");
                        setElementType("line");
                      }}
                    >
                      <span className="icon is-small">
                        <FaMinus />
                      </span>
                    </button>
                  </article>
                  <article>
                    <button
                      className="button"
                      onClick={() => {
                        setAction("none");
                        setElementType("rect");
                      }}
                    >
                      <span className="icon is-small">
                        <FaSquare />
                      </span>
                    </button>
                  </article>
                  <article>
                    <button
                      className="button"
                      onClick={() => {
                        setAction("none");
                        setElementType("select");
                      }}
                    >
                      <span className="icon is-small">
                        <FaMousePointer />
                      </span>
                    </button>
                  </article>
                  <article>
                    <button
                      className="button"
                      onClick={() => {
                        setElementType("select");
                        setAction("fill");
                      }}
                    >
                      <span className="icon is-small">
                        <FaFillDrip />
                      </span>
                    </button>
                  </article>
                  <article>
                    <button
                      className="button"
                      onClick={() => {
                        setElementType("select");
                        setAction("remove");
                      }}
                    >
                      <span className="icon is-small">
                        <FaTrash />
                      </span>
                    </button>
                  </article>
                  <article>
                    <button
                      className="button"
                      onClick={() => {
                        setAction("none");
                        if (elements.length !== 0) {
                          setElementType("clear");
                          setElements([]);
                        }
                      }}
                    >
                      <span className="icon is-small">
                        <FaStickyNote />
                      </span>
                    </button>
                  </article>
                </div>
              </div>
            </div>
            <div className="column is-11">
              <input
                type="color"
                id="color"
                onChange={(e) => setColour(e.target.value)}
              />
              <input
                type="range"
                min="1"
                max="20"
                className="brush-size"
                onChange={(e) => setBrushWidth(e.target.value)}
              ></input>
              <label>Colour: </label>
              {colour}
              <label>Brush Width: </label>
              {brushWidth}
              <Canvas
                elements={elements}
                setElements={setElements}
                elementType={elementType}
                colour={colour}
                brushWidth={brushWidth}
                action={action}
                setAction={setAction}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Draw;
