import foodarity from "../assets/Projects/foodarity.png";
import dog from "../assets/Projects/dog.png";
import portfolio from "../assets/Projects/portfolio.png";
import loading from "../assets/Projects/loading.gif";
import dercon from "../assets/Projects/dercon.png"

import js from "../assets/Skills/javascript-logo.png";
import react from "../assets/Skills/react-icon.png";
import redux from "../assets/Skills/redux.png";
import sql from "../assets/Skills/sql.png";
import html from "../assets/Skills/html-icon.png";
import css from "../assets/Skills/css-icon.png";
import postgres from "../assets/Skills/postgres.png";
import sequelize from "../assets/Skills/sequelize.png";
import material from "../assets/Skills/material-ui.png";
import nodejs from "../assets/Skills/nodejs.png";
import typescript from "../assets/Skills/typescript.png";
import mongo from "../assets/Skills/mongodb.png";
import next from "../assets/Skills/nextjs.png"
import bootstrap from "../assets/Skills/bootstrap.png"

export const projectsData = [
  {
    id: 1,
    title: { ES: "AGENDA-FINANCIERA", EN: "FINANCIAL-CALENDAR" },
    description: {
      ES: "Aplicación web para la gestión de chequera almacenando y capturando información de base de dato no relacional, servicio de clima manipulado a través de API externa, calendario y calculadora.",
      EN: "Web application for checkbook management, weather service, calendar and calculator."
    },
    image: loading,
    tools: {
      front: [
        { img: react, name: "React" },
        { img: redux, name: "Redux" },
        { img: material, name: "MaterialUI" },
        { img: typescript, name: "TypeScript" },
        { img: js, name: "JavaScript" },
        { img: css, name: "CSS" },
        { img: html, name: "HTML" },
      ],
      back: [
        { img: nodejs, name: "NodeJS" },
        { img: mongo, name: "MongoDB" },
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
        { img: react, name: "React" },
        { img: redux, name: "Redux" },
        { img: material, name: "MaterialUI" },
        { img: js, name: "JavaScript" },
        { img: css, name: "CSS" },
        { img: html, name: "HTML" },
      ],
      back: [
        { img: nodejs, name: "NodeJS" },
        { img: postgres, name: "Postgress" },
        { img: sequelize, name: "Sequelize" },
      ],
    },
    link: "https://dogs-world.vercel.app/",
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
        { img: react, name: "React" },
        { img: redux, name: "Redux" },
        { img: material, name: "MaterialUI" },
        { img: js, name: "JavaScript" },
        { img: css, name: "CSS" },
        { img: html, name: "HTML" },
      ],
      back: [
        { img: nodejs, name: "NodeJS" },
        { img: postgres, name: "Postgress" },
        { img: sql, name: "SQL" },
      ],
    },
    link: "http://foodarity.herokuapp.com/",
    code: "https://github.com/KarenDerkach/foodarity-app",
  },
  {
    id: 4,
    title: { ES: "PORTAFOLIO", EN: "PORTFOLIO" },
    description: {

      ES: "Desarrollo de una página web donde el usuario visualiza información relevante sobre mi experiencia profesional y personal.",
      EN: "Development of a web page where the user can view relevant information about my professional and personal experience.",
    },
    image: portfolio,
    tools: {
      front: [
        { img: react, name: "React" },
        { img: redux, name: "Redux" },
        { img: material, name: "MaterialUI" },
        { img: js, name: "JavaScript" },
        { img: css, name: "CSS" },
        { img: html, name: "HTML" },
      ],
    },
    link: "https://portfolio-karenderkach.vercel.app/",
    code: "https://github.com/KarenDerkach/Portfolio",
  },
  {
    id: 5,
    title: { ES: "DERCON SRL", EN: "DERCON SRL" },
    description: {

      ES: "Desarrollo de landing page para DERCON SRL, una empresa constructora, con el objetivo de presentar sus productos y servicios de manera clara y profesional. El objetivo fue crear una interfaz intuitiva y atractiva para mejorar la experiencia del usuario y facilitar la interacción con los clientes.",
      EN: "Development of a landing page for DERCON SRL, a construction company, with the goal of presenting its products and services in a clear and professional way. The objective was to create an intuitive and visually appealing interface to enhance the user experience and facilitate customer interaction.",
    },
    image: dercon,
    tools: {
      front: [
        { img: next, name: "Next.js" },
        { img: bootstrap, name: "Bootstrap" },
        { img: js, name: "JavaScript" },
        { img: css, name: "CSS" },
        { img: html, name: "HTML" },
      ]
    },
    link: "https://dercon-srl.vercel.app/",
    code: "https://github.com/KarenDerkach/DERCON_SRL",
  },
];




