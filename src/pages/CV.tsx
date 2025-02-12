import { useEffect, useState } from "react";
import { getJsonCVData } from "../services/Education";
import { ICv } from "../modeles/ICv";
import { IExperience } from "../modeles/IExperience";
import { getJsonCVExperience } from "../services/Experince";

const CV = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cvs, setCvs] = useState<ICv>();
  const [experiences, setExperiences] = useState<IExperience>();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const fetchedCvs = await getJsonCVData();
        const fetchedExperiences = await getJsonCVExperience();
        if (fetchedCvs && fetchedExperiences) {
          setCvs(fetchedCvs);
          setExperiences(fetchedExperiences);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <section id="cv">
        <div className="title__cv">
          <h2>
            <span>CV</span>
          </h2>
        </div>

        <div className="cvBoxes">
          <div className="cvCard">
            <div className="timelineTitle">
              <i className="bx bxs-graduation"></i>
              <h2>Education</h2>
            </div>

            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              cvs?.education.map((cv, index) => (
                <ul key={index} className="position">
                  <li className="positionTitle">
                    <span>
                      <i className="bx bx-chevron-right"></i>
                    </span>
                    <h3>{cv.institution}</h3>
                  </li>
                  <li>
                    <strong>
                      {cv.start_date} - {cv.end_date}
                    </strong>
                  </li>
                  <p>{cv.degree}</p>
                </ul>
              ))
            )}
          </div>

          <div className="cvCard">
            <div className="timelineTitle">
              <i className="bx bx-briefcase"></i>
              <h2>Experience</h2>
            </div>

            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              experiences?.experience.map((exp, index) => (
                <ul key={index} className="position">
                  <li className="positionTitle">
                    <span>
                      <i className="bx bx-chevron-right"></i>
                    </span>
                    <h3>{exp.company}</h3>
                  </li>
                  <li>
                    <strong>
                      {exp.start_date} - {exp.end_date}
                    </strong>
                  </li>
                  <div className="roles">
                    {exp.roles.map((role, index) => (
                      <p key={index}>
                        {role}
                        {index < exp.roles.length - 1 && ", "}
                      </p>
                    ))}
                  </div>
                </ul>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CV;
