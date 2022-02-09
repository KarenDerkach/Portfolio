import foodarity from '../assets/Projects/foodarity.jpg'
import dog from '../assets/Projects/dog.png'
import portfolio from '../assets/Projects/portfolio.png'

const projects = [ 
  { 
      ES:{
        title: 'FOODARITY',
        description:
          "Marketplace destinado a comercios del rubro alimenticio, ONG's y usuarios interesados en obtener alimentos a bajo costo.  ",
        image: foodarity,
        tools: "Frontend: React, Redux, Material UI... Backend: NodeJS, Postgress, API Mercado Pago, API NodeMailer, API GoogleSingIn, API GoogleMaps Organization: Asana, GitHub Flow..",
        link: 'http://foodarity.herokuapp.com/',
        code: 'https://github.com/KarenDerkach/foodarity-app',
        
      },
     EN:{
      title: 'FOODARITY',
      description:
        "Marketplace for businesses in the food industry, ONG's and users interested in obtaining food at low cost.",
      image: foodarity,
      tools: "Frontend: React, Redux, Material UI... Backend: NodeJS, Postgress, API Mercado Pago, API NodeMailer, API GoogleSingIn, API GoogleMaps Organization: Asana, GitHub Flow..",
      link: 'http://foodarity.herokuapp.com/',
      code: 'https://github.com/KarenDerkach/foodarity-app',
      
     }
    },
   
    { 
      ES:{
      title: 'MUNDO DE PERROS',
      description:
        'Desarrollo de una SPA (Single Page Application) la cual consume datos desde una API externa con información sobre raza de perros y una base de datos propia donde se aloja información sobre las razas creadas por el propio usuario.',
      image: dog,
      tools: "Backend: NodeJS, Express, API Dogs. Frontend: React-JS y Redux, CSS modules.",
      link: 'https://pi-dogs-six.vercel.app/',
      code: 'https://github.com/KarenDerkach/PI-DOGS',
      
    },
    EN:{
      title: 'DOGS WORLD',
      description:
        'Development of a SPA (Single Page Application) where data is consumed from an external API with information about dog breeds and a database where information about the breeds created by the user is stored.',
      image: dog,
      tools: "Backend: NodeJS, Express, API Dogs. Frontend: React-JS y Redux, CSS modules.",
      link: 'https://pi-dogs-six.vercel.app/',
      code: 'https://github.com/KarenDerkach/PI-DOGS',
    }
  },
  { 
    ES:{
    title: 'PORTAFOLIO',
    description:
      'Desarrollo de una página web donde el usuario visualiza información relevante sobre mi experiencia profesional y personal.',
    image: portfolio,
    tools: "",
    link: 'https://portfolio-rose-psi-88.vercel.app/',
    code: 'https://github.com/KarenDerkach/Portfolio',
    
  },
  EN:{
    title: 'PORTFOLIO',
    description:
      'Development of a web page where the user can view relevant information about my professional and personal experience.',
    image: portfolio,
    tools: "",
    link: 'https://portfolio-rose-psi-88.vercel.app/',
    code: 'https://github.com/KarenDerkach/Portfolio',
  }
}
  
]
  
  export default projects;