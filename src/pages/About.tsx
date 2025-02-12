import me from "../img/Me.png"

const About = () => {
  return (
    <>
      <section id="about">
      <div className="about-box">
        <div className="about-info">
          <h2><span>About Me</span></h2>
          <p>
            I am a dedicated .NET full-stack developer with expertise in C#,
            SQL, HTML & CSS, and JavaScript. I have a passion for learning new
            technologies and taking on challenges that push me to grow and
            improve. I enjoy solving problems, building innovative solutions,
            and creating impactful software. Collaboration and continuous
            improvement are at the heart of my approach as I work to stay at the
            forefront of development trends.
          </p>
        </div>
        <button className="jsBtn">
          <h2><span>Skills</span></h2>
        </button>

        <div className="skills">
          <ul className="skills__list">
            <li>
              <span><i className="bx bx-chevron-right"></i>HTML</span>
            </li>
            <li>
              <span><i className="bx bx-chevron-right"></i>CSS</span>
            </li>
            <li>
              <span><i className="bx bx-chevron-right"></i>JS</span>
            </li>
          </ul>
          <ul className="skills__list">
            <li>
              <span><i className="bx bx-chevron-right"></i>C#</span>
            </li>
            <li>
              <span><i className="bx bx-chevron-right"></i>SQL</span>
            </li>
            <li>
              <span><i className="bx bx-chevron-right"></i>React</span>
            </li>
          </ul>
        </div>
      </div>

      <img src={me} alt="My avatar" />
    </section>
    </>
  )
}

export default About
