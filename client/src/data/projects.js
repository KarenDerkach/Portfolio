import foodarity from '../assets/Projects/foodarity.jpg'
import dog from '../assets/Projects/dog.png'

const projects = [
    {
      title: 'Foodarity',
      description:
        "Aplicacion donde se busca concientizar sobre el derroche de alimentos masivos y la importancia de saber compartir a los que necesitan. Tipos de roles: Empresas - Pueden publicar lotes de productos y a la vez donar a ONGS. ONGS: Pueden obtener donaciones. Usuario: Puede ver lotes publicados y realizar compra mediante concretandola mediante pasarela de pago o acordando con el vendedor.  ",
      image: foodarity,
      tools: "Frontend: React, Redux, Material UI... Backend: NodeJS, Postgress, API Mercado Pago, API NodeMailer, API GoogleSingIn, API GoogleMaps Organization: Asana, GitHub Flow..",
      link: 'http://foodarity.herokuapp.com/',
      time: 1500,
    },
    {
      title: 'Dogs Worlds',
      description:
        'Desarrollo de una SPA (Single Page Application) donde se consumen datos desde una API externa con información sobre raza de perros y una base de datos propia donde se aloja información sobre las razas creadas por el propio usuario.',
      image: dog,
      tools: "Backend: NodeJS, Express, API Dogs. Frontend: React-JS y Redux, CSS modules.",
      link: 'https://github.com/KarenDerkach/PI-DOGS',
      time: 1500,
    },
  ];
  
  export default projects;