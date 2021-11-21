import "./Draw.css";
import Canvas from "../components/Canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faGripLinesVertical,
  faSquareFull,
  faHandPointer,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const BrushSize = () => {
  return (
    <div className="control">
      <br />
      <label className="radio">
        <input type="radio" name="small" /> S
      </label>
      <label className="radio">
        <input type="radio" name="large" checked /> M
      </label>
      <label className="radio">
        <input type="radio" name="large" /> L
      </label>
    </div>
  );
};

const Draw = () => {
  const [elementType, setElementType] = useState("brush");
  const [brushWidth, setBrushWidth] = useState(5);
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
                      onClick={() => setElementType("brush")}
                    >
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={faPaintBrush} />
                      </span>
                    </button>
                  </article>
                  <article>
                    <button
                      className="button"
                      onClick={() => setElementType("line")}
                    >
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={faGripLinesVertical} />
                      </span>
                    </button>
                  </article>
                  <article>
                    <button
                      className="button"
                      onClick={() => setElementType("rect")}
                    >
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={faSquareFull} />
                      </span>
                    </button>
                  </article>
                  <article>
                    <button
                      className="button"
                      onClick={() => setElementType("select")}
                    >
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={faHandPointer} />
                      </span>
                    </button>
                  </article>
                  <article>
                    <button
                      className="button"
                      onClick={() => setElementType("select")}
                    >
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </button>
                  </article>
                </div>
              </div>
            </div>
            <div className="column is-11">
              <input
                type="range"
                min="1"
                max="100"
                className="brush-size"
              ></input>
              <Canvas elementType={elementType} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Draw;
