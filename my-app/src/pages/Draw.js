import "./Draw.css";
import Canvas from "../components/Canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

const Draw = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-2">
              <div class="tile is-parent box">
                <FontAwesomeIcon icon={faPaintBrush} />
                Brush:
                <br />
                Add dropdown? color selection
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
