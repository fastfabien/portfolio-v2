import React from "react";
import {
  Card,
  LeftCard,
  P,
  RightCard,
  Techno,
  Technos,
  TitleBold,
} from "../../Styles";

const Project = ({ title, description, technos, image, link }) => {
  return (
    <Card to={link} target="_blank" rel="noreferrer">
      <LeftCard>
        <img src={image} alt={title} />
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
    </Card>
  );
};

export { Project };
