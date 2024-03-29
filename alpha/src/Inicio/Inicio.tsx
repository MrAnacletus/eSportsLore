import { useEffect,useState } from 'react';
import MapaCalor1 from '../Graficos/MapaCalor1';
import MapaCalor2 from '../Graficos/MapaCalor2';
import imgShiptur from '../img/Shiphtur.jpg';
import imgTorneo from '../img/torneo.jpg';
import imgTeclado from '../img/teclado.jpg';
import HorarioInteractivo from '../Graficos/Horario';



function Inicio(props: any){
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

	function cambiarPaginaInicio(origen: string, destino: string){
		console.log("cambiando pagina");
		console.log(origen);
		console.log(destino);
		props.pagina(origen, destino);
	}

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
							<h3>¿Qué es {pageName}?</h3>
							<p>
								{pageName} se basa en un estudio exhaustivo donde hemos analizado 194 artículos sobre eSports para comprender la percepción que se tiene de estos.
								A través de visualizaciones claras y concisas, presentamos los datos y estadísticas obtenidos en el análisis de los artículos.
								El objetivo de {pageName} es proporcionar una visión objetiva e informativa sobre qué son y cómo se retratan los eSports en los medios de comunicación además de
								 contribuir al reconocimiento de los eSports como una forma legítima de competición deportiva.
								Te invitamos a explorar las visualizaciones para obtener una comprensión más profunda de la percepción de los eSports en la prensa.
							</p>
						</div>
						<div className="col-12 mt-3 col-sm-6 containerImagen">
							<img className='imagen' src={imgTeclado} alt="Imagen de eSports"/>
							<div className='bajoIzquierda'>
								Foto de <a href="https://unsplash.com/@isword?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Muha Ajjan</a> en <a href="https://unsplash.com/es/fotos/sL2BRR1cuvM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
							</div>
						</div>
						<div className="col-12 mt-3 col-sm-6 containerImagen">
							<img className='imagen' src={imgTorneo} alt="Imagen de un torneo de eSports"/>
							<div className='bajoIzquierda'>
								Foto de <a href="https://unsplash.com/@emanuelekstrom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank' rel='noreferrer'>Emanuel Ekström</a> en <a href="https://unsplash.com/es/fotos/I45hdPF5Na0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank' rel='noreferrer'>Unsplash</a>
							</div>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h3>¿Qué son los eSports?</h3>
							<p>
								Los eSports, también conocidos como deportes electrónicos, son competencias de videojuegos que se desarrollan en un entorno profesional o semi-profesional, y que pueden ser disputados de manera individual o en equipos.
								En estas competencias, jugadores de todo el mundo compiten entre si en diferentes juegos y plataformas, utilizando habilidades motoras y estrategias para lograr la victoria. Aunque los eSports se desarrollan en el ambito virtual,
								comparten muchas caracteristicas similares a los deportes tradicionales como la competencia, el intensivo entrenamiento, la dedicación y el trabajo en equipo.
								A medida que los eSports han ganado popularidad, han demostrado ser mucho más que una forma de entretenimiento y han sido reconocidos como una forma legítima de competencia deportiva.
							</p>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h3>¿Qué juegos son eSports?</h3>
							<p>
								En la visualización 1 se muestran los nombres de los videojuegos que más han sido nombrados en los artículos leidos. El Juego más nombrado es League of Legends con 471 menciones, 
								seguido de StarCraft 2 y DotA 2 con 151 y 146 menciones, respectivamente.
								League of Legends claramente lleva mucha ventaja sobre los demás eSports en cuanto a menciones debido a que se trata de un juego muy popular y con una gran comunidad de jugadores, 
								además de que es un buen ejemplo de un juego que ha logrado ser reconocido como una forma legítima de competencia deportiva.
							</p>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h5>Visualización 1</h5>
							<div
								className='flourish-embed flourish-chart'
								data-src='visualisation/14022919'
								dangerouslySetInnerHTML={{__html: `<script src="https://public.flourish.studio/resources/embed.js"></script>`}}
							/>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h3>¿Qué nombres son asociados a los eSports?</h3>
							<p>
								En la visualización 2 se muestran los nombres de los personajes más mencionados en los artículos analizados.
								Destacan <a href='https://lol.fandom.com/wiki/Faker' target='_blank' rel='noreferrer'>Faker</a> y <a href='https://www.linkedin.com/in/sundanced/' target='_blank' rel='noreferrer'>Sundance DiGiovanni</a>, 
								con 17 menciones cada uno, seguidos de <a href='https://lol.fandom.com/wiki/Ocelote'>ocelote</a> y <a href='https://lol.fandom.com/wiki/XPeke'>xPeke</a> con 16 y 15 menciones, respectivamente.<br/>
								Estos nombres están estrechamente relacionados con los eSports. Faker, considerado el mejor jugador de League of Legends de todos los tiempos, es una superestrella surcoreana.
								Por otro lado, Sundance DiGiovanni es el co-fundador de Major League Gaming, una de las organizaciones de eSports más grandes del mundo.
								Además, ocelote y xPeke son jugadores profesionales de League of Legends, y ocelote también es el fundador de G2 Esports, una destacada organización en el ámbito de los eSports.
							</p>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h5>Visualización 2</h5>
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
								En las visualizaciones 3 y 4 se muestra la percepción de los eSports en los artículos leidos. Esta se basa en las métricas de estudio usadas para calificar cada artículo.
								Las métricas son: <br/>
								- <b>¿Los eSports son necesarios o convenientes para la sociedad?</b><br/>
								- ¿El artículo <b>no contiene menosprecio a los eSports?</b><br/>
								- ¿El artículo <b>explica que son los eSports?</b><br/>
								- ¿El artículo <b>no contiene estereoticpos a los eSports?</b><br/>
								- ¿Cuántos artículos son escritos por una <b>editorial especializada en eSports?</b><br/>
								- ¿El artículo <b>presenta enaltación a los eSports?</b><br/>
								- <b>¿Los eSports son un deporte?</b>: ¿El artículo reconoce a los eSports como una forma legítima de competencia deportiva? <br/>
							</p>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h5>Visualización 3</h5>
							<MapaCalor1/>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h3>¿Qué se puede entender de las visualizaciones?</h3>
							<p>
								El primer mapa de calor muestra que la mayoría de los artículos leídos no reconoce a los eSports como una forma legítima de competencia deportiva, y 
								que la mayoría de los artículos no son escritos por editoriales especializadas en eSports.
								Esto puede deberse a que los eSports son un tema relativamente nuevo;
								El segundo mapa de calor muestra la relación entre las diferentes métricas de estudio, se puede ver que existe relación entre el explicar que son los eSports y el enaltecerlos, 
								lo que indica que los artículos que explican que son los eSports tienden a enaltecerlos.
							</p>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h5>Visualización 4</h5>
							<MapaCalor2/>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h5>Visualización 5</h5>
							<div
								className='flourish-embed flourish-chart'
								data-src='visualisation/13682538'
								dangerouslySetInnerHTML={{__html: `<script src="https://public.flourish.studio/resources/embed.js"></script>`}}
							/>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h3>¿Es realmente un fenómeno mundial?</h3>
							<p>
								En la visualización 5 se muestra la cantidad de jugadores de eSports por país. Se puede ver que la mayoría de los jugadores de eSports se encuentran en Estados Unidos, China y Corea del Sur;
								Sin embargo, es indudable la presencia de jugadores de eSports en todo el mundo. Es notable también la totalidad de premios ganados por los jugadores de cada país, y nuevamente Estados Unidos, China y Corea del Sur lideran en este aspecto.
							</p>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h5>Visualización 6</h5>
							<div
								className='flourish-embed flourish-chart'
								data-src='visualisation/14105301'
								dangerouslySetInnerHTML={{__html: `<script src="https://public.flourish.studio/resources/embed.js"></script>`}}
							/>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h3>¿De donde provienen los artículos de eSports?</h3>
							<p>
								En la visualización 6 se muestran los diferentes países de procedencia de los artículos pertenecientes al estudio, el tamaño de las palabras corresponde a la cantidad de artículos que provienen de ese país.
								Se puede ver que la mayoría de los artículos provienen de España, Estados Unidos y Chile, seguidos de otros países como México, Reino Unido y Australia.
								<br />
								<br />
								Los países de procedencia del estudio pueden estar relacionados con los países que se nombran en el mismo, así como los personajes y juegos que se mencionan en los artículos.
								Por ejemplo, si se hiciera un estudio similar, pero de deportes tradicionales, se podría esperar que la mayoría de los artículos provengan de Chile hablen de fútbol, y que la mayoría de los artículos de Estados Unidos hablen de fútbol 
								americano o baloncesto.
								<br />
								<br />
								¿Qué pasará si comparamos los países de procedencia de los artículos con los países que son nombrados en los artículos?
							</p>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h5>Visualización 7</h5>
							<div
								className='flourish-embed flourish-chart'
								data-src='visualisation/14023211'
								dangerouslySetInnerHTML={{__html: `<script src="https://public.flourish.studio/resources/embed.js"></script>`}}
							/>
						</div>
						<div className="col-12 mt-3 col-sm-6">
							<h3>Países mencionados en los artículos, ¿Cuál es la capital de los eSports?</h3>
							<p>
								En la visualización 7 se puede ver que los países con más artículos son España, Estados Unidos y Chile, sin embargo, los países más mencionados en los artículos son Estados Unidos, Chile y Corea del Sur, seguido en cuarto lugar de España.
								¿De donde sale Corea del sur?
								<br />
								<br />
								Corea del Sur es un pais asíatico que se ha destacado en los eSports, en especial en los juegos Starcraft y League of Legends. El país del este ha tenido una larga historia con los eSports, y es considerado la capital de los eSports.
								<br />
								<br />
								Corea del Sur es <a href='https://thelawtree.akmllp.com/lawtitude/global-recognition-of-esports-and-laws-and-regulations-all-over-the-world/' target='_blank' rel='noreferrer'>pionero en legislación sobre eSports</a>, y es el primer país en reconocer a los jugadores de eSports como atletas en los años 2000, lo que les permite obtener visas de atletas y recibir beneficios del gobierno.
								Es más, Corea del Sur es el primer país en tener un estadio dedicado a los eSports, el <a href='https://weplayholding.com/blog/esports-gaming-arenas-what-are-they-which-are-the-most-famous/' target='_blank' rel='noreferrer'>primer estadio de eSports de Seúl</a> en el distrito de Yongsan.
							</p>
						</div>
						<div className="col-12 mt-5 col-sm-6">
							<h3>¿Qué tanto esfuerzo se pone en entrenar en eSports?</h3>
							<p>
								La mayoría de veces se piensa que los eSports no requieren de esfuerzo ni sacrificios, sin embargo, los jugadores de eSports entrenan tanto como los deportistas tradicionales.
								En la visualización 8 se presenta la distribución del tipo diario a través de una semana de un jugador de eSports, intenta crear una rutina de entrenamiento para un jugador de eSports y comparala con la rutina de entrenamiento de un deportista tradicional y uno de eSports.
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
							<h5>Visualización 8</h5>
							<HorarioInteractivo usuario={seriesHorario}/>
						</div>
						<div className="col-12 mt-5 col-sm-5">
							<h3>¿De donde vienen los datos?</h3>
							<p>
								La mayoría de los datos trabajados en este estudio se obtuvieron mediante la revisión de más de 240 artículos sobre eSports, estos artículos fueron recogidos de diversas 
								editoriales de todo el mundo, tanto en inglés como en español.
								Luego de un análisis de los mismos artículos se obtuvieron los datos que se presentan en las visualizaciones, estos en base al juicio periodístico del autor del estudio.
								De los más de 240 artículos se resolvió usar 194, esto en tanto algunos artículos no presentaban fechas, o no presentaban datos relevantes para el estudio.
								<br/>
								<br/>
								A continuación se presenta la visualización 9 en la que puedes ver los artículos usados en el estudio, y puedes ver los datos que se obtuvieron de cada uno de ellos.
								Juega con los valores de los filtros para ver como cambian los datos, investiga los artículos y los datos que se obtuvieron de ellos y saca tus propias conclusiones.
								<br/>
								<br/>
								Para ver los datos de un artículo en específico, haz click en el artículo y se desplegará una ventana con los datos del artículo.
								¿Cuántos chilenos habrá en los artículos?, ¿En qué artículos son nombrados?, ¿Qué datos se obtuvieron de cada artículo?
							</p>
						</div>
						<div className="col-12 mt-5 col-sm-7">
							<h5>Visualización 9</h5>
							<div
								className="flourish-embed flourish-survey"
								data-src="visualisation/13633179">
								<script src="https://public.flourish.studio/resources/embed.js"></script>
							</div>
						</div>
						<div className="col-12 mt-5 col-sm-6">
							<h3>¿Qué tan grande es la industria de los eSports?</h3>
							<p>
								Para finalizar este estudio, se presenta una visualización en la que se presenta la historia de los eSports, desde sus inicios hasta la actualidad. Explora la visualización y descubre como ha crecido la industria de los eSports.
							</p>
						</div>
						<div className="col-12 mt-5 col-sm-6">
							<p>
								Presiona <button className="btn btn-link nav-link active" onClick={()=>{cambiarPaginaInicio(props.paginaActual,"Historico")}}>AQUI</button> para ver la visualización.
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