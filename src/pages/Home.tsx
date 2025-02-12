import me from "../img/Me.png"

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="img-box">
          <img src={me} alt="My avatar" />
        </div>

        <div className="info-box">
          <h1>
            <span>
              Hello, I'm{" "}
              <button className="easterEgg">
                <span>Tim</span>
              </button>
            </span>
          </h1>
          <h3>
            <span>Fullstack Developer</span> studying at Chas
          </h3>
          <p>
            I am currently studying .NET fullstack developement. <br /> I am
            working with C#, SQL, HTML&CSS and JS
          </p>
        </div>

        <div className="btn-box">
          <a href="/contact">Contact Me</a>
        </div>
      </section>
    </>
  );
};

export default Home;
