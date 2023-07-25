import { useEffect } from 'react';
import './Historico.css';
import TorneosLol from '../Graficos/Torneos';
import imgCOD from '../img/cod.jpg';

function Historico(){
    useEffect(()=>{
        const svgImage = document.getElementById("svgMap");
        const svgContainer = document.getElementById("svgContainer");

        var viewBox = {x:-700,y:-300,w:svgImage!.clientWidth,h:svgImage!.clientHeight};
        svgImage!.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
        const svgSize = {w:svgImage!.clientWidth,h:svgImage!.clientHeight};
        var isPanning = false;
        var startPoint = {x:0,y:0};
        var endPoint = {x:0,y:0};;
        var scale = 1;

        svgContainer!.onwheel = function(e){
            e.preventDefault();
            var w = viewBox.w;
            var h = viewBox.h;
            var mx = e.offsetX;//mouse x  
            var my = e.offsetY;    
            var dw = w*Math.sign(e.deltaY)*0.05;
            var dh = h*Math.sign(e.deltaY)*0.05;
            var dx = dw*mx/svgSize.w;
            var dy = dh*my/svgSize.h;
            viewBox = {x:viewBox.x-dx,y:viewBox.y-dy,w:viewBox.w+dw,h:viewBox.h+dh};
            scale = svgSize.w/viewBox.w;
            // zoomValue.innerText = `${Math.round(scale*100)/100}`;
            svgImage!.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
        }

        svgContainer!.onmousedown = function(e){
            isPanning = true;
            startPoint = {x:e.x,y:e.y};   
        }

        svgContainer!.onmousemove = function(e){
            if (isPanning){
                endPoint = {x:e.x,y:e.y};
                var dx = (startPoint.x - endPoint.x)/scale;
                var dy = (startPoint.y - endPoint.y)/scale;
                var movedViewBox = {x:viewBox.x+dx,y:viewBox.y+dy,w:viewBox.w,h:viewBox.h};
                svgImage!.setAttribute('viewBox', `${movedViewBox.x} ${movedViewBox.y} ${movedViewBox.w} ${movedViewBox.h}`);
            }
        }

        svgContainer!.onmouseup = function(e){
        if (isPanning){ 
            endPoint = {x:e.x,y:e.y};
            var dx = (startPoint.x - endPoint.x)/scale;
            var dy = (startPoint.y - endPoint.y)/scale;
            viewBox = {x:viewBox.x+dx,y:viewBox.y+dy,w:viewBox.w,h:viewBox.h};
            svgImage!.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
            isPanning = false;
        }
        }

        svgContainer!.onmouseleave = function(e){
            isPanning = false;
        }
    },[]);
    return(
        <div className='contenido'>
            <div className="container text-black">
                <div className='container card mt-3'>
                    <div className="card-title">
                        <h1>Historia de los eSports</h1>
                    </div>
                    <p className="card-text">
                        Los eSports son competiciones de nivel mundial, en las que se enfrentan jugadores profesionales de videojuegos de todo el mundo. Pero no siempre fueron la gran industria en crecimiento que son hoy en día,
                        sino que tuvieron un comienzo humilde, que se remonta a los años 70.
                        <br/> <br/>
                        En 1972, se celebró el primer torneo de videojuegos de la historia, en la Universidad de Stanford. El juego elegido fue Spacewar, un juego de naves espaciales, en el que los jugadores debían destruirse entre sí.
                        El premio para el ganador fue una suscripción a la revista Rolling Stone. Este evento constituyó el primer paso para la creación de los eSports.
                        <br/> <br/>
                        En la visualización se muestra la historia de los eSports, desde su creación hasta la actualidad, pasando por los diferentes juegos que han sido parte de la historia de los eSports.
                        Los juegos están ordenados según las inspiraciones que tuvieron para su creación, y se muestran juegosque forman parte de los eSports, seleccionados a partir de las apariciones que han tenido en la investigación
                        realizada para este proyecto.
                        <br/> <br/>
                        Para navegar por la visualización, has <b className='text-black'>zoom con la rueda del ratón</b>, y <b className='text-black'>mueve la visualización manteniendo pulsado el botón izquierdo del ratón y 
                        arrastrandoló dentro del marco</b>, navega por el mapa y descubre las inspiraciones de los juegos aquí mostrados.
                    </p>
                    <h5>Visualización 10</h5>
                    <div className="card-body border" id='svgContainer'>
                        <svg contentScriptType="text/ecmascript" width="100%" id='svgMap'
                        xmlnsXlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"
                        contentStyleType="text/css"
                        viewBox="-643.000000 -635.000000 1245.858398 1000" height="500.0"
                        preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
                        version="1.1">
                        <g id="edges">
                            <path fill="none" stroke-width="1.0"
                                d="M -237.787369,-258.307220 L -225.104782,-269.249939"
                                className="id_1 id_2" stroke-opacity="1.0" stroke="#858453"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -209.967896,-294.646240 L -206.285339,-335.925537"
                                className="id_2 id_6" stroke-opacity="1.0" stroke="#d1a513"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -187.195038,-331.188416 L -193.607407,-339.590942"
                                className="id_3 id_6" stroke-opacity="1.0" stroke="#858453"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -215.245407,-346.141205 L -224.289078,-339.353943"
                                className="id_6 id_7" stroke-opacity="1.0" stroke="#d1a513"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -217.316238,-293.203766 L -229.468948,-316.739349"
                                className="id_2 id_7" stroke-opacity="1.0" stroke="#d1a513"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -197.813965,-282.664978 L -179.882538,-284.523682"
                                className="id_2 id_9" stroke-opacity="1.0" stroke="#d1a513"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -212.664291,-364.616821 L -221.428970,-376.161346"
                                className="id_6 id_8" stroke-opacity="1.0" stroke="#d1a513"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -196.063034,-364.129700 L -188.623901,-372.819092"
                                className="id_6 id_23" stroke-opacity="1.0" stroke="#d1a513"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -153.753922,-289.980408 L -141.700836,-294.457153"
                                className="id_9 id_20" stroke-opacity="1.0" stroke="#7e9b16"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -168.344208,-276.109558 L -177.584320,-254.625183"
                                className="id_9 id_14" stroke-opacity="1.0" stroke="#d1a513"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -157.572815,-277.316772 L -150.203537,-267.196625"
                                className="id_9 id_12" stroke-opacity="1.0" stroke="#d1a513"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -160.979218,-296.687286 L -153.860153,-321.329620"
                                className="id_9 id_52" stroke-opacity="1.0" stroke="#d55409"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -158.469543,96.626740 L -158.370575,87.790581"
                                className="id_11 id_13" stroke-opacity="1.0" stroke="#e08510"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -148.294281,103.854935 L -128.382263,96.661011"
                                className="id_11 id_16" stroke-opacity="1.0" stroke="#d1a513"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -152.668579,116.784088 L -147.188049,125.304001"
                                className="id_11 id_42" stroke-opacity="1.0" stroke="#ddc63d"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -69.758690,68.316353 L -55.258926,74.470711"
                                className="id_18 id_70" stroke-opacity="1.0" stroke="#c98d65"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -87.663681,57.487614 L -101.137428,46.447052"
                                className="id_18 id_27" stroke-opacity="1.0" stroke="#d87120"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -490.218994,219.451843 L -441.306458,243.783081"
                                className="id_4 id_29" stroke-opacity="1.0" stroke="#df8126"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -508.431000,219.521149 L -568.875732,250.165146"
                                className="id_4 id_35" stroke-opacity="1.0" stroke="#8eaf73"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -491.277954,208.684647 L -473.203918,194.724670"
                                className="id_4 id_62" stroke-opacity="1.0" stroke="#d3852a"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 128.080978,-32.999477 L 159.275864,-40.185726"
                                className="id_5 id_24" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -589.588684,212.055038 L -586.142822,240.924164"
                                className="id_19 id_35" stroke-opacity="1.0" stroke="#7f4d5f"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -600.984009,201.722702 L -649.981628,200.692154"
                                className="id_19 id_44" stroke-opacity="1.0" stroke="#e86614"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -97.967056,-65.374496 L -79.380165,-64.899963"
                                className="id_21 id_53" stroke-opacity="1.0" stroke="#d87120"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -66.243317,-208.981934 L -53.588596,-213.554108"
                                className="id_22 id_25" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -79.954163,-218.205292 L -81.375488,-253.946472"
                                className="id_22 id_30" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -71.492355,-215.767654 L -54.487511,-240.585922"
                                className="id_22 id_39" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -69.610924,-194.236404 L -63.407917,-187.903366"
                                className="id_22 id_43" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 190.875854,-46.311771 L 233.049774,-52.414879"
                                className="id_24 id_32" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 175.685745,-30.864784 L 173.249878,-11.779880"
                                className="id_24 id_74" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -29.108631,-222.711823 L -9.376265,-230.469116"
                                className="id_25 id_51" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -204.768768,1.925982 L -190.126801,3.529270"
                                className="id_26 id_48" stroke-opacity="1.0" stroke="#839aa3"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -351.314484,-178.749649 L -336.379669,-186.806198"
                                className="id_28 id_164" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -432.016083,259.566681 L -442.737701,283.142365"
                                className="id_29 id_174" stroke-opacity="1.0" stroke="#d56c56"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -422.915680,259.146637 L -364.727631,360.995300"
                                className="id_29 id_228" stroke-opacity="1.0" stroke="#c83a24"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -423.630157,241.410080 L -397.877899,186.500854"
                                className="id_29 id_213" stroke-opacity="1.0" stroke="#c83a24"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -417.939606,249.340805 L -385.585052,245.684250"
                                className="id_29 id_237" stroke-opacity="1.0" stroke="#df8126"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -72.832603,-264.875061 L -59.717518,-259.049286"
                                className="id_30 id_39" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -77.482254,-277.870300 L -72.316681,-288.152130"
                                className="id_30 id_33" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -46.905300,305.629364 L -1.906032,420.262329"
                                className="id_31 id_46" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -59.746529,287.279785 L -74.976791,273.822662"
                                className="id_31 id_49" stroke-opacity="1.0" stroke="#8e897a"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -45.538521,284.827393 L -37.264397,269.870270"
                                className="id_31 id_102" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -41.429230,288.671173 L 9.357270,255.972534"
                                className="id_31 id_86" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 288.382660,-59.162617 L 314.784393,-61.667046"
                                className="id_32 id_36" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 245.589645,-75.122002 L 236.750565,-84.379372"
                                className="id_32 id_38" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 251.419998,-34.241966 L 242.114273,-16.321678"
                                className="id_32 id_186" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -56.435276,-309.024231 L -48.478050,-315.064484"
                                className="id_33 id_41" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -262.455780,78.383026 L -245.990723,87.324791"
                                className="id_34 id_135" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -581.091125,269.596008 L -552.936279,378.477844"
                                className="id_35 id_37" stroke-opacity="1.0" stroke="#2596be"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -593.998230,250.927719 L -652.856445,209.440292"
                                className="id_35 id_44" stroke-opacity="1.0" stroke="#8eaf73"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -587.329529,269.546417 L -604.198303,330.751129"
                                className="id_35 id_59" stroke-opacity="1.0" stroke="#2596be"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 339.675568,-63.996651 L 356.545929,-65.543518"
                                className="id_36 id_40" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -558.308838,388.915588 L -581.714661,378.441650"
                                className="id_37 id_59" stroke-opacity="1.0" stroke="#2596be"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -540.285217,388.432526 L -531.988831,384.172699"
                                className="id_37 id_91" stroke-opacity="1.0" stroke="#2596be"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -545.285278,402.210083 L -535.136841,426.201355"
                                className="id_37 id_94" stroke-opacity="1.0" stroke="#80aea0"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 217.582108,-99.959793 L 199.631592,-109.600639"
                                className="id_38 id_85" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -40.172119,-261.079651 L -33.167492,-270.823578"
                                className="id_39 id_68" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 381.454956,-67.665016 L 397.917114,-68.906265"
                                className="id_40 id_47" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -27.177593,-327.672974 L -17.564260,-331.310699"
                                className="id_41 id_55" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -662.171631,190.209381 L -641.389587,131.048462"
                                className="id_44 id_238" stroke-opacity="1.0" stroke="#f7c928"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -627.565369,112.245789 L -578.381714,86.409378"
                                className="id_238 id_150" stroke-opacity="1.0" stroke="#f7c928"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -211.352097,-70.747246 L -199.396255,-70.924286"
                                className="id_45 id_192" stroke-opacity="1.0" stroke="#c4c393"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 18.375732,439.424438 L 57.095982,444.712341"
                                className="id_46 id_50" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -6.004873,429.434753 L -25.704966,414.705231"
                                className="id_46 id_57" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 15.617392,429.207031 L 60.448097,394.191589"
                                className="id_46 id_66" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -8.510475,435.236725 L -67.719398,424.871552"
                                className="id_46 id_71" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 2.805291,451.029633 L -5.222622,502.728546"
                                className="id_46 id_73" stroke-opacity="1.0" stroke="#9c5e13"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 422.824707,-71.032448 L 440.563812,-72.812363"
                                className="id_47 id_54" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -164.838806,5.358064 L -153.257950,5.557429"
                                className="id_48 id_61" stroke-opacity="1.0" stroke="#2596be"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 82.179810,444.990234 L 95.768005,442.583099"
                                className="id_50 id_64" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 14.122546,-231.262085 L 32.815895,-221.424316"
                                className="id_51 id_65" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -56.281136,-56.635014 L -44.344284,-43.856201"
                                className="id_53 id_79" stroke-opacity="1.0" stroke="#e03d2d"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -65.445915,-53.893311 L -67.788040,-40.247463"
                                className="id_53 id_76" stroke-opacity="1.0" stroke="#e03d2d"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -52.957817,-65.897964 L -23.939020,-69.706818"
                                className="id_53 id_111" stroke-opacity="1.0" stroke="#e03d2d"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -56.675980,-72.711548 L -45.242161,-86.224854"
                                className="id_53 id_179" stroke-opacity="1.0" stroke="#e03d2d"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 465.488556,-74.233109 L 489.905090,-74.045547"
                                className="id_54 id_60" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 6.427684,-337.481445 L 15.504786,-338.266815"
                                className="id_55 id_84" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 66.796204,358.914063 L 69.212021,369.715637"
                                className="id_56 id_66" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -47.782234,407.973236 L -68.086105,412.815582"
                                className="id_57 id_71" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -32.812572,396.763275 L -25.783073,384.468689"
                                className="id_57 id_67" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -153.478714,339.708313 L -153.480072,329.270630"
                                className="id_58 id_185" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -589.184021,347.016144 L -562.239685,327.866058"
                                className="id_59 id_137" stroke-opacity="1.0" stroke="#2596be"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 502.831635,-83.713097 L 500.897095,-92.842529"
                                className="id_60 id_72" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 514.880188,-74.629333 L 535.432617,-76.069489"
                                className="id_60 id_69" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -308.339935,-335.752075 L -300.272949,-353.202118"
                                className="id_63 id_95" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 115.641678,431.008240 L 120.507790,422.174774"
                                className="id_64 id_203" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 51.490757,-205.606522 L 57.744415,-195.157135"
                                className="id_65 id_126" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 80.392807,377.903687 L 93.750809,366.258270"
                                className="id_66 id_90" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -14.307322,362.295074 L -9.232176,350.771149"
                                className="id_67 id_81" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -44.799282,-169.554703 L -35.222614,-160.584274"
                                className="id_43 id_211" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 563.187622,-69.726715 L 574.589355,-61.206718"
                                className="id_69 id_239" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -30.994787,70.967728 L -20.503479,56.517284"
                                className="id_70 id_215" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -95.820724,394.953156 L -94.760338,374.137665"
                                className="id_71 id_97" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -112.977669,438.781097 L -122.858795,450.623749"
                                className="id_71 id_98" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -97.101044,444.541260 L -97.120552,471.321106"
                                className="id_71 id_157" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -146.683899,358.811432 L -115.904709,396.614349"
                                className="id_58 id_71" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 495.151947,-117.163101 L 491.411957,-130.851227"
                                className="id_72 id_78" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -10.725598,527.024658 L -19.452906,552.851440"
                                className="id_73 id_121" stroke-opacity="1.0" stroke="#4d1b05"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 172.911346,12.976902 L 174.797318,24.914194"
                                className="id_74 id_75" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 183.599792,47.362389 L 189.969269,54.885468"
                                className="id_75 id_80" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -254.698318,-124.730270 L -242.906357,-125.297363"
                                className="id_77 id_125" stroke-opacity="1.0" stroke="#194407"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 480.960785,-152.922195 L 474.799286,-160.130310"
                                className="id_78 id_83" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 207.060165,73.061256 L 215.718307,80.934677"
                                className="id_80 id_87" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -534.691833,-158.528656 L -541.939392,-166.209488"
                                className="id_82 id_193" stroke-opacity="1.0" stroke="#896811"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 463.497284,-181.410614 L 461.932434,-191.347809"
                                className="id_83 id_88" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 40.118187,-337.009186 L 48.996490,-334.667145"
                                className="id_84 id_101" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 173.200485,-120.481384 L 146.417709,-127.174995"
                                className="id_85 id_178" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 21.805843,232.672623 L 18.486353,218.937775"
                                className="id_86 id_89" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 233.924362,98.059898 L 242.487717,106.532898"
                                className="id_87 id_93" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 465.365631,-214.335114 L 472.336365,-224.211090"
                                className="id_88 id_92" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 17.470184,194.307938 L 20.221115,183.674881"
                                className="id_89 id_136" stroke-opacity="1.0" stroke="#a5813b"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 108.390450,346.598785 L 112.273575,334.817993"
                                className="id_90 id_104" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -519.066650,388.009125 L -524.817322,424.927429"
                                className="id_91 id_94" stroke-opacity="1.0" stroke="#80aea0"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -507.648987,370.329346 L -470.298004,345.939209"
                                className="id_91 id_106" stroke-opacity="1.0" stroke="#6a6c75"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -518.736511,365.199097 L -521.173706,345.893799"
                                className="id_91 id_137" stroke-opacity="1.0" stroke="#2596be"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 478.600555,-246.177216 L 475.907776,-257.139038"
                                className="id_92 id_100" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 258.370850,125.612282 L 263.541931,134.060852"
                                className="id_93 id_96" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -516.658569,452.224060 L -420.054993,526.635620"
                                className="id_94 id_138" stroke-opacity="1.0" stroke="#dbc683"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -514.028687,440.921875 L -495.823853,437.248413"
                                className="id_94 id_165" stroke-opacity="1.0" stroke="#dbc683"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -277.422974,-402.394592 L -268.801575,-420.849274"
                                className="id_95 id_108" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 273.432587,156.640167 L 276.354767,170.521225"
                                className="id_96 id_109" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -125.516403,469.621460 L -116.385086,479.089203"
                                className="id_98 id_157" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 466.858002,-280.076385 L 458.660400,-292.617615"
                                className="id_100 id_107" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 71.985535,-325.549530 L 79.508034,-320.858246"
                                className="id_101 id_116" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -275.462280,132.604523 L -264.072296,142.424545"
                                className="id_103 id_156" stroke-opacity="1.0" stroke="#d07963"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 81.363708,222.512390 L 93.483734,213.721085"
                                className="id_105 id_118" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -591.615845,384.472351 L -541.664063,430.779999"
                                className="id_59 id_94" stroke-opacity="1.0" stroke="#80aea0"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 446.801422,-314.482605 L 442.723236,-324.878510"
                                className="id_107 id_112" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -260.326782,-444.210815 L -257.269440,-458.263275"
                                className="id_108 id_113" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 276.767273,194.834396 L 273.954346,204.956619"
                                className="id_109 id_114" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 0.237358,-67.129715 L 10.600327,-61.952728"
                                className="id_111 id_169" stroke-opacity="1.0" stroke="#e03d2d"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -16.140194,-78.831940 L -24.605495,-87.164902"
                                className="id_111 id_179" stroke-opacity="1.0" stroke="#e03d2d"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 431.945679,-347.322693 L 425.843231,-357.087433"
                                className="id_112 id_115" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -253.634872,-482.910431 L -252.228470,-514.435852"
                                className="id_113 id_120" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 264.240326,227.626923 L 257.337738,237.582550"
                                className="id_114 id_256" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 412.098358,-377.957153 L 405.045380,-387.875061"
                                className="id_115 id_122" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 98.160065,-304.864532 L 103.470337,-297.643188"
                                className="id_116 id_184" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 114.696190,199.870041 L 130.004181,191.402420"
                                className="id_118 id_132" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 114.286697,210.411377 L 127.335953,219.015259"
                                className="id_118 id_257" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -388.494873,147.638229 L -389.665649,157.661057"
                                className="id_119 id_213" stroke-opacity="1.0" stroke="#d11f12"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -262.009827,-531.399231 L -273.112793,-532.892883"
                                className="id_120 id_123" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -15.059974,562.615356 L -2.050665,555.494324"
                                className="id_121 id_216" stroke-opacity="1.0" stroke="#4d1b05"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -35.032539,569.970398 L -75.880966,578.457764"
                                className="id_121 id_199" stroke-opacity="1.0" stroke="#4d1b05"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -31.535872,559.643005 L -40.993362,548.706421"
                                className="id_121 id_230" stroke-opacity="1.0" stroke="#9c5e13"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 389.002167,-406.879761 L 381.643890,-413.667816"
                                className="id_122 id_127" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -285.855774,-544.664856 L -283.414429,-555.901672"
                                className="id_123 id_128" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 247.446228,293.337799 L 252.378632,300.950928"
                                className="id_124 id_129" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 71.222343,-172.760712 L 76.753822,-163.643341"
                                className="id_126 id_153" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 59.497116,-173.268234 L 51.737827,-162.667297"
                                className="id_126 id_194" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 361.532837,-428.015625 L 351.211121,-432.760834"
                                className="id_127 id_131" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -285.766876,-562.232605 L -331.917450,-492.828400"
                                className="id_128 id_172" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 270.415741,315.077698 L 282.219116,316.914825"
                                className="id_129 id_133" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 327.665100,-437.742676 L 317.060944,-436.370056"
                                className="id_131 id_140" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 145.781311,174.499817 L 148.752243,163.695694"
                                className="id_132 id_168" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 306.646149,316.440643 L 315.527771,313.869171"
                                className="id_133 id_144" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -208.006653,-623.410950 L -181.898560,-619.743103"
                                className="id_134 id_155" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -219.045837,-614.682922 L -219.916718,-605.366455"
                                className="id_134 id_143" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -270.745331,-573.729187 L -235.737183,-585.428101"
                                className="id_128 id_143" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -246.797913,-539.438843 L -228.137604,-576.663269"
                                className="id_120 id_143" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -257.638062,-538.619263 L -271.567871,-558.313416"
                                className="id_120 id_128" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -488.066833,299.868073 L -464.446777,298.215668"
                                className="id_137 id_174" stroke-opacity="1.0" stroke="#839aa3"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -453.467712,323.792633 L -451.589417,312.320038"
                                className="id_106 id_174" stroke-opacity="1.0" stroke="#c9705a"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -269.147156,517.134033 L -236.951355,482.156464"
                                className="id_138 id_149" stroke-opacity="1.0" stroke="#dbc683"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -237.029785,585.086609 L -174.068359,581.540466"
                                className="id_138 id_204" stroke-opacity="1.0" stroke="#dbc683"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -254.102631,534.591187 L -229.008667,517.577087"
                                className="id_138 id_183" stroke-opacity="1.0" stroke="#dbc683"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -302.063171,496.963562 L -276.461578,428.013031"
                                className="id_138 id_191" stroke-opacity="1.0" stroke="#dbc683"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -313.485748,493.482819 L -304.119110,454.540833"
                                className="id_138 id_195" stroke-opacity="1.0" stroke="#dbc683"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -346.215485,491.147400 L -355.773102,389.307831"
                                className="id_138 id_228" stroke-opacity="1.0" stroke="#d18053"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -285.763123,504.756836 L -254.309769,451.859283"
                                className="id_138 id_219" stroke-opacity="1.0" stroke="#767d66"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -360.746521,493.601776 L -370.829620,452.590179"
                                className="id_138 id_173" stroke-opacity="1.0" stroke="#dbc683"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -531.328430,-218.835236 L -536.966370,-233.587479"
                                className="id_139 id_207" stroke-opacity="1.0" stroke="#3ba498"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -533.825867,-201.545105 L -543.147888,-189.331970"
                                className="id_139 id_193" stroke-opacity="1.0" stroke="#9fb23d"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 294.148468,-427.921051 L 287.172546,-422.144348"
                                className="id_140 id_147" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 563.187622,-69.726715 L 574.589355,-61.206718"
                                className="id_69 id_239" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 582.182251,-43.259125 L 577.604492,-33.976360"
                                className="id_239 id_240" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 565.969421,-11.863436 L 560.020935,-1.562302"
                                className="id_240 id_241" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 545.806396,18.838856 L 539.585876,25.705948"
                                className="id_241 id_242" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 525.821045,46.115490 L 520.759460,58.846043"
                                className="id_242 id_243" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 516.875061,82.646423 L 518.420593,91.841957"
                                className="id_243 id_244" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 523.077881,116.395966 L 526.267700,130.738007"
                                className="id_244 id_245" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 529.168701,155.373901 L 528.729248,167.723236"
                                className="id_245 id_246" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 525.017761,192.195297 L 521.575500,202.465057"
                                className="id_246 id_247" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 509.559662,223.576233 L 502.206970,230.563919"
                                className="id_247 id_248" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 481.409302,242.122787 L 470.804718,243.432343"
                                className="id_248 id_249" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 446.936523,240.873337 L 438.472260,236.729065"
                                className="id_249 id_141" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 418.105804,222.393036 L 410.725952,213.989807"
                                className="id_141 id_250" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 397.678192,193.228119 L 394.647858,184.096680"
                                className="id_250 id_251" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 390.251282,159.865524 L 390.620117,148.625229"
                                className="id_251 id_252" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 393.102295,123.833351 L 395.499481,112.029419"
                                className="id_252 id_177" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 396.786377,87.102547 L 394.705566,75.068741"
                                className="id_177 id_253" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 383.898163,54.639114 L 373.117676,47.258911"
                                className="id_253 id_254" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 350.790161,37.787624 L 341.712860,36.877316"
                                className="id_254 id_255" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 316.787933,35.313274 L 301.370117,35.209526"
                                className="id_255 id_220" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -212.210342,-594.787476 L -180.415421,-610.632507"
                                className="id_143 id_155" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 340.679321,309.750214 L 350.766510,309.904022"
                                className="id_144 id_148" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -594.493958,-172.285706 L -567.449280,-175.477249"
                                className="id_145 id_193" stroke-opacity="1.0" stroke="#9fb23d"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -599.568848,-180.536621 L -562.525330,-236.415115"
                                className="id_145 id_207" stroke-opacity="1.0" stroke="#3ba498"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -15.101429,-289.713959 L -6.407544,-295.688995"
                                className="id_68 id_146" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 278.924225,-403.139252 L 282.704803,-392.342255"
                                className="id_147 id_158" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 374.123169,315.622467 L 384.256348,322.277924"
                                className="id_148 id_160" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 267.741516,-406.418030 L 258.672302,-399.327271"
                                className="id_147 id_151" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 97.833397,153.364594 L 95.812561,137.633926"
                                className="id_152 id_182" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -158.267242,-610.924133 L -134.784103,-591.901855"
                                className="id_155 id_159" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -155.987518,-616.305359 L -72.849106,-606.228943"
                                className="id_155 id_181" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -244.380356,160.172379 L -227.653900,176.254181"
                                className="id_156 id_198" stroke-opacity="1.0" stroke="#839aa3"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -79.469963,513.325867 L -67.907875,522.671448"
                                className="id_157 id_230" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 288.506317,-368.220734 L 289.541351,-356.006287"
                                className="id_158 id_170" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -113.144325,-581.895752 L -97.999771,-581.039429"
                                className="id_159 id_167" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 399.276917,340.199402 L 402.226929,351.708191"
                                className="id_160 id_171" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 7.739763,196.940628 L -3.317605,185.799774"
                                className="id_89 id_161" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -320.691284,-204.262177 L -316.969482,-221.818909"
                                className="id_164 id_200" stroke-opacity="1.0" stroke="#c275b8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -416.466522,433.061218 L -389.548767,436.122894"
                                className="id_165 id_173" stroke-opacity="1.0" stroke="#dbc683"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -432.664673,-46.387691 L -96.733994,-196.483337"
                                className="id_258 id_22" stroke-opacity="1.0" stroke="#c19abc"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -75.775879,-587.082458 L -68.728043,-593.782166"
                                className="id_167 id_181" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 293.396423,-331.010864 L 296.561249,-318.880646"
                                className="id_170 id_180" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 400.683167,375.116058 L 393.913330,386.188599"
                                className="id_171 id_176" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 377.284424,403.727783 L 366.417877,409.579987"
                                className="id_176 id_189" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -434.954712,-49.603096 L -255.892365,-240.569855"
                                className="id_258 id_1" stroke-opacity="1.0" stroke="#7c91aa"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 125.036560,-123.132477 L 106.146057,-101.168709"
                                className="id_178 id_196" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 305.460541,-295.340637 L 311.850006,-284.185303"
                                className="id_180 id_197" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -51.648479,-595.861267 L -41.419907,-581.176453"
                                className="id_181 id_190" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -47.318367,-602.824219 L 15.922952,-593.246704"
                                className="id_181 id_209" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -517.043213,434.675690 L -422.804718,355.270447"
                                className="id_94 id_187" stroke-opacity="1.0" stroke="#dbc683"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -377.510864,-432.741028 L -391.989166,-417.208466"
                                className="id_188 id_222" stroke-opacity="1.0" stroke="#887a65"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 344.025146,420.643860 L 333.670135,425.098053"
                                className="id_189 id_201" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -22.762129,-566.635010 L -11.209743,-564.229553"
                                className="id_190 id_202" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 325.286835,-259.586121 L 331.232727,-247.908478"
                                className="id_197 id_205" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -126.448593,582.697266 L -142.606552,581.661926"
                                className="id_199 id_204" stroke-opacity="1.0" stroke="#947044"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 313.334045,438.575562 L 307.099609,445.754700"
                                className="id_201 id_214" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 10.507361,-568.680481 L 20.675915,-579.890503"
                                className="id_202 id_209" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 337.977386,-222.757141 L 337.468933,-211.457031"
                                className="id_205 id_212" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -471.138611,-349.817352 L -490.462677,-334.739532"
                                className="id_206 id_208" stroke-opacity="1.0" stroke="#2552a8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -449.595245,-367.058228 L -416.297943,-394.385742"
                                className="id_206 id_222" stroke-opacity="1.0" stroke="#2552a8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -473.253906,-362.946716 L -503.666138,-373.811249"
                                className="id_206 id_229" stroke-opacity="1.0" stroke="#2552a8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -535.160583,-279.674896 L -527.017517,-293.321289"
                                className="id_207 id_208" stroke-opacity="1.0" stroke="#2b61bd"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -514.750305,-340.455383 L -516.890991,-363.546021"
                                className="id_208 id_229" stroke-opacity="1.0" stroke="#2552a8"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 35.663334,-582.288818 L 48.510334,-559.491821"
                                className="id_209 id_217" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 39.726082,-586.584900 L 74.269615,-569.584045"
                                className="id_209 id_224" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 328.897400,-189.832626 L 318.503326,-181.334366"
                                className="id_212 id_221" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 293.015564,466.945129 L 288.075531,478.774719"
                                className="id_214 id_218" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 64.986649,-551.001343 L 74.451775,-555.978821"
                                className="id_217 id_224" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 278.070618,502.097321 L 274.275146,510.605011"
                                className="id_218 id_225" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 295.970856,-170.096985 L 286.211914,-168.809677"
                                className="id_221 id_223" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 261.818207,-163.794907 L 251.691147,-160.547958"
                                className="id_223 id_231" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 55.338913,-536.088135 L 54.338295,-519.905945"
                                className="id_217 id_226" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 258.606384,521.362000 L 246.067307,517.502625"
                                className="id_225 id_233" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 93.420761,-554.738953 L 105.144440,-537.807739"
                                className="id_224 id_232" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 258.606384,521.362000 L 246.067307,517.502625"
                                className="id_225 id_233" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 115.269318,-515.602112 L 117.530075,-501.525299"
                                className="id_232 id_235" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 226.943130,504.310822 L 221.114044,493.622284"
                                className="id_233 id_236" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -346.477325,-472.054230 L -361.640717,-452.017059"
                                className="id_172 id_188" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -431.796936,-42.100433 L 102.589729,-30.989082"
                                className="id_258 id_5" stroke-opacity="1.0" stroke="#7c91aa"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -441.319916,-32.319595 L -428.588654,235.480728"
                                className="id_258 id_29" stroke-opacity="1.0" stroke="#c47d72"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -432.956268,-37.630585 L -172.689011,100.114731"
                                className="id_258 id_11" stroke-opacity="1.0" stroke="#c8b269"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -443.978058,-32.549568 L -496.026001,200.090042"
                                className="id_258 id_4" stroke-opacity="1.0" stroke="#dbc474"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -447.002655,-33.771465 L -582.885681,188.969620"
                                className="id_258 id_19" stroke-opacity="1.0" stroke="#cd6260"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -212.210342,-594.787476 L -180.415421,-610.632507"
                                className="id_143 id_155" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -272.698181,-577.138062 L -229.537827,-614.836060"
                                className="id_128 id_134" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -106.097275,85.186859 L -91.710083,73.832352"
                                className="id_16 id_18" stroke-opacity="1.0" stroke="#d1a513"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -435.877380,-34.247025 L -162.802826,337.763611"
                                className="id_258 id_58" stroke-opacity="1.0" stroke="#d5b171"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -434.224701,-35.774231 L -63.619366,284.113281"
                                className="id_258 id_31" stroke-opacity="1.0" stroke="#d5b171"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -431.970520,-40.441727 L -229.445724,-1.962390"
                                className="id_258 id_26" stroke-opacity="1.0" stroke="#d1afa4"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -431.914978,-43.854183 L -298.513428,-64.727196"
                                className="id_258 id_110" stroke-opacity="1.0" stroke="#98ae83"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -436.227936,-34.001068 L -295.300537,176.301346"
                                className="id_258 id_117" stroke-opacity="1.0" stroke="#d5b171"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -434.935303,-35.031788 L -293.599274,114.897781"
                                className="id_258 id_103" stroke-opacity="1.0" stroke="#bf897e"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -432.613464,-46.271111 L -323.732025,-93.266060"
                                className="id_258 id_10" stroke-opacity="1.0" stroke="#c8b269"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -437.229431,-33.411251 L -356.516724,123.884216"
                                className="id_258 id_15" stroke-opacity="1.0" stroke="#c8b269"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -431.845306,-41.304287 L -318.300598,-29.846157"
                                className="id_258 id_17" stroke-opacity="1.0" stroke="#c8b269"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 37.808228,241.297104 L 58.155788,233.984283"
                                className="id_86 id_105" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 104.161377,194.741714 L 101.543945,178.468521"
                                className="id_118 id_152" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 90.672821,112.498940 L 87.086700,101.356781"
                                className="id_182 id_234" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -53.148899,283.569031 L -58.331497,254.687393"
                                className="id_31 id_99" stroke-opacity="1.0" stroke="#eba222"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -436.603241,-50.855122 L -371.888123,-157.395309"
                                className="id_258 id_28" stroke-opacity="1.0" stroke="#c19abc"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -417.939606,249.340805 L -385.585052,245.684250"
                                className="id_29 id_237" stroke-opacity="1.0" stroke="#df8126"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -361.276611,240.597137 L -347.043671,235.446884"
                                className="id_237 id_154" stroke-opacity="1.0" stroke="#f7c928"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -431.819122,-43.005756 L -123.306496,-64.575165"
                                className="id_258 id_21" stroke-opacity="1.0" stroke="#c8b269"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -437.656738,-51.411983 L -318.901428,-312.674377"
                                className="id_258 id_63" stroke-opacity="1.0" stroke="#d5b171"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -449.665833,-48.476479 L -592.931396,-160.746536"
                                className="id_258 id_145" stroke-opacity="1.0" stroke="#83cc8f"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -446.367523,-51.201572 L -520.899414,-196.154266"
                                className="id_258 id_139" stroke-opacity="1.0" stroke="#83cc8f"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -447.990356,-50.157818 L -518.039673,-138.906876"
                                className="id_258 id_82" stroke-opacity="1.0" stroke="#6c8263"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -442.378143,-52.291283 L -459.164063,-339.539551"
                                className="id_258 id_206" stroke-opacity="1.0" stroke="#7289b4"/>
                            <path fill="none" stroke-width="1.0"
                                d="M 246.890549,259.727264 L 244.859619,270.218628"
                                className="id_256 id_124" stroke-opacity="1.0" stroke="#396394"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -433.524231,-36.687069 L -283.649292,65.178757"
                                className="id_258 id_34" stroke-opacity="1.0" stroke="#c19abc"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -431.876617,-43.585064 L -237.740936,-68.575851"
                                className="id_258 id_45" stroke-opacity="1.0" stroke="#dbc474"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -432.720612,-46.510643 L -278.659973,-117.857513"
                                className="id_258 id_77" stroke-opacity="1.0" stroke="#6c8263"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -431.907349,-43.804569 L -346.558777,-56.720280"
                                className="id_258 id_162" stroke-opacity="1.0" stroke="#d5b171"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -431.815094,-41.670967 L -276.059418,-31.723686"
                                className="id_258 id_175" stroke-opacity="1.0" stroke="#cdc3a1"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -433.285980,-47.561913 L -364.322571,-90.142029"
                                className="id_258 id_142" stroke-opacity="1.0" stroke="#7c91aa"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -432.362366,-38.987244 L -225.707825,33.774052"
                                className="id_258 id_210" stroke-opacity="1.0" stroke="#bf6662"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -121.997635,-308.347107 L -113.936317,-321.037445"
                                className="id_20 id_163" stroke-opacity="1.0" stroke="#2b921a"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -432.077148,-39.948708 L -278.902374,-2.755193"
                                className="id_258 id_130" stroke-opacity="1.0" stroke="#ca68a6"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -432.674347,-38.207336 L -316.770935,13.908415"
                                className="id_258 id_227" stroke-opacity="1.0" stroke="#7c91aa"/>
                            <path fill="none" stroke-width="1.0"
                                d="M -438.895203,-32.737915 L -391.717010,122.979866"
                                className="id_258 id_119" stroke-opacity="1.0" stroke="#cd6260"/>
                        </g>
                        <g id="arrows">
                            <polyline fill="#858453" fill-opacity="1.0" className="id_1 id_2"
                                    points="-221.319138,-272.516266 -223.471619,-267.357117 -226.737946,-271.142761"
                                    stroke="none"/>
                            <polyline fill="#d1a513" fill-opacity="1.0" className="id_2 id_6"
                                    points="-205.841049,-340.905731 -203.795227,-335.703400 -208.775452,-336.147675"
                                    stroke="none"/>
                            <polyline fill="#858453" fill-opacity="1.0" className="id_3 id_6"
                                    points="-196.640747,-343.565735 -191.620026,-341.107605 -195.594788,-338.074280"
                                    stroke="none"/>
                            <polyline fill="#d1a513" fill-opacity="1.0" className="id_6 id_7"
                                    points="-228.288132,-336.352661 -225.789719,-341.353455 -222.788437,-337.354431"
                                    stroke="none"/>
                            <polyline fill="#d1a513" fill-opacity="1.0" className="id_2 id_7"
                                    points="-231.762955,-321.182037 -227.247604,-317.886353 -231.690292,-315.592346"
                                    stroke="none"/>
                            <polyline fill="#d1a513" fill-opacity="1.0" className="id_2 id_9"
                                    points="-174.909195,-285.039185 -179.624786,-282.037018 -180.140289,-287.010345"
                                    stroke="none"/>
                            <polyline fill="#d1a513" fill-opacity="1.0" className="id_6 id_8"
                                    points="-224.452377,-380.143677 -219.437805,-377.673065 -223.420135,-374.649628"
                                    stroke="none"/>
                            <polyline fill="#d1a513" fill-opacity="1.0" className="id_6 id_23"
                                    points="-185.372192,-376.617310 -186.724792,-371.193237 -190.523010,-374.444946"
                                    stroke="none"/>
                            <polyline fill="#7e9b16" fill-opacity="1.0" className="id_9 id_20"
                                    points="-137.013687,-296.198029 -140.830399,-292.113586 -142.571274,-296.800720"
                                    stroke="none"/>
                            <polyline fill="#d1a513" fill-opacity="1.0" className="id_9 id_14"
                                    points="-179.559784,-250.031982 -179.880920,-255.612915 -175.287720,-253.637451"
                                    stroke="none"/>
                            <polyline fill="#d1a513" fill-opacity="1.0" className="id_9 id_12"
                                    points="-147.260284,-263.154694 -152.224503,-265.725006 -148.182571,-268.668243"
                                    stroke="none"/>
                            <polyline fill="#d55409" fill-opacity="1.0" className="id_9 id_52"
                                    points="-152.472412,-326.133179 -151.458374,-320.635742 -156.261932,-322.023499"
                                    stroke="none"/>
                            <polyline fill="#e08510" fill-opacity="1.0" className="id_11 id_13"
                                    points="-158.314575,82.790894 -155.870728,87.818581 -160.870422,87.762581"
                                    stroke="none"/>
                            <polyline fill="#d1a513" fill-opacity="1.0" className="id_11 id_16"
                                    points="-123.679749,94.962059 -127.532791,99.012268 -129.231735,94.309753"
                                    stroke="none"/>
                            <polyline fill="#ddc63d" fill-opacity="1.0" className="id_11 id_42"
                                    points="-144.483047,129.509125 -149.290604,126.656502 -145.085495,123.951500"
                                    stroke="none"/>
                            <polyline fill="#c98d65" fill-opacity="1.0" className="id_18 id_70"
                                    points="-50.656353,76.424255 -56.235695,76.771996 -54.282158,72.169426"
                                    stroke="none"/>
                            <polyline fill="#d87120" fill-opacity="1.0" className="id_18 id_27"
                                    points="-105.004883,43.278015 -99.552910,44.513325 -102.721947,48.380779"
                                    stroke="none"/>
                            <polyline fill="#df8126" fill-opacity="1.0" className="id_4 id_29"
                                    points="-436.829742,246.009995 -442.419922,246.021439 -440.192993,241.544724"
                                    stroke="none"/>
                            <polyline fill="#8eaf73" fill-opacity="1.0" className="id_4 id_35"
                                    points="-573.335388,252.426056 -570.006165,247.935333 -567.745300,252.394958"
                                    stroke="none"/>
                            <polyline fill="#d3852a" fill-opacity="1.0" className="id_4 id_62"
                                    points="-469.246826,191.668289 -471.675720,196.703217 -474.732117,192.746124"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_5 id_24"
                                    points="164.148254,-41.308159 159.837082,-37.749535 158.714645,-42.621918"
                                    stroke="none"/>
                            <polyline fill="#7f4d5f" fill-opacity="1.0" className="id_19 id_35"
                                    points="-585.550232,245.888931 -588.625183,241.220459 -583.660461,240.627869"
                                    stroke="none"/>
                            <polyline fill="#e86614" fill-opacity="1.0" className="id_19 id_44"
                                    points="-654.980469,200.587021 -649.929077,198.192703 -650.034180,203.191605"
                                    stroke="none"/>
                            <polyline fill="#d87120" fill-opacity="1.0" className="id_21 id_53"
                                    points="-74.381798,-64.772346 -79.443970,-62.400780 -79.316360,-67.399147"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_22 id_25"
                                    points="-48.886116,-215.253128 -52.739086,-211.202866 -54.438107,-215.905350"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_22 id_30"
                                    points="-81.574165,-258.942535 -78.877464,-254.045807 -83.873512,-253.847137"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_22 id_39"
                                    points="-51.661381,-244.710602 -52.425171,-239.172852 -56.549850,-241.998993"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_22 id_43"
                                    points="-59.909241,-184.331360 -65.193924,-186.154022 -61.621910,-189.652710"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_24 id_32"
                                    points="237.998230,-53.130981 233.407822,-49.940651 232.691727,-54.889107"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_24 id_74"
                                    points="172.616852,-6.820113 170.769989,-12.096394 175.729767,-11.463366"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_25 id_51"
                                    points="-4.722933,-232.298462 -8.461593,-228.142456 -10.290936,-232.795776"
                                    stroke="none"/>
                            <polyline fill="#839aa3" fill-opacity="1.0" className="id_26 id_48"
                                    points="-185.156509,4.073515 -190.398926,6.014417 -189.854675,1.044124"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_28 id_164"
                                    points="-331.979126,-189.180069 -335.192749,-184.605927 -337.566589,-189.006470"
                                    stroke="none"/>
                            <polyline fill="#d56c56" fill-opacity="1.0" className="id_29 id_174"
                                    points="-444.807556,287.693817 -445.013428,282.107422 -440.461975,284.177307"
                                    stroke="none"/>
                            <polyline fill="#c83a24" fill-opacity="1.0" className="id_29 id_228"
                                    points="-362.247314,365.336700 -366.898346,362.235474 -362.556915,359.755127"
                                    stroke="none"/>
                            <polyline fill="#c83a24" fill-opacity="1.0" className="id_29 id_213"
                                    points="-395.754822,181.973984 -395.614471,187.562393 -400.141327,185.439316"
                                    stroke="none"/>
                            <polyline fill="#df8126" fill-opacity="1.0" className="id_29 id_237"
                                    points="-380.616669,245.122757 -385.304291,248.168442 -385.865814,243.200058"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_30 id_39"
                                    points="-55.148052,-257.019531 -60.732407,-256.764557 -58.702629,-261.334015"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_30 id_33"
                                    points="-70.072044,-292.619995 -70.082764,-287.029816 -74.550598,-289.274445"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_31 id_46"
                                    points="-0.079005,424.916565 -4.233153,421.175842 0.421089,419.348816"
                                    stroke="none"/>
                            <polyline fill="#8e897a" fill-opacity="1.0" className="id_31 id_49"
                                    points="-78.723709,270.511993 -73.321449,271.949219 -76.632133,275.696106"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_31 id_102"
                                    points="-34.844097,265.495117 -35.076809,271.080414 -39.451984,268.660126"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_31 id_86"
                                    points="13.561273,253.265808 10.710633,258.074524 8.003907,253.870529"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_32 id_36"
                                    points="319.762024,-62.139217 315.020477,-59.178219 314.548309,-64.155876"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_32 id_38"
                                    points="233.297668,-87.995659 238.558716,-86.105820 234.942413,-82.652924"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_32 id_186"
                                    points="239.810013,-11.884295 239.895584,-17.473810 244.332962,-15.169546"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_33 id_41"
                                    points="-44.495491,-318.087585 -46.966492,-313.073212 -49.989609,-317.055756"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_34 id_135"
                                    points="-241.596863,89.710991 -247.183823,89.521721 -244.797623,85.127861"
                                    stroke="none"/>
                            <polyline fill="#2596be" fill-opacity="1.0" className="id_35 id_37"
                                    points="-551.684570,383.318634 -555.356689,379.103699 -550.515869,377.851990"
                                    stroke="none"/>
                            <polyline fill="#8eaf73" fill-opacity="1.0" className="id_35 id_44"
                                    points="-656.943237,206.559631 -651.416138,207.396896 -654.296753,211.483688"
                                    stroke="none"/>
                            <polyline fill="#2596be" fill-opacity="1.0" className="id_35 id_59"
                                    points="-605.526855,335.571411 -606.608459,330.086853 -601.788147,331.415405"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_36 id_40"
                                    points="361.525055,-66.000061 356.774200,-63.053963 356.317657,-68.033073"
                                    stroke="none"/>
                            <polyline fill="#2596be" fill-opacity="1.0" className="id_37 id_59"
                                    points="-586.278503,376.399353 -580.693481,376.159698 -582.735840,380.723602"
                                    stroke="none"/>
                            <polyline fill="#2596be" fill-opacity="1.0" className="id_37 id_91"
                                    points="-527.540894,381.888855 -530.846924,386.396667 -533.130737,381.948730"
                                    stroke="none"/>
                            <polyline fill="#80aea0" fill-opacity="1.0" className="id_37 id_94"
                                    points="-533.188904,430.806305 -537.439331,427.175323 -532.834351,425.227386"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_38 id_85"
                                    points="195.226700,-111.966415 200.814484,-111.803085 198.448700,-107.398193"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_39 id_68"
                                    points="-30.248985,-274.883423 -31.137569,-269.364319 -35.197414,-272.282837"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_40 id_47"
                                    points="402.902985,-69.282204 398.105072,-66.413345 397.729156,-71.399185"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_41 id_55"
                                    points="-12.887872,-333.080261 -16.679474,-328.972504 -18.449047,-333.648895"
                                    stroke="none"/>
                            <polyline fill="#f7c928" fill-opacity="1.0" className="id_44 id_238"
                                    points="-639.732483,126.331062 -639.030884,131.877029 -643.748291,130.219894"
                                    stroke="none"/>
                            <polyline fill="#f7c928" fill-opacity="1.0" className="id_238 id_150"
                                    points="-573.955261,84.084145 -577.219116,88.622597 -579.544312,84.196159"
                                    stroke="none"/>
                            <polyline fill="#c4c393" fill-opacity="1.0" className="id_45 id_192"
                                    points="-194.396805,-70.998314 -199.359238,-68.424561 -199.433273,-73.424011"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_46 id_50"
                                    points="62.049995,445.388885 56.757706,447.189362 57.434258,442.235321"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_46 id_57"
                                    points="-29.709404,411.711151 -24.207930,412.703003 -27.202002,416.707458"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_46 id_66"
                                    points="64.388580,391.113831 61.986973,396.161835 58.909222,392.221344"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_46 id_71"
                                    points="-72.644501,424.009369 -67.288300,422.408997 -68.150497,427.334106"
                                    stroke="none"/>
                            <polyline fill="#9c5e13" fill-opacity="1.0" className="id_46 id_73"
                                    points="-5.989838,507.669342 -7.693016,502.344940 -2.752228,503.112152"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_47 id_54"
                                    points="445.538818,-73.311546 440.813416,-70.324852 440.314209,-75.299873"
                                    stroke="none"/>
                            <polyline fill="#2596be" fill-opacity="1.0" className="id_48 id_61"
                                    points="-148.258698,5.643492 -153.300980,8.057059 -153.214920,3.057800"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_50 id_64"
                                    points="100.691353,441.710938 96.204086,445.044769 95.331924,440.121429"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_51 id_65"
                                    points="37.240570,-219.095734 31.651608,-219.211975 33.980183,-223.636658"
                                    stroke="none"/>
                            <polyline fill="#e03d2d" fill-opacity="1.0" className="id_53 id_79"
                                    points="-40.931171,-40.202343 -46.171211,-42.149643 -42.517357,-45.562759"
                                    stroke="none"/>
                            <polyline fill="#e03d2d" fill-opacity="1.0" className="id_53 id_76"
                                    points="-68.633850,-35.319519 -70.252014,-40.670368 -65.324066,-39.824558"
                                    stroke="none"/>
                            <polyline fill="#e03d2d" fill-opacity="1.0" className="id_53 id_111"
                                    points="-18.981541,-70.357506 -23.613674,-67.228081 -24.264366,-72.185555"
                                    stroke="none"/>
                            <polyline fill="#e03d2d" fill-opacity="1.0" className="id_53 id_179"
                                    points="-42.012535,-90.041862 -43.333660,-84.610039 -47.150661,-87.839668"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_54 id_60"
                                    points="494.904938,-74.007133 489.885895,-71.545624 489.924286,-76.545471"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_55 id_84"
                                    points="20.486176,-338.697815 15.720291,-335.776123 15.289282,-340.757507"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_56 id_66"
                                    points="70.303329,374.595093 66.772293,370.261292 71.651749,369.169983"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_57 id_71"
                                    points="-72.949699,413.975525 -68.666077,410.383789 -67.506134,415.247375"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_57 id_67"
                                    points="-23.301310,380.128082 -23.612772,385.709564 -27.953375,383.227814"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_58 id_185"
                                    points="-153.480728,324.270630 -150.980072,329.270294 -155.980072,329.270966"
                                    stroke="none"/>
                            <polyline fill="#2596be" fill-opacity="1.0" className="id_59 id_137"
                                    points="-558.164185,324.969482 -560.791382,329.903809 -563.687988,325.828308"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_60 id_72"
                                    points="499.860626,-97.733917 503.342804,-93.360779 498.451385,-92.324280"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_60 id_69"
                                    points="540.420410,-76.418999 535.607361,-73.575607 535.257874,-78.563370"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_63 id_95"
                                    points="-298.174835,-357.740631 -298.003693,-352.153076 -302.542206,-354.251160"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_64 id_203"
                                    points="122.920326,417.795319 122.697525,423.381042 118.318054,420.968506"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_65 id_126"
                                    points="60.312065,-190.866776 55.599236,-193.873306 59.889595,-196.440964"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_66 id_90"
                                    points="97.519676,362.972595 95.393646,368.142700 92.107971,364.373840"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_67 id_81"
                                    points="-7.216946,346.195251 -6.944226,351.778778 -11.520125,349.763519"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_43 id_211"
                                    points="-31.573463,-157.166138 -36.931686,-158.759705 -33.513542,-162.408844"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_69 id_239"
                                    points="578.594604,-58.213760 573.092896,-59.204082 576.085815,-63.209354"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_70 id_215"
                                    points="-17.565937,52.471191 -18.480434,57.986053 -22.526524,55.048515"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_71 id_97"
                                    points="-94.505959,369.144135 -92.263573,374.264862 -97.257103,374.010468"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_71 id_98"
                                    points="-126.062065,454.462891 -124.778374,449.022125 -120.939217,452.225372"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_71 id_157"
                                    points="-97.124191,476.321106 -99.620552,471.319275 -94.620552,471.322937"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_58 id_71"
                                    points="-112.747772,400.491699 -117.843376,398.192810 -113.966042,395.035889"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_72 id_78"
                                    points="490.094116,-135.674438 493.823547,-131.510147 489.000366,-130.192307"
                                    stroke="none"/>
                            <polyline fill="#4d1b05" fill-opacity="1.0" className="id_73 id_121"
                                    points="-21.053570,557.588318 -21.821337,552.051086 -17.084475,553.651794"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_74 id_75"
                                    points="175.577576,29.852938 172.327942,25.304329 177.266693,24.524059"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_75 id_80"
                                    points="193.200104,58.701450 188.061279,56.500885 191.877258,53.270050"
                                    stroke="none"/>
                            <polyline fill="#194407" fill-opacity="1.0" className="id_77 id_125"
                                    points="-237.912140,-125.537544 -242.786270,-122.800247 -243.026443,-127.794479"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_78 id_83"
                                    points="471.550476,-163.931000 476.699615,-161.754715 472.898956,-158.505905"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_80 id_87"
                                    points="219.417496,84.298592 214.036346,82.784271 217.400269,79.085083"
                                    stroke="none"/>
                            <polyline fill="#896811" fill-opacity="1.0" className="id_82 id_193"
                                    points="-545.370850,-169.846115 -540.121094,-167.925217 -543.757690,-164.493759"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_83 id_88"
                                    points="461.154663,-196.286957 464.402008,-191.736694 459.462860,-190.958923"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_84 id_101"
                                    points="53.831108,-333.391815 48.358826,-332.249847 49.634155,-337.084442"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_85 id_178"
                                    points="141.566895,-128.387314 147.023865,-129.600403 145.811554,-124.749596"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_86 id_89"
                                    points="17.311750,214.077713 20.916389,218.350479 16.056316,219.525070"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_87 id_93"
                                    points="246.041946,110.049629 240.729355,108.310013 244.246078,104.755783"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_88 id_92"
                                    points="475.219604,-228.296036 474.378845,-222.769455 470.293884,-225.652725"
                                    stroke="none"/>
                            <polyline fill="#a5813b" fill-opacity="1.0" className="id_89 id_136"
                                    points="21.473457,178.834259 22.641426,184.301056 17.800804,183.048706"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_90 id_104"
                                    points="113.838806,330.069305 114.647919,335.600616 109.899231,334.035370"
                                    stroke="none"/>
                            <polyline fill="#80aea0" fill-opacity="1.0" className="id_91 id_94"
                                    points="-525.586853,429.867859 -527.287537,424.542664 -522.347107,425.312195"
                                    stroke="none"/>
                            <polyline fill="#6a6c75" fill-opacity="1.0" className="id_91 id_106"
                                    points="-466.111542,343.205475 -468.931122,348.032440 -471.664886,343.845978"
                                    stroke="none"/>
                            <polyline fill="#2596be" fill-opacity="1.0" className="id_91 id_137"
                                    points="-521.799927,340.933167 -518.693420,345.580688 -523.653992,346.206909"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_92 id_100"
                                    points="474.714966,-261.994690 478.335602,-257.735443 473.479950,-256.542633"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_93 id_96"
                                    points="266.152161,138.325455 261.409637,135.365967 265.674225,132.755737"
                                    stroke="none"/>
                            <polyline fill="#dbc683" fill-opacity="1.0" className="id_94 id_138"
                                    points="-416.093872,529.686768 -421.580566,528.616150 -418.529419,524.655090"
                                    stroke="none"/>
                            <polyline fill="#dbc683" fill-opacity="1.0" className="id_94 id_165"
                                    points="-490.922638,436.259430 -495.329346,439.699005 -496.318359,434.797821"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_95 id_108"
                                    points="-266.685303,-425.379333 -266.536560,-419.791138 -271.066589,-421.907410"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_96 id_109"
                                    points="277.384766,175.413986 273.908386,171.036224 278.801147,170.006226"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_98 id_157"
                                    points="-112.914070,482.688110 -118.184532,480.824707 -114.585640,477.353699"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_100 id_107"
                                    points="455.924713,-296.802856 460.753021,-293.985443 456.567780,-291.249786"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_101 id_116"
                                    points="83.750633,-318.212433 78.185127,-318.736938 80.830940,-322.979553"
                                    stroke="none"/>
                            <polyline fill="#d07963" fill-opacity="1.0" className="id_103 id_156"
                                    points="-260.285431,145.689453 -265.704742,144.317978 -262.439850,140.531113"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_105 id_118"
                                    points="97.531105,210.785309 94.951622,215.744766 92.015846,211.697403"
                                    stroke="none"/>
                            <polyline fill="#80aea0" fill-opacity="1.0" className="id_59 id_94"
                                    points="-537.997314,434.179230 -543.363708,432.613373 -539.964417,428.946625"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_107 id_112"
                                    points="440.897247,-329.533173 445.050568,-325.791504 440.395905,-323.965515"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_108 id_113"
                                    points="-256.206482,-463.148987 -254.826584,-457.731781 -259.712280,-458.794769"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_109 id_114"
                                    points="272.615601,209.774063 271.545624,204.287247 276.363068,205.625992"
                                    stroke="none"/>
                            <polyline fill="#e03d2d" fill-opacity="1.0" className="id_111 id_169"
                                    points="15.073239,-59.718212 9.483070,-59.716270 11.717585,-64.189186"
                                    stroke="none"/>
                            <polyline fill="#e03d2d" fill-opacity="1.0" className="id_111 id_179"
                                    points="-28.168772,-90.672478 -22.851709,-88.946541 -26.359282,-85.383263"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_112 id_115"
                                    points="423.193390,-361.327515 427.963287,-358.412354 423.723175,-355.762512"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_113 id_120"
                                    points="-252.005630,-519.430847 -249.730957,-514.324463 -254.725983,-514.547241"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_114 id_256"
                                    points="254.488861,241.691544 255.283249,236.158096 259.392242,239.007004"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_115 id_122"
                                    points="402.147675,-391.949799 407.082733,-389.323914 403.008026,-386.426208"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_116 id_184"
                                    points="106.432449,-293.615082 101.456268,-296.162140 105.484406,-299.124237"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_118 id_132"
                                    points="134.379440,188.982254 131.214264,193.590042 128.794098,189.214798"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_118 id_257"
                                    points="131.510269,221.767548 125.959808,221.102417 128.712097,216.928101"
                                    stroke="none"/>
                            <polyline fill="#d11f12" fill-opacity="1.0" className="id_119 id_213"
                                    points="-390.245758,162.627289 -392.148773,157.371002 -387.182526,157.951111"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_120 id_123"
                                    points="-278.068176,-533.559509 -272.779480,-535.370544 -273.446106,-530.415222"
                                    stroke="none"/>
                            <polyline fill="#4d1b05" fill-opacity="1.0" className="id_121 id_216"
                                    points="2.335258,553.093506 -0.850281,557.687256 -3.251049,553.301392"
                                    stroke="none"/>
                            <polyline fill="#4d1b05" fill-opacity="1.0" className="id_121 id_199"
                                    points="-80.776413,579.474915 -76.389549,576.010071 -75.372383,580.905457"
                                    stroke="none"/>
                            <polyline fill="#9c5e13" fill-opacity="1.0" className="id_121 id_230"
                                    points="-44.263889,544.924438 -39.102352,547.071167 -42.884373,550.341675"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_122 id_127"
                                    points="377.968811,-417.058075 383.339020,-415.505341 379.948761,-411.830292"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_123 id_128"
                                    points="-282.352875,-560.787659 -280.971436,-555.370911 -285.857422,-556.432434"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_124 id_129"
                                    points="255.097321,305.147217 250.280487,302.310272 254.476776,299.591583"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_126 id_153"
                                    points="79.347313,-159.368546 74.616432,-162.346588 78.891212,-164.940094"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_126 id_194"
                                    points="48.784660,-158.632599 49.720478,-164.143875 53.755177,-161.190720"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_127 id_131"
                                    points="346.668213,-434.849365 352.255371,-435.032288 350.166870,-430.489380"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_128 id_172"
                                    points="-334.686035,-488.664856 -333.999207,-494.212677 -329.835693,-491.444122"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_129 id_133"
                                    points="287.159607,317.683777 281.834625,319.385071 282.603607,314.444580"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_131 id_140"
                                    points="312.102295,-435.728210 316.740021,-438.849365 317.381866,-433.890747"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_132 id_168"
                                    points="150.077927,158.874649 151.162766,164.358536 146.341721,163.032852"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_133 id_144"
                                    points="320.330505,312.478638 316.223022,316.270538 314.832520,311.467804"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_134 id_155"
                                    points="-176.947189,-619.047546 -182.246353,-617.267395 -181.550766,-622.218811"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_134 id_143"
                                    points="-220.382065,-600.388123 -222.405869,-605.599121 -217.427567,-605.133789"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_128 id_143"
                                    points="-230.994980,-587.012817 -234.944809,-583.057007 -236.529556,-587.799194"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_120 id_143"
                                    points="-225.896927,-581.133118 -225.902695,-575.542908 -230.372513,-577.783630"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_120 id_128"
                                    points="-274.455170,-562.395508 -269.526825,-559.757080 -273.608917,-556.869751"
                                    stroke="none"/>
                            <polyline fill="#839aa3" fill-opacity="1.0" className="id_137 id_174"
                                    points="-459.458954,297.866730 -464.272308,300.709564 -464.621246,295.721771"
                                    stroke="none"/>
                            <polyline fill="#c9705a" fill-opacity="1.0" className="id_106 id_174"
                                    points="-450.781555,307.385742 -449.122253,312.723969 -454.056580,311.916107"
                                    stroke="none"/>
                            <polyline fill="#dbc683" fill-opacity="1.0" className="id_138 id_149"
                                    points="-233.565140,478.477661 -235.111954,483.849579 -238.790756,480.463348"
                                    stroke="none"/>
                            <polyline fill="#dbc683" fill-opacity="1.0" className="id_138 id_204"
                                    points="-169.076263,581.259277 -173.927780,584.036499 -174.208939,579.044434"
                                    stroke="none"/>
                            <polyline fill="#dbc683" fill-opacity="1.0" className="id_138 id_183"
                                    points="-224.870224,514.771118 -227.605698,519.646301 -230.411636,515.507874"
                                    stroke="none"/>
                            <polyline fill="#dbc683" fill-opacity="1.0" className="id_138 id_191"
                                    points="-274.721161,423.325714 -274.117920,428.883240 -278.805237,427.142822"
                                    stroke="none"/>
                            <polyline fill="#dbc683" fill-opacity="1.0" className="id_138 id_195"
                                    points="-302.949829,449.679474 -301.688446,455.125488 -306.549774,453.956177"
                                    stroke="none"/>
                            <polyline fill="#d18053" fill-opacity="1.0" className="id_138 id_228"
                                    points="-356.240295,384.329712 -353.284027,389.074219 -358.262177,389.541443"
                                    stroke="none"/>
                            <polyline fill="#767d66" fill-opacity="1.0" className="id_138 id_219"
                                    points="-251.754349,447.561646 -252.160950,453.136993 -256.458588,450.581573"
                                    stroke="none"/>
                            <polyline fill="#dbc683" fill-opacity="1.0" className="id_138 id_173"
                                    points="-372.023376,447.734772 -368.401917,451.993317 -373.257324,453.187042"
                                    stroke="none"/>
                            <polyline fill="#3ba498" fill-opacity="1.0" className="id_139 id_207"
                                    points="-538.751282,-238.258026 -534.631104,-234.479950 -539.301636,-232.695007"
                                    stroke="none"/>
                            <polyline fill="#9fb23d" fill-opacity="1.0" className="id_139 id_193"
                                    points="-546.181519,-185.357452 -545.135132,-190.848801 -541.160645,-187.815140"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_140 id_147"
                                    points="283.321503,-418.955383 285.578064,-424.069855 288.767029,-420.218842"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_69 id_239"
                                    points="578.594604,-58.213760 573.092896,-59.204082 576.085815,-63.209354"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_239 id_240"
                                    points="575.393005,-29.492004 575.362305,-35.082088 579.846680,-32.870632"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_240 id_241"
                                    points="557.520569,2.767626 557.855957,-2.812475 562.185913,-0.312128"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_241 id_242"
                                    points="536.229126,29.411640 537.733032,24.027567 541.438721,27.384329"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_242 id_243"
                                    points="518.912170,63.492275 518.436340,57.922394 523.082581,59.769691"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_243 id_244"
                                    points="519.249329,96.772804 515.955200,92.256325 520.885986,91.427589"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_244 id_245"
                                    points="527.353210,135.618744 523.827332,131.280777 528.708069,130.195236"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_245 id_246"
                                    points="528.551453,172.720062 526.230835,167.634338 531.227661,167.812134"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_246 id_247"
                                    points="519.986450,207.205826 519.205139,201.670532 523.945862,203.259583"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_247 id_248"
                                    points="498.582611,234.008362 500.484741,228.751740 503.929199,232.376099"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_248 id_249"
                                    points="465.842407,244.045135 470.498322,240.951187 471.111115,245.913498"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_249 id_141"
                                    points="433.981628,234.530365 439.571594,234.483749 437.372925,238.974380"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_141 id_250"
                                    points="407.426575,210.232925 412.604401,212.340118 408.847504,215.639496"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_250 id_251"
                                    points="393.072998,179.351166 397.020599,183.309265 392.275116,184.884094"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_251 id_252"
                                    points="390.784119,143.627914 393.118774,148.707214 388.121460,148.543243"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_252 id_177"
                                    points="396.494568,107.129440 397.949463,112.526970 393.049500,111.531868"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_177 id_253"
                                    points="393.853638,70.141853 397.169006,74.642776 392.242126,75.494705"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_253 id_254"
                                    points="368.991882,44.434425 374.529907,45.196007 371.705444,49.321815"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_254 id_255"
                                    points="336.737823,36.378395 341.962311,34.389793 341.463409,39.364838"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_255 id_220"
                                    points="296.370239,35.175880 301.386932,32.709583 301.353302,37.709469"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_143 id_155"
                                    points="-175.940338,-612.862671 -179.300339,-608.394958 -181.530502,-612.870056"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_144 id_148"
                                    points="355.765930,309.980255 350.728394,312.403717 350.804626,307.404327"
                                    stroke="none"/>
                            <polyline fill="#9fb23d" fill-opacity="1.0" className="id_145 id_193"
                                    points="-562.483704,-176.063232 -567.156311,-172.994476 -567.742249,-177.960022"
                                    stroke="none"/>
                            <polyline fill="#3ba498" fill-opacity="1.0" className="id_145 id_207"
                                    points="-559.762634,-240.582535 -560.441589,-235.033768 -564.609070,-237.796463"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_68 id_146"
                                    points="-2.286892,-298.520996 -4.991545,-293.628662 -7.823544,-297.749329"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_147 id_158"
                                    points="284.357178,-387.623169 280.345276,-391.516052 285.064331,-393.168457"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_148 id_160"
                                    points="388.435547,325.022827 382.883911,324.367523 385.628784,320.188324"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_147 id_151"
                                    points="254.733307,-396.247589 257.132446,-401.296753 260.212158,-397.357788"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_152 id_182"
                                    points="95.175468,132.674683 98.292183,137.315384 93.332939,137.952469"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_155 id_159"
                                    points="-130.898865,-588.754700 -136.357712,-589.959229 -133.210495,-593.844482"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_155 id_181"
                                    points="-67.885429,-605.627380 -73.149902,-603.747131 -72.548309,-608.710754"
                                    stroke="none"/>
                            <polyline fill="#839aa3" fill-opacity="1.0" className="id_156 id_198"
                                    points="-224.049591,179.719574 -229.386597,178.056335 -225.921204,174.452026"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_157 id_230"
                                    points="-64.019325,525.814575 -69.479431,524.615723 -66.336319,520.727173"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_158 id_170"
                                    points="289.963531,-351.024139 287.050293,-355.795197 292.032410,-356.217377"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_159 id_167"
                                    points="-93.007744,-580.757202 -98.140900,-578.543396 -97.858643,-583.535461"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_160 id_171"
                                    points="403.468414,356.551605 399.805206,352.328949 404.648651,351.087433"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_89 id_161"
                                    points="-6.839817,182.250961 -1.543202,184.038666 -5.092008,187.560883"
                                    stroke="none"/>
                            <polyline fill="#c275b8" fill-opacity="1.0" className="id_164 id_200"
                                    points="-315.932587,-226.710205 -314.523834,-221.300461 -319.415131,-222.337357"
                                    stroke="none"/>
                            <polyline fill="#dbc683" fill-opacity="1.0" className="id_165 id_173"
                                    points="-384.580811,436.687988 -389.831299,438.606873 -389.266235,433.638916"
                                    stroke="none"/>
                            <polyline fill="#c19abc" fill-opacity="1.0" className="id_258 id_22"
                                    points="-92.168938,-198.523026 -95.714149,-194.200806 -97.753838,-198.765869"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_167 id_181"
                                    points="-65.104134,-597.227051 -67.005592,-591.970215 -70.450493,-595.594116"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_170 id_180"
                                    points="297.823517,-314.042603 294.142212,-318.249512 298.980286,-319.511780"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_171 id_176"
                                    points="391.305145,390.454468 391.780396,384.884521 396.046265,387.492676"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_176 id_189"
                                    points="362.015717,411.950806 365.232483,407.378906 367.603271,411.781067"
                                    stroke="none"/>
                            <polyline fill="#7c91aa" fill-opacity="1.0" className="id_258 id_1"
                                    points="-252.472336,-244.217239 -254.068665,-238.859848 -257.716064,-242.279861"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_178 id_196"
                                    points="102.885696,-97.377922 104.250664,-102.798889 108.041451,-99.538528"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_180 id_197"
                                    points="314.335114,-279.846588 309.680664,-282.942749 314.019348,-285.427856"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_181 id_190"
                                    points="-38.562126,-577.073669 -43.471313,-579.747559 -39.368500,-582.605347"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_181 id_209"
                                    points="20.866581,-592.498047 15.548610,-590.774902 16.297293,-595.718506"
                                    stroke="none"/>
                            <polyline fill="#dbc683" fill-opacity="1.0" className="id_94 id_187"
                                    points="-418.981079,352.048676 -421.193817,357.182251 -424.415619,353.358643"
                                    stroke="none"/>
                            <polyline fill="#887a65" fill-opacity="1.0" className="id_188 id_222"
                                    points="-395.398376,-413.550995 -393.817902,-418.913086 -390.160431,-415.503845"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_189 id_201"
                                    points="329.077026,427.073761 332.682281,422.801514 334.657990,427.394592"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_190 id_202"
                                    points="-6.314734,-563.210266 -11.719370,-561.782043 -10.700115,-566.677063"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_197 id_205"
                                    points="333.501404,-243.452805 329.004883,-246.774139 333.460571,-249.042816"
                                    stroke="none"/>
                            <polyline fill="#947044" fill-opacity="1.0" className="id_199 id_204"
                                    points="-147.596329,581.342224 -142.446701,579.167053 -142.766403,584.156799"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_201 id_214"
                                    points="303.821198,449.529907 305.212006,444.115509 308.987213,447.393890"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_202 id_209"
                                    points="24.035223,-583.593933 22.527607,-578.210876 18.824223,-581.570129"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_205 id_212"
                                    points="337.244202,-206.462097 334.971466,-211.569397 339.966400,-211.344666"
                                    stroke="none"/>
                            <polyline fill="#2552a8" fill-opacity="1.0" className="id_206 id_208"
                                    points="-494.404694,-331.663727 -492.000580,-336.710541 -488.924774,-332.768524"
                                    stroke="none"/>
                            <polyline fill="#2552a8" fill-opacity="1.0" className="id_206 id_222"
                                    points="-412.432953,-397.557800 -414.711914,-392.453247 -417.883972,-396.318237"
                                    stroke="none"/>
                            <polyline fill="#2552a8" fill-opacity="1.0" className="id_206 id_229"
                                    points="-508.374695,-375.493347 -502.825104,-376.165527 -504.507172,-371.456970"
                                    stroke="none"/>
                            <polyline fill="#2b61bd" fill-opacity="1.0" className="id_207 id_208"
                                    points="-524.455444,-297.614929 -524.870667,-292.040222 -529.164368,-294.602356"
                                    stroke="none"/>
                            <polyline fill="#2552a8" fill-opacity="1.0" className="id_208 id_229"
                                    points="-517.352539,-368.524689 -514.401672,-363.776794 -519.380310,-363.315247"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_209 id_217"
                                    points="50.965080,-555.135925 46.332363,-558.264465 50.688305,-560.719177"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_209 id_224"
                                    points="78.755737,-567.376160 73.165672,-567.341003 75.373558,-571.827087"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_212 id_221"
                                    points="314.632446,-178.169510 316.920898,-183.269806 320.085754,-179.398926"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_214 id_218"
                                    points="286.148804,483.388580 285.768616,477.811340 290.382446,479.738098"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_217 id_224"
                                    points="78.877174,-558.306030 75.615372,-553.766113 73.288177,-558.191528"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_218 id_225"
                                    points="272.238068,515.171204 271.992035,509.586456 276.558258,511.623566"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_221 id_223"
                                    points="281.254852,-168.155792 285.884979,-171.288208 286.538849,-166.331146"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_223 id_231"
                                    points="246.929886,-159.021393 250.927872,-162.928589 252.454422,-158.167328"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_217 id_226"
                                    points="54.029709,-514.915527 51.843060,-520.060242 56.833530,-519.751648"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_225 id_233"
                                    points="241.288528,516.031799 246.802719,515.113220 245.331894,519.892029"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_224 id_232"
                                    points="107.990837,-533.697021 103.089081,-536.384521 107.199799,-539.230957"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_225 id_233"
                                    points="241.288528,516.031799 246.802719,515.113220 245.331894,519.892029"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_232 id_235"
                                    points="118.322929,-496.588562 115.061707,-501.128876 119.998444,-501.921722"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_233 id_236"
                                    points="218.720108,489.232635 223.308868,492.425323 218.919220,494.819244"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_172 id_188"
                                    points="-364.657959,-448.030029 -363.634216,-453.525665 -359.647217,-450.508453"
                                    stroke="none"/>
                            <polyline fill="#7c91aa" fill-opacity="1.0" className="id_258 id_5"
                                    points="107.588654,-30.885141 102.537758,-28.489622 102.641701,-33.488541"
                                    stroke="none"/>
                            <polyline fill="#c47d72" fill-opacity="1.0" className="id_258 id_29"
                                    points="-428.351196,240.475082 -431.085846,235.599442 -426.091461,235.362015"
                                    stroke="none"/>
                            <polyline fill="#c8b269" fill-opacity="1.0" className="id_258 id_11"
                                    points="-168.269760,102.453598 -173.858444,102.324356 -171.519577,97.905106"
                                    stroke="none"/>
                            <polyline fill="#dbc474" fill-opacity="1.0" className="id_258 id_4"
                                    points="-497.117645,204.969406 -498.465698,199.544220 -493.586304,200.635864"
                                    stroke="none"/>
                            <polyline fill="#cd6260" fill-opacity="1.0" className="id_258 id_19"
                                    points="-585.489624,193.238037 -585.019897,187.667648 -580.751465,190.271591"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_143 id_155"
                                    points="-175.940338,-612.862671 -179.300339,-608.394958 -181.530502,-612.870056"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_128 id_134"
                                    points="-225.772034,-618.125244 -227.893234,-612.953186 -231.182419,-616.718933"
                                    stroke="none"/>
                            <polyline fill="#d1a513" fill-opacity="1.0" className="id_16 id_18"
                                    points="-87.785164,70.734772 -90.161293,75.794815 -93.258873,71.869888"
                                    stroke="none"/>
                            <polyline fill="#d5b171" fill-opacity="1.0" className="id_258 id_58"
                                    points="-159.844131,341.794250 -164.818146,339.242950 -160.787506,336.284271"
                                    stroke="none"/>
                            <polyline fill="#d5b171" fill-opacity="1.0" className="id_258 id_31"
                                    points="-59.834335,287.380310 -65.252884,286.005798 -61.985844,282.220764"
                                    stroke="none"/>
                            <polyline fill="#d1afa4" fill-opacity="1.0" className="id_258 id_26"
                                    points="-224.533600,-1.029095 -229.912369,0.493672 -228.979080,-4.418452"
                                    stroke="none"/>
                            <polyline fill="#98ae83" fill-opacity="1.0" className="id_258 id_110"
                                    points="-293.573517,-65.500130 -298.126953,-62.257248 -298.899902,-67.197144"
                                    stroke="none"/>
                            <polyline fill="#d5b171" fill-opacity="1.0" className="id_258 id_117"
                                    points="-292.517120,180.454971 -297.377350,177.693054 -293.223724,174.909637"
                                    stroke="none"/>
                            <polyline fill="#bf897e" fill-opacity="1.0" className="id_258 id_103"
                                    points="-290.169556,118.536041 -295.418396,116.612648 -291.780151,113.182915"
                                    stroke="none"/>
                            <polyline fill="#c8b269" fill-opacity="1.0" className="id_258 id_10"
                                    points="-319.141357,-95.247452 -322.741333,-90.970734 -324.722717,-95.561386"
                                    stroke="none"/>
                            <polyline fill="#c8b269" fill-opacity="1.0" className="id_258 id_15"
                                    points="-354.234039,128.332748 -358.740997,125.025551 -354.292450,122.742882"
                                    stroke="none"/>
                            <polyline fill="#c8b269" fill-opacity="1.0" className="id_258 id_17"
                                    points="-313.325867,-29.344143 -318.551605,-27.358789 -318.049591,-32.333523"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_86 id_105"
                                    points="62.861130,232.293213 59.001328,236.336960 57.310249,231.631607"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_118 id_152"
                                    points="100.749939,173.531967 104.012222,178.071518 99.075668,178.865524"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_182 id_234"
                                    points="85.554825,96.597229 89.466476,100.590843 84.706924,102.122719"
                                    stroke="none"/>
                            <polyline fill="#eba222" fill-opacity="1.0" className="id_31 id_99"
                                    points="-59.214607,249.766006 -55.870800,254.245834 -60.792194,255.128952"
                                    stroke="none"/>
                            <polyline fill="#c19abc" fill-opacity="1.0" className="id_258 id_28"
                                    points="-369.292358,-161.668701 -369.751434,-156.097427 -374.024811,-158.693192"
                                    stroke="none"/>
                            <polyline fill="#df8126" fill-opacity="1.0" className="id_29 id_237"
                                    points="-380.616669,245.122757 -385.304291,248.168442 -385.865814,243.200058"
                                    stroke="none"/>
                            <polyline fill="#f7c928" fill-opacity="1.0" className="id_237 id_154"
                                    points="-342.342041,233.745575 -346.193024,237.797714 -347.894318,233.096054"
                                    stroke="none"/>
                            <polyline fill="#c8b269" fill-opacity="1.0" className="id_258 id_21"
                                    points="-118.318672,-64.923882 -123.132133,-62.081253 -123.480858,-67.069077"
                                    stroke="none"/>
                            <polyline fill="#d5b171" fill-opacity="1.0" className="id_258 id_63"
                                    points="-316.832397,-317.226227 -316.625519,-311.639862 -321.177338,-313.708893"
                                    stroke="none"/>
                            <polyline fill="#83cc8f" fill-opacity="1.0" className="id_258 id_145"
                                    points="-596.866943,-163.830612 -591.389343,-162.714310 -594.473450,-158.778763"
                                    stroke="none"/>
                            <polyline fill="#83cc8f" fill-opacity="1.0" className="id_258 id_139"
                                    points="-523.185791,-200.600891 -518.676086,-197.297455 -523.122742,-195.011078"
                                    stroke="none"/>
                            <polyline fill="#6c8263" fill-opacity="1.0" className="id_258 id_82"
                                    points="-521.137451,-142.831635 -516.077271,-140.455765 -520.002075,-137.357986"
                                    stroke="none"/>
                            <polyline fill="#7289b4" fill-opacity="1.0" className="id_258 id_206"
                                    points="-459.455750,-344.531036 -456.668335,-339.685394 -461.659790,-339.393707"
                                    stroke="none"/>
                            <polyline fill="#396394" fill-opacity="1.0" className="id_256 id_124"
                                    points="243.909363,275.127502 242.405182,269.743500 247.314056,270.693756"
                                    stroke="none"/>
                            <polyline fill="#c19abc" fill-opacity="1.0" className="id_258 id_34"
                                    points="-279.514038,67.989380 -285.054596,67.246391 -282.243988,63.111126"
                                    stroke="none"/>
                            <polyline fill="#dbc474" fill-opacity="1.0" className="id_258 id_45"
                                    points="-232.781845,-69.214226 -237.421753,-66.096313 -238.060120,-71.055389"
                                    stroke="none"/>
                            <polyline fill="#6c8263" fill-opacity="1.0" className="id_258 id_77"
                                    points="-274.122894,-119.958672 -277.609406,-115.588974 -279.710541,-120.126053"
                                    stroke="none"/>
                            <polyline fill="#d5b171" fill-opacity="1.0" className="id_258 id_162"
                                    points="-341.615051,-57.468407 -346.184723,-54.248425 -346.932831,-59.192135"
                                    stroke="none"/>
                            <polyline fill="#cdc3a1" fill-opacity="1.0" className="id_258 id_175"
                                    points="-271.069580,-31.405012 -276.218750,-29.228769 -275.900085,-34.218605"
                                    stroke="none"/>
                            <polyline fill="#7c91aa" fill-opacity="1.0" className="id_258 id_142"
                                    points="-360.068146,-92.768829 -363.009186,-88.014832 -365.635956,-92.269226"
                                    stroke="none"/>
                            <polyline fill="#bf6662" fill-opacity="1.0" className="id_258 id_210"
                                    points="-220.991608,35.434586 -226.538086,36.132156 -224.877563,31.415947"
                                    stroke="none"/>
                            <polyline fill="#2b921a" fill-opacity="1.0" className="id_20 id_163"
                                    points="-111.255341,-325.257904 -111.826088,-319.696960 -116.046547,-322.377930"
                                    stroke="none"/>
                            <polyline fill="#ca68a6" fill-opacity="1.0" className="id_258 id_130"
                                    points="-274.043549,-1.575389 -279.492279,-0.325787 -278.312469,-5.184600"
                                    stroke="none"/>
                            <polyline fill="#7c91aa" fill-opacity="1.0" className="id_258 id_227"
                                    points="-312.210724,15.958904 -317.796173,16.188519 -315.745697,11.628311"
                                    stroke="none"/>
                            <polyline fill="#cd6260" fill-opacity="1.0" className="id_258 id_119"
                                    points="-390.267212,127.765068 -394.109619,123.704758 -389.324402,122.254974"
                                    stroke="none"/>
                        </g>
                        <g id="nodes">
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="-245.50243"
                                    className="id_1" cy="-251.65053" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="12.344303" cx="-211.16017"
                                    className="id_2" cy="-281.2816" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="2.1468353"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.7240505" cx="-180.78279"
                                    className="id_3" cy="-322.78604" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#f7c928" r="9.374683" cx="-499.3424"
                                    className="id_4" cy="214.91345" stroke="#ac8c1c"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.549367" cx="117.966156"
                                    className="id_5" cy="-30.669365" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="12.1696205" cx="-204.66565"
                                    className="id_6" cy="-354.08127" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="2.1164556"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.374683" cx="-236.43808"
                                    className="id_7" cy="-330.23615" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.374683" cx="-230.61401"
                                    className="id_8" cy="-388.25958" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="10.073418" cx="-164.01817"
                                    className="id_9" cy="-286.1681" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.7518988"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.374683" cx="-309.78574"
                                    className="id_10" cy="-99.28549" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="10.073418" cx="-158.59218"
                                    className="id_11" cy="107.57542" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.7518988"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.374683" cx="-141.262"
                                    className="id_12" cy="-254.91734" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#f0650e" r="9.374683" cx="-158.20044"
                                    className="id_13" cy="72.60166" stroke="#a84609"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.374683" cx="-183.58574"
                                    className="id_14" cy="-240.67114" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.374683" cx="-349.58203"
                                    className="id_15" cy="137.39874" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.374683" cx="-114.09616"
                                    className="id_16" cy="91.49965" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.549367" cx="-302.99857"
                                    className="id_17" cy="-28.301985" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.7240505" cx="-79.48818"
                                    className="id_18" cy="64.18672" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#da0400" r="9.374683" cx="-590.7964"
                                    className="id_19" cy="201.93698" stroke="#980200"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#2b921a" r="9.374683" cx="-127.46141"
                                    className="id_20" cy="-299.7459" stroke="#1e6612"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.374683" cx="-108.15361"
                                    className="id_21" cy="-65.63457" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="12.868355" cx="-79.39836"
                                    className="id_22" cy="-204.22899" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="2.2379746"/>
                            <circle fill-opacity="1.0" fill="#d1a513" r="9.7240505" cx="-178.49832"
                                    className="id_23" cy="-384.64642" stroke="#92730d"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#396394" r="12.518988" cx="177.40854"
                                    className="id_24" cy="-44.36288" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="2.1772153"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.7240505" cx="-38.945423"
                                    className="id_25" cy="-218.84473" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#e29f89" r="9.2" cx="-214.70935"
                                    className="id_26" cy="0.83749354" stroke="#9e6f5f"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#e03d2d" r="9.374683" cx="-112.88665"
                                    className="id_27" cy="36.81959" stroke="#9c2a1f"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="11.820253" cx="-362.62222"
                                    className="id_28" cy="-172.64973" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="2.0556962"/>
                            <circle fill-opacity="1.0" fill="#c83a24" r="9.2" cx="-427.87634"
                                    className="id_29" cy="250.4638" stroke="#8c2819"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.2" cx="-81.97153"
                                    className="id_30" cy="-268.93463" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="10.597468" cx="-51.1144"
                                    className="id_31" cy="294.90692" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.843038"/>
                            <circle fill-opacity="1.0" fill="#396394" r="23.349365" cx="263.11633"
                                    className="id_32" cy="-56.765892" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="4.060759"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="10.073418" cx="-65.15657"
                                    className="id_33" cy="-302.404" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.7518988"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.2" cx="-271.2435"
                                    className="id_34" cy="73.61063" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#2596be" r="11.121519" cx="-584.1175"
                                    className="id_35" cy="257.89233" stroke="#196985"
                                    stroke-opacity="1.0" stroke-width="1.9341772"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="329.71735"
                                    className="id_36" cy="-63.083565" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#2596be" r="9.2" cx="-549.1811"
                                    className="id_37" cy="393.00018" stroke="#196985"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="226.39189"
                                    className="id_38" cy="-95.22824" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.2" cx="-46.009125"
                                    className="id_39" cy="-252.95996" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="371.48328"
                                    className="id_40" cy="-66.91315" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.2" cx="-36.530373"
                                    className="id_41" cy="-324.13382" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#e9e768" r="9.374683" cx="-138.97034"
                                    className="id_42" cy="138.07904" stroke="#a3a148"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.7240505" cx="-52.513306"
                                    className="id_43" cy="-176.7804" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#f7c928" r="9.898734" cx="-665.7376"
                                    className="id_44" cy="200.36076" stroke="#ac8c1c"
                                    stroke-opacity="1.0" stroke-width="1.721519"/>
                            <circle fill-opacity="1.0" fill="#f7c928" r="9.898734" cx="-222.11041"
                                    className="id_45" cy="-70.587944" stroke="#ac8c1c"
                                    stroke-opacity="1.0" stroke-width="1.721519"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="12.518988" cx="4.8932824"
                                    className="id_46" cy="437.5832" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="2.1772153"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="412.87466"
                                    className="id_47" cy="-70.03407" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#2596be" r="9.374683" cx="-175.02718"
                                    className="id_48" cy="5.182671" stroke="#196985"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#3171d3" r="9.374683" cx="-86.359825"
                                    className="id_49" cy="263.7649" stroke="#224f93"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="72.14616"
                                    className="id_50" cy="446.7677" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.549367" cx="4.937149"
                                    className="id_51" cy="-236.09608" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#da0400" r="9.7240505" cx="-149.53886"
                                    className="id_52" cy="-336.28754" stroke="#980200"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#e03d2d" r="9.898734" cx="-63.62581"
                                    className="id_53" cy="-64.49774" stroke="#9c2a1f"
                                    stroke-opacity="1.0" stroke-width="1.721519"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="455.48886"
                                    className="id_54" cy="-74.30992" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.2" cx="-3.5350933"
                                    className="id_55" cy="-336.61942" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="64.61358"
                                    className="id_56" cy="349.15515" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-37.87035"
                                    className="id_57" cy="405.6093" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.898734" cx="-153.47731"
                                    className="id_58" cy="350.4678" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.721519"/>
                            <circle fill-opacity="1.0" fill="#2596be" r="27.367088" cx="-613.4307"
                                    className="id_59" cy="364.24896" stroke="#196985"
                                    stroke-opacity="1.0" stroke-width="4.759494"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="504.90463"
                                    className="id_60" cy="-73.93032" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#2596be" r="9.374683" cx="-138.07033"
                                    className="id_61" cy="5.818885" stroke="#196985"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#b0422c" r="9.374683" cx="-461.18237"
                                    className="id_62" cy="185.43948" stroke="#7b2e1e"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-312.6158"
                                    className="id_63" cy="-326.50275" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="110.725006"
                                    className="id_64" cy="439.93347" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.374683" cx="46.257942"
                                    className="id_65" cy="-214.35016" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.549367" cx="72.56883"
                                    className="id_66" cy="384.72458" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="-18.33778"
                                    className="id_67" cy="371.44687" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.898734" cx="-23.968658"
                                    className="id_68" cy="-283.61978" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.721519"/>
                            <circle fill-opacity="1.0" fill="#396394" r="11.64557" cx="553.04767"
                                    className="id_69" cy="-77.30382" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="2.0253165"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="11.994936" cx="-38.654705"
                                    className="id_70" cy="81.518295" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="2.0860758"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="22.825317" cx="-97.08298"
                                    className="id_71" cy="419.73114" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="3.9696202"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="497.78763"
                                    className="id_72" cy="-107.51669" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#4d1b05" r="9.2" cx="-7.524269"
                                    className="id_73" cy="517.5509" stroke="#351203"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="171.3508"
                                    className="id_74" cy="3.0994177" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="177.13812"
                                    className="id_75" cy="39.730423" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#e03d2d" r="9.374683" cx="-70.3576"
                                    className="id_76" cy="-25.276503" stroke="#9c2a1f"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#194407" r="9.374683" cx="-264.87643"
                                    className="id_77" cy="-124.24079" stroke="#112f04"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="487.45844"
                                    className="id_78" cy="-145.32085" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#e03d2d" r="10.772152" cx="-32.93844"
                                    className="id_79" cy="-31.645847" stroke="#9c2a1f"
                                    stroke-opacity="1.0" stroke-width="1.8734176"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="199.66177"
                                    className="id_80" cy="66.33341" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-3.1099582"
                                    className="id_81" cy="336.8697" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#194407" r="9.549367" cx="-527.5683"
                                    className="id_82" cy="-150.97922" stroke="#112f04"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="465.05283"
                                    className="id_83" cy="-171.53235" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.2" cx="30.448952"
                                    className="id_84" cy="-339.55984" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="10.9468355" cx="184.74417"
                                    className="id_85" cy="-117.59637" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.9037974"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="12.518988" cx="25.002544"
                                    className="id_86" cy="245.8994" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="2.1772153"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="226.81589"
                                    className="id_87" cy="91.026436" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="459.5991"
                                    className="id_88" cy="-206.16522" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="14.917942"
                                    className="id_89" cy="204.173" stroke="#a47117" stroke-opacity="1.0"
                                    stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="105.20053"
                                    className="id_90" cy="356.2765" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#2596be" r="10.597468" cx="-517.29376"
                                    className="id_91" cy="376.62738" stroke="#196985"
                                    stroke-opacity="1.0" stroke-width="1.843038"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="480.98615"
                                    className="id_92" cy="-236.46593" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="253.15042"
                                    className="id_93" cy="117.08309" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="12.868355" cx="-527.7397"
                                    className="id_94" cy="443.68854" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="2.2379746"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="22.650635" cx="-287.84366"
                                    className="id_95" cy="-380.0884" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="3.9392407"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="271.3726"
                                    className="id_96" cy="146.85464" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-93.98753"
                                    className="id_97" cy="358.96747" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-132.59024"
                                    className="id_98" cy="462.287" stroke="#a47117" stroke-opacity="1.0"
                                    stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-61.01436"
                                    className="id_99" cy="239.73633" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="472.32938"
                                    className="id_100" cy="-271.70596" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.2" cx="63.500343"
                                    className="id_101" cy="-330.84116" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-29.911587"
                                    className="id_102" cy="256.5786" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#be533d" r="9.374683" cx="-283.17984"
                                    className="id_103" cy="125.95073" stroke="#853a2a"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="117.028725"
                                    className="id_104" cy="320.3916" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.7240505" cx="72.80787"
                                    className="id_105" cy="228.7184" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#b0422c" r="11.64557" cx="-455.51288"
                                    className="id_106" cy="336.28455" stroke="#7b2e1e"
                                    stroke-opacity="1.0" stroke-width="2.0253165"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="450.45334"
                                    className="id_107" cy="-305.17328" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="-262.45273"
                                    className="id_108" cy="-434.43942" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="279.44476"
                                    className="id_109" cy="185.19951" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#719c46" r="9.374683" cx="-283.50613"
                                    className="id_110" cy="-67.07535" stroke="#4f6d31"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#e03d2d" r="9.374683" cx="-8.878324"
                                    className="id_111" cy="-71.6836" stroke="#9c2a1f"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="437.24533"
                                    className="id_112" cy="-338.8425" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="-254.08055"
                                    className="id_113" cy="-472.92038" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="269.9381"
                                    className="id_114" cy="219.40895" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="417.89374"
                                    className="id_115" cy="-369.8077" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.2" cx="92.23583"
                                    className="id_116" cy="-312.9208" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-286.84457"
                                    className="id_117" cy="188.91995" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="105.77955"
                                    className="id_118" cy="204.80228" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#da0400" r="9.374683" cx="-387.3126"
                                    className="id_119" cy="137.51718" stroke="#980200"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.7240505" cx="-251.53456"
                                    className="id_120" cy="-529.99" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#4d1b05" r="9.898734" cx="-24.498037"
                                    className="id_121" cy="567.78156" stroke="#351203"
                                    stroke-opacity="1.0" stroke-width="1.721519"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="396.3523"
                                    className="id_122" cy="-400.09924" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="-287.97888"
                                    className="id_123" cy="-534.8928" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="242.00885"
                                    className="id_124" cy="284.94525" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#194407" r="9.374683" cx="-227.73402"
                                    className="id_125" cy="-126.02702" stroke="#112f04"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.7240505" cx="65.73989"
                                    className="id_126" cy="-181.79729" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="370.61868"
                                    className="id_127" cy="-423.8386" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="-280.22977"
                                    className="id_128" cy="-570.5597" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="260.5347"
                                    className="id_129" cy="313.53976" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#d5118c" r="9.549367" cx="-263.9569"
                                    className="id_130" cy="0.873826" stroke="#950b62"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="337.58237"
                                    className="id_131" cy="-439.0264" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="143.12993"
                                    className="id_132" cy="184.14192" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="297.04065"
                                    className="id_133" cy="319.2217" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-218.09744"
                                    className="id_134" cy="-624.82855" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.374683" cx="-232.64227"
                                    className="id_135" cy="94.574005" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#606054" r="10.073418" cx="24.215927"
                                    className="id_136" cy="168.2339" stroke="#43433a"
                                    stroke-opacity="1.0" stroke-width="1.7518988"/>
                            <circle fill-opacity="1.0" fill="#2596be" r="35.577213" cx="-526.64343"
                                    className="id_137" cy="302.5668" stroke="#196985"
                                    stroke-opacity="1.0" stroke-width="6.187341"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="92.0" cx="-336.87155"
                                    className="id_138" cy="590.7099" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="16.0"/>
                            <circle fill-opacity="1.0" fill="#46d85e" r="9.2" cx="-527.75854"
                                    className="id_139" cy="-209.49416" stroke="#319741"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="301.99673"
                                    className="id_140" cy="-434.42014" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="424.82983"
                                    className="id_141" cy="230.04948" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="-351.3978"
                                    className="id_142" cy="-98.12218" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-221.33046"
                                    className="id_143" cy="-590.2425" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.549367" cx="330.30078"
                                    className="id_144" cy="309.59198" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#46d85e" r="10.597468" cx="-605.9336"
                                    className="id_145" cy="-170.93571" stroke="#319741"
                                    stroke-opacity="1.0" stroke-width="1.843038"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.2" cx="5.9544144"
                                    className="id_146" cy="-304.185" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="275.61948"
                                    className="id_147" cy="-412.5774" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="365.76477"
                                    className="id_148" cy="310.13272" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="9.374683" cx="-226.66411"
                                    className="id_149" cy="470.98038" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#f7c928" r="9.374683" cx="-564.9343"
                                    className="id_150" cy="79.34539" stroke="#ac8c1c"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="246.70576"
                                    className="id_151" cy="-389.97128" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="99.13177"
                                    className="id_152" cy="163.4714" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.374683" cx="84.63279"
                                    className="id_153" cy="-150.65665" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#f7c928" r="9.549367" cx="-332.58163"
                                    className="id_154" cy="230.21375" stroke="#ac8c1c"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.7240505" cx="-166.48035"
                                    className="id_155" cy="-617.5771" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#e29f89" r="9.898734" cx="-252.13646"
                                    className="id_156" cy="152.7152" stroke="#9e6f5f"
                                    stroke-opacity="1.0" stroke-width="1.721519"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="20.903797" cx="-97.14074"
                                    className="id_157" cy="499.0426" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="3.635443"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="287.66196"
                                    className="id_158" cy="-378.18503" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="-123.12838"
                                    className="id_159" cy="-582.46027" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="396.7939"
                                    className="id_160" cy="330.51257" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-14.017995"
                                    className="id_161" cy="175.01859" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-331.5399"
                                    className="id_162" cy="-58.99307" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#2b921a" r="9.374683" cx="-105.791565"
                                    className="id_163" cy="-333.8591" stroke="#1e6612"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.549367" cx="-322.8438"
                                    className="id_164" cy="-194.10808" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="34.703796" cx="-453.94638"
                                    className="id_165" cy="428.7982" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="6.035443"/>
                            <circle fill-opacity="1.0" fill="#c0c0c0" r="9.2" cx="-441.79477"
                                    className="id_258" cy="-42.308315" stroke="#868686"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="-83.02369"
                                    className="id_167" cy="-580.1927" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="152.77966"
                                    className="id_168" cy="149.04947" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#e03d2d" r="9.374683" cx="24.188921"
                                    className="id_169" cy="-55.164326" stroke="#9c2a1f"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="290.82394"
                                    className="id_170" cy="-340.87067" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="405.99857"
                                    className="id_171" cy="366.42236" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-340.32828"
                                    className="id_172" cy="-480.17966" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="9.374683" cx="-374.4562"
                                    className="id_173" cy="437.83957" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#e29f89" r="9.549367" cx="-449.10452"
                                    className="id_174" cy="297.14236" stroke="#9e6f5f"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="10.772152" cx="-259.38452"
                                    className="id_175" cy="-30.65875" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="1.8734176"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="386.0888"
                                    className="id_176" cy="398.98615" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="398.52258"
                                    className="id_177" cy="97.14342" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="131.68109"
                                    className="id_178" cy="-130.858" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#e03d2d" r="9.374683" cx="-35.43064"
                                    className="id_179" cy="-97.820816" stroke="#9c2a1f"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="300.396"
                                    className="id_180" cy="-304.1828" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.549367" cx="-57.58109"
                                    className="id_181" cy="-604.3785" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.549367" cx="93.852905"
                                    className="id_182" cy="122.37954" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="9.549367" cx="-216.27902"
                                    className="id_183" cy="508.94617" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.549367" cx="112.58166"
                                    className="id_184" cy="-285.25287" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="10.9468355" cx="-153.48228"
                                    className="id_185" cy="312.3719" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.9037974"/>
                            <circle fill-opacity="1.0" fill="#396394" r="13.567089" cx="233.01389"
                                    className="id_186" cy="1.203176" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="2.3594937"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="15.488606" cx="-406.1066"
                                    className="id_187" cy="341.20065" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="2.6936705"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="-370.6924"
                                    className="id_188" cy="-440.056" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="353.21133"
                                    className="id_189" cy="416.69244" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="-32.738037"
                                    className="id_190" cy="-568.7122" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="9.374683" cx="-271.17422"
                                    className="id_191" cy="413.77307" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#91bdfe" r="9.374683" cx="-184.20805"
                                    className="id_192" cy="-71.149185" stroke="#6584b1"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#f98c1c" r="9.374683" cx="-552.3641"
                                    className="id_193" cy="-177.25746" stroke="#ae6213"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.374683" cx="42.766174"
                                    className="id_194" cy="-150.40999" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="9.549367" cx="-300.52243"
                                    className="id_195" cy="439.58755" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.7240505" cx="95.99354"
                                    className="id_196" cy="-89.364494" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#396394" r="10.597468" cx="320.06024"
                                    className="id_197" cy="-269.8511" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.843038"/>
                            <circle fill-opacity="1.0" fill="#2596be" r="11.470886" cx="-215.06163"
                                    className="id_198" cy="188.36113" stroke="#196985"
                                    stroke-opacity="1.0" stroke-width="1.9949366"/>
                            <circle fill-opacity="1.0" fill="#4d1b05" r="21.253164" cx="-103.39461"
                                    className="id_199" cy="584.17444" stroke="#351203"
                                    stroke-opacity="1.0" stroke-width="3.6962023"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.2" cx="-313.8588"
                                    className="id_200" cy="-236.49281" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="319.89084"
                                    className="id_201" cy="431.02518" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="3.6611722"
                                    className="id_202" cy="-561.13306" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="127.837"
                                    className="id_203" cy="408.8701" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#dbc683" r="9.898734" cx="-158.3338"
                                    className="id_204" cy="580.65424" stroke="#998a5b"
                                    stroke-opacity="1.0" stroke-width="1.721519"/>
                            <circle fill-opacity="1.0" fill="#396394" r="10.073418" cx="338.46954"
                                    className="id_205" cy="-233.69543" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.7518988"/>
                            <circle fill-opacity="1.0" fill="#2552a8" r="12.69367" cx="-460.26065"
                                    className="id_206" cy="-358.305" stroke="#193975"
                                    stroke-opacity="1.0" stroke-width="2.2075949"/>
                            <circle fill-opacity="1.0" fill="#3171d3" r="21.253164" cx="-546.9982"
                                    className="id_207" cy="-259.8371" stroke="#224f93"
                                    stroke-opacity="1.0" stroke-width="3.6962023"/>
                            <circle fill-opacity="1.0" fill="#2552a8" r="21.253164" cx="-512.6178"
                                    className="id_208" cy="-317.45276" stroke="#193975"
                                    stroke-opacity="1.0" stroke-width="3.6962023"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="30.75384"
                                    className="id_209" cy="-591.0007" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#bf0c05" r="9.374683" cx="-211.3801"
                                    className="id_210" cy="38.818718" stroke="#850803"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.374683" cx="-24.13659"
                                    className="id_211" cy="-150.20004" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="336.78616"
                                    className="id_212" cy="-196.28252" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c83a24" r="9.374683" cx="-391.428"
                                    className="id_213" cy="172.74835" stroke="#8c2819"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.549367" cx="297.0154"
                                    className="id_214" cy="457.367" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#c275b8" r="9.549367" cx="-11.46775"
                                    className="id_215" cy="44.071712" stroke="#875180"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#4d1b05" r="9.7240505" cx="11.606764"
                                    className="id_216" cy="548.0185" stroke="#351203"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="55.967796"
                                    className="id_217" cy="-546.2586" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="282.22214"
                                    className="id_218" cy="492.7915" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#113449" r="9.374683" cx="-246.54646"
                                    className="id_219" cy="438.80313" stroke="#0b2433"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.549367" cx="285.99072"
                                    className="id_220" cy="35.106037" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6607594"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.7240505" cx="306.4497"
                                    className="id_221" cy="-171.47925" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#2552a8" r="10.772152" cx="-403.38202"
                                    className="id_222" cy="-404.986" stroke="#193975"
                                    stroke-opacity="1.0" stroke-width="1.8734176"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="271.34073"
                                    className="id_223" cy="-166.84802" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="87.727974"
                                    className="id_224" cy="-562.9604" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="268.1639"
                                    className="id_225" cy="524.30365" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="53.400826"
                                    className="id_226" cy="-504.74506" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.374683" cx="-302.91714"
                                    className="id_227" cy="20.137749" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#c83a24" r="9.374683" cx="-357.19244"
                                    className="id_228" cy="374.18442" stroke="#8c2819"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#2552a8" r="9.7240505" cx="-518.32825"
                                    className="id_229" cy="-379.04916" stroke="#193975"
                                    stroke-opacity="1.0" stroke-width="1.6911392"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="12.69367" cx="-53.288883"
                                    className="id_230" cy="534.488" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="2.2075949"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="237.40736"
                                    className="id_231" cy="-155.96828" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="113.683624"
                                    className="id_232" cy="-525.4756" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="231.73099"
                                    className="id_233" cy="513.09015" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.374683" cx="82.432915"
                                    className="id_234" cy="86.89737" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.6303798"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="119.90862"
                                    className="id_235" cy="-486.7151" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="213.93225"
                                    className="id_236" cy="480.4533" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#f7c928" r="9.2" cx="-370.67993"
                                    className="id_237" cy="243.99976" stroke="#ac8c1c"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#f7c928" r="9.2" cx="-636.4182"
                                    className="id_238" cy="116.89625" stroke="#ac8c1c"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="586.60516"
                                    className="id_239" cy="-52.227848" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="570.9701"
                                    className="id_240" cy="-20.523289" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="552.5199"
                                    className="id_241" cy="11.427479" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="529.5156"
                                    className="id_242" cy="36.823025" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="515.2176"
                                    className="id_243" cy="72.784744" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="520.9068"
                                    className="id_244" cy="106.63448" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="529.5243"
                                    className="id_245" cy="145.38022" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="528.19586"
                                    className="id_246" cy="182.71375" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="516.80835"
                                    className="id_247" cy="216.68738" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="491.33392"
                                    className="id_248" cy="240.89722" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="455.9178"
                                    className="id_249" cy="245.27072" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="400.82785"
                                    className="id_250" cy="202.71915" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="389.92334"
                                    className="id_251" cy="169.86014" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="391.11206"
                                    className="id_252" cy="133.6333" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="392.14978"
                                    className="id_253" cy="60.288082" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="360.74026"
                                    className="id_254" cy="38.785458" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="326.78772"
                                    className="id_255" cy="35.38056" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#396394" r="9.2" cx="248.79106"
                                    className="id_256" cy="249.90952" stroke="#274567"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                            <circle fill-opacity="1.0" fill="#eba222" r="9.2" cx="139.8589"
                                    className="id_257" cy="227.27213" stroke="#a47117"
                                    stroke-opacity="1.0" stroke-width="1.5999999"/>
                        </g>
                        <g id="node-labels">
                            <a href="https://es.wikipedia.org/wiki/Tennis_for_Two" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-245.50243" y="-250.0912" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_1">
                                Tennis for Two
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Spacewar!" target="_blank" rel="noreferrer">
                            <text font-size="10" x="-211.16017" y="-279.23407" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_2">
                                Spacewar
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Pong" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-180.78279" y="-320.96304" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_3">
                                Pong
                            </text>
                            </a>
                            <a href="https://dnd.wizards.com/es" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-499.3424" y="216.84119" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_4">
                                Dungeons And Dragons
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Football_(1978_video_game)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="117.966156" y="-29.112968" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_5">
                                Atari&apos;s Football
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Space_Invaders" target="_blank" rel="noreferrer">
                            <text font-size="10" x="-204.66565" y="-351.94098" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_6">
                                Space Invaders
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Asteroids" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-236.43808" y="-328.68854" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_7">
                                Asteroids
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Centipede_(videojuego)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-230.61401" y="-386.3333" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_8">
                                Centipede
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Pac-Man" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-164.01817" y="-284.72522" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_9">
                                Pac-Man
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Frogger" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-309.78574" y="-97.462494" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_10">
                                Frogger
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Donkey_Kong_(videojuego)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-158.59218" y="109.507545" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_11">
                                Donkey Kong
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/BurgerTime" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-141.262" y="-253.05772" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_12">
                                Burgertime
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Donkey_Kong_Jr." target="_blank" rel="noreferrer">
                            <text font-size="9" x="-158.20044" y="74.53379" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_13">
                                Donkey Kong Junior
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Ms._Pac-Man" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-183.58574" y="-239.22827" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_14">
                                Ms. Pac-Man
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Q*bert" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-349.58203" y="139.16461" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_15">
                                Q*bert
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Mario_Bros." target="_blank" rel="noreferrer">
                            <text font-size="9" x="-114.09616" y="92.97914" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_16">
                                Mario Bros.
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Tetris" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-302.99857" y="-26.822493" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_17">
                                Tetris
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Super_Mario_Bros." target="_blank" rel="noreferrer">
                            <text font-size="9" x="-79.48818" y="66.044876" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_18">
                                Super Mario Bros.
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/The_Legend_of_Zelda" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-590.7964" y="203.87643" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_19">
                                Legend of Zelda
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Metal_Gear_(video_game)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-127.46141" y="-298.1939" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_20">
                                Metal Gear
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Rad_Racer" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-108.15361" y="-64.08696" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_21">
                                Rad Racer
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Street_Fighter_(video_game)" target="_blank" rel="noreferrer">
                            <text font-size="10" x="-79.39836" y="-202.08218" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_22">
                                Street Fighter
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Netrek" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-178.49832" y="-383.09442" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_23">
                                Netrek
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/John_Madden_Football_(1988_video_game)" target="_blank" rel="noreferrer">
                            <text font-size="10" x="177.40854" y="-42.638435" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_24">
                                John Madden Football
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Street_Fighter_II" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-38.945423" y="-216.9126" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_25">
                                Street Fighter II
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Civilization_(video_game)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-214.70935" y="2.3894954" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_26">
                                Civilization
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Super_Mario_Kart" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-112.88665" y="38.299084" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_27">
                                Super Mario Kart
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Mortal_Kombat_(franquicia)" target="_blank" rel="noreferrer">
                            <text font-size="10" x="-362.62222" y="-170.9253" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_28">
                                Mortal Kombat
                            </text>
                            </a>
                            <a href="https://magic.wizards.com/es" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-427.87634" y="252.39594" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_29">
                                Magic: The Gathering
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Virtua_Fighter" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-81.97153" y="-267.0025" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_30">
                                Virtua Fighter
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Doom_(videojuego_de_1993)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-51.1144" y="296.3498" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_31">
                                Doom
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="13" x="263.11633" y="-54.693382" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_32">
                                FIFA
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Tekken_(videojuego)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-65.15657" y="-300.852" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_33">
                                Tekken
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/The_King_of_Fighters_%2794" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-271.2435" y="75.55008" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_34">
                                The King of Fighters 94
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Warcraft:_Orcs_%26_Humans" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-584.1175" y="259.45166" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_35">
                                Warcraft: Orcs and Humans
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="329.71735" y="-61.619453" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_36">
                                FIFA 95
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Warcraft_II:_Tides_of_Darkness" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-549.1811" y="394.5595" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_37">
                                Warcraft II: Tides of Darkness
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/J.League_Jikkyou_Winning_Eleven" target="_blank" rel="noreferrer">
                            <text font-size="9" x="226.39189" y="-93.29611" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_38">
                                Winning Eleven
                            </text>
                            </a>
                            <a href="https://soulcalibur.fandom.com/es/wiki/Soul_Edge_(videojuego)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-46.009125" y="-251.02783" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_39">
                                Soul Edge
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="371.48328" y="-65.449036" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_40">
                                FIFA 96
                            </text>
                            </a>
                            <a href="https://tekken.fandom.com/es/wiki/Tekken_2" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-36.530373" y="-322.58182" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_41">
                                Tekken 2
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Crash_Bandicoot_(videojuego)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-138.97034" y="139.63104" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_42">
                                Crash Bandicoot
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Marvel_vs._Capcom" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-52.513306" y="-174.84973" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_43">
                                Marvel vs. Capcom
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Diablo_(videojuego)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-665.7376" y="201.91277" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_44">
                                Diablo
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-222.11041" y="-69.03594" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_45">
                                Pokemon
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Quake_(videojuego)" target="_blank" rel="noreferrer">
                            <text font-size="10" x="4.8932824" y="439.51758" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_46">
                                Quake
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="412.87466" y="-68.56996" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_47">
                                FIFA 97
                            </text>
                            </a>
                            <a href="https://www.ageofempires.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-175.02718" y="7.122124" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_48">
                                Age of Empires
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/GoldenEye_007" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-86.359825" y="265.69556" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_49">
                                GoldenEye 007
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Quake_II" target="_blank" rel="noreferrer">
                            <text font-size="9" x="72.14616" y="448.50867" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_50">
                                Quake II
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Street_Fighter_III" target="_blank" rel="noreferrer">
                            <text font-size="9" x="4.937149" y="-234.16396" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_51">
                                Street Fight
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Grand_Theft_Auto_(video_game)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-149.53886" y="-334.7282" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_52">
                                Grand Theft Auto
                            </text>
                            </a>
                            <a href="https://www.gran-turismo.com/mx/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-63.62581" y="-63.01825" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_53">
                                Gran Turismo
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="455.48886" y="-72.84581" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_54">
                                FIFA 98
                            </text>
                            </a>
                            <a href="https://tekken.fandom.com/es/wiki/Tekken_3" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-3.5350933" y="-335.0674" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_55">
                                Tekken 3
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Unreal_(1998_video_game)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="64.61358" y="350.70715" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_56">
                                Unreal
                            </text>
                            </a>
                            <a href="https://halflife.fandom.com/es/wiki/Half-Life" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-37.87035" y="407.16864" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_57">
                                Half-Life
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Tom_Clancy%27s_Rainbow_Six" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-153.47731" y="352.0198" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_58">
                                Rainbow Six
                            </text>
                            </a>
                            <a href="https://starcraft.com/es-es/" target="_blank" rel="noreferrer">
                            <text font-size="14" x="-613.4307" y="366.6746" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_59">
                                StarCraft I
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="504.90463" y="-72.46621" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_60">
                                FIFA 99
                            </text>
                            </a>
                            <a href="https://store.steampowered.com/app/813780/Age_of_Empires_II_Definitive_Edition/?l=spanish" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-138.07033" y="7.758338" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_61">
                                Age of Empires II
                            </text>
                            </a>
                            <a href="https://www.everquest.com/home" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-461.18237" y="187.09256" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_62">
                                EverQuest
                            </text>
                            </a>
                            <a href="https://www.ea.com/es-es/games/medal-of-honor" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-312.6158" y="-324.94342" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_63">
                                Medal of Honor
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Quake_III_Arena" target="_blank" rel="noreferrer">
                            <text font-size="9" x="110.725006" y="441.67444" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_64">
                                Quake III Arena
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Street_Fighter_III:_3rd_Strike" target="_blank" rel="noreferrer">
                            <text font-size="9" x="46.257942" y="-212.41803" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_65">
                                Street Fighter III: 3rd Strike
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Unreal_Tournament" target="_blank" rel="noreferrer">
                            <text font-size="9" x="72.56883" y="386.27658" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_66">
                                Unreal Tournament
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Aliens_Versus_Predator_(1999_video_game)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-18.33778" y="372.99887" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_67">
                                Aliens Versus Predator
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Soulcalibur" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-23.968658" y="-282.06778" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_68">
                                Soulcalibur
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="10" x="553.04767" y="-75.693306" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_69">
                                NBA2K
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Super_Smash_Bros." target="_blank" rel="noreferrer">
                            <text font-size="10" x="-38.654705" y="83.663475" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_70">
                                Super Smash Bros
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Counter-Strike" target="_blank" rel="noreferrer">
                            <text font-size="12" x="-97.08298" y="421.80048" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_71">
                                Counter-Strike 1.6
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="497.78763" y="-106.05258" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_72">
                                FIFA 2000
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Team_Fortress_Classic" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-7.524269" y="518.9938" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_73">
                                Team Fortress
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="171.3508" y="4.647025" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_74">
                                Madden NFL 2000
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="177.13812" y="41.27803" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_75">
                                Madden NFL 2001
                            </text>
                            </a>
                            <a href="https://www.motogp.com/es" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-70.3576" y="-23.813856" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_76">
                                MotoGP
                            </text>
                            </a>
                            <a href="https://www.ea.com/es-es/games/the-sims" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-264.87643" y="-122.68879" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_77">
                                The Sims
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="487.45844" y="-143.85674" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_78">
                                FIFA 2001
                            </text>
                            </a>
                            <a href="https://www.ea.com/es-es/games/f1/f1-22" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-32.93844" y="-30.20737" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_79">
                                F1
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="199.66177" y="67.88102" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_80">
                                Madden NFL 2002
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Aliens_Versus_Predator_2" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-3.1099582" y="338.4217" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_81">
                                Alien vs Predator 2
                            </text>
                            </a>
                            <a href="https://animal-crossing.com/es/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-527.5683" y="-149.04709" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_82">
                                Animal Crossing
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="465.05283" y="-169.98035" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_83">
                                FIFA Football 2002
                            </text>
                            </a>
                            <a href="https://tekken.fandom.com/es/wiki/Tekken_4" target="_blank" rel="noreferrer">
                            <text font-size="9" x="30.448952" y="-338.00784" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_84">
                                Tekken 4
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Pro_Evolution_Soccer" target="_blank" rel="noreferrer">
                            <text font-size="9" x="184.74417" y="-116.044365" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_85">
                                Pro Evolution Soccer
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Halo:_Combat_Evolved" target="_blank" rel="noreferrer">
                            <text font-size="10" x="25.002544" y="247.62384" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_86">
                                Halo: Combat Evolved
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="226.81589" y="92.57404" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_87">
                                Madden NFL 2003
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="459.5991" y="-204.61322" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_88">
                                FIFA Football 2003
                            </text>
                            </a>
                            <a href="https://www.ea.com/es-es/games/battlefield" target="_blank" rel="noreferrer">
                            <text font-size="9" x="14.917942" y="205.73233" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_89">
                                Battlefield
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Unreal_Tournament_2003" target="_blank" rel="noreferrer">
                            <text font-size="9" x="105.20053" y="357.8285" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_90">
                                Unreal Tournament 2003
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-517.29376" y="378.56683" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_91">
                                Warcraft III: Reign of Chaos
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="480.98615" y="-234.91393" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_92">
                                FIFA Football 2004
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="253.15042" y="118.6307" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_93">
                                Madden NFL 2004
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Defense_of_the_Ancients" target="_blank" rel="noreferrer">
                            <text font-size="10" x="-527.7397" y="445.4211" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_94">
                                Defence of the Ancients
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Call_of_Duty" target="_blank" rel="noreferrer">
                            <text font-size="12" x="-287.84366" y="-377.50443" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_95">
                                Call of Duty
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="271.3726" y="148.40225" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_96">
                                Madden NFL 2005
                            </text>
                            </a>
                            <a href="https://store.steampowered.com/app/80/CounterStrike_Condition_Zero/?l=spanish" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-93.98753" y="360.51947" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_97">
                                Counter-Strike: Condition Zero
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Counter-Strike:_Source" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-132.59024" y="463.839" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_98">
                                Counter-Strike: Source
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Doom_3" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-61.01436" y="241.18579" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_99">
                                Doom III
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="472.32938" y="-270.24185" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_100">
                                FIFA 05
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Tekken_5" target="_blank" rel="noreferrer">
                            <text font-size="9" x="63.500343" y="-329.28915" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_101">
                                Tekken 5
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Painkiller_(video_game)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-29.911587" y="258.1306" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_102">
                                Painkiller
                            </text>
                            </a>
                            <a href="https://www.travian.com/cl" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-283.17984" y="127.43022" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_103">
                                Travian
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Unreal_Tournament_2004" target="_blank" rel="noreferrer">
                            <text font-size="9" x="117.028725" y="321.9436" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_104">
                                Unreal Tournament 2004
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Halo_2" target="_blank" rel="noreferrer">
                            <text font-size="9" x="72.80787" y="230.2704" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_105">
                                Halo 2
                            </text>
                            </a>
                            <a href="https://worldofwarcraft.blizzard.com/es-es/" target="_blank" rel="noreferrer">
                            <text font-size="10" x="-455.51288" y="338.01712" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_106">
                                World of Warcraft
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="450.45334" y="-303.70917" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_107">
                                FIFA 06
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Call_of_Duty_2" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-262.45273" y="-432.50143" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_108">
                                Call of Duty 2
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="279.44476" y="186.74712" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_109">
                                Madden NFL 06
                            </text>
                            </a>
                            <a href="https://www.chess.com/home" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-283.50613" y="-65.523346" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_110">
                                Chess.com
                            </text>
                            </a>
                            <a href="https://forza.net/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-8.878324" y="-70.24073" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_111">
                                Forza
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="437.24533" y="-337.3784" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_112">
                                FIFA 07
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Call_of_Duty_3" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-254.08055" y="-470.9824" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_113">
                                Call of Duty 3
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="269.9381" y="220.95656" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_114">
                                Madden NFL 07
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="417.89374" y="-368.3436" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_115">
                                FIFA 08
                            </text>
                            </a>
                            <a href="https://tekken.fandom.com/es/wiki/Tekken_6" target="_blank" rel="noreferrer">
                            <text font-size="9" x="92.23583" y="-311.3688" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_116">
                                Tekken 6
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/BioShock" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-286.84457" y="190.47195" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_117">
                                Bioshock
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Halo_3" target="_blank" rel="noreferrer">
                            <text font-size="9" x="105.77955" y="206.35428" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_118">
                                Halo 3
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/The_Witcher_(video_game)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-387.3126" y="139.06918" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_119">
                                The Witcher
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Call_of_Duty_4:_Modern_Warfare" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-251.53456" y="-528.052" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_120">
                                Call of Duty 4: Modern Warfare
                            </text>
                            </a>
                            <a href="https://www.teamfortress.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-24.498037" y="569.24567" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_121">
                                Team Fortress 2
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="396.3523" y="-398.63513" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_122">
                                FIFA 09
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Call_of_Duty:_World_at_War" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-287.97888" y="-532.95483" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_123">
                                Call of Duty: World at War
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="242.00885" y="286.49286" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_124">
                                Madden NFL 09
                            </text>
                            </a>
                            <a href="https://www.farming-simulator.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-227.73402" y="-124.094894" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_125">
                                Farming Simulator
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Street_Fighter_IV" target="_blank" rel="noreferrer">
                            <text font-size="9" x="65.73989" y="-179.86516" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_126">
                                Street Fighter IV
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="370.61868" y="-422.37448" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_127">
                                FIFA 10
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_2" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-280.22977" y="-568.6217" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_128">
                                Call of Duty: Modern Warfare II
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="260.5347" y="315.08737" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_129">
                                Madden NFL 10
                            </text>
                            </a>
                            <a href="https://justdancenow.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-263.9569" y="2.323289" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_130">
                                Just Dance
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="337.58237" y="-437.58792" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_131">
                                FIFA 11
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Halo:_Reach" target="_blank" rel="noreferrer">
                            <text font-size="9" x="143.12993" y="185.69392" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_132">
                                Halo: Reach
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="297.04065" y="320.76932" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_133">
                                Madden NFL 11
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/blackops" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-218.09744" y="-622.89056" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_134">
                                Call of Duty: Black Ops
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/The_King_of_Fighters_XIII" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-232.64227" y="96.51346" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_135">
                                The King of Fighters XIII
                            </text>
                            </a>
                            <a href="https://worldoftanks.com/es-ar/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="24.215927" y="169.79323" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_136">
                                World of Tanks
                            </text>
                            </a>
                            <a href="https://starcraft2.blizzard.com/es-es/" target="_blank" rel="noreferrer">
                            <text font-size="16" x="-526.64343" y="305.33893" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_137">
                                StarCraft II
                            </text>
                            </a>
                            <a href="https://www.leagueoflegends.com/es-es/" target="_blank" rel="noreferrer">
                            <text font-size="30" x="-336.87155" y="597.17474" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_138">
                                League of Legends
                            </text>
                            </a>
                            <a href="https://store.steampowered.com/app/105600/Terraria/?l=spanish" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-527.75854" y="-208.01466" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_139">
                                Terraria
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="301.99673" y="-432.97067" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_140">
                                FIFA 12
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="424.82983" y="231.49895" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_141">
                                NBA2K12
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/World_Cricket_Championship_(mobile_game)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-351.3978" y="-96.66539" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_142">
                                WCC
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/mw3" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-221.33046" y="-588.3045" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_143">
                                Call of Duty: Modern Warfare III
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="330.30078" y="311.1396" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_144">
                                Madden NFL 12
                            </text>
                            </a>
                            <a href="https://www.minecraft.net/es-es" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-605.9336" y="-169.37639" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_145">
                                Minecraft
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Soulcalibur_V" target="_blank" rel="noreferrer">
                            <text font-size="9" x="5.9544144" y="-302.633" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_146">
                                Soulcalibur V
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="275.61948" y="-411.11328" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_147">
                                FIFA 13
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="365.76477" y="311.68033" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_148">
                                Madden NFL 13
                            </text>
                            </a>
                            <a href="https://www.awesomenauts.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-226.66411" y="472.42984" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_149">
                                Awesomenauts
                            </text>
                            </a>
                            <a href="https://us.diablo3.blizzard.com/es-mx/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-564.9343" y="80.89739" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_150">
                                Diablo III
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="246.70576" y="-388.41928" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_151">
                                FIFA Ultimate Team
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Halo_4" target="_blank" rel="noreferrer">
                            <text font-size="9" x="99.13177" y="165.0234" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_152">
                                Halo 4
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Street_Fighter_X_Tekken" target="_blank" rel="noreferrer">
                            <text font-size="9" x="84.63279" y="-148.72452" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_153">
                                Street Fighter X Tekken
                            </text>
                            </a>
                            <a href="https://www.guildwars2.com/es/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-332.58163" y="231.76575" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_154">
                                Guild Wars 2
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/blackops2" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-166.48035" y="-615.6391" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_155">
                                Call of Duty: Black Ops 2
                            </text>
                            </a>
                            <a href="https://supercell.com/en/games/clashofclans/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-252.13646" y="154.27452" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_156">
                                Clash of Clans
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Counter-Strike:_Global_Offensive" target="_blank" rel="noreferrer">
                            <text font-size="12" x="-97.14074" y="501.1217" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_157">
                                Counter-Strike: Global Offensive
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="287.66196" y="-376.74655" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_158">
                                FIFA 14
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/ghosts" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-123.12838" y="-580.5223" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_159">
                                Call of Duty: Ghosts
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="396.7939" y="332.06018" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_160">
                                Madden NFL 14
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Battlefield_4" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-14.017995" y="176.57791" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_161">
                                Battlefield 4
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/ShootMania_Storm" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-331.5399" y="-57.441067" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_162">
                                Shootmania
                            </text>
                            </a>
                            <a href="https://www.ubisoft.com/en-gb/game/splinter-cell/blacklist" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-105.791565" y="-331.92844" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_163">
                                Splinter Cell: Blacklist
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Injustice:_Dioses_entre_nosotros" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-322.8438" y="-192.24846" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_164">
                                Injustice
                            </text>
                            </a>
                            <a href="https://www.dota2.com/home" target="_blank" rel="noreferrer">
                            <text font-size="15" x="-453.94638" y="431.39706" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_165">
                                Defense of the Ancients 2
                            </text>
                            </a>
                            <text font-size="3" x="-441.79477" y="-41.82028" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_258">
                                INICIO
                            </text>
                            <a href="https://www.callofduty.com/es/advancedwarfare" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-83.02369" y="-578.2547" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_167">
                                Call of Duty: Advanced Warfare
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Destiny_(videojuego)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="152.77966" y="150.90762" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_168">
                                Destiny
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Driveclub" target="_blank" rel="noreferrer">
                            <text font-size="9" x="24.188921" y="-53.612324" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_169">
                                DriveClub
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="290.82394" y="-339.41754" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_170">
                                FIFA 15
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="405.99857" y="367.96997" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_171">
                                Madden NFL 15
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Titanfall" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-340.32828" y="-478.62033" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_172">
                                Titanfall
                            </text>
                            </a>
                            <a href="https://www.vainglorygame.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-374.4562" y="439.7717" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_173">
                                Vainglory
                            </text>
                            </a>
                            <a href="https://hearthstone.blizzard.com/es-es" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-449.10452" y="298.69437" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_174">
                                Hearthstone
                            </text>
                            </a>
                            <a href="https://www.smitegame.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-259.38452" y="-29.179258" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_175">
                                Smite
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="386.0888" y="400.53375" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_176">
                                Madden NFL 16
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="398.52258" y="98.60753" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_177">
                                NBA2K16
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Pro_Evolution_Soccer_2016" target="_blank" rel="noreferrer">
                            <text font-size="9" x="131.68109" y="-129.306" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_178">
                                Pro Evolution Soccer 2016
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Project_CARS" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-35.43064" y="-95.9612" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_179">
                                Project Cars
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="300.396" y="-302.72015" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_180">
                                FIFA 16
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/blackops3" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-57.58109" y="-602.4405" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_181">
                                Call of Duty: Black Ops 3
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Halo_5:_Guardians" target="_blank" rel="noreferrer">
                            <text font-size="9" x="93.852905" y="123.93154" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_182">
                                Halo 5: Guardians
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Crisis_infinita" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-216.27902" y="510.5055" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_183">
                                Infinite Crisis
                            </text>
                            </a>
                            <a href="https://tekken.fandom.com/es/wiki/Tekken_7" target="_blank" rel="noreferrer">
                            <text font-size="9" x="112.58166" y="-283.70087" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_184">
                                Tekken 7
                            </text>
                            </a>
                            <a href="https://www.ubisoft.com/es-es/game/rainbow-six/siege" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-153.48228" y="314.30402" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_185">
                                Rainbow Six: Siege
                            </text>
                            </a>
                            <a href="https://www.rocketleague.com/es-es/" target="_blank" rel="noreferrer">
                            <text font-size="10" x="233.01389" y="3.3499858" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_186">
                                Rocket League
                            </text>
                            </a>
                            <a href="https://heroesofthestorm.com/es-es/" target="_blank" rel="noreferrer">
                            <text font-size="11" x="-406.1066" y="343.1065" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_187">
                                Heroes of the Storm
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Titanfall_2" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-370.6924" y="-438.49667" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_188">
                                Titanfall 2
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="353.21133" y="418.24005" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_189">
                                Madden NFL 17
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/infinitewarfare" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-32.738037" y="-566.77423" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_190">
                                Call of Duty: Infinite Warfare
                            </text>
                            </a>
                            <a href="https://m.mobilelegends.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-271.17422" y="415.7052" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_191">
                                Mobile Legends
                            </text>
                            </a>
                            <a href="https://pokemongolive.com/es/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-184.20805" y="-69.59718" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_192">
                                Pokemon Go
                            </text>
                            </a>
                            <a href="https://es.stardewvalleywiki.com/Stardew_Valley_Wiki" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-552.3641" y="-175.3268" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_193">
                                Stardew Valley
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Street_Fighter_V" target="_blank" rel="noreferrer">
                            <text font-size="9" x="42.766174" y="-148.47786" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_194">
                                Street Fighter V
                            </text>
                            </a>
                            <a href="https://www.arenaofvalor.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-300.52243" y="441.14688" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_195">
                                Arena of Valor
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Pro_Evolution_Soccer_2017" target="_blank" rel="noreferrer">
                            <text font-size="9" x="95.99354" y="-87.81249" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_196">
                                Pro Evolution Soccer 2017
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="320.06024" y="-268.41263" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_197">
                                FIFA 17
                            </text>
                            </a>
                            <a href="https://clashroyale.com/es/" target="_blank" rel="noreferrer">
                            <text font-size="10" x="-215.06163" y="190.50632" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_198">
                                Clash Royale
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Overwatch" target="_blank" rel="noreferrer">
                            <text font-size="12" x="-103.39461" y="586.2438" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_199">
                                Overwatch
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Injustice_2" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-313.8588" y="-234.6332" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_200">
                                Injustice 2
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="319.89084" y="432.57278" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_201">
                                Madden NFL 18
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/wwii" target="_blank" rel="noreferrer">
                            <text font-size="9" x="3.6611722" y="-559.19507" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_202">
                                Call of Duty: WWII
                            </text>
                            </a>
                            <a href="https://quake.bethesda.net/es/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="127.837" y="410.80075" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_203">
                                Quake Champions
                            </text>
                            </a>
                            <a href="https://supercell.com/en/games/brawlstars/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-158.3338" y="582.20624" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_204">
                                Brawl Stars
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="338.46954" y="-232.23132" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_205">
                                FIFA 18
                            </text>
                            </a>
                            <a href="https://pubg.com/es-es" target="_blank" rel="noreferrer">
                            <text font-size="10" x="-460.26065" y="-356.15332" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_206">
                                PlayerUnknown&apos;s Battlegrounds
                            </text>
                            </a>
                            <a href="https://www.fortnite.com/" target="_blank" rel="noreferrer">
                            <text font-size="12" x="-546.9982" y="-257.86444" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_207">
                                Fortnite
                            </text>
                            </a>
                            <a href="https://www.fortnite.com/" target="_blank" rel="noreferrer">
                            <text font-size="12" x="-512.6178" y="-314.87854" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_208">
                                Fortnite: Battle Royale
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/blackops4" target="_blank" rel="noreferrer">
                            <text font-size="9" x="30.75384" y="-589.0627" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_209">
                                Call of Duty: Black Ops 4
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Among_Us" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-211.3801" y="40.648308" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_210">
                                Among Us
                            </text>
                            </a>
                            <a href="https://es.bandainamcoent.eu/dragon-ball/dragon-ball-fighterz" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-24.13659" y="-148.26791" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_211">
                                Dragon Ball FighterZ
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="336.78616" y="-194.8184" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_212">
                                FIFA 19
                            </text>
                            </a>
                            <a href="https://www.playgwent.com/es" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-391.428" y="174.20953" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_213">
                                GWENT
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="297.0154" y="458.9146" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_214">
                                Madden NFL 19
                            </text>
                            </a>
                            <a href="https://www.smashbros.com/es_ES/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-11.46775" y="46.002377" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_215">
                                Super Smash Bros: Ultimate
                            </text>
                            </a>
                            <a href="https://www.paladins.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="11.606764" y="549.5705" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_216">
                                Paladins
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/modernwarfare" target="_blank" rel="noreferrer">
                            <text font-size="9" x="55.967796" y="-544.2994" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_217">
                                Call of Duty: Modern Warfare(2019)
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="282.22214" y="494.3391" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_218">
                                Madden NFL 20
                            </text>
                            </a>
                            <a href="https://teamfighttactics.leagueoflegends.com" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-246.54646" y="440.74258" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_219">
                                Teamfight Tactics
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="285.99072" y="36.57015" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_220">
                                NBA2K20
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="306.4497" y="-170.01514" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_221">
                                FIFA 20
                            </text>
                            </a>
                            <a href="https://www.ea.com/es-es/games/apex-legends" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-403.38202" y="-403.05826" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_222">
                                Apex Legends
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="271.34073" y="-165.39856" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_223">
                                FIFA 21
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/blackopscoldwar" target="_blank" rel="noreferrer">
                            <text font-size="9" x="87.727974" y="-561.0224" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_224">
                                Call of Duty: Black Ops Cold War
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="268.1639" y="525.85126" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_225">
                                Madden NFL 21
                            </text>
                            </a>
                            <a href="https://www.activision.com/es/games/call-of-duty/call-of-duty-warzone" target="_blank" rel="noreferrer">
                            <text font-size="9" x="53.400826" y="-502.80707" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_226">
                                Call of Duty: Warzone
                            </text>
                            </a>
                            <a href="https://www.team17.com/games/golf-with-your-friends/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-302.91714" y="21.697075" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_227">
                                Golf with Your Friends
                            </text>
                            </a>
                            <a href="https://playruneterra.com/es-es/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-357.19244" y="376.12387" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_228">
                                Legends of Runeterra
                            </text>
                            </a>
                            <a href="https://www.fallguys.com/es-ES" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-518.32825" y="-377.1185" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_229">
                                Fall Guys
                            </text>
                            </a>
                            <a href="https://playvalorant.com/es-es/" target="_blank" rel="noreferrer">
                            <text font-size="10" x="-53.288883" y="536.2124" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_230">
                                Valorant
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer">
                            <text font-size="9" x="237.40736" y="-154.51881" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_231">
                                FIFA 22
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/vanguard" target="_blank" rel="noreferrer">
                            <text font-size="9" x="113.683624" y="-523.53613" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_232">
                                Call of Duty: Vanguard
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="231.73099" y="514.63776" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_233">
                                Madden NFL 22
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Halo_Infinite" target="_blank" rel="noreferrer">
                            <text font-size="9" x="82.432915" y="88.456696" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_234">
                                Halo Infinite
                            </text>
                            </a>
                            <a href="https://www.callofduty.com/es/modernwarfare2" target="_blank" rel="noreferrer">
                            <text font-size="9" x="119.90862" y="-484.75586" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_235">
                                Call of Duty: Modern Warfare II(2022)
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="213.93225" y="482.00092" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_236">
                                Madden NFL 23
                            </text>
                            </a>
                            <a href="https://www.guildwars.com/es" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-370.67993" y="245.55176" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_237">
                                Guild Wars
                            </text>
                            </a>
                            <a href="https://diablo2.blizzard.com/es-es/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="-636.4182" y="118.44825" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_238">
                                Diablo II
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="586.60516" y="-50.778385" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_239">
                                NBA 2K1
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="570.9701" y="-19.073826" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_240">
                                NBA 2K2
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="552.5199" y="12.89159" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_241">
                                NBA 2K3
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="529.5156" y="38.375027" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_242">
                                ESPN NBA Basketball
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="515.2176" y="74.248856" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_243">
                                ESPN NBA 2K5
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="520.9068" y="108.098595" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_244">
                                NBA 2K6
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="529.5243" y="146.82968" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_245">
                                NBA 2K7
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="528.19586" y="184.17786" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_246">
                                NBA 2K8
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="516.80835" y="218.15149" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_247">
                                NBA 2K9
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="491.33392" y="242.36133" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_248">
                                NBA 2K10
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="455.9178" y="246.72018" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_249">
                                NBA 2K11
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="400.82785" y="204.18326" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_250">
                                NBA 2K13
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="389.92334" y="171.3096" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_251">
                                NBA 2K14
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="391.11206" y="135.09741" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_252">
                                NBA 2K15
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="392.14978" y="61.737545" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_253">
                                NBA 2K17
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="360.74026" y="40.24957" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_254">
                                NBA 2K18
                            </text>
                            </a>
                            <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer">
                            <text font-size="9" x="326.78772" y="36.844673" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_255">
                                NBA 2K19
                            </text>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer">
                            <text font-size="9" x="248.79106" y="251.45712" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_256">
                                Madden NFL 08
                            </text>
                            </a>
                            <a href="https://es.wikipedia.org/wiki/Halo_3:_ODST" target="_blank" rel="noreferrer">
                            <text font-size="9" x="139.8589" y="228.82413" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="sans-serif" className="id_257">
                                Halo 3: ODST
                            </text>
                            </a>
                        </g>
                        </svg>
                    </div>
                    <div className="card-text">
                        <p>
                            <strong>Conexiones interesantes</strong>
                            <br/>
                            <br/>
                            De la visualización se pueden destacar ciertas conexiones entre videojuegos que pueden resultar interesantes. Un ejemplo de esto es la conexión que contiene el juego <b>Fortnite</b> y el juego <b>Stardew Valley</b>.
                            <br/>
                            Ambos juegos nacen desde las mismas bases, aún así, son juegos totalmente diferentes. <b>Fortnite</b> es un juego de acción y disparos en tercera persona, mientras que <b>Stardew Valley</b> es un juego de simulación de granja.
                            Además, <b>Fortnite</b> cambió más tarde por su influencia desde el <b>PubG</b>, que es un juego Battle Royale, desde el cual nació el modo de juego más popular de <b>Fortnite</b>, <b>Fortnite Battle Royale</b>.
                            <br/>
                            Otro ejemplo de relación entre juegos que se puede destacar es la reconocida conexión entre los juegos <b>DotA 2</b> y <b>League of Legends</b>, los cuales son juegos del mismo género, MOBA, y que además, nacieron desde el mismo juego, <b>Warcraft III</b>.
                            Ambos nacieron como un mod del juego <b>Warcraft III</b>, y más tarde se convirtieron en juegos independientes, uno por parte de Valve y otro por parte de Riot Games.
                            <br/>
                            Conexiones más inusuales o impensadas son aquellas entre juegos de géneros totalmente diferentes, como por ejemplo,la conexión entre el juego <b>League of Legends</b>, un MOBA, y el juego <b>Overwatch</b> un FPS, ambos precursores del juego <b>Brawl Stars</b>.
                            <br/>
                            Por último, otras conexiones interesantes son las de los juegos <b>Medal of Honor</b>, cuyos sucesores espirituales son los juegos de <b>Call of Duty</b>, que a su vez son los precursores de la saga <b>TitanFall</b>, y esta última junto a <b>PubG</b> inspiraron el juego <b>Apex Legends</b>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mt-3 row">
                <div className="col-12 col-sm-12">
                    <p className="fs-1">Eventos históricos</p>
                </div>
                <div className="col-12 mt-3 col-sm-12">
                    <h3>Eventos importantes</h3>
                        <p>
                            <strong>¿Qué eventos importantes se pueden destacar?</strong><br />
                            En la siguiente sección se destacarán algunos de los eventos más importantes que se pueden observar en la visualización, así como también de las visualizaciones de la página de inicio.
                        </p>
                </div>
                <div className="col-12 mt-3 col-sm-6">
                    <h4>El nacimiento de los juegos MOBA</h4>
                    <p>
                        <strong>¿Qué juegos fueron los precursores de los juegos MOBA?</strong>
                        <br/>
                        <br/>
                        Los juegos MOBA, Multiplayer Online Battle Arena, son un género de videojuegos que se caracterizan por ser juegos de estrategia en tiempo real, en los cuales dos equipos de jugadores se enfrentan entre sí en un mapa, 
                        con el objetivo de destruir la base del equipo contrario.
                        Estos juegos tienen su primera aparición en la visualización con el MOD <strong>Defense of the Ancients</strong>, más conocido como DotA, el cual es un MOD del juego <strong>Warcraft III: Reign of Chaos</strong>,
                        lanzado en el año 2002. Este MOD fue creado por un usuario de Warcraft III, Eul, y más tarde fue continuado por otro usuario, Guinsoo.
                        <br/>
                        <br/>
                        Este MOD fue el precursor de los juegos MOBA, y de hecho, fue el que inspiró a los creadores de los juegos <strong>League of Legends</strong> y <strong>Heroes of the Storm</strong>.
                        <br/>
                        <br/>
                        <strong>¿Por que son importantes los MOBAs?</strong>     
                        <br/>
                        <br/>
                        La importancia del género se debe a la gran cantidad de jugadores, torneos y espectadores en todo el mundo que tienen estos juegos. En particular el juego <strong>DotA 2</strong> es el juego 
                        que más dinero ha repartido en premios en torneos de eSports, con un total de <strong>318 millones de dólares</strong> y un total de 4711 jugadores que han ganado algún premio reportados, mientras que en cuarto 
                        lugar se encuentra <strong>League of Legends</strong>, con 102 millones de dólares y 9000 jugdores reportados. 
                        Fuente: <a href="https://www.esportsearnings.com/games" target="_blank" rel="noreferrer">eSports Earnings</a>
                        <br/>
                        <br/>
                        Además estos juegos fueron parte de los juegos más nombrados en el estudio de artículos, siendo League of Legends el más nombrado con 474 menciones, mientras que DotA 2 se encuentra en tercer 
                        lugar con 146 menciones.
                    </p>
                </div>
                <div className="col-12 mt-3 col-sm-6">
                    <TorneosLol/>
                </div>
                <div className="col-12 mt-3 col-sm-6 containerImagen">
                    <a href='https://cod-esports.fandom.com/wiki/Call_of_Duty_League_Championship_2023' target='_blank' rel='noreferrer'>
                        <img className='imagen' src={imgCOD} alt="Imagen de Call of Duty Warzone" />
                    </a>
                    <div className='bajoIzquierda'>
                        Foto de <a href="https://unsplash.com/@tamarisco?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fábio Magalhães</a> en <a href="https://unsplash.com/es/fotos/nmTm7knUnqs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <div className="col-12 mt3 col-sm-6">
                    <h4>Call of Duty y la Major League Gaming</h4>
                    <p>
                        <strong>¿Qué relación tienen Call of Duty y la Major League Gaming?</strong>
                        <br/>
                        <br/>
                        La Major League Gaming, o MLG, es una organización de eSports que organiza torneos de videojuegos, y que además, es la organización de eSports más grande de Estados Unidos.
                        <br/>
                        <br/>
                        Esta organización fue fundada en el año 2002, y desde entonces ha organizado torneos de varios juegos, entre los cuales se destacan los juegos de la saga <strong>Call of Duty</strong>, 
                        los cuales son una de los videojuegos más nombradas en los artículos con 91 menciones.
                        La relación de entre la organización MLG y la saga de Call of Duty data desde el año 2009, cuando se organizó el primer torneo de Call of Duty, el cual fue el 
                        <strong><a href='https://cod-esports.fandom.com/wiki/MLG_National_Championship_2009' target='_blank' rel='noreferrer'>MLG National Championship 2009</a></strong>.
                        <br/>
                        <br/>
                        Durante estos años aparecieron nombres como <a href='https://cod-esports.fandom.com/wiki/Nadeshot' target='_blank' rel='noreferrer'>Nadeshot</a>, actual fundador de la organización de 
                        eSports 100 Thieves y LA Thieves.
                        <br/>
                        <br/>
                        En la actualidad, la franquicia de Call of Duty es una de las franquicias más importantes de los eSports, y la MLG es una de las organizaciones más importantes de eSports, debido al 
                        gran impulso que dieron a los eSports en sus inicios y a las grandes audiencias que tuvieron sus torneos.
                    </p>
                </div>
                <div className="col-12 mt-3 col-sm-6">
                    <h4>El nacimiento de los juegos Battle Royale</h4>
                    <p>
                        <strong>¿Qué juegos fueron los precursores de los juegos Battle Royale?</strong>
                        <br/>
                        <br/>
                        El género Battle Royale es un género de videojuegos que se caracteriza por ser juegos de acción y disparos en primera o tercera persona, en los cuales un grupo de jugadores se enfrentan entre sí en un mapa,
                        con el objetivo de ser el último jugador en pie. Esta idea proviene del clásico manga y anime japonés <strong>Battle Royale</strong>, el cual fue publicado en el año 1999.
                        <br/>
                        <br/>
                        Los juegos más destacados del género son PubG, Fortnite y Apex Legends (en orden de lanzamiento), los cuales son los que más jugadores tienen en la actualidad.
                        PubG fue el primer juego del género en ser lanzado, en el año 2017, y fue el que inspiró a los creadores de los juegos Fortnite y Apex Legends. Según eSports Earnings,
                        el juego PubG ha repartido un total de 53 millones de dólares en premios (y otros 67 en su versión de teléfono movil), mientras que Fortnite ha repartido 159 millones de dólares y Apex Legends 17 millones de dólares.
                        Fuente: <a href="https://www.esportsearnings.com/games" target="_blank" rel="noreferrer">eSports Earnings</a>
                        <br/>
                        <br/>
                    </p>
                </div>
                <div className="col-12 mt-3 col-sm-6 containerImagen">
                    <a href='https://www.fortnite.com/?lang=en-US' target='_blank' rel='noreferrer'>
                        <img className='imagen' src='https://cdn2.unrealengine.com/fortnite-home-page-battle-pass-promo-slide-desktop-1920x1080-8d9444dcb067.jpg' alt="Imagen de Fortnite" />
                    </a>
                    <div className='bajoIzquierda'>
                        Foto de <a href="https://www.fortnite.com/?lang=en-US">Fortnite</a> en <a href="https://www.epicgames.com/">Epic Games</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Historico;