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
  FaSave,
} from "react-icons/fa";
import { useState } from "react";

const Draw = () => {
  const [elementType, setElementType] = useState("brush");
  const [brushWidth, setBrushWidth] = useState(20);
  const [colour, setColour] = useState("black");
  const [elements, setElements] = useState([]);
  const [action, setAction] = useState("none"); //none, drawing, moving, remove, fill
  const [save, setSave] = useState(false);

  //window width < 754px - set toolbar to horizontal

  let toolbarWidth = "is-1";
  let toolbarAlignment = "is-vertical";

  if (false) {
    toolbarWidth = "is-12";
    toolbarAlignment = "";
  }

  const handleSave = () => {
    setSave(false);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className={`tile ${toolbarWidth} ${toolbarAlignment} is-parent`}>
            <div className="tile is-child">
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

              <button
                className="button is-danger is-outlined"
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
            </div>
            <div className="tile is-child">
              <article className="save-button">
                <button
                  className="button is-link is-outlined"
                  onClick={() => setSave(true)}
                >
                  <span className="icon">
                    <FaSave />
                  </span>
                </button>
              </article>
            </div>
          </div>
          <div className="tile is-11 is-vertical">
            <div className="tile is-parent">
              <div className="tile is-child">
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
              </div>
              <div id="right-align">
                <label>Colour: </label>
                {colour}
                <label>Brush Width: </label>
                {brushWidth}
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
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
        </div>
      </div>
      <div className={`modal ${save ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Save to Gallery</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setSave(false)}
            ></button>
          </header>
          <section className="modal-card-body">{/* content */}</section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={() => handleSave}>
              Save drawing
            </button>
            <button className="button" onClick={() => setSave(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Draw;
