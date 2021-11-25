import canvasPhoto from "./canvasPhoto.png";
import { Link } from "react-router-dom";
import { FaPaintBrush, FaReact, FaJsSquare, FaNodeJs } from "react-icons/fa";
import Footer from "../components/Footer";
import videoCanvas from "./videoCanvas.mov";
import videoGallery from "./videoGallery.mov";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div class="tile is-ancestor">
            <div class="tile is-12 is-parent">
              <div class="tile is-child box">
                <div className="columns">
                  <div className="column is-full">
                    <p class="title is-1">Draw</p>
                    <p class="subtitle is-3">a simple drawing app</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-two-thirds">
                    <Link to="/draw">
                      <img src={canvasPhoto} alt="screen shot" />
                    </Link>
                  </div>
                  <div className="column desc">
                    <p>
                      Draw is a simple drawing app built using the HTML canvas
                      element.
                      <br />
                      using JavaScript, NodeJS, ReactJS, Express, and SQL.
                      <br />
                      circle, text.
                      <br />
                      save and share link
                      <br />
                      <FaReact />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tile is-ancestor">
            <div class="tile is-12 is-parent">
              <div class="tile is-child box">
                <div className="columns">
                  <div className="column desc">
                    <p>
                      On the drawing page, you can draw free-form lines,
                      straight lines, rectangles,..... You can select the colour
                      of the line and fill. You are also able to move elements
                      and delete them with the select and delete tools. If you
                      are unhappy with the drawing, you can also clear the page
                      by clicking the icon for a fresh page.
                    </p>
                  </div>
                  <div className="column is-two-thirds">
                    <video controls autoPlay loop muted>
                      <source src={videoCanvas} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tile is-ancestor">
            <div class="tile is-12 is-parent">
              <div class="tile is-child box">
                <div className="columns">
                  <div className="column is-two-thirds">
                    <video controls autoPlay loop muted>
                      <source src={videoGallery} type="video/mp4" />
                    </video>
                  </div>
                  <div className="column desc">
                    <p>sdf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
