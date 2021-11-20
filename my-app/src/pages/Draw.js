import "./Draw.css";

const Draw = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <canvas
                id="paint"
                onClick={(e) => console.log(e.pageX, e.pageY)}
              ></canvas>
            </div>
            <div className="column is-4">
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

export default Draw;
