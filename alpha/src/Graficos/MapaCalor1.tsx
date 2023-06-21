import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import papa from 'papaparse';


interface mapaCalor {
	Año: number;
	metrica: string;
	porcentaje: number;
}

async function loadCSVMapaCalor(nombre:string): Promise<mapaCalor[]> {
	const response = await fetch('http://localhost:3000/datasets/'+nombre)
	const parsed = papa.parse(await response.text(), { header: true })
	const rows:mapaCalor[] = parsed.data as unknown as mapaCalor[]
	return rows
}
function MapaCalor1 (){
    const pageName = process.env.REACT_APP_PAGE_NAME
	if (typeof(pageName)=="undefined") {
		throw new Error("REACT_APP_PAGE_NAME is not set")
	}
	// tomar los csv's del directorio datasets y cargarlos en memoria
	const [optionsCalor1, setOptionsCalor1] = useState({})
	const [seriesCalor1, setSeriesCalor1] = useState([] as any[])

    // Mapa de calor
	useEffect(() => {
		loadCSVMapaCalor('flags.txt')
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
				// reducir los decimales a 0 digitos
				data = data.map((row: { [key: string]: any }) => {
					row.y = row.y * 100
					row.y = Math.round(row.y)
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
					height: 350,
					background: '#212529',
					forecolor: '#adb5bd',
				},
				theme:{
					mode: 'dark',
				},
				plotOptions: {
					heatmap: {
						shadeIntensity: 0.5,
						enableShades: false,
						distributed: true,
						colorScale: {
							ranges: [{
								from: 0,
								to: 33,
								name: '<33%',
								color: 'rgb(190, 210, 220)'
							},
							{
								from: 33,
								to: 66,
								name: '33% - 66%',
								color: 'rgb(124, 157, 197)'
							},
							{
								from:66,
								to: 100,
								name: '>66%',
								color: 'rgb(107, 167, 129)'
							}]
						},

					}
				},
                title:{
                    text: 'Porcentaje de artículos que se ajustan a cada métrica, a través del tiempo',
					align: 'left',
                },
				responsive: [
					{
						breakpoint: 750,
						options: {
							title: {
								text: "Porcentaje de artículos por métrica"
							},
							dataLabels: {
								enabled: false
							},
							legend: {
								position: "bottom"
							},
							xaxis: {
								labels: {
									rotate: -90
								}
							},
							yaxis: {
								// make labels use less space
								labels:{
									show:false
								}

							},
						}
					}
				]
			})
		})
	}, [pageName])
    return(
        <div>
			<Chart 
				options={optionsCalor1}
				series={seriesCalor1}
				type='heatmap'
				height='350px'
				id='MapaCalor'
			/>
			<small>Fuente: <a href="https://drive.google.com/file/d/1NNfpjukthmyRm7ly7rP4zYdk-A5fhk4d/view?usp=sharing">Elaboración propia</a></small>
        </div>
    )
}

export default MapaCalor1