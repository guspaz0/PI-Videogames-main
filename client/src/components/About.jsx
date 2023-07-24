import { AboutStyle } from "../CSS"
import {IMAGES} from '../assets/aptitudes';


export default function About(){

    const linkedinURL = 'https://www.linkedin.com/in/gustavo-rodolfo-paz-767951118/'
    const githubURL = 'https://github.com/guspaz0'

    const aptitudes = ['javascript', 'postgres', 'sequelize', 'react', 'redux', 'node']

    return(
    <AboutStyle>
        <h1>About</h1>
        <div className='about'>
            <div className='aboutMe'>
                <h2>About App</h2>
                <p>Este es un proyecto individual destinado a aplicar todos los conocimientos adquiridos durante el curso de Desarrollador web Full Stack de Henry.
                Dispone de un Landing page con una imagen de fondo representativa al proyecto y incluye un boton que redirigira al usuario al Home Page.
                el Home page esta compuesto por un componente "NavBar" el cual contiene botones para crear videojuegos y buscar juegos por nombre, tanto para las de origin del API de RAWG.io y las de la base de datos local.
                Por defecto el backend "trae" 100 juegos desde el API el cual estan separados por paginas de lote de 15 juegos por cada una, para aumentar el tiempo de renderizado y brindar una mejor experiencia al usuario. 
                Abajo del navbar, se muestran los filtros y valores de ordenamiento para las card, se puede filtrar por origen de las card y por generos de juego. por cada filtro que se aplique, se iran filtrando sucesivamente las mismas card del anterior, dispone de una opcion de reset para que elimine los filtros. despues de aplicar cada filtro, la app ordenara las card segun el orden seleccionado. se puede ordenar por mayor popularidad (rating) o por orden alfabetico.
                En el navbar esta disponibleel boton "create videogame" el cual redirigira al usuario a un formulario de creacion el cual cada campo es validado por javascript, para controlar que los datos que recibamos sean los esperamos.</p>
                <h3>Tecnologias usadas en esta App:</h3>
            <span className='aptitudes'>
                {aptitudes.map((e,index) => {return <h5 key={index} className='imgtext'>{e}{"\n"}<img src={IMAGES[e]} alt={e}/></h5>})}
            </span>
            </div>
        </div>
        <div className='about'>
            <div className='aboutMe'>
                <h2>About Me</h2>
                <h4 lang='es'> Hola, soy un apasionado de la tecnologia de la informacion, Soy programador Full Stack Developer Junior. Puedo decir que la gran mayoria de mi experiencia laboral fue en el ambito administrativo privado en tareas relacionados a la informacion y toma de deciciones, por lo cual me identifico mas como un desarrollador orientado al Backend, aunque estoy siempre predispuesto a aprender algo nuevo</h4>
            
                <p lang='en'> Hi, i am a passionate of information tecnology, i am q full stack web developer. i can say than a lot of my labor experience belongs to private administrative enviroments in tasks relationed with information and decisions choice, after then i am more oriented to backend developer, but always im open to learn new habilities</p>
                <div className='aptitudes'>
                    <button><h5 className='imgtext'>Estoy en {"\n"}<a href={linkedinURL}><img src={IMAGES.linkedin} style={{width: '150px'}}alt='Linkedin'/></a></h5></button>
                    <button><h5 className='imgtext'>GitHub{"\n"}<a href={githubURL}><img src={IMAGES.github} alt='Linkedin'/></a></h5></button>
                </div>
            </div>
            
        </div>
    </AboutStyle>
    )
}