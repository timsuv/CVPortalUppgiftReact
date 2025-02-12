import { useEffect, useState } from "react";
import { getGitData } from "../services/Github";
import { IProject } from "../modeles/IProject";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<IProject[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const projects = await getGitData();
        if (projects) {
          setProjects(projects);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  
  }, []);

  return (
    <>
      <section id="portfolio">
        <div className="portfolioTitle">
          <h2>
            <span>Portfolio</span>
          </h2>
        </div>

        <div className="projectBox">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            projects.map((project, index) => (
              <div className="projectCard" key={index}>
                <div id="project1" className="">
                  <div className="">
                    <h1>
                      <span>{project.name}</span>
                    </h1>
                    <h4>{project.description}</h4>
                    <p>
                      <span>Tech Stacks:</span> {project.language}
                    </p>
                    <div className="github-link">
                      <a href={project["html-url"]} target="_blank">
                        <i className="bx bxl-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
            
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
