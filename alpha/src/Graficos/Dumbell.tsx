import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import papa from 'papaparse';

interface dumbbellIdiomas {
	Español: number;
	Ingles: number;
	Año: number;
}

async function loadCSVDumbbellIdiomas(nombre:string): Promise<dumbbellIdiomas[]> {
	const response = await fetch('http://localhost:3000/datasets/'+nombre)
	const parsed = papa.parse(await response.text(), { header: true })
	const rows:dumbbellIdiomas[] = parsed.data as unknown as dumbbellIdiomas[]
	return rows
}

function Dumbbell (){
    const [optionsDumbbell1, setOptionsDumbbell1] = useState({})
	const [seriesDumbbell1, setSeriesDumbbell1] = useState([] as any[])
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
        <div className="col-6">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h3>Articulos por idioma</h3>
                    </div>
                    <div className="card-text">
                        <Chart options={optionsDumbbell1} series={seriesDumbbell1} type="bar" height={390} />
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default Dumbbell;