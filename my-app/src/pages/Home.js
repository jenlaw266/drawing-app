import screenShot from "./temp-pic.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <Link to="/draw">
                <img src={screenShot} alt="screen shot" />
              </Link>
            </div>
            <div class="column">
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
