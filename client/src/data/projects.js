import foodarity from "../assets/Projects/foodarity.png";
import dog from "../assets/Projects/dog.png";
import portfolio from "../assets/Projects/portfolio.png";
import loading from "../assets/Projects/loading.gif";

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

const projects = [
  {
    ES: {
      title: "AGENDA-FINANCIERA",
      description:
        "Aplicación web para la gestión de chequera almacenando y capturando información de base de dato no relacional, servicio de clima manipulado a travez de API externa, calendario y calculadora.",
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
    EN: {
      title: "FINANCIAL-CALENDAR",
      description:
        "Web application for checkbook management, weather service, calendar and calculator.",
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
  },
  {
    ES: {
      title: "FOODARITY",
      description:
        "Desarrollo de Marketplace grupal, destinado a comercios del rubro alimenticio, ONG's y usuarios interesados en obtener alimentos a bajo costo. Principales funcionalidades: inicio de sesión, registrarse, servicio GoogleMaps, servicio de correo electrónico, pasarela de pagos..  ",
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
    EN: {
      title: "FOODARITY",
      description:
        "Marketplace for businesses in the food industry, ONG's and users interested in obtaining food at low cost.",
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
  },

  {
    ES: {
      title: "MUNDO DE PERROS",
      description:
        "Desarrollo de una SPA (Single Page Application) la cual consume datos desde una API externa con información sobre raza de perros y una base de datos propia donde se aloja información sobre las razas creadas por el propio usuario.",
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
    EN: {
      title: "DOGS WORLD",
      description:
        "Development of a SPA (Single Page Application) where data is consumed from an external API with information about dog breeds and a database where information about the breeds created by the user is stored.",
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
  },
  {
    ES: {
      title: "PORTAFOLIO",
      description:
        "Desarrollo de una página web donde el usuario visualiza información relevante sobre mi experiencia profesional y personal.",
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
    EN: {
      title: "PORTFOLIO",
      description:
        "Development of a web page where the user can view relevant information about my professional and personal experience.",
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
  },
];

export default projects;
