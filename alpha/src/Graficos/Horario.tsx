import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

// El siguiente horario interactivo recibira entradas del usuario y mostrara en tiempo real el horario diario de una rutina de entrenamiento junto a 2 comparaciones
// La primera comparacion sera con el horario de un deportisra profesional
// La segunda comparacion sera con el horario de un profesional de eSports
// El usuario podra modificar el horario de entrenamiento y ver en tiempo real como cambian las comparaciones


const horarioDeportista = {
    "Dormir": 8,
    "Reposo":3,
    "Entrenamiento": 5,
    "Comida": 3,
    "Ocio": 2,
    "Quehaceres": 3
}
const horarioeSports = {
    "Dormir": 7,
    "Reposo":2,
    "Entrenamiento": 10,
    "Comida": 3,
    "Ocio": 2,
    "Quehaceres": 0
}

function HorarioInteractivo (props: any){
    const [optionsHorario, setOptionsHorario] = useState({})
    const [seriesHorario, setSeriesHorario] = useState([] as any[])

    useEffect(() => {
        setOptionsHorario({
            chart: {
                height: 390,
                type: 'bar',
                stacked: true,
                zoom: {
                    enabled: false
                },
                forecolor: '#adb5bd',
            },
            colors:[
                '#0B3954','#9ED964','#E63946','#F2C94C','#FF9F1C','#808080'
            ],
            theme:{
                mode: 'dark',
            },
            title: {
                text: 'Distribución de entrenamiento',
                style:{
                    color: '#adb5bd',
                }
            },
            subtitle:{
                text: 'Comparación con un deportista profesional y un profesional de eSports, junto con un horario del usuario.',
                style:{
                    fontSize: '14px',
                    color: '#adb5bd',
                }
            },
            xaxis: {
                categories: ['Triatleta', 'eSports', 'Tú'],
                style:{
                    fontSize: '14px',
                    color: '#adb5bd',
                    fontFamily: 'Roboto'
                }
            },
            yaxis: {
                title: {
                    text: undefined
                },
                style:{
                    fontSize: '14px',
                    color: '#adb5bd',
                    fontFamily: 'Roboto'
                },
                max: function(max: number){
                    return max
                }
            },
            tooltip: {
                shared: false,
                intersect: true,
                x: {
                    show: false
                }
            }
        })
    }, [])

    useEffect(() => {
        // Juntar los 3 horarios en un solo array par mostrarlos en el grafico de forma comparaativa
        const series = [] as any[]
        series.push({
            name: 'Dormir',
            data: [horarioDeportista.Dormir, horarioeSports.Dormir, props.usuario[0]]
        })
        series.push({
            name: 'Reposo',
            data: [horarioDeportista.Reposo, horarioeSports.Reposo, props.usuario[1]]
        })
        series.push({
            name: 'Entrenamiento',
            data: [horarioDeportista.Entrenamiento, horarioeSports.Entrenamiento, props.usuario[2]]
        })
        series.push({
            name: 'Comida',
            data: [horarioDeportista.Comida, horarioeSports.Comida, props.usuario[3]]
        })
        series.push({
            name: 'Ocio',
            data: [horarioDeportista.Ocio, horarioeSports.Ocio, props.usuario[4]]
        })
        series.push({
            name: 'Quehaceres',
            data: [horarioDeportista.Quehaceres, horarioeSports.Quehaceres, props.usuario[5]]
        })
        setSeriesHorario(series)
    }, [props])
    return (
        <div>
            <Chart options={optionsHorario} series={seriesHorario} type="bar" height={390} />
            {/* controles del usuario */}
            <small>Fuentes: <a href='https://www.feutri.org/dime-cuantas-horas-entrenas-y-te-contare-algunas-cosas/' target='_blank' rel='noreferrer'>Horario Triatleta</a>, <a href='https://blog.bodog.com/es/como-entrena-jugador-esports/' target='_blank' rel='noreferrer'>Horario eSports</a></small>
        </div>
    )
}
export default HorarioInteractivo;
