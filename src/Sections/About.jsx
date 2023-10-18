import React from "react";
import { P } from "../Styles";
import { AboutContainer } from "../Styles/Components/about";

const About = () => {
  return (
    <AboutContainer id="about">
      <P>
        Bonjour, je suis Fabien, et je vous invite à explorer mon portfolio.
        Ici, vous trouverez un aperçu de mon travail en tant que développeur
        Front-end.
      </P>
      <P>
        Mon portfolio reflète ma passion pour l'innovation numérique. J'apporte
        une attention méticuleuse aux détails dans chaque projet, cherchant à
        créer des expériences utilisateur exceptionnelles.
      </P>
      <P>
        Je suis toujours en quête de repousser les limites de la technologie
        tout en m'efforçant de maintenir une esthétique de haut niveau. Explorez
        mon portfolio et plongez dans mon univers où la technologie rencontre la
        créativité.
      </P>
    </AboutContainer>
  );
};

export { About };
