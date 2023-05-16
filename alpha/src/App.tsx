import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import background from './img/background.jpg';
import Chart from 'react-apexcharts';
import papa from 'papaparse';

interface mapaCalor {
	Año: number;
	metrica: string;
	porcentaje: number;
}
interface dumbbellIdiomas {
	Español: number;
	Ingles: number;
	Año: number;
}

async function loadCSVMapaCalor(nombre:string): Promise<mapaCalor[]> {
	const response = await fetch('http://localhost:3000/datasets/'+nombre)
	const parsed = papa.parse(await response.text(), { header: true })
	const rows:mapaCalor[] = parsed.data as unknown as mapaCalor[]
	return rows
}
async function loadCSVDumbbellIdiomas(nombre:string): Promise<dumbbellIdiomas[]> {
	const response = await fetch('http://localhost:3000/datasets/'+nombre)
	const parsed = papa.parse(await response.text(), { header: true })
	const rows:dumbbellIdiomas[] = parsed.data as unknown as dumbbellIdiomas[]
	return rows
}

function App() {
	const pageName = process.env.REACT_APP_PAGE_NAME
	if (typeof(pageName)=="undefined") {
		throw new Error("REACT_APP_PAGE_NAME is not set")
	}
	// tomar los csv's del directorio datasets y cargarlos en memoria
	const [optionsCalor1, setOptionsCalor1] = useState({})
	const [seriesCalor1, setSeriesCalor1] = useState([] as any[])
	const [optionsDumbbell1, setOptionsDumbbell1] = useState({})
	const [seriesDumbbell1, setSeriesDumbbell1] = useState([] as any[])
	// Mapa de calor
	useEffect(() => {
		const flags = loadCSVMapaCalor('flags.txt')
		.then((data: { [key: string]: any }[]) => {
			const serie = data.reduce((acc, row) => {
				const year = row.Año
				const metric = row.metrica
				const value = row.porcentaje
				if (typeof(acc[metric]) == "undefined") {
					acc[metric] = []
				}
				acc[metric].push({ x: year, y: value })
				return acc
			}, {} as { [key: string]: any[] })
			return serie
		})
		.then((result) => {
			setSeriesCalor1(Object.entries(result).map(([name, data]) => {
				// reducir los decimales a 3 digitos
				data = data.map((row: { [key: string]: any }) => {
					row.y = Math.round(row.y * 1000) / 1000
					return row
				})
				return {
					name,
					data
				}
			}))
			console.log(result)
			setOptionsCalor1({
				chart: {
					type: 'heatmap',
					height: 350
				},
				plotOptions: {
					heatmap: {
						shadeIntensity: 0.5,
						enableShades: true,
						distributed: true,
						colorScale: {
							ranges: [{
								from: 0,
								to: 0.33,
								name: '<33%',
								color: '#FF0000'
							},
							{
								from: 0.33,
								to: 0.66,
								name: '33% - 66%',
								color: '#128FD9'
							},
							{
								from: 0.66,
								to: 1,
								name: '>66%',
								color: '#00A100'
							}]
						},

					}
				}					
			})
		})
	}, [])
	// Dumbbel de idiomas
	useEffect(() => {
		const idiomas = loadCSVDumbbellIdiomas('idiomas.csv')
			.then((data: { [key: string]: any }[]) => {
				const serie = [] as any[]
				data.forEach((row) => {
					const year = row.Año
					const value1 = row.Español
					const value2 = row.Ingles
					serie.push({
						x: year,
						y: [value1, value2]
					})
					console.log(serie)
				})
				return serie
			})
			.then((result) => {
				setSeriesDumbbell1([{
					data: result
				}])
				setOptionsDumbbell1({
					chart: {
						height: 390,
						type: 'bar',
						zoom: {
							enabled: false
						}
					},
					colors: ['#EC7D31', '#36BDCB'],
					plotOptions: {
						bar: {
							horizontal: true,
							isDumbbell: true,
							dumbbellColors: [['#EC7D31', '#36BDCB']]
						}
					},
					title: {
						text: 'Cantidad de Articulos por idioma'
					},
					legend: {
						show: true,
						showForSingleSeries: true,
						position: 'top',
						horizontalAlign: 'left',
						customLegendItems: ['Español', 'Inglés']
					},
					fill: {
						type: 'gradient',
						gradient: {
						gradientToColors: ['#36BDCB'],
						inverseColors: false,
						stops: [0, 100]
						}
					},
					grid: {
						xaxis: {
						lines: {
							show: true
						}
						},
						yaxis: {
						lines: {
							show: false
						}
						}
					}
				})
			})
	}, [])
	
	
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
								<div className="col-6">
									<h3>¿Que es {pageName}?</h3>
									<p>{pageName} es el resultado de la tesis de Sebastían Sepúlveda, con {pageName} se busca demostrar que con un poco más de información sobre los eSports la gente puede cambiar de percepción por completo.</p>
								</div>
								<div className="col-6">
									<img className='imagen' src={background} alt="Imagen de eSports"/>
								</div>
							</div>
						</div>
						<div className="container d-flex mt-1">
							<div className="row container">
								<div className="col-6">
									<h3>¿Que son los eSports?</h3>
								</div>
								<div id='Grafico'>
									<Chart options={optionsCalor1} series={seriesCalor1} type='heatmap' height={350} id='MapaCalor'/>
								</div>
								<div id='Grafico'>
									<Chart options={optionsDumbbell1} series={seriesDumbbell1} type='rangeBar' height={350} id='Dumbbell'/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* sidebar */}
			{/* feed */}
			{/* widgets */}
		</div>		
	);
}

export default App;