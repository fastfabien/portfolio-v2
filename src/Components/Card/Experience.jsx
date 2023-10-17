import React from "react";
import {
  CardExperience,
  LeftCard,
  P,
  RightCard,
  Technos,
  TitleBold,
  Techno,
} from "../../Styles";

const CardExperiences = ({ years, title, description, technos }) => {
  return (
    <CardExperience>
      <LeftCard>
        <P>{years}</P>
      </LeftCard>
      <RightCard>
        <TitleBold>{title}</TitleBold>
        <P>{description}</P>
        <Technos>
          {technos.map((data, index) => (
            <Techno key={index}>{data}</Techno>
          ))}
        </Technos>
      </RightCard>
    </CardExperience>
  );
};

export { CardExperiences };
