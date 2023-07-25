import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import papa from 'papaparse';


interface torneosLol {
	year: number;
	TotalUSDPrize: number;
	GameName: string;
}

async function loadCSVtorneosLol(nombre:string): Promise<torneosLol[]> {
	var response = await fetch('https://mranacletus.github.io/eSportsLore/datasets/'+nombre)
	var parsed = papa.parse(await response.text(), { header: true })
	var rows:torneosLol[] = parsed.data as unknown as torneosLol[]
	return rows
}
function TorneosLol (){
    const pageName = process.env.REACT_APP_PAGE_NAME
	if (typeof(pageName)=="undefined") {
		throw new Error("REACT_APP_PAGE_NAME is not set")
	}
	const [serieTorneosLol, setSerieTorneosLol] = useState([] as any[])
	const [optionsLol, setOptionsLol] = useState({})

	useEffect(() => {
		loadCSVtorneosLol('dataTorneosHistoricos.csv')
		.then((data: any[]) => {
			const series = data.reduce((acc, row) => {
				const year = row.year
				const nombre = row.GameName
				const value = Number(row.TotalUSDPrize)
				if (typeof(acc[nombre]) == "undefined") {
					acc[nombre] = []
				}
				acc[nombre].push([year, value])
				return acc
			}, {} as { [key: string]: any[] })
			// ordenar en el siguiente orden: Dota 2, Counter Strike, League, Overwatch, Starcraft
			const orden = ['Dota 2', 'Counter-Strike: Global Offensive', 'League of Legends', 'Overwatch', 'StarCraft II']
			const seriesOrdenado = orden.map((nombre) => {
				return {
					name: nombre,
					data: series[nombre]
				}
			})
			console.log(series)
			return seriesOrdenado
		})
		.then((result) => {
			setSerieTorneosLol(result)
			setOptionsLol({
				chart:{
					type: 'area',
					height: 350,
					stackType: '100%',
					zoom: {
						autoScaleYaxis: true,
					}
				},
				colors: ['#194407','#eba222','#dbc683','#4d1b05','#2596be'],
				theme:{
					mode: 'dark',
				},
				title:{
					text: 'Dinero repartido en torneos de eSports',
					align: 'left',
					style: {
						fontSize: '20px',
						color: '#FFFFFF'
					}
				},
				dataLabels: {
					enabled: false
				},
				xaxis: {
					type: 'numeric',
					min: 2010,
					max: 2022,
					tickPlacement: 'between',

				},
			});
		})
	}, [])
    return(
        <div>
			<Chart options={optionsLol} series={serieTorneosLol} type="area" height={350} />
			<small>Fuente: <a href="https://drive.google.com/file/d/1NNfpjukthmyRm7ly7rP4zYdk-A5fhk4d/view?usp=sharing">Elaboración propia</a></small>
        </div>
    )
}

export default TorneosLol;