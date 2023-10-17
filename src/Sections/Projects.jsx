import React from "react";
import { ProjectContainer } from "../Styles/Components/Project";
import { projectsData } from "../Data";
import { LinkedButton, Project } from "../Components";
const Projects = () => {
  return (
    <ProjectContainer id="projects">
      {projectsData.map((data, index) => (
        <Project
          key={index}
          title={data.title}
          description={data.description}
          technos={data.technos}
          image={data.image}
          link={data.lien}
        />
      ))}
      <LinkedButton link="/yes">Voir les archives</LinkedButton>
    </ProjectContainer>
  );
};

export { Projects };
