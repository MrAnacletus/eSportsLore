import { useEffect} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import background from './img/background.jpg';
import MapaCalor1 from './Graficos/MapaCalor1';
import MapaCalor2 from './Graficos/MapaCalor2';
import imgShiptur from './img/Shiphtur.jpg';

function App() {
	const pageName = process.env.REACT_APP_PAGE_NAME
	if (typeof(pageName)=="undefined") {
		throw new Error("REACT_APP_PAGE_NAME is not set")
	}
	useEffect(() => {
		// cargar el script de flourish para que se puedan ver los gráficos
		const script = document.createElement('script');
		script.src = 'https://public.flourish.studio/resources/embed.js';
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		}
	}, []);
	// tomar los csv's del directorio datasets y cargarlos en memoria
	return (
		<div className="App">
			{/* navbar */}
			<Navbar />
			{/* body with title and description */}
			<div className="body">
				<div className='contenido'>
					<div className='headline'>
						<div className="container-fluid d-flex justify-content-center">
							<h3 className="display-1">{pageName}</h3>
						</div>
						<div className="container-fluid d-flex justify-content-center">
							<p className="lead">Esto es eSports</p>
						</div>
					</div>
					<div className='description'>
						<div className="container d-flex">
							<div className="row">
								<div className="col-12 mt-3 col-sm-6">
									<h3>¿Que es {pageName}?</h3>
									<p>
										{pageName} se basa en un estudio exhaustivo donde hemos analizado 194 artículos sobre eSports para comprender la percepción que se tiene de estos.
										A través de visualizaciones claras y concisas, presentamos los datos y estadísticas obtenidos en el análisis de los artículos.
										El objetivo de {pageName} es proporcionar una visión objetiva en informativa sobre que son y como se retratan los eSports en los medios de comunicación y contribuir al reconocimiento de los eSports como una forma legítima de competición deportiva.
										Te invitamos a explorar las visualizaciones para obtener una comprensión más profunda de la percepción de los eSports en la prensa.
									</p>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<img className='imagen' src={background} alt="Imagen de eSports"/>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									imagen
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<h3>¿Que son los eSports?</h3>
									<p>
										Los eSports, también conocidos como deportes electrónicos, son competencias de videojuegos que de desarrollan en un entorno profesional o semi-profesional, y que pueden ser disputados de manera individual o en equipos.
										En estas competencias, jugadores de todo el mundo compiten entre si en diferentes juegos y plataformas, utiluzando habilidades motoras y estrategias para lograr la victoria. Aunque los eSports se desarrollan en el ambito virtual,
										comparten muchas caracteristicas similares a los deportes tradicionales como la competencia, el intensivo entrenamiento, la dedicación y el trabajo en equipo.
										A medida que los eSports han ganado popularidad, han demostrado ser mucho más que una forma de entretenimiento y han sido reconocidos como una forma legítima de competencia deportiva.
									</p>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<h3>¿Que juegos son eSports?</h3>
									<p>
										En la siguiente visualización se muestran los nombres de los videojuegos que más han sido nombrados en los articulos leidos. El Juego más nombrado es League of Legends con 471 menciones, seguido de StarCraft 2 y Dota 2 con 151 y 146 menciones respectivamente.
										League of Legends claramente lleva mucha ventaja sobre los demás eSports en cuanto a menciones debido a que se trata de un juego muy popular y con una gran comunidad de jugadores, además de que es un buen ejemplo de un juego que ha logrado ser reconocido como una forma legítima de competencia deportiva.
									</p>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<div
										className='flourish-embed flourish-chart'
										data-src='visualisation/14022919'
										dangerouslySetInnerHTML={{__html: `<script src="https://public.flourish.studio/resources/embed.js"></script>`}}
									/>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<h3>¿Que nombres son asociados a los eSports?</h3>
									<p>
										En la siguiente visualización se muestran los nombres de los personajes más mencionados en los artículos analizados.
										Destacan <a href='https://lol.fandom.com/wiki/Faker'>Faker</a> y <a href='https://www.linkedin.com/in/sundanced/'>Sundance DiGiovanni</a>, con 17 menciones cada uno, seguidos de <a href='https://lol.fandom.com/wiki/Ocelote'>ocelote</a> y <a href='https://lol.fandom.com/wiki/XPeke'>xPeke</a> con 16 y 15 menciones respectivamente.<br/>
										Estos nombres están estrechamente relacionados con los eSports. Faker, considerado el mejor jugador de League of Legends de todos los tiempos, es una superestrella surcoreana.
										Por otro lado, Sundance DiGiovanni es el cofundador de Major League Gaming, una de las organizaciones de eSports más grandes del mundo.
										Además, ocelote y xPeke son jugadores profesionales de League of Legends, y ocelote también es el fundador de G2 Esports, una destacada organización en el ámbito de los eSports.
									</p>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<div
										className='flourish-embed flourish-chart'
										data-src='visualisation/14023260'
										dangerouslySetInnerHTML={{__html: `<script src="https://public.flourish.studio/resources/embed.js"></script>`}}
									/>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<a href='https://lol.fandom.com/wiki/Shiphtur'>
									<img className='imagen' src={imgShiptur} alt="Imagen de Danny Le, Shiptur" />
									</a>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<h3>Visa deportiva para ciberatletas</h3>
									<p>
										En 2013, los Estados Unidos de America reconocieron a los eSports como una forma legítima de competencia deportiva, lo que permitió que los jugadores de eSports pudieran obtener una visa deportiva para competir en los Estados Unidos.
										Este fue el caso de Danny Le, jugador Canadiense de League of Legends que obtuvo una visa deportiva para competir en los Estados Unidos en 2013. Puedes encontrar más información sobre este caso en el siguiente artículo: <a href='https://www.dailydot.com/business/pro-gamers-athletes-visas-us-government/'>https://www.dailydot.com/business/pro-gamers-athletes-visas-us-government/</a>
									</p>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<h3>¿Cuál es la percepción de los eSports?</h3>
									<p>
										En las siguientes 2 visualizaciones se muestra la percepción de los eSports en los artículos leidos. Esta se basa en las métricas de estudio usadas para calificar cada articulo.
										Las métricas son: <br/>
										- <b>Necesidad/Conveniencia</b>: ¿Los eSports son algo necesario o conveniente para la sociedad en el articulo? <br/>
										- <b>Menosprecio</b>: ¿El articulo menosprecia a los eSports? <br/>
										- <b>Explicación</b>: ¿El articulo explica que son los eSports? <br/>
										- <b>Estereotipos</b>: ¿El articulo presenta estereotipos sobre los eSports? <br/>
										- <b>Especialización</b>: ¿Cuántos articulos son escritos por una editorial especializada en eSports? <br/>
										- <b>Enaltación</b>: ¿El articulo enaltece a los eSports? <br/>
										- <b>Deporte</b>: ¿El articulo reconoce a los eSports como una forma legítima de competencia deportiva? <br/>
									</p>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<MapaCalor1/>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<h3>¿Qué se puede entender de las visualizaciones?</h3>
									<p>
										El primer mapa de calor muestra que la mayoría de los artículos leidos no reconocen a los eSports como una forma legítima de competencia deportiva, y que la mayoría de los artículos no son escritos por editoriales especializadas en eSports.
										Esto puede deberse a que los eSports son un tema relativamente nuevo.
										El segundo mapa de calor muestra la relación entre las diferentes métricas de estudio, se puede ver que existe relación entre el explicar que son los eSports y el enaltecerlos, lo que indica que los artículos que explican que son los eSports tienden a enaltecerlos.
									</p>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<MapaCalor2/>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<h3>¿Es realmente un fenómeno mundial?</h3>
									<p>
										En la siguiente visualización se muestra la cantidad de jugadores de eSports por país. Se puede ver que la mayoría de los jugadores de eSports se encuentran en Estados Unidos, China y Corea del Sur.
										Sin embargo es indudable la presencia de jugadores de eSports en todo el mundo. Podemos ver también la totalidad de premios ganados por los jugadores de cada país, y se puede ver que Estados Unidos, China y Corea del Sur también lideran en este aspecto.
									</p>
								</div>
								<div className="col-12 mt-3 col-sm-6">
									<div
										className='flourish-embed flourish-chart'
										data-src='visualisation/13682538'
										dangerouslySetInnerHTML={{__html: `<script src="https://public.flourish.studio/resources/embed.js"></script>`}}
									/>
								</div>
								{/* <Dumbbell/> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	);
}

export default App;