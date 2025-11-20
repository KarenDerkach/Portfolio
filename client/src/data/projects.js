import foodarity from "../assets/Projects/foodarity-original.webp";
import dog from "../assets/Projects/dog-original.webp";
import agenda from "../assets/Projects/agenda-original.webp";
import dercon from "../assets/Projects/dercon-original.webp";
import tripSync from "../assets/Projects/tripSync-original.webp";


const bootstrapURL = "https://api.iconify.design/skill-icons:bootstrap.svg";
const cssURL = "https://api.iconify.design/skill-icons:css.svg";
const firebaseURL = "https://api.iconify.design/logos:firebase-icon.svg";
const geminiURL = "https://api.iconify.design/logos:google-gemini.svg";
const htmlURL = "https://api.iconify.design/skill-icons:html.svg";
const javascriptURL = "https://api.iconify.design/skill-icons:javascript.svg";
const materialUIURL = "https://api.iconify.design/devicon:materialui.svg";
const mongodbURL = "https://api.iconify.design/skill-icons:mongodb.svg";
const nextURL = "https://api.iconify.design/logos:nextjs-icon.svg";
const nodejsURL = "https://api.iconify.design/logos:nodejs.svg";
const postgresURL = "https://api.iconify.design/devicon:postgresql-wordmark.svg";
const reactURL = "https://api.iconify.design/skill-icons:react-dark.svg";
const reduxURL = "https://api.iconify.design/skill-icons:redux.svg";
const sequelizeURL = "https://api.iconify.design/devicon:sequelize.svg";
const sqlURL = "https://api.iconify.design/hugeicons:sql.svg";
const tailwindURL = "https://api.iconify.design/logos:tailwindcss-icon.svg";
const typescriptURL = "https://api.iconify.design/skill-icons:typescript.svg";




export const projectsData = [
  {
    id: 1,
    title: { ES: "AGENDA-FINANCIERA", EN: "FINANCIAL-CALENDAR" },
    description: {
      ES: "Aplicación web para la gestión de chequera almacenando y capturando información de base de dato no relacional, servicio de clima manipulado a través de API externa, calendario y calculadora.",
      EN: "Web application for checkbook management, weather service, calendar and calculator."
    },
    image: agenda,
    tools: {
      front: [
        { img: reactURL, name: "React" },
        { img: reduxURL, name: "Redux" },
        { img: materialUIURL, name: "MaterialUI" },
        { img: typescriptURL, name: "TypeScript" },
        { img: javascriptURL, name: "JavaScript" },
        { img: cssURL, name: "CSS" },
        { img: htmlURL, name: "HTML" },
      ],
      back: [
        { img: nodejsURL, name: "NodeJS" },
        { img: mongodbURL, name: "MongoDB" },
      ],
    },
    link: "https://agenda-financiera.vercel.app/",
    code: "https://github.com/KarenDerkach/Agenda-Financiera",
  },
  {
    id: 2,
    title: { ES: "MUNDO DE PERROS", EN: "DOGS WORLD" },
    description: {
      ES: "Desarrollo de una SPA (Single Page Application) la cual consume datos desde una API externa con información sobre raza de perros y una base de datos propia donde se aloja información sobre las razas creadas por el propio usuario.",
      EN: "Development of a SPA (Single Page Application) where data is consumed from an external API with information about dog breeds and a database where information about the breeds created by the user is stored."
    },
    image: dog,
    tools: {
      front: [
        { img: reactURL, name: "React" },
        { img: reduxURL, name: "Redux" },
        { img: materialUIURL, name: "MaterialUI" },
        { img: javascriptURL, name: "JavaScript" },
        { img: cssURL, name: "CSS" },
        { img: htmlURL, name: "HTML" },
      ],
      back: [
        { img: nodejsURL, name: "NodeJS" },
        { img: postgresURL, name: "Postgress" },
        { img: sequelizeURL, name: "Sequelize" },
      ],
    },
    // link: "https://dogs-world.vercel.app/",
    link: null,
    code: "https://github.com/KarenDerkach/PI-DOGS",
  },
  {
    id: 3,
    title: { ES: "FOODARITY", EN: "FOODARITY" },
    description: {

      ES: "Desarrollo de Marketplace grupal, destinado a comercios del rubro alimenticio, ONG's y usuarios interesados en obtener alimentos a bajo costo. Principales funcionalidades: inicio de sesión, registrarse, servicio GoogleMaps, servicio de correo electrónico, pasarela de pagos..  ",
      EN: "Marketplace for businesses in the food industry, ONG's and users interested in obtaining food at low cost.",
    },
    image: foodarity,
    tools: {
      front: [
        { img: reactURL, name: "React" },
        { img: reduxURL, name: "Redux" },
        { img: materialUIURL, name: "MaterialUI" },
        { img: javascriptURL, name: "JavaScript" },
        { img: cssURL, name: "CSS" },
        { img: htmlURL, name: "HTML" },
      ],
      back: [
        { img: nodejsURL, name: "nodejsURL" },
        { img: postgresURL, name: "Postgress" },
        { img: sqlURL, name: "SQL" },
      ],
    },
    // link: "http://foodarity.herokuapp.com/",
    link: null,
    code: "https://github.com/KarenDerkach/foodarity-app",
  },
  // {
  //   id: 4,
  //   title: { ES: "PORTAFOLIO", EN: "PORTFOLIO" },
  //   description: {

  //     ES: "Desarrollo de una página web donde el usuario visualiza información relevante sobre mi experiencia profesional y personal.",
  //     EN: "Development of a web page where the user can view relevant information about my professional and personal experience.",
  //   },
  //   image: portfolio,
  //   tools: {
  //     front: [
  //       { img: reactURL, name: "React" },
  //       { img: reduxURL, name: "Redux" },
  //       { img: materialURL, name: "materialUIURLUI" },
  //       { img: js, name: "JavaScript" },
  //       { img: cssURL, name: "CSS" },
  //       { img: htmlURL, name: "HTML" },
  //     ],
  //   },
  //   link: "https://portfolio-karenderkach.vercel.app/",
  //   code: "https://github.com/KarenDerkach/Portfolio",
  // },
  {
    id: 4,
    title: { ES: "DERCON SRL", EN: "DERCON SRL" },
    description: {

      ES: "Desarrollo de landing page para DERCON SRL, una empresa constructora, con el objetivo de presentar sus productos y servicios de manera clara y profesional. El objetivo fue crear una interfaz intuitiva y atractiva para mejorar la experiencia del usuario y facilitar la interacción con los clientes.",
      EN: "Development of a landing page for DERCON SRL, a construction company, with the goal of presenting its products and services in a clear and professional way. The objective was to create an intuitive and visually appealing interface to enhance the user experience and facilitate customer interaction.",
    },
    image: dercon,
    tools: {
      front: [
        { img: nextURL, name: "Next.js" },
        { img: bootstrapURL, name: "Bootstrap" },
        { img: javascriptURL, name: "JavaScript" },
        { img: cssURL, name: "CSS" },
        { img: htmlURL, name: "HTML" },
      ]
    },
    link: "https://dercon-srl.vercel.app/",
    code: "https://github.com/KarenDerkach/DERCON_SRL",
  },
  {
    id: 5,
    title: { ES: "TripSync", EN: "TripSync" },
    description: {

      ES: "Desarrollo de una aplicación web para la gestión de viajes, permitiendo a los usuarios planificar, organizar y compartir sus itinerarios de viaje.",
      EN: "Development of a web application for travel management, allowing users to plan, organize, and share their travel itineraries.",
    },
    image: tripSync,
    tools: {
      front: [
        { img: reactURL, name: "React" },
        { img: bootstrapURL, name: "Bootstrap" },
        { img:javascriptURL, name: "JavaScript" },
        { img: cssURL, name: "CSS" },
        { img: htmlURL, name: "HTML" },
        { img: firebaseURL, name: "Firebase" },
        { img: tailwindURL, name: "Tailwind" },
        { img: geminiURL, name: "Gemini AI" },

      ]
    },
    link: "https://trip-sync-planner.vercel.app/",
    code: "https://github.com/KarenDerkach/TripSync-planner",
  },
];




