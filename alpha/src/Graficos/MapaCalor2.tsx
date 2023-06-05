import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import papa from 'papaparse';

interface mapaCalor2{
	Metrica1: string;
	Metrica2: string;
	valor: number;
}

async function loadCSVMapaCalor2(nombre:string): Promise<mapaCalor2[]> {
	const response = await fetch('http://localhost:3000/datasets/'+nombre)
	const parsed = papa.parse(await response.text(), { header: true })
	const rows:mapaCalor2[] = parsed.data as unknown as mapaCalor2[]
	return rows
}

function MapaCalor2() {
    const pageName = process.env.REACT_APP_PAGE_NAME
	if (typeof(pageName)=="undefined") {
		throw new Error("REACT_APP_PAGE_NAME is not set")
	}
    const [optionsCalor2, setOptionsCalor2] = useState({})
	const [seriesCalor2, setSeriesCalor2] = useState([] as any[])
    useEffect(() => {
		loadCSVMapaCalor2('correlacion.csv')
		.then((data: { [key: string]: any }[]) => {
			const serie = data.reduce((acc, row) => {
				const metric1 = row.Metrica1
				const metric2 = row.Metrica2
				const value = row.valor
				if (typeof(acc[metric1]) == "undefined") {
					acc[metric1] = []
				}
				acc[metric1].push({ x: metric2, y: value })
				return acc
			}, {} as { [key: string]: any[] })
			return serie
		})
		.then((result) => {
			setSeriesCalor2(Object.entries(result).map(([name, data]) => {
				// reducir los decimales a 3 digitos
				data = data.map((row: { [key: string]: any }) => {
					row.y = Math.round(row.y * 1000) / 1000
					return row;
				})
				// eliminar valores negativos intercambiandolos por 0
				data = data.map((row: { [key: string]: any }) => {
					if (row.y < 0) {
						row.y = 0
					}
					return row;
				})
				return {
					name,
					data
				}
			}))
			console.log(result,"mapa2")
			setOptionsCalor2({
				chart: {
					type: 'heatmap',
					height: 350
				},
				plotOptions: {
					heatmap: {
						shadeIntensity: 0.5,
						distributed: true,
						colorScale: {
							// shades of blue
							ranges: [
								{
									from: 0,
									to: 0.30,
									name: '<30%',
									color: '#ADD8E6',
									forecolor: '#ffffff'
								},
								{
									from: 0.30,
									to: 1,
									name: '30% - 100%',
									color: '#00008B'
								}]
						},
					}
				},
				responsive:[{
					breakpoint: 750,
					options: {
						xaxis:{
							labels:{
								rotate: -90,
								rotateAlways: true,
								style : {
									fontSize: '10px'
								}
							}			
						},
						yaxis:{
							labels:{
								show: false,
							}
						}
					}
				}]			
			})
		})
	}, [])
    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h3>Correlación entre los distintos indicadores referentes a los eSports</h3>
                    </div>
                    <div className='mixed-chart'>
                        <Chart
                            options={optionsCalor2}
                            series={seriesCalor2}
                            type="heatmap"
                            width="100%"
							height="350px"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MapaCalor2;