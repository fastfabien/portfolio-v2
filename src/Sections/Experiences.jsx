import React from "react";
import { CardExperiences, LinkedButton } from "../Components";
import { experiencesData } from "../Data";
import { ExperienceContainer } from "../Styles";
import CV from "../assets/pdf/cv.pdf";

const Experiences = () => {
  return (
    <ExperienceContainer id="experiences">
      {experiencesData.map((data, index) => (
        <CardExperiences
          key={index}
          years={data.years}
          title={data.title}
          description={data.description}
          technos={data.technos}
        />
      ))}
      <LinkedButton link={CV}>Voir mon CV</LinkedButton>
    </ExperienceContainer>
  );
};

export { Experiences };
