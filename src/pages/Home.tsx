import { NavLink } from "react-router-dom";
import me from "../img/Me.png";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="img-box">
          <img src={me} alt="My avatar" />
        </div>

        <div className="info-box">
          <h1>
            <span>Hello, I'm Tim</span>
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
        <NavLink to="/CVPortalUppgiftReact/contact">Contact me</NavLink>

        </div>
      </section>
    </>
  );
};

export default Home;
