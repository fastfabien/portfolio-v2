import image from '../assets/images/Wibe-Home-Desktop.png'

const projectsData = [
    {
        id: 1,
        image: image,
        title: "Wibe Studio",
        description: "Landing Page d'une agence de fashion que j'ai recréer",
        lien: "/ao",
        technos: ["React JS", "Styled Component", "GSAP", "Locomotive scroll", "Framer motion"]
    },
    {
        id: 2,
        image: image,
        title: "Immobilo",
        description: "C'est une site immobilier d'investissement participatif basé sur des bricks que les utilisateur achete et perçois des benefices mensuellement selon leur nombre de brick acheter, il ont aussi la possibilité de vendre ou acheter des  brique des autres utilisateur sur un marketplace.",
        lien: "/ao",
        technos: ["React JS", "Styled Component", "Redux", "Axios", "Node Js", "MongoDB"]
    },
    {
        id: 3,
        image: image,
        title: "Portfolio",
        description: "Ceci est mon premier portfolio que j'ai fait l'année dernier.",
        lien: "/ao",
        technos: ["React JS", "Styled Component", "Locomotive Scroll", "Email JS"]
    },
    {
        id: 4,
        image: image,
        title: "Natours",
        description: "C'est une landing page d'un site de nature fait en pure HTML/SCSS sans JavaScript. ",
        lien: "https://natours-project-beta.vercel.app/",
        technos: ["HTML", "SCSS"]
    }
]

export { projectsData }