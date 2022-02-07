import foodarity from '../assets/Projects/foodarity.jpg'
import dog from '../assets/Projects/dog.png'

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
      link: '',
      code: 'https://github.com/KarenDerkach/PI-DOGS',
      
    },
    EN:{
      title: 'DOGS WORLD',
      description:
        'Development of a SPA (Single Page Application) where data is consumed from an external API with information about dog breeds and a database where information about the breeds created by the user is stored.',
      image: dog,
      tools: "Backend: NodeJS, Express, API Dogs. Frontend: React-JS y Redux, CSS modules.",
      link: '',
      code: 'https://github.com/KarenDerkach/PI-DOGS',
    }
  }
  
]
  
  export default projects;