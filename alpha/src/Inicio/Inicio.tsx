import { useEffect,useState } from 'react';
import background from '../img/background.jpg';
import MapaCalor1 from '../Graficos/MapaCalor1';
import MapaCalor2 from '../Graficos/MapaCalor2';
import imgShiptur from '../img/Shiphtur.jpg';
import imgTorneo from '../img/torneo.jpg';
import HorarioInteractivo from '../Graficos/Horario';


function Inicio(){
    const pageName = process.env.REACT_APP_PAGE_NAME
	if (typeof(pageName)=="undefined") {
		throw new Error("REACT_APP_PAGE_NAME is not set")
	}
	const [seriesHorario, setSeriesHorario] = useState([] as any[])
	// setear default values para el formulario de horario
	useEffect(() => {
		setSeriesHorario([
			8,2,5,3,2,4
		])
	},[setSeriesHorario])
	// añadir listener al formulario de horario
	useEffect(() => {
		
		const formHorario = document.getElementById('formHorario') as HTMLFormElement
		formHorario.addEventListener('change', (event) => {
			// Toma los valores de los inputs y los guarda en un array
			const formData = new FormData(formHorario)
			const data = [] as any[]
			data.push(formData.get('dormir'))
			data.push(formData.get('reposo'))
			data.push(formData.get('entrenamiento'))
			data.push(formData.get('comida'))
			data.push(formData.get('ocio'))
			data.push(formData.get('quehaceres'))
			// Actualiza el estado de seriesHorario
			setSeriesHorario(data)
		})
	}, [seriesHorario,setSeriesHorario])
    return (
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
						<div className="col-12 mt-3 col-sm-6 containerImagen">
							<img className='imagen' src={background} alt="Imagen de eSports"/>
						</div>
						<div className="col-12 mt-3 col-sm-6 containerImagen">
							<img className='imagen' src={imgTorneo} alt="Imagen de un torneo de eSports"/>
							<div className='bajoIzquierda'>
								Foto de <a href="https://unsplash.com/@emanuelekstrom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank' rel='noreferrer'>Emanuel Ekström</a> en <a href="https://unsplash.com/es/fotos/I45hdPF5Na0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank' rel='noreferrer'>Unsplash</a>
							</div>
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
								En la siguiente visualización se muestran los nombres de los videojuegos que más han sido nombrados en los artículos leidos. El Juego más nombrado es League of Legends con 471 menciones, seguido de StarCraft 2 y DotA 2 con 151 y 146 menciones respectivamente.
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
								Destacan <a href='https://lol.fandom.com/wiki/Faker' target='_blank' rel='noreferrer'>Faker</a> y <a href='https://www.linkedin.com/in/sundanced/' target='_blank' rel='noreferrer'>Sundance DiGiovanni</a>, con 17 menciones cada uno, seguidos de <a href='https://lol.fandom.com/wiki/Ocelote'>ocelote</a> y <a href='https://lol.fandom.com/wiki/XPeke'>xPeke</a> con 16 y 15 menciones respectivamente.<br/>
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
						<div className="col-12 mt-3 col-sm-6 containerImagen">
							<a href='https://lol.fandom.com/wiki/Shiphtur' target='_blank' rel='noreferrer'>
								<img className='imagen' src={imgShiptur} alt="Imagen de Danny Le, Shiptur" />
							</a>
							<div className='bajoIzquierda'>
								Foto de <a href='https://liquipedia.net/leagueoflegends/Shiphtur' target='_blank' rel='noreferrer'>Liquipedia</a>
							</div>
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
								En las siguientes 2 visualizaciones se muestra la percepción de los eSports en los artículos leidos. Esta se basa en las métricas de estudio usadas para calificar cada artículo.
								Las métricas son: <br/>
								- <b>Necesidad/Conveniencia</b>: ¿Los eSports son algo necesario o conveniente para la sociedad en el artículo? <br/>
								- <b>Menosprecio</b>: ¿El artículo menosprecia a los eSports? <br/>
								- <b>Explicación</b>: ¿El artículo explica que son los eSports? <br/>
								- <b>Estereotipos</b>: ¿El artículo presenta estereotipos sobre los eSports? <br/>
								- <b>Especialización</b>: ¿Cuántos artículos son escritos por una editorial especializada en eSports? <br/>
								- <b>Enaltación</b>: ¿El artículo enaltece a los eSports? <br/>
								- <b>Deporte</b>: ¿El artículo reconoce a los eSports como una forma legítima de competencia deportiva? <br/>
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
							<div
								className='flourish-embed flourish-chart'
								data-src='visualisation/13682538'
								dangerouslySetInnerHTML={{__html: `<script src="https://public.flourish.studio/resources/embed.js"></script>`}}
							/>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h3>¿Es realmente un fenómeno mundial?</h3>
							<p>
								En la siguiente visualización se muestra la cantidad de jugadores de eSports por país. Se puede ver que la mayoría de los jugadores de eSports se encuentran en Estados Unidos, China y Corea del Sur.
								Sin embargo es indudable la presencia de jugadores de eSports en todo el mundo. Podemos ver también la totalidad de premios ganados por los jugadores de cada país, y se puede ver que Estados Unidos, China y Corea del Sur también lideran en este aspecto.
							</p>
						</div>
						<div className="col-12 mt-5 col-sm-6">
							<h3>¿Qué tanto esfuerzo se pone en entrenar en eSports?</h3>
							<p>
								La mayoría de veces se piensa que los eSports no requieren de esfuerzo ni sacrificios, sin embargo, los jugadores de eSports entrenan tanto como los deportistas tradicionales.
								En la siguiente visualización se presenta la distribución del tipo diario a través de una semana de un jugador de eSports, intenta crear una rutina de entrenamiento para un jugador de eSports y comparala con la rutina de entrenamiento de un deportista tradicional y uno de eSports.
							</p>
							<div className='container'>
								<form method='post' name='formHorario' id='formHorario'> 
									<div className='row'>
										<div className='col-12 col-sm-6'>
											<label htmlFor='inputDormir' className='input-label' >Dormir:</label>
											<input className='form-control' type="number" name="dormir" id='inputDormir' defaultValue={8}/>
										</div>
										<div className='col-12 col-sm-6'>
											<label htmlFor='inputDescansar' className='input-label' >Reposo:</label>
											<input className='form-control' type="number" name="reposo" id='inputReposo' defaultValue={2}/>
										</div>
										<div className='col-12 col-sm-6'>
											<label htmlFor='inputEntrenar' className='input-label' >Entrenamiento:</label>
											<input className='form-control' type="number" name="entrenamiento" id='inputEntrenamiento' defaultValue={5}/>
										</div>
										<div className='col-12 col-sm-6'>
											<label htmlFor='inputComer' className='input-label' >Comida:</label>
											<input className='form-control' type="number" name="comida" id='inputComida' defaultValue={3}/>
										</div>
										<div className='col-12 col-sm-6'>
											<label htmlFor='inputJugar' className='input-label' >Ocio:</label>
											<input className='form-control' type="number" name="ocio" id='inputOcio' defaultValue={2}/>
										</div>
										<div className='col-12 col-sm-6'>
											<label htmlFor='inputQuehaceres' className='input-label' >Que haceres:</label>
											<input className='form-control' type="number" name="quehaceres" id='inputQuehaceres' defaultValue={4}/>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-12 mt-5 col-sm-6">
							<HorarioInteractivo usuario={seriesHorario}/>
						</div>
						<div className="col-12 mt-5 col-sm-5">
							<h3>¿De donde vienen los datos?</h3>
							<p>
								La mayoría de los datos trabajados en este estudio se obtuvieron mediante la revisión de más de 240 artículos sobre eSports, estos artículos fueron recogidos de diversas editoriales de todo el mundo, tanto en inglés como en español.
								Luego de un análisis de los mismos artículos se obtuvieron los datos que se presentan en las visualizaciones, estos en base al juicio periodístico del autor del estudio.
								De los más de 240 artículos se resolvió usar 194, esto en tanto algunos artículos no presentaban fechas, o no presentaban datos relevantes para el estudio.
								<br/>
								<br/>
								A continuación se presenta una visualización en la que puedes ver los artículos usados en el estudio, y puedes ver los datos que se obtuvieron de cada uno de ellos.
								Juega con los valores de los filtros para ver como cambian los datos, investiga los artículos y los datos que se obtuvieron de ellos y saca tus propias conclusiones.
								<br/>
								<br/>
								Para ver los datos de un artículo en específico, haz click en el artículo y se desplegará una ventana con los datos del artículo.
								¿Cuantos chilenos habrá en los artículos?, ¿En que artículos son nombrados?, ¿Que datos se obtuvieron de cada artículo?
							</p>
						</div>
						<div className="col-12 mt-5 col-sm-7">
							<div className="flourish-embed flourish-survey" data-src="visualisation/13633179"><script src="https://public.flourish.studio/resources/embed.js"></script></div>
						</div>
						<div className="col-12 mt-5 col-sm-6">
							<h3>A traves de la historia</h3>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<div className='flourish-embed flourish-chart' data-src='visualisation/14022919' dangerouslySetInnerHTML={{__html: `<script src="https://public.flourish.studio/resources/embed.js"></script>`}}/>
						</div>
						<div className="col-12 mt-5 col-sm-6">
							<h3>Comparación con deportes</h3>
							<p>
								Arriba hemos visto que los eSports
							</p>
						</div>
						{/* <Dumbbell/> */}
					</div>
				</div>
			</div>
		</div>
    )
}

export default Inicio