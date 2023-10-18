import wibeStudio from '../assets/images/Wibe-Home-Desktop.png'
import immobilo from '../assets/images/immobilo.png'
import portfolio from '../assets/images/portfolio.png'
import natours from '../assets/images/natours.png'

const projectsData = [
    {
        id: 1,
        image: wibeStudio,
        title: "Wibe Studio",
        description: "Landing Page d'une agence de fashion que j'ai recréer",
        lien: "https://wibe-studio-iota.vercel.app/",
        technos: ["React JS", "Styled Component", "GSAP", "Locomotive scroll", "Framer motion"]
    },
    {
        id: 2,
        image: immobilo,
        title: "Immobilo",
        description: "Il s'agit d'une plateforme immobilière axée sur l'investissement participatif, basée sur des unités appelées 'bricks,' que les utilisateurs achètent pour percevoir des bénéfices mensuels en fonction du nombre de bricks qu'ils possèdent. Les utilisateurs ont également la possibilité d'acheter ou de vendre des bricks d'autres utilisateurs via une plateforme de marché intégrée.",
        lien: "https://immobilo.onrender.com/",
        technos: ["React JS", "Styled Component", "Redux", "Axios", "Node Js", "MongoDB"]
    },
    {
        id: 3,
        image: portfolio,
        title: "Portfolio",
        description: "Ceci représente mon premier portfolio, conçu l'année dernière avec l'utilisation de technologies telles que :",
        lien: "https://johnfast.vercel.app/",
        technos: ["React JS", "Styled Component", "Locomotive Scroll", "Email JS"]
    },
    {
        id: 4,
        image: natours,
        title: "Natours",
        description: "Il s'agit d'une page d'accueil pour un site axé sur la nature, créée exclusivement en HTML et SCSS, sans utilisation de JavaScript. ",
        lien: "https://natours-project-beta.vercel.app/",
        technos: ["HTML", "SCSS"]
    }
]

export { projectsData }