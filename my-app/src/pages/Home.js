import screenShot from "./temp-pic.png";
import { Link } from "react-router-dom";
import { FaReact, FaJsSquare, FaNodeJs } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Link to="/draw">
                <img src={screenShot} alt="screen shot" />
              </Link>
            </div>
            <div className="column">
              <FaReact />
              This is a simple drawing app built using the HTML canvas element.
              You can click on the icon, image and link in the nav bar to access
              the drawing page. On the drawing page, you can draw free-form
              lines, straight lines, rectangles,..... You can select the colour
              of the line and fill. You are also able to move elements and
              delete them with the select and delete tools. If you are unhappy
              with the drawing, you can also clear the page by clicking the icon
              for a fresh page.
              <br />
              using JavaScript, NodeJS, ReactJS, Express, and SQL.
              <br />
              circle, text.
              <br />
              save and share link
              <br />
              Sint aute non do incididunt velit eiusmod magna consectetur.
              Exercitation aliqua nulla Lorem ipsum reprehenderit magna veniam
              officia irure et anim consectetur. Lorem nostrud laboris ullamco
              et velit irure cillum qui laborum proident. Velit culpa laboris in
              officia ad do aliquip non enim est irure. Aute deserunt ut id
              labore esse veniam ut. Do amet cupidatat consequat ad in Lorem
              nostrud magna cillum adipisicing ea do deserunt. Officia ad
              consectetur deserunt amet minim adipisicing ex duis.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
