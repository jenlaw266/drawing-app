import "./Draw.css";
import Canvas from "../components/Canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faGripLinesVertical,
  faSquareFull,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Draw = () => {
  const [elementType, setElementType] = useState("line");
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-2">
              <div className="tile is-parent box">
                <div className="content">
                  <article>
                    <label className="subtitle">Brush</label>
                    <button
                      className="button"
                      onClick={setElementType("brush")}
                    >
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={faPaintBrush} />
                      </span>
                    </button>
                  </article>
                  <article>
                    <label className="subtitle">Line</label>
                    <button className="button" onClick={setElementType("line")}>
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={faGripLinesVertical} />
                      </span>
                    </button>
                  </article>
                  <article>
                    <label className="subtitle">Rectangle</label>
                    <button className="button" onClick={setElementType("rect")}>
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={faSquareFull} />
                      </span>
                    </button>
                  </article>
                  <article>
                    <label className="subtitle">Select</label>
                    <button
                      className="button"
                      onClick={setElementType("select")}
                    >
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={faHandPointer} />
                      </span>
                    </button>
                  </article>
                </div>
              </div>
            </div>
            <div className="column is-10">
              <Canvas />
              {/* <canvas
                id="paint"
                onClick={(e) => console.log(e.pageX, e.pageY)}
              ></canvas> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Draw;
