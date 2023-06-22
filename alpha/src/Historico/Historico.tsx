import { useEffect } from 'react';
import './Historico.css'

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
                        En la presente visualización se muestra la historia de los eSports, desde su creación hasta la actualidad, pasando por los diferentes juegos que han sido parte de la historia de los eSports.
                        Los juegos están ordenados según las inspiraciones que tuvieron para su creación, y se muestran juegos que han sido parte de los eSports, han sido seleccionados a partir de las apariciones que han tenido en la investigación
                        realizada para este proyecto.
                        <br/> <br/>
                        Para navegar por la visualización, has <b className='text-black'>zoom con la rueda del ratón</b>, y <b className='text-black'>mueve la visualización manteniendo pulsado el botón izquierdo del ratón y arrastraló</b>, navega por el mapa y descubre las inspiraciones de los juegos aquí mostrados.
                    </p>
                    <div className="card-body border" id='svgContainer'>
                        <svg contentScriptType="text/ecmascript" width="1245.8584" id='svgMap'
                        xmlnsXlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"
                        contentStyleType="text/css"
                        viewBox="-643.000000 -635.000000 1245.858398 1000" height="500.0"
                        preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
                        version="1.1">
                            <g id="edges">
                                <path fill="none" strokeWidth="1.0"
                                d="M -237.787369,-258.307220 L -223.590515,-270.556488"
                                className="id_1 id_2" stroke-opacity="1.0" stroke="#8fc562"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -203.342102,-292.186310 L -179.784149,-325.045166"
                                className="id_2 id_6" stroke-opacity="1.0" stroke="#228c68"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -161.221466,-309.102814 L -165.486481,-322.745117"
                                className="id_3 id_6" stroke-opacity="1.0" stroke="#8fc562"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -182.703232,-333.559631 L -198.742569,-327.501282"
                                className="id_6 id_7" stroke-opacity="1.0" stroke="#228c68"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -211.134796,-294.699280 L -211.106522,-309.650757"
                                className="id_2 id_7" stroke-opacity="1.0" stroke="#228c68"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -201.852982,-271.616638 L -172.637650,-241.278305"
                                className="id_2 id_9" stroke-opacity="1.0" stroke="#228c68"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -157.188446,-339.753357 L -139.120987,-341.842865"
                                className="id_6 id_8" stroke-opacity="1.0" stroke="#228c68"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -159.017624,-331.375488 L -130.408234,-314.028809"
                                className="id_6 id_23" stroke-opacity="1.0" stroke="#228c68"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -153.456421,-225.795441 L -117.781242,-205.396866"
                                className="id_9 id_20" stroke-opacity="1.0" stroke="#848d67"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -167.641159,-221.331360 L -175.835678,-203.996582"
                                className="id_9 id_14" stroke-opacity="1.0" stroke="#228c68"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -158.572113,-221.199432 L -149.719299,-200.969009"
                                className="id_9 id_12" stroke-opacity="1.0" stroke="#228c68"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -152.015518,-231.495789 L -135.634949,-231.892929"
                                className="id_9 id_52" stroke-opacity="1.0" stroke="#2c5a5b"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -153.051132,98.131607 L -146.916199,87.675606"
                                className="id_11 id_13" stroke-opacity="1.0" stroke="#3f6c77"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -147.652893,107.105713 L -117.237915,105.799789"
                                className="id_11 id_16" stroke-opacity="1.0" stroke="#228c68"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -152.668579,116.784088 L -146.106049,126.986046"
                                className="id_11 id_42" stroke-opacity="1.0" stroke="#90a83d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -57.569965,96.140099 L -44.243961,93.056999"
                                className="id_18 id_70" stroke-opacity="1.0" stroke="#18a84e"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -66.380920,88.058006 L -64.033745,71.536331"
                                className="id_18 id_27" stroke-opacity="1.0" stroke="#25a489"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -490.218994,219.451843 L -439.515778,244.673843"
                                className="id_4 id_29" stroke-opacity="1.0" stroke="#4e6087"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -508.431000,219.521149 L -570.659607,251.069504"
                                className="id_4 id_35" stroke-opacity="1.0" stroke="#2e79a4"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -491.277954,208.684647 L -471.621094,193.502121"
                                className="id_4 id_62" stroke-opacity="1.0" stroke="#9cb1cd"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 128.268723,-31.932837 L 161.452682,-36.002403"
                                className="id_5 id_24" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -589.588684,212.055038 L -585.905762,242.910080"
                                className="id_19 id_35" stroke-opacity="1.0" stroke="#2d4251"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -584.034851,194.313660 L -575.973267,185.224594"
                                className="id_19 id_44" stroke-opacity="1.0" stroke="#3860a2"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -97.967056,-65.374496 L -77.380821,-64.848915"
                                className="id_21 id_53" stroke-opacity="1.0" stroke="#25a489"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -0.517047,-330.804016 L 13.868816,-296.841064"
                                className="id_22 id_25" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 5.495366,-351.691925 L 45.769886,-379.816711"
                                className="id_22 id_30" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 7.779347,-346.239349 L 33.124100,-350.949646"
                                className="id_22 id_39" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -13.526844,-331.911682 L -24.054848,-315.505890"
                                className="id_22 id_43" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 191.226486,-40.948071 L 235.399582,-50.667412"
                                className="id_24 id_32" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 175.784927,-24.587582 L 173.406570,-9.737006"
                                className="id_24 id_74" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 23.333652,-274.634857 L 28.708973,-262.123444"
                                className="id_25 id_51" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -204.768768,1.925983 L -188.138687,3.746968"
                                className="id_26 id_48" stroke-opacity="1.0" stroke="#8a3d3a"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -351.314484,-178.749649 L -334.619446,-187.755753"
                                className="id_28 id_164" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -432.016083,259.566681 L -443.565643,284.962952"
                                className="id_29 id_174" stroke-opacity="1.0" stroke="#aa241c"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -422.915680,259.146637 L -363.735504,362.731873"
                                className="id_29 id_228" stroke-opacity="1.0" stroke="#632819"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -423.630157,241.410080 L -397.028656,184.690109"
                                className="id_29 id_213" stroke-opacity="1.0" stroke="#8d2d72"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -417.939606,249.340805 L -383.597687,245.459656"
                                className="id_29 id_237" stroke-opacity="1.0" stroke="#4e6087"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 53.466446,-377.708435 L 49.755615,-365.741730"
                                className="id_30 id_39" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 66.426888,-387.425964 L 85.707954,-387.746521"
                                className="id_30 id_33" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -46.905300,305.629364 L -1.175221,422.124023"
                                className="id_31 id_46" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -59.746529,287.279785 L -76.475563,272.498383"
                                className="id_31 id_49" stroke-opacity="1.0" stroke="#a1ae19"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -45.538521,284.827393 L -36.296276,268.120209"
                                className="id_31 id_102" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -41.429230,288.671173 L 11.038872,254.889847"
                                className="id_31 id_86" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 288.382660,-59.162617 L 316.775452,-61.855915"
                                className="id_32 id_36" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 245.589645,-75.121994 L 235.369400,-85.825890"
                                className="id_32 id_38" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 251.419998,-34.241966 L 241.192566,-14.546724"
                                className="id_32 id_186" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 110.067429,-384.590454 L 122.786728,-380.451752"
                                className="id_33 id_41" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -258.191772,61.933235 L -244.620697,64.032524"
                                className="id_34 id_135" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -581.091125,269.596008 L -552.435608,380.414154"
                                className="id_35 id_37" stroke-opacity="1.0" stroke="#235b54"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -581.653259,246.057556 L -569.647949,188.401321"
                                className="id_35 id_44" stroke-opacity="1.0" stroke="#2e79a4"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -587.329529,269.546417 L -604.729736,332.679230"
                                className="id_35 id_59" stroke-opacity="1.0" stroke="#235b54"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 339.675568,-63.996651 L 358.537567,-65.726135"
                                className="id_36 id_40" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -558.308838,388.915588 L -583.540222,377.624756"
                                className="id_37 id_59" stroke-opacity="1.0" stroke="#235b54"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -539.398560,390.926086 L -522.874146,387.422577"
                                className="id_37 id_91" stroke-opacity="1.0" stroke="#235b54"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -543.541931,401.258484 L -526.036804,426.893982"
                                className="id_37 id_94" stroke-opacity="1.0" stroke="#56999e"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 218.078613,-100.786072 L 206.110031,-108.787659"
                                className="id_38 id_85" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 52.300983,-345.637726 L 61.258461,-334.871368"
                                className="id_39 id_68" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 381.454956,-67.665016 L 399.911469,-69.056641"
                                className="id_40 id_47" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 142.659119,-369.826691 L 152.041672,-361.578156"
                                className="id_41 id_55" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -559.769409,166.823334 L -543.244690,147.883621"
                                className="id_44 id_238" stroke-opacity="1.0" stroke="#3998f5"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -526.095581,132.989197 L -511.293030,124.215622"
                                className="id_238 id_150" stroke-opacity="1.0" stroke="#3998f5"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -211.352097,-70.747246 L -197.396484,-70.953896"
                                className="id_45 id_192" stroke-opacity="1.0" stroke="#7e9ed4"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 18.375731,439.424438 L 59.077587,444.982971"
                                className="id_46 id_50" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -6.004874,429.434753 L -27.306742,413.507599"
                                className="id_46 id_57" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 15.617392,429.207031 L 62.024292,392.960480"
                                className="id_46 id_66" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -8.510475,435.236725 L -69.689438,424.526672"
                                className="id_46 id_71" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 2.805291,451.029633 L -5.529509,504.704865"
                                className="id_46 id_73" stroke-opacity="1.0" stroke="#52bc53"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 422.824707,-71.032448 L 442.553802,-73.012039"
                                className="id_47 id_54" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -164.838806,5.358064 L -151.258240,5.591854"
                                className="id_48 id_61" stroke-opacity="1.0" stroke="#235b54"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 82.179810,444.990234 L 97.737350,442.234222"
                                className="id_50 id_64" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 38.591328,-240.525848 L 45.165764,-227.230042"
                                className="id_51 id_65" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -56.281136,-56.635014 L -42.979038,-42.394657"
                                className="id_53 id_79" stroke-opacity="1.0" stroke="#29bdab"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -65.445915,-53.893311 L -68.126366,-38.276283"
                                className="id_53 id_76" stroke-opacity="1.0" stroke="#29bdab"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -52.957817,-65.897964 L -21.956028,-69.967094"
                                className="id_53 id_111" stroke-opacity="1.0" stroke="#29bdab"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -56.675980,-72.711548 L -43.950310,-87.751656"
                                className="id_53 id_179" stroke-opacity="1.0" stroke="#29bdab"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 465.488556,-74.233109 L 491.905029,-74.030182"
                                className="id_54 id_60" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 166.235321,-344.029633 L 173.126144,-330.085022"
                                className="id_55 id_84" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 66.796196,358.914063 L 69.648544,371.667419"
                                className="id_56 id_66" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -47.782234,407.973236 L -70.031540,413.279541"
                                className="id_57 id_71" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -32.812572,396.763275 L -24.790367,382.732452"
                                className="id_57 id_67" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -153.478714,339.708313 L -153.480347,327.270630"
                                className="id_58 id_185" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -589.184021,347.016144 L -560.609497,326.707428"
                                className="id_59 id_137" stroke-opacity="1.0" stroke="#235b54"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 502.831635,-83.713097 L 500.482513,-94.799088"
                                className="id_60 id_72" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 514.880188,-74.629333 L 537.427734,-76.209290"
                                className="id_60 id_69" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -308.339935,-335.752075 L -299.433685,-355.017517"
                                className="id_63 id_95" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 115.641685,431.008240 L 121.472809,420.423004"
                                className="id_64 id_203" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 55.288631,-206.157593 L 61.101463,-193.585800"
                                className="id_65 id_126" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 80.392807,377.903687 L 95.258354,364.944000"
                                className="id_66 id_90" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -14.307320,362.295074 L -8.426084,348.940796"
                                className="id_67 id_81" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -32.747547,-293.604309 L -34.584076,-279.491791"
                                className="id_43 id_211" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 563.187622,-69.726715 L 576.191467,-60.009533"
                                className="id_69 id_239" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -18.315594,81.452316 L -7.251106,72.872284"
                                className="id_70 id_215" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -95.820724,394.953156 L -94.658585,372.140259"
                                className="id_71 id_97" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -112.977676,438.781097 L -124.140106,452.159393"
                                className="id_71 id_98" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -97.101051,444.541260 L -97.122009,473.321106"
                                className="id_71 id_157" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -146.683899,358.811432 L -114.641937,398.165283"
                                className="id_58 id_71" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 495.151947,-117.163101 L 490.884827,-132.780518"
                                className="id_72 id_78" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -10.725595,527.024658 L -20.093170,554.746216"
                                className="id_73 id_121" stroke-opacity="1.0" stroke="#277da7"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 172.911346,12.976903 L 175.109421,26.889690"
                                className="id_74 id_75" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 183.599792,47.362385 L 191.261612,56.411861"
                                className="id_75 id_80" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -254.698318,-124.730270 L -240.908676,-125.393433"
                                className="id_77 id_125" stroke-opacity="1.0" stroke="#991919"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 480.960785,-152.922195 L 473.499756,-161.650589"
                                className="id_78 id_83" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 207.060165,73.061256 L 217.197983,82.280243"
                                className="id_80 id_87" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -536.193054,-155.349533 L -543.582092,-166.318207"
                                className="id_82 id_193" stroke-opacity="1.0" stroke="#695887"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 463.497253,-181.410614 L 461.621307,-193.323471"
                                className="id_83 id_88" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 180.797882,-308.614960 L 183.038345,-297.116333"
                                className="id_84 id_101" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 181.855820,-117.916107 L 169.136642,-118.824875"
                                className="id_85 id_178" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 21.805841,232.672623 L 18.016512,216.993759"
                                className="id_86 id_89" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 233.924362,98.059898 L 243.909409,107.939590"
                                className="id_87 id_93" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 465.365631,-214.335114 L 473.489655,-225.845062"
                                className="id_88 id_92" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 17.470184,194.307938 L 20.722052,181.738632"
                                className="id_89 id_136" stroke-opacity="1.0" stroke="#b8bb11"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 108.390450,346.598785 L 112.899666,332.918518"
                                className="id_90 id_104" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -510.243164,395.822357 L -514.138611,424.094330"
                                className="id_91 id_94" stroke-opacity="1.0" stroke="#56999e"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -500.131622,376.680176 L -467.120605,346.793610"
                                className="id_91 id_106" stroke-opacity="1.0" stroke="#91937c"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -511.141510,373.160278 L -517.705688,343.267914"
                                className="id_91 id_137" stroke-opacity="1.0" stroke="#235b54"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 478.600555,-246.177200 L 475.430634,-259.081299"
                                className="id_92 id_100" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 258.370850,125.612282 L 264.586029,135.766693"
                                className="id_93 id_96" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -505.715851,449.881836 L -415.969666,524.736511"
                                className="id_94 id_138" stroke-opacity="1.0" stroke="#8ad8e8"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -503.152710,436.606140 L -482.881744,430.029449"
                                className="id_94 id_165" stroke-opacity="1.0" stroke="#8ad8e8"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -277.422974,-402.394592 L -267.955078,-422.661285"
                                className="id_95 id_108" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 273.432587,156.640167 L 276.766754,172.478333"
                                className="id_96 id_109" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -125.516411,469.621460 L -114.996681,480.528778"
                                className="id_98 id_157" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 466.858002,-280.076385 L 457.566101,-294.291718"
                                className="id_100 id_107" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 184.726028,-274.388245 L 183.603622,-260.377869"
                                className="id_101 id_116" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -275.462280,132.604523 L -262.557556,143.730515"
                                className="id_103 id_156" stroke-opacity="1.0" stroke="#e2155a"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 81.363708,222.512390 L 95.102684,212.546783"
                                className="id_105 id_118" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -590.096497,382.698578 L -529.782654,430.386749"
                                className="id_59 id_94" stroke-opacity="1.0" stroke="#56999e"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 446.801422,-314.482605 L 441.992828,-326.740387"
                                className="id_107 id_112" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -260.326782,-444.210815 L -256.844269,-460.217560"
                                className="id_108 id_113" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 276.767273,194.834396 L 273.418854,206.883591"
                                className="id_109 id_114" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 0.237359,-67.129715 L 12.389492,-61.058922"
                                className="id_111 id_169" stroke-opacity="1.0" stroke="#29bdab"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -16.140192,-78.831940 L -26.030806,-88.567932"
                                className="id_111 id_179" stroke-opacity="1.0" stroke="#29bdab"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 431.945679,-347.322693 L 424.783295,-358.783478"
                                className="id_112 id_115" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -253.634872,-482.910431 L -252.139328,-516.433838"
                                className="id_113 id_120" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 264.240326,227.626923 L 256.198181,239.226151"
                                className="id_114 id_256" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 412.098358,-377.957153 L 403.886292,-389.504944"
                                className="id_115 id_122" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 177.936676,-238.555176 L 172.655716,-228.442108"
                                className="id_116 id_184" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 114.696190,199.870041 L 131.754288,190.434357"
                                className="id_118 id_132" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 114.286697,210.411377 L 129.005676,220.116180"
                                className="id_118 id_257" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -388.494843,147.638245 L -389.897675,159.647552"
                                className="id_119 id_213" stroke-opacity="1.0" stroke="#772d8d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -262.009827,-531.399231 L -275.094940,-533.159546"
                                className="id_120 id_123" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -15.059977,562.615356 L -0.296296,554.533997"
                                className="id_121 id_216" stroke-opacity="1.0" stroke="#277da7"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -35.032539,569.970398 L -77.839142,578.864624"
                                className="id_121 id_199" stroke-opacity="1.0" stroke="#277da7"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -31.535883,559.643066 L -42.301575,547.193665"
                                className="id_121 id_230" stroke-opacity="1.0" stroke="#52bc53"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 389.002167,-406.879761 L 380.173859,-415.023926"
                                className="id_122 id_127" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -285.855774,-544.664856 L -282.989807,-557.856079"
                                className="id_123 id_128" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 247.446228,293.337799 L 253.466110,302.629456"
                                className="id_124 id_129" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 72.117470,-172.136520 L 77.992577,-162.053162"
                                className="id_126 id_153" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 60.302425,-172.929657 L 50.870007,-160.816742"
                                className="id_126 id_194" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 361.532837,-428.015625 L 349.393951,-433.596252"
                                className="id_127 id_131" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -285.766876,-562.232605 L -333.024872,-491.162964"
                                className="id_128 id_172" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 270.415741,315.077698 L 284.195313,317.222412"
                                className="id_129 id_133" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 327.665100,-437.742706 L 315.077484,-436.113342"
                                className="id_131 id_140" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 145.781311,174.499817 L 149.282516,161.767273"
                                className="id_132 id_168" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 306.646149,316.440643 L 317.448853,313.312958"
                                className="id_133 id_144" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -208.006653,-623.410950 L -179.918015,-619.464905"
                                className="id_134 id_155" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -219.045837,-614.682922 L -220.102859,-603.375122"
                                className="id_134 id_143" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -270.745331,-573.729187 L -233.840302,-586.062012"
                                className="id_128 id_143" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -246.797913,-539.438843 L -227.241333,-578.451233"
                                className="id_120 id_143" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -257.638092,-538.619263 L -272.722809,-559.946228"
                                className="id_120 id_128" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -488.066833,299.868073 L -462.451660,298.076111"
                                className="id_137 id_174" stroke-opacity="1.0" stroke="#8a3d3a"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -453.467712,323.792633 L -451.266266,310.346313"
                                className="id_106 id_174" stroke-opacity="1.0" stroke="#f87562"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -269.147156,517.134033 L -235.596863,480.684937"
                                className="id_138 id_149" stroke-opacity="1.0" stroke="#8ad8e8"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -237.029785,585.086609 L -172.071518,581.427979"
                                className="id_138 id_204" stroke-opacity="1.0" stroke="#8ad8e8"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -254.102631,534.591187 L -227.353287,516.454712"
                                className="id_138 id_183" stroke-opacity="1.0" stroke="#8ad8e8"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -302.063171,496.963562 L -275.765411,426.138092"
                                className="id_138 id_191" stroke-opacity="1.0" stroke="#8ad8e8"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -313.485748,493.482819 L -303.651398,452.596283"
                                className="id_138 id_195" stroke-opacity="1.0" stroke="#8ad8e8"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -346.215485,491.147400 L -355.959991,387.316589"
                                className="id_138 id_228" stroke-opacity="1.0" stroke="#768080"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -285.763123,504.756836 L -253.287598,450.140228"
                                className="id_138 id_219" stroke-opacity="1.0" stroke="#bdaac9"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -351.144043,491.733673 L -357.033112,450.894409"
                                className="id_138 id_173" stroke-opacity="1.0" stroke="#8ad8e8"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -531.328430,-218.835236 L -537.680359,-235.455688"
                                className="id_139 id_207" stroke-opacity="1.0" stroke="#ad4a27"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -533.598633,-201.376694 L -543.248230,-187.964279"
                                className="id_139 id_193" stroke-opacity="1.0" stroke="#676688"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 294.148438,-427.921051 L 285.632111,-420.868774"
                                className="id_140 id_147" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 563.187622,-69.726715 L 576.191467,-60.009533"
                                className="id_69 id_239" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 582.182251,-43.259140 L 576.719849,-32.182617"
                                className="id_239 id_240" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 565.969421,-11.863432 L 559.020813,0.169669"
                                className="id_240 id_241" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 545.806396,18.838871 L 538.243225,27.188225"
                                className="id_241 id_242" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 525.821045,46.115494 L 520.020569,60.704536"
                                className="id_242 id_243" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 516.875061,82.646423 L 518.752075,93.814301"
                                className="id_243 id_244" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 523.077881,116.395966 L 526.701904,132.690292"
                                className="id_244 id_245" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 529.168701,155.373901 L 528.658142,169.721970"
                                className="id_245 id_246" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 525.017761,192.195297 L 520.939880,204.361359"
                                className="id_246 id_247" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 509.559662,223.576233 L 500.757233,231.941696"
                                className="id_247 id_248" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 481.409302,242.122803 L 468.819794,243.677460"
                                className="id_248 id_249" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 446.936523,240.873337 L 436.675995,235.849579"
                                className="id_249 id_141" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 418.105804,222.393051 L 409.406189,212.487061"
                                className="id_141 id_250" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 397.678192,193.228119 L 394.017914,182.198471"
                                className="id_250 id_251" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 390.251312,159.865524 L 390.685730,146.626312"
                                className="id_251 id_252" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 393.102295,123.833351 L 395.897522,110.069427"
                                className="id_252 id_177" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 396.786377,87.102547 L 394.364807,73.097992"
                                className="id_177 id_253" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 383.898163,54.639111 L 371.467377,46.129116"
                                className="id_253 id_254" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 350.790161,37.787624 L 339.722839,36.677746"
                                className="id_254 id_255" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 316.787933,35.313274 L 299.370178,35.196068"
                                className="id_255 id_220" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -212.210358,-594.787476 L -178.625381,-611.524597"
                                className="id_143 id_155" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 340.679321,309.750244 L 352.766296,309.934540"
                                className="id_144 id_148" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -566.984497,-200.953217 L -558.342896,-188.181625"
                                className="id_145 id_193" stroke-opacity="1.0" stroke="#676688"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -567.999023,-220.646637 L -559.326477,-236.830795"
                                className="id_145 id_207" stroke-opacity="1.0" stroke="#ad4a27"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 73.589500,-314.130371 L 78.283661,-300.617981"
                                className="id_68 id_146" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 278.924225,-403.139252 L 283.365753,-390.454620"
                                className="id_147 id_158" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 374.123138,315.622498 L 385.928009,323.375885"
                                className="id_148 id_160" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 267.741516,-406.418030 L 257.096710,-398.095398"
                                className="id_147 id_151" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 97.833397,153.364594 L 95.557724,135.650238"
                                className="id_152 id_182" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -158.267242,-610.924133 L -133.230011,-590.643005"
                                className="id_155 id_159" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -155.987518,-616.305359 L -70.863632,-605.988342"
                                className="id_155 id_181" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -241.469986,154.126907 L -225.642365,156.221695"
                                className="id_156 id_198" stroke-opacity="1.0" stroke="#8a3d3a"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -79.469963,513.325867 L -66.352455,523.928711"
                                className="id_157 id_230" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 288.506317,-368.220734 L 289.710236,-354.013428"
                                className="id_158 id_170" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -113.144325,-581.895752 L -96.002960,-580.926575"
                                className="id_159 id_167" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 399.276917,340.199402 L 402.723511,353.645569"
                                className="id_160 id_171" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 7.739763,196.940628 L -4.726490,184.380249"
                                className="id_89 id_161" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -312.944824,-190.985718 L -299.413879,-186.717773"
                                className="id_164 id_200" stroke-opacity="1.0" stroke="#0ec434"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -407.460175,426.233765 L -371.743958,434.772644"
                                className="id_165 id_173" stroke-opacity="1.0" stroke="#8ad8e8"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -439.199158,-46.551624 L -19.981529,-334.075409"
                                className="id_258 id_22" stroke-opacity="1.0" stroke="#67c27a"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -75.775871,-587.082458 L -67.278481,-595.160095"
                                className="id_167 id_181" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 293.396423,-331.010864 L 297.066162,-316.945435"
                                className="id_170 id_180" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 400.683167,375.116058 L 392.870056,387.894958"
                                className="id_171 id_176" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 377.284424,403.727783 L 364.657013,410.528320"
                                className="id_176 id_189" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -440.527374,-48.115932 L -254.627869,-242.126923"
                                className="id_258 id_1" stroke-opacity="1.0" stroke="#dedf8e"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 147.314194,-114.404648 L 132.889694,-105.482712"
                                className="id_178 id_196" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 305.460541,-295.340637 L 312.844055,-282.449829"
                                className="id_180 id_197" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -51.648476,-595.861267 L -40.276794,-579.535339"
                                className="id_181 id_190" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -47.318367,-602.824280 L 17.900404,-592.947266"
                                className="id_181 id_209" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -506.079651,431.544525 L -420.823181,354.499786"
                                className="id_94 id_187" stroke-opacity="1.0" stroke="#8ad8e8"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -377.510864,-432.741028 L -393.352844,-415.745483"
                                className="id_188 id_222" stroke-opacity="1.0" stroke="#5aa66d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 344.025146,420.643860 L 331.832886,425.888336"
                                className="id_189 id_201" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -22.762131,-566.635010 L -9.251740,-563.821838"
                                className="id_190 id_202" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 325.286835,-259.586121 L 332.140198,-246.126205"
                                className="id_197 id_205" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -126.448593,582.697266 L -144.602463,581.534058"
                                className="id_199 id_204" stroke-opacity="1.0" stroke="#58aac7"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 313.334015,438.575562 L 305.788239,447.264771"
                                className="id_201 id_214" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 10.507356,-568.680481 L 22.019638,-581.371887"
                                className="id_202 id_209" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 337.977386,-222.757141 L 337.379028,-209.459061"
                                className="id_205 id_212" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -471.138611,-349.817352 L -492.039490,-333.509216"
                                className="id_206 id_208" stroke-opacity="1.0" stroke="#3750db"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -449.595245,-367.058228 L -414.751923,-395.654572"
                                className="id_206 id_222" stroke-opacity="1.0" stroke="#3750db"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -457.860779,-344.717834 L -455.182037,-329.551758"
                                className="id_206 id_229" stroke-opacity="1.0" stroke="#3750db"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -535.160583,-279.674927 L -525.992676,-295.038757"
                                className="id_207 id_208" stroke-opacity="1.0" stroke="#7e5887"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -489.521698,-316.964630 L -466.388397,-316.475708"
                                className="id_208 id_229" stroke-opacity="1.0" stroke="#3750db"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 35.663334,-582.288818 L 49.492233,-557.749451"
                                className="id_209 id_217" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 39.726078,-586.584900 L 76.064064,-568.700867"
                                className="id_209 id_224" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 328.897400,-189.832626 L 316.954987,-180.068420"
                                className="id_212 id_221" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 293.015594,466.945129 L 287.304840,480.620270"
                                className="id_214 id_218" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 64.986656,-551.001343 L 76.221931,-556.909668"
                                className="id_217 id_224" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 278.070618,502.097321 L 273.460327,512.431519"
                                className="id_218 id_225" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 295.970856,-170.096985 L 284.229095,-168.548126"
                                className="id_221 id_223" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 261.818207,-163.794907 L 249.786652,-159.937332"
                                className="id_223 id_231" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 55.338909,-536.088135 L 54.214859,-517.909790"
                                className="id_217 id_226" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 258.606384,521.362000 L 244.155792,516.914307"
                                className="id_225 id_233" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 93.420761,-554.738953 L 106.283005,-536.163452"
                                className="id_224 id_232" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 258.606384,521.362000 L 244.155792,516.914307"
                                className="id_225 id_233" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 115.269318,-515.602112 L 117.847214,-499.550598"
                                className="id_232 id_235" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 226.943130,504.310822 L 220.156479,491.866425"
                                className="id_233 id_236" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -346.477325,-472.054230 L -362.847626,-450.422241"
                                className="id_172 id_188" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -437.447540,-40.714703 L 104.588600,-30.911314"
                                className="id_258 id_5" stroke-opacity="1.0" stroke="#dedf8e"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -446.775726,-30.918015 L -428.747528,237.493027"
                                className="id_258 id_29" stroke-opacity="1.0" stroke="#91746c"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -438.551971,-36.324059 L -170.998627,101.198502"
                                className="id_258 id_11" stroke-opacity="1.0" stroke="#71a694"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -449.434113,-31.095177 L -496.719971,201.986908"
                                className="id_258 id_4" stroke-opacity="1.0" stroke="#7cacda"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -452.529480,-32.284073 L -584.091187,190.578568"
                                className="id_258 id_19" stroke-opacity="1.0" stroke="#7b7487"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -212.210358,-594.787476 L -178.625381,-611.524597"
                                className="id_143 id_155" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -272.698181,-577.138062 L -228.031509,-616.151733"
                                className="id_128 id_134" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -94.041115,103.376076 L -81.209740,100.996674"
                                className="id_16 id_18" stroke-opacity="1.0" stroke="#228c68"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -441.440063,-32.899910 L -161.741028,339.466217"
                                className="id_258 id_58" stroke-opacity="1.0" stroke="#9ede60"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -439.816254,-34.431122 L -62.191860,285.521240"
                                className="id_258 id_31" stroke-opacity="1.0" stroke="#9ede60"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -437.602875,-39.130539 L -227.505264,-1.456998"
                                className="id_258 id_26" stroke-opacity="1.0" stroke="#d97070"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -437.571014,-42.472469 L -296.530975,-64.995392"
                                className="id_258 id_110" stroke-opacity="1.0" stroke="#aa95b1"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -439.458435,-34.878845 L -331.713501,46.281918"
                                className="id_258 id_117" stroke-opacity="1.0" stroke="#9ede60"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -440.430145,-33.769581 L -292.433533,116.551689"
                                className="id_258 id_103" stroke-opacity="1.0" stroke="#c965aa"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -438.239807,-44.800392 L -321.928467,-94.135033"
                                className="id_258 id_10" stroke-opacity="1.0" stroke="#71a694"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -439.576965,-34.724632 L -367.884155,21.497723"
                                className="id_258 id_15" stroke-opacity="1.0" stroke="#71a694"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -437.483673,-40.026985 L -316.327759,-29.464081"
                                className="id_258 id_17" stroke-opacity="1.0" stroke="#71a694"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 37.808228,241.297104 L 60.037926,233.307861"
                                className="id_86 id_105" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 104.161377,194.741714 L 101.226349,176.493912"
                                className="id_118 id_152" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 90.672821,112.498940 L 86.473953,99.452957"
                                className="id_182 id_234" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -53.148903,283.569031 L -58.684742,252.718842"
                                className="id_31 id_99" stroke-opacity="1.0" stroke="#7dfc00"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -442.032684,-49.303703 L -371.201111,-159.324387"
                                className="id_258 id_28" stroke-opacity="1.0" stroke="#67c27a"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -417.939606,249.340805 L -383.597687,245.459656"
                                className="id_29 id_237" stroke-opacity="1.0" stroke="#4e6087"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -361.276611,240.597137 L -345.163025,234.766373"
                                className="id_237 id_154" stroke-opacity="1.0" stroke="#3998f5"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -437.472382,-41.622742 L -121.308563,-64.675392"
                                className="id_258 id_21" stroke-opacity="1.0" stroke="#71a694"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -443.176880,-49.938511 L -318.246613,-314.575165"
                                className="id_258 id_63" stroke-opacity="1.0" stroke="#9ede60"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -453.409332,-48.922821 L -564.781372,-198.838715"
                                className="id_258 id_145" stroke-opacity="1.0" stroke="#ab7a6e"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -451.746429,-49.923565 L -522.167847,-197.757721"
                                className="id_258 id_139" stroke-opacity="1.0" stroke="#ab7a6e"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -453.614166,-48.766525 L -522.140869,-136.209717"
                                className="id_258 id_82" stroke-opacity="1.0" stroke="#ac6c6c"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -447.849304,-50.887394 L -459.583038,-341.521210"
                                className="id_258 id_206" stroke-opacity="1.0" stroke="#7b88cd"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M 246.890549,259.727264 L 244.479523,272.182190"
                                className="id_256 id_124" stroke-opacity="1.0" stroke="#fcff5d"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -438.738525,-35.978050 L -279.393829,54.011803"
                                className="id_258 id_34" stroke-opacity="1.0" stroke="#67c27a"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -437.531586,-42.201939 L -235.751984,-68.790398"
                                className="id_258 id_45" stroke-opacity="1.0" stroke="#7cacda"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -438.348969,-45.048389 L -276.875153,-118.763229"
                                className="id_258 id_77" stroke-opacity="1.0" stroke="#ac6c6c"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -437.565613,-42.438240 L -344.571869,-56.958260"
                                className="id_258 id_162" stroke-opacity="1.0" stroke="#9ede60"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -437.460663,-40.352009 L -274.071625,-31.458218"
                                className="id_258 id_175" stroke-opacity="1.0" stroke="#a5ccd4"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -438.855133,-46.014015 L -362.728912,-91.370964"
                                className="id_258 id_142" stroke-opacity="1.0" stroke="#dedf8e"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -437.684418,-38.724461 L -358.420563,-21.095196"
                                className="id_258 id_210" stroke-opacity="1.0" stroke="#9b75ae"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -99.544220,-191.248901 L -91.332962,-182.052658"
                                className="id_20 id_163" stroke-opacity="1.0" stroke="#e68f66"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -437.855255,-38.063602 L -288.409576,6.064912"
                                className="id_258 id_130" stroke-opacity="1.0" stroke="#7775b0"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -438.175323,-37.146343 L -328.350159,7.268960"
                                className="id_258 id_227" stroke-opacity="1.0" stroke="#dedf8e"/>
                                <path fill="none" strokeWidth="1.0"
                                d="M -444.251953,-31.419310 L -391.525330,125.018158"
                                className="id_258 id_119" stroke-opacity="1.0" stroke="#7b7487"/>
                            </g>
                            <g id="arrows">
                                <polyline fill="#8fc562" fill-opacity="1.0" className="id_1 id_2"
                                    points="-221.319138,-272.516266 -222.610626,-269.420807 -224.570404,-271.692169"
                                    stroke="none"/>
                                <polyline fill="#228c68" fill-opacity="1.0" className="id_2 id_6"
                                    points="-178.036148,-327.483307 -178.565079,-324.171173 -181.003220,-325.919159"
                                    stroke="none"/>
                                <polyline fill="#8fc562" fill-opacity="1.0" className="id_3 id_6"
                                    points="-166.381653,-325.608459 -164.054810,-323.192688 -166.918152,-322.297546"
                                    stroke="none"/>
                                <polyline fill="#228c68" fill-opacity="1.0" className="id_6 id_7"
                                    points="-201.549042,-326.441223 -199.272598,-328.904510 -198.212540,-326.098053"
                                    stroke="none"/>
                                <polyline fill="#228c68" fill-opacity="1.0" className="id_2 id_7"
                                    points="-211.100845,-312.650757 -209.606522,-309.647919 -212.606522,-309.653595"
                                    stroke="none"/>
                                <polyline fill="#228c68" fill-opacity="1.0" className="id_2 id_9"
                                    points="-170.556702,-239.117371 -173.718124,-240.237823 -171.557175,-242.318787"
                                    stroke="none"/>
                                <polyline fill="#228c68" fill-opacity="1.0" className="id_6 id_8"
                                    points="-136.140854,-342.187500 -138.948654,-340.352783 -139.293320,-343.332947"
                                    stroke="none"/>
                                <polyline fill="#228c68" fill-opacity="1.0" className="id_6 id_23"
                                    points="-127.842949,-312.473389 -131.185944,-312.746155 -129.630524,-315.311462"
                                    stroke="none"/>
                                <polyline fill="#848d67" fill-opacity="1.0" className="id_9 id_20"
                                    points="-115.176910,-203.907761 -118.525803,-204.094696 -117.036682,-206.699036"
                                    stroke="none"/>
                                <polyline fill="#228c68" fill-opacity="1.0" className="id_9 id_14"
                                    points="-177.117798,-201.284363 -177.191788,-204.637650 -174.479568,-203.355515"
                                    stroke="none"/>
                                <polyline fill="#228c68" fill-opacity="1.0" className="id_9 id_12"
                                    points="-148.516617,-198.220642 -151.093491,-200.367661 -148.345108,-201.570358"
                                    stroke="none"/>
                                <polyline fill="#2c5a5b" fill-opacity="1.0" className="id_9 id_52"
                                    points="-132.635834,-231.965637 -135.598587,-230.393372 -135.671310,-233.392487"
                                    stroke="none"/>
                                <polyline fill="#3f6c77" fill-opacity="1.0" className="id_11 id_13"
                                    points="-145.398010,85.088112 -145.622452,88.434700 -148.209946,86.916512"
                                    stroke="none"/>
                                <polyline fill="#228c68" fill-opacity="1.0" className="id_11 id_16"
                                    points="-114.240677,105.671097 -117.173569,107.298409 -117.302261,104.301170"
                                    stroke="none"/>
                                <polyline fill="#90a83d" fill-opacity="1.0" className="id_11 id_42"
                                    points="-144.483047,129.509125 -147.367584,127.797546 -144.844513,126.174545"
                                    stroke="none"/>
                                <polyline fill="#18a84e" fill-opacity="1.0" className="id_18 id_70"
                                    points="-41.321167,92.380783 -43.905853,94.518394 -44.582069,91.595604"
                                    stroke="none"/>
                                <polyline fill="#25a489" fill-opacity="1.0" className="id_18 id_27"
                                    points="-63.611786,68.566154 -62.548656,71.747314 -65.518829,71.325348"
                                    stroke="none"/>
                                <polyline fill="#4e6087" fill-opacity="1.0" className="id_4 id_29"
                                    points="-436.829742,246.009995 -440.183838,246.016861 -438.847717,243.330826"
                                    stroke="none"/>
                                <polyline fill="#2e79a4" fill-opacity="1.0" className="id_4 id_35"
                                    points="-573.335388,252.426056 -571.337891,249.731613 -569.981323,252.407394"
                                    stroke="none"/>
                                <polyline fill="#9cb1cd" fill-opacity="1.0" className="id_4 id_62"
                                    points="-469.246826,191.668289 -470.704193,194.689255 -472.537994,192.314987"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_5 id_24"
                                    points="164.430374,-36.367577 161.635269,-34.513557 161.270096,-37.491249"
                                    stroke="none"/>
                                <polyline fill="#2d4251" fill-opacity="1.0" className="id_19 id_35"
                                    points="-585.550232,245.888931 -587.395203,243.087860 -584.416321,242.732300"
                                    stroke="none"/>
                                <polyline fill="#3860a2" fill-opacity="1.0" className="id_19 id_44"
                                    points="-573.982605,182.980209 -574.851074,186.219925 -577.095459,184.229263"
                                    stroke="none"/>
                                <polyline fill="#25a489" fill-opacity="1.0" className="id_21 id_53"
                                    points="-74.381798,-64.772346 -77.419106,-63.349403 -77.342537,-66.348427"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_22 id_25"
                                    points="15.038904,-294.078674 12.487613,-296.256012 15.250020,-297.426117"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_22 id_30"
                                    points="48.229515,-381.534332 46.628696,-378.586884 44.911076,-381.046539"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_22 id_39"
                                    points="36.073593,-351.497803 33.398178,-349.474884 32.850021,-352.424408"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_22 id_43"
                                    points="-25.675097,-312.981049 -25.317265,-316.316010 -22.792431,-314.695770"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_24 id_32"
                                    points="238.329498,-51.312080 235.721909,-49.202454 235.077255,-52.132370"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_24 id_74"
                                    points="172.932159,-6.774755 171.925446,-9.974211 174.887695,-9.499802"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_25 id_51"
                                    points="29.893202,-259.367065 27.330786,-261.531342 30.087160,-262.715546"
                                    stroke="none"/>
                                <polyline fill="#8a3d3a" fill-opacity="1.0" className="id_26 id_48"
                                    points="-185.156509,4.073515 -188.301956,5.238056 -187.975418,2.255881"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_28 id_164"
                                    points="-331.979126,-189.180069 -333.907288,-186.435593 -335.331604,-189.075912"
                                    stroke="none"/>
                                <polyline fill="#aa241c" fill-opacity="1.0" className="id_29 id_174"
                                    points="-444.807556,287.693817 -444.931061,284.341980 -442.200226,285.583923"
                                    stroke="none"/>
                                <polyline fill="#632819" fill-opacity="1.0" className="id_29 id_228"
                                    points="-362.247314,365.336700 -365.037933,363.475983 -362.433075,361.987762"
                                    stroke="none"/>
                                <polyline fill="#8d2d72" fill-opacity="1.0" className="id_29 id_213"
                                    points="-395.754822,181.973984 -395.670593,185.327042 -398.386719,184.053177"
                                    stroke="none"/>
                                <polyline fill="#4e6087" fill-opacity="1.0" className="id_29 id_237"
                                    points="-380.616669,245.122757 -383.429230,246.950165 -383.766144,243.969147"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_30 id_39"
                                    points="48.867069,-362.876312 48.322918,-366.186005 51.188313,-365.297455"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_30 id_33"
                                    points="88.707542,-387.796387 85.732887,-386.246735 85.683022,-389.246307"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_31 id_46"
                                    points="-0.079005,424.916565 -2.571494,422.672119 0.221051,421.575928"
                                    stroke="none"/>
                                <polyline fill="#a1ae19" fill-opacity="1.0" className="id_31 id_49"
                                    points="-78.723709,270.511993 -75.482361,271.374298 -77.468765,273.622467"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_31 id_102"
                                    points="-34.844097,265.495117 -34.983723,268.846313 -37.608829,267.394104"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_31 id_86"
                                    points="13.561273,253.265808 11.850889,256.151062 10.226854,253.628647"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_32 id_36"
                                    points="319.762024,-62.139217 316.917114,-60.362617 316.633789,-63.349213"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_32 id_38"
                                    points="233.297668,-87.995659 236.454285,-86.861755 234.284515,-84.790024"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_32 id_186"
                                    points="239.810013,-11.884295 239.861359,-15.238004 242.523773,-13.855445"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_33 id_41"
                                    points="125.639503,-379.523499 122.322601,-379.025360 123.250854,-381.878143"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_34 id_135"
                                    points="-241.655945,64.491135 -244.850006,65.514893 -244.391388,62.550156"
                                    stroke="none"/>
                                <polyline fill="#235b54" fill-opacity="1.0" className="id_35 id_37"
                                    points="-551.684570,383.318634 -553.887817,380.789673 -550.983398,380.038635"
                                    stroke="none"/>
                                <polyline fill="#2e79a4" fill-opacity="1.0" className="id_35 id_44"
                                    points="-569.036377,185.464310 -568.179443,188.707092 -571.116455,188.095551"
                                    stroke="none"/>
                                <polyline fill="#235b54" fill-opacity="1.0" className="id_35 id_59"
                                    points="-605.526855,335.571411 -606.175842,332.280670 -603.283630,333.077789"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_36 id_40"
                                    points="361.525055,-66.000061 358.674530,-64.232399 358.400604,-67.219872"
                                    stroke="none"/>
                                <polyline fill="#235b54" fill-opacity="1.0" className="id_37 id_59"
                                    points="-586.278503,376.399353 -582.927551,376.255585 -584.152893,378.993927"
                                    stroke="none"/>
                                <polyline fill="#235b54" fill-opacity="1.0" className="id_37 id_91"
                                    points="-519.939392,386.800354 -522.563049,388.889954 -523.185242,385.955200"
                                    stroke="none"/>
                                <polyline fill="#56999e" fill-opacity="1.0" className="id_37 id_94"
                                    points="-524.345032,429.371490 -527.275574,427.739868 -524.798035,426.048096"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_38 id_85"
                                    points="203.616043,-110.455009 206.943710,-110.034653 205.276352,-107.540665"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_39 id_68"
                                    points="63.177185,-332.565186 60.105366,-333.912018 62.411556,-335.830719"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_40 id_47"
                                    points="402.902985,-69.282204 400.024261,-67.560890 399.798676,-70.552391"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_41 id_55"
                                    points="154.294769,-359.597382 151.051285,-360.451599 153.032059,-362.704712"
                                    stroke="none"/>
                                <polyline fill="#3998f5" fill-opacity="1.0" className="id_44 id_238"
                                    points="-541.272400,145.623077 -542.114441,148.869766 -544.374939,146.897476"
                                    stroke="none"/>
                                <polyline fill="#3998f5" fill-opacity="1.0" className="id_238 id_150"
                                    points="-508.712280,122.685989 -510.528229,125.505997 -512.057861,122.925247"
                                    stroke="none"/>
                                <polyline fill="#7e9ed4" fill-opacity="1.0" className="id_45 id_192"
                                    points="-194.396805,-70.998314 -197.374283,-69.454063 -197.418686,-72.453728"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_46 id_50"
                                    points="62.049995,445.388885 58.874622,446.469177 59.280552,443.496765"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_46 id_57"
                                    points="-29.709404,411.711151 -26.408520,412.306274 -28.204964,414.708923"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_46 id_66"
                                    points="64.388580,391.113831 62.947617,394.142639 61.100967,391.778320"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_46 id_71"
                                    points="-72.644501,424.009369 -69.430779,423.049133 -69.948097,426.004211"
                                    stroke="none"/>
                                <polyline fill="#52bc53" fill-opacity="1.0" className="id_46 id_73"
                                    points="-5.989838,507.669342 -7.011745,504.474701 -4.047272,504.935028"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_47 id_54"
                                    points="445.538818,-73.311546 442.703552,-71.519531 442.404053,-74.504547"
                                    stroke="none"/>
                                <polyline fill="#235b54" fill-opacity="1.0" className="id_48 id_61"
                                    points="-148.258698,5.643492 -151.284058,7.091632 -151.232422,4.092076"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_50 id_64"
                                    points="100.691353,441.710938 97.999001,443.711212 97.475700,440.757233"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_51 id_65"
                                    points="46.495502,-224.540848 43.821163,-226.565170 46.510365,-227.894913"
                                    stroke="none"/>
                                <polyline fill="#29bdab" fill-opacity="1.0" className="id_53 id_79"
                                    points="-40.931171,-40.202343 -44.075195,-41.370724 -41.882881,-43.418591"
                                    stroke="none"/>
                                <polyline fill="#29bdab" fill-opacity="1.0" className="id_53 id_76"
                                    points="-68.633850,-35.319519 -69.604752,-38.530025 -66.647980,-38.022541"
                                    stroke="none"/>
                                <polyline fill="#29bdab" fill-opacity="1.0" className="id_53 id_111"
                                    points="-18.981541,-70.357506 -21.760820,-68.479851 -22.151236,-71.454338"
                                    stroke="none"/>
                                <polyline fill="#29bdab" fill-opacity="1.0" className="id_53 id_179"
                                    points="-42.012535,-90.041862 -42.805210,-86.782768 -45.095409,-88.720543"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_54 id_60"
                                    points="494.904938,-74.007133 491.893494,-72.530228 491.916565,-75.530136"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_55 id_84"
                                    points="174.455200,-327.395477 171.781372,-329.420502 174.470917,-330.749542"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_56 id_66"
                                    points="70.303329,374.595093 68.184708,371.994812 71.112381,371.340027"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_57 id_71"
                                    points="-72.949699,413.975525 -70.379524,411.820465 -69.683556,414.738617"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_57 id_67"
                                    points="-23.301310,380.128082 -23.488186,383.476990 -26.092548,381.987915"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_58 id_185"
                                    points="-153.480728,324.270630 -151.980347,327.270447 -154.980347,327.270813"
                                    stroke="none"/>
                                <polyline fill="#235b54" fill-opacity="1.0" className="id_59 id_137"
                                    points="-558.164185,324.969482 -559.740540,327.930084 -561.478455,325.484772"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_60 id_72"
                                    points="499.860626,-97.733917 501.949921,-95.110039 499.015106,-94.488136"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_60 id_69"
                                    points="540.420410,-76.418999 537.532593,-74.712959 537.322876,-77.705620"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_63 id_95"
                                    points="-298.174835,-357.740631 -298.072144,-354.388092 -300.795227,-355.646942"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_64 id_203"
                                    points="122.920326,417.795319 122.786652,421.146759 120.158966,419.699249"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_65 id_126"
                                    points="62.360508,-190.862793 59.739956,-192.956284 62.462971,-194.215317"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_66 id_90"
                                    points="97.519676,362.972595 96.244057,366.074646 94.272652,363.813354"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_67 id_81"
                                    points="-7.216946,346.195251 -7.053314,349.545380 -9.798853,348.336212"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_43 id_211"
                                    points="-34.971218,-276.516876 -36.071533,-279.685364 -33.096619,-279.298218"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_69 id_239"
                                    points="578.594604,-58.213760 575.293579,-58.807953 577.089355,-61.211113"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_70 id_215"
                                    points="-4.880386,71.033890 -6.331911,74.057648 -8.170302,71.686920"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_71 id_97"
                                    points="-94.505959,369.144135 -93.160530,372.216583 -96.156639,372.063934"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_71 id_98"
                                    points="-126.062065,454.462891 -125.291855,451.198425 -122.988358,453.120361"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_71 id_157"
                                    points="-97.124191,476.321106 -98.622009,473.320007 -95.622009,473.322205"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_58 id_71"
                                    points="-112.747772,400.491699 -115.805138,399.112366 -113.478737,397.218201"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_72 id_78"
                                    points="490.094116,-135.674438 492.331787,-133.175873 489.437866,-132.385162"
                                    stroke="none"/>
                                <polyline fill="#277da7" fill-opacity="1.0" className="id_73 id_121"
                                    points="-21.053570,557.588318 -21.514229,554.265991 -18.672112,555.226440"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_74 id_75"
                                    points="175.577576,29.852938 173.627792,27.123772 176.591049,26.655609"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_75 id_80"
                                    points="193.200104,58.701450 190.116821,57.381111 192.406403,55.442612"
                                    stroke="none"/>
                                <polyline fill="#991919" fill-opacity="1.0" className="id_77 id_125"
                                    points="-237.912140,-125.537544 -240.836624,-123.895164 -240.980728,-126.891701"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_78 id_83"
                                    points="471.550476,-163.931000 474.639954,-162.625229 472.359558,-160.675949"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_80 id_87"
                                    points="219.417496,84.298592 216.188812,83.389999 218.207153,81.170486"
                                    stroke="none"/>
                                <polyline fill="#695887" fill-opacity="1.0" className="id_82 id_193"
                                    points="-545.258179,-168.806305 -542.338013,-167.156265 -544.826172,-165.480148"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_83 id_88"
                                    points="461.154663,-196.286957 463.103058,-193.556808 460.139557,-193.090134"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_84 id_101"
                                    points="183.612091,-294.171692 181.566040,-296.829468 184.510651,-297.403198"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_85 id_178"
                                    points="166.144272,-119.038673 169.243546,-120.321060 169.029739,-117.328690"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_86 id_89"
                                    points="17.311750,214.077713 19.474533,216.641373 16.558491,217.346146"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_87 id_93"
                                    points="246.041946,110.049629 242.854385,109.005859 244.964432,106.873322"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_88 id_92"
                                    points="475.219604,-228.296036 474.715149,-224.980087 472.264160,-226.710037"
                                    stroke="none"/>
                                <polyline fill="#b8bb11" fill-opacity="1.0" className="id_89 id_136"
                                    points="21.473457,178.834259 22.174238,182.114334 19.269865,181.362930"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_90 id_104"
                                    points="113.838806,330.069305 114.324272,333.388092 111.475060,332.448944"
                                    stroke="none"/>
                                <polyline fill="#56999e" fill-opacity="1.0" className="id_91 id_94"
                                    points="-514.548096,427.066254 -515.624573,423.889587 -512.652649,424.299072"
                                    stroke="none"/>
                                <polyline fill="#91937c" fill-opacity="1.0" className="id_91 id_106"
                                    points="-464.896667,344.780151 -466.113861,347.905579 -468.127350,345.681641"
                                    stroke="none"/>
                                <polyline fill="#235b54" fill-opacity="1.0" className="id_91 id_137"
                                    points="-518.349182,340.337708 -516.240601,342.946198 -519.170776,343.589630"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_92 id_100"
                                    points="474.714966,-261.994690 476.887329,-259.439148 473.973938,-258.723450"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_93 id_96"
                                    points="266.152161,138.325455 263.306641,136.549759 265.865417,134.983627"
                                    stroke="none"/>
                                <polyline fill="#8ad8e8" fill-opacity="1.0" className="id_94 id_138"
                                    points="-413.665833,526.658081 -416.930450,525.888428 -415.008881,523.584595"
                                    stroke="none"/>
                                <polyline fill="#8ad8e8" fill-opacity="1.0" className="id_94 id_165"
                                    points="-480.028168,429.103638 -482.418854,431.456238 -483.344635,428.602661"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_95 id_108"
                                    points="-266.685303,-425.379333 -266.596069,-422.026398 -269.314087,-423.296173"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_96 id_109"
                                    points="277.384766,175.413986 275.298920,172.787338 278.234589,172.169327"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_98 id_157"
                                    points="-112.914070,482.688110 -116.076347,481.570068 -113.917015,479.487488"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_100 id_107"
                                    points="455.924713,-296.802856 458.821655,-295.112427 456.310547,-293.471008"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_101 id_116"
                                    points="183.364044,-257.387451 182.108414,-260.497650 185.098831,-260.258087"
                                    stroke="none"/>
                                <polyline fill="#e2155a" fill-opacity="1.0" className="id_103 id_156"
                                    points="-260.285431,145.689453 -263.537018,144.866577 -261.578094,142.594452"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_105 id_118"
                                    points="97.531105,210.785309 95.983414,213.761002 94.221954,211.332565"
                                    stroke="none"/>
                                <polyline fill="#56999e" fill-opacity="1.0" className="id_59 id_94"
                                    points="-527.429382,432.247437 -530.713013,431.563385 -528.852295,429.210114"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_107 id_112"
                                    points="440.897247,-329.533173 443.389221,-327.288177 440.596436,-326.192596"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_108 id_113"
                                    points="-256.206482,-463.148987 -255.378555,-459.898682 -258.309967,-460.536438"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_109 id_114"
                                    points="272.615601,209.774063 271.973633,206.481964 274.864075,207.285217"
                                    stroke="none"/>
                                <polyline fill="#29bdab" fill-opacity="1.0" className="id_111 id_169"
                                    points="15.073239,-59.718212 11.719137,-59.717049 13.059847,-62.400795"
                                    stroke="none"/>
                                <polyline fill="#29bdab" fill-opacity="1.0" className="id_111 id_179"
                                    points="-28.168772,-90.672478 -24.978535,-89.636917 -27.083076,-87.498947"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_112 id_115"
                                    points="423.193390,-361.327515 426.055328,-359.578430 423.511261,-357.988525"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_113 id_120"
                                    points="-252.005630,-519.430847 -250.640823,-516.367004 -253.637833,-516.500671"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_114 id_256"
                                    points="254.488861,241.691544 254.965485,238.371475 257.430878,240.080826"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_115 id_122"
                                    points="402.147675,-391.949799 405.108704,-390.374237 402.663879,-388.635651"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_116 id_184"
                                    points="171.267075,-225.782852 171.326080,-229.136429 173.985352,-227.747787"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_118 id_132"
                                    points="134.379440,188.982254 132.480331,191.746933 131.028244,189.121780"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_118 id_257"
                                    points="131.510269,221.767548 128.179993,221.368469 129.831360,218.863892"
                                    stroke="none"/>
                                <polyline fill="#772d8d" fill-opacity="1.0" className="id_119 id_213"
                                    points="-390.245758,162.627289 -391.387543,159.473511 -388.407806,159.821594"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_120 id_123"
                                    points="-278.068176,-533.559509 -274.894958,-534.646179 -275.294922,-531.672913"
                                    stroke="none"/>
                                <polyline fill="#277da7" fill-opacity="1.0" className="id_121 id_216"
                                    points="2.335258,553.093506 0.423934,555.849792 -1.016526,553.218201"
                                    stroke="none"/>
                                <polyline fill="#277da7" fill-opacity="1.0" className="id_121 id_199"
                                    points="-80.776413,579.474915 -78.144287,577.395996 -77.533997,580.333252"
                                    stroke="none"/>
                                <polyline fill="#52bc53" fill-opacity="1.0" className="id_121 id_230"
                                    points="-44.263889,544.924438 -41.166969,546.212524 -43.436180,548.174805"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_122 id_127"
                                    points="377.968811,-417.058075 381.190948,-416.126434 379.156769,-413.921417"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_123 id_128"
                                    points="-282.352875,-560.787659 -281.524017,-557.537598 -284.455597,-558.174561"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_124 id_129"
                                    points="255.097321,305.147217 252.207230,303.445068 254.724991,301.813843"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_126 id_153"
                                    points="79.502876,-159.461044 76.696526,-161.298019 79.288628,-162.808304"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_126 id_194"
                                    points="49.026814,-158.449768 49.686512,-161.738342 52.053501,-159.895142"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_127 id_131"
                                    points="346.668213,-434.849365 350.020508,-434.959137 348.767395,-432.233368"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_128 id_172"
                                    points="-334.686035,-488.664856 -334.273926,-491.993530 -331.775818,-490.332397"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_129 id_133"
                                    points="287.159607,317.683777 283.964630,318.704559 284.425995,315.740265"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_131 id_140"
                                    points="312.102295,-435.728210 314.884918,-437.600922 315.270050,-434.625763"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_132 id_168"
                                    points="150.077927,158.874649 150.728836,162.164978 147.836197,161.369568"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_133 id_144"
                                    points="320.330505,312.478638 317.865997,314.753784 317.031708,311.872131"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_134 id_155"
                                    points="-176.947189,-619.047546 -180.126694,-617.979492 -179.709335,-620.950317"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_134 id_143"
                                    points="-220.382065,-600.388123 -221.596344,-603.514709 -218.609375,-603.235535"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_128 id_143"
                                    points="-230.994980,-587.012817 -233.364883,-584.639343 -234.315720,-587.484680"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_120 id_143"
                                    points="-225.896927,-581.133118 -225.900391,-577.779053 -228.582275,-579.123413"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_120 id_128"
                                    points="-274.455170,-562.395508 -271.498169,-560.812439 -273.947449,-559.080017"
                                    stroke="none"/>
                                <polyline fill="#8a3d3a" fill-opacity="1.0" className="id_137 id_174"
                                    points="-459.458954,297.866730 -462.346985,299.572449 -462.556335,296.579773"
                                    stroke="none"/>
                                <polyline fill="#f87562" fill-opacity="1.0" className="id_106 id_174"
                                    points="-450.781555,307.385742 -449.785980,310.588654 -452.746552,310.103973"
                                    stroke="none"/>
                                <polyline fill="#8ad8e8" fill-opacity="1.0" className="id_138 id_149"
                                    points="-233.565140,478.477661 -234.493225,481.700806 -236.700500,479.669067"
                                    stroke="none"/>
                                <polyline fill="#8ad8e8" fill-opacity="1.0" className="id_138 id_204"
                                    points="-169.076263,581.259277 -171.987167,582.925598 -172.155869,579.930359"
                                    stroke="none"/>
                                <polyline fill="#8ad8e8" fill-opacity="1.0" className="id_138 id_183"
                                    points="-224.870224,514.771118 -226.511505,517.696228 -228.195068,515.213196"
                                    stroke="none"/>
                                <polyline fill="#8ad8e8" fill-opacity="1.0" className="id_138 id_191"
                                    points="-274.721161,423.325714 -274.359222,426.660217 -277.171600,425.615967"
                                    stroke="none"/>
                                <polyline fill="#8ad8e8" fill-opacity="1.0" className="id_138 id_195"
                                    points="-302.949829,449.679474 -302.192993,452.947083 -305.109802,452.245483"
                                    stroke="none"/>
                                <polyline fill="#768080" fill-opacity="1.0" className="id_138 id_228"
                                    points="-356.240295,384.329712 -354.466553,387.176422 -357.453430,387.456757"
                                    stroke="none"/>
                                <polyline fill="#bdaac9" fill-opacity="1.0" className="id_138 id_219"
                                    points="-251.754349,447.561646 -251.998306,450.906860 -254.576889,449.373596"
                                    stroke="none"/>
                                <polyline fill="#8ad8e8" fill-opacity="1.0" className="id_138 id_173"
                                    points="-357.461273,447.925110 -355.548462,450.680328 -358.517761,451.108490"
                                    stroke="none"/>
                                <polyline fill="#ad4a27" fill-opacity="1.0" className="id_139 id_207"
                                    points="-538.751282,-238.258026 -536.279175,-235.991180 -539.081543,-234.920197"
                                    stroke="none"/>
                                <polyline fill="#676688" fill-opacity="1.0" className="id_139 id_193"
                                    points="-545.000305,-185.529037 -544.465820,-188.840302 -542.030640,-187.088257"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_140 id_147"
                                    points="283.321503,-418.955383 284.675415,-422.024078 286.588806,-419.713470"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_69 id_239"
                                    points="578.594604,-58.213760 575.293579,-58.807953 577.089355,-61.211113"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_239 id_240"
                                    points="575.393005,-29.492004 575.374512,-32.846054 578.065186,-31.519180"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_240 id_241"
                                    points="557.520569,2.767626 557.721863,-0.580435 560.319763,0.919773"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_241 id_242"
                                    points="536.229126,29.411640 537.131531,26.181196 539.354919,28.195253"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_242 id_243"
                                    points="518.912170,63.492275 518.626709,60.150349 521.414429,61.258724"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_243 id_244"
                                    points="519.249329,96.772804 517.272827,94.062920 520.231323,93.565681"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_244 id_245"
                                    points="527.353210,135.618744 525.237671,133.015945 528.166138,132.364639"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_245 id_246"
                                    points="528.551453,172.720062 527.159119,169.668625 530.157166,169.775314"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_246 id_247"
                                    points="519.986450,207.205826 519.517639,203.884644 522.362122,204.838074"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_247 id_248"
                                    points="498.582611,234.008362 499.723907,230.854385 501.790558,233.029007"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_248 id_249"
                                    points="465.842407,244.045135 468.635956,242.188766 469.003632,245.166153"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_249 id_141"
                                    points="433.981628,234.530365 437.335602,234.502396 436.016388,237.196762"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_141 id_250"
                                    points="407.426575,210.232925 410.533264,211.497253 408.279114,213.476868"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_250 id_251"
                                    points="393.072998,179.351166 395.441559,181.726013 392.594269,182.670929"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_251 id_252"
                                    points="390.784119,143.627914 392.184937,146.675507 389.186523,146.577118"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_252 id_177"
                                    points="396.494568,107.129440 397.367523,110.367958 394.427521,109.770897"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_177 id_253"
                                    points="393.853638,70.141853 395.842865,72.842415 392.886749,73.353569"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_253 id_254"
                                    points="368.991882,44.434425 372.314728,44.891373 370.620026,47.366859"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_254 id_255"
                                    points="336.737823,36.378395 339.872528,35.185230 339.573151,38.170261"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_255 id_220"
                                    points="296.370239,35.175880 299.380280,33.696102 299.360077,36.696033"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_143 id_155"
                                    points="-175.940338,-612.862671 -177.956329,-610.182068 -179.294434,-612.867126"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_144 id_148"
                                    points="355.765930,309.980255 352.743439,311.434357 352.789154,308.434723"
                                    stroke="none"/>
                                <polyline fill="#676688" fill-opacity="1.0" className="id_145 id_193"
                                    points="-556.661682,-185.696960 -559.585205,-187.341034 -557.100586,-189.022217"
                                    stroke="none"/>
                                <polyline fill="#ad4a27" fill-opacity="1.0" className="id_145 id_207"
                                    points="-557.909546,-239.475067 -558.004333,-236.122314 -560.648621,-237.539276"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_68 id_146"
                                    points="79.268135,-297.784119 76.866730,-300.125732 79.700592,-301.110229"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_147 id_158"
                                    points="284.357178,-387.623169 281.950043,-389.958893 284.781464,-390.950348"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_148 id_160"
                                    points="388.435547,325.022827 385.104553,324.629639 386.751465,322.122131"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_147 id_151"
                                    points="254.733307,-396.247589 256.172791,-399.277100 258.020630,-396.913696"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_152 id_182"
                                    points="95.175468,132.674683 97.045494,135.459106 94.069954,135.841370"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_155 id_159"
                                    points="-130.898865,-588.754700 -134.174179,-589.477417 -132.285843,-591.808594"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_155 id_181"
                                    points="-67.885429,-605.627380 -71.044113,-604.499268 -70.683151,-607.477417"
                                    stroke="none"/>
                                <polyline fill="#8a3d3a" fill-opacity="1.0" className="id_156 id_198"
                                    points="-222.668304,156.615311 -225.839172,157.708725 -225.445557,154.734665"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_157 id_230"
                                    points="-64.019325,525.814575 -67.295387,525.095276 -65.409523,522.762146"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_158 id_170"
                                    points="289.963531,-351.024139 288.215607,-353.886780 291.204865,-354.140076"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_159 id_167"
                                    points="-93.007744,-580.757202 -96.087639,-579.428955 -95.918282,-582.424194"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_160 id_171"
                                    points="403.468414,356.551605 401.270477,354.018005 404.176544,353.273132"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_89 id_161"
                                    points="-6.839817,182.250961 -3.661848,183.323578 -5.791132,185.436920"
                                    stroke="none"/>
                                <polyline fill="#0ec434" fill-opacity="1.0" className="id_164 id_200"
                                    points="-296.552826,-185.815323 -299.865112,-185.287247 -298.962646,-188.148300"
                                    stroke="none"/>
                                <polyline fill="#8ad8e8" fill-opacity="1.0" className="id_165 id_173"
                                    points="-368.826202,435.470184 -372.092743,436.231537 -371.395172,433.313751"
                                    stroke="none"/>
                                <polyline fill="#67c27a" fill-opacity="1.0" className="id_258 id_22"
                                    points="-17.507507,-335.772217 -19.133116,-332.838409 -20.829943,-335.312408"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_167 id_181"
                                    points="-65.104134,-597.227051 -66.245010,-594.072937 -68.311951,-596.247253"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_170 id_180"
                                    points="297.823517,-314.042603 295.614746,-316.566742 298.517578,-317.324127"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_171 id_176"
                                    points="391.305145,390.454468 391.590302,387.112518 394.149811,388.677399"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_176 id_189"
                                    points="362.015717,411.950806 363.945770,409.207672 365.368256,411.848969"
                                    stroke="none"/>
                                <polyline fill="#dedf8e" fill-opacity="1.0" className="id_258 id_1"
                                    points="-252.552307,-244.293030 -253.544815,-241.089142 -255.710922,-243.164703"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_178 id_196"
                                    points="130.338303,-103.904610 132.100647,-106.758408 133.678741,-104.207016"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_180 id_197"
                                    points="314.335114,-279.846588 311.542450,-281.704315 314.145660,-283.195343"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_181 id_190"
                                    points="-38.562126,-577.073669 -41.507637,-578.677979 -39.045952,-580.392700"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_181 id_209"
                                    points="20.866581,-592.498047 17.675798,-591.464172 18.125010,-594.430359"
                                    stroke="none"/>
                                <polyline fill="#8ad8e8" fill-opacity="1.0" className="id_94 id_187"
                                    points="-418.597382,352.488373 -419.817474,355.612701 -421.828888,353.386871"
                                    stroke="none"/>
                                <polyline fill="#5aa66d" fill-opacity="1.0" className="id_188 id_222"
                                    points="-395.398376,-413.550995 -394.450104,-416.768250 -392.255585,-414.722717"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_189 id_201"
                                    points="329.077026,427.073761 331.240173,424.510406 332.425598,427.266266"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_190 id_202"
                                    points="-6.314734,-563.210266 -9.557516,-562.353333 -8.945963,-565.290344"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_197 id_205"
                                    points="333.501404,-243.452805 330.803497,-245.445602 333.476898,-246.806808"
                                    stroke="none"/>
                                <polyline fill="#58aac7" fill-opacity="1.0" className="id_199 id_204"
                                    points="-147.596329,581.342224 -144.506546,580.037109 -144.698380,583.031006"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_201 id_214"
                                    points="303.821198,449.529907 304.655670,446.281250 306.920807,448.248291"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_202 id_209"
                                    points="24.035223,-583.593933 23.130653,-580.364075 20.908623,-582.379700"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_205 id_212"
                                    points="337.244202,-206.462097 335.880554,-209.526489 338.877502,-209.391632"
                                    stroke="none"/>
                                <polyline fill="#3750db" fill-opacity="1.0" className="id_206 id_208"
                                    points="-494.404694,-331.663727 -492.962219,-334.691833 -491.116760,-332.326599"
                                    stroke="none"/>
                                <polyline fill="#3750db" fill-opacity="1.0" className="id_206 id_222"
                                    points="-412.432953,-397.557800 -413.800323,-394.495087 -415.703522,-396.814056"
                                    stroke="none"/>
                                <polyline fill="#3750db" fill-opacity="1.0" className="id_206 id_229"
                                    points="-454.660248,-326.597473 -456.659180,-329.290863 -453.704895,-329.812653"
                                    stroke="none"/>
                                <polyline fill="#7e5887" fill-opacity="1.0" className="id_207 id_208"
                                    points="-524.455444,-297.614929 -524.704590,-294.270111 -527.280762,-295.807404"
                                    stroke="none"/>
                                <polyline fill="#3750db" fill-opacity="1.0" className="id_208 id_229"
                                    points="-463.389069,-316.412292 -466.420105,-314.976044 -466.356689,-317.975372"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_209 id_217"
                                    points="50.965080,-555.135925 48.185452,-557.013000 50.799015,-558.485901"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_209 id_224"
                                    points="78.755737,-567.376160 75.401703,-567.355042 76.726425,-570.046692"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_212 id_221"
                                    points="314.632446,-178.169510 316.005524,-181.229691 317.904449,-178.907150"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_214 id_218"
                                    points="286.148804,483.388580 285.920685,480.042236 288.688995,481.198303"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_217 id_224"
                                    points="78.877174,-558.306030 76.920090,-555.582031 75.523773,-558.237305"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_218 id_225"
                                    points="272.238068,515.171204 272.090454,511.820404 274.830200,513.042664"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_221 id_223"
                                    points="281.254852,-168.155792 284.032928,-170.035248 284.425262,-167.061005"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_223 id_231"
                                    points="246.929886,-159.021393 249.328690,-161.365707 250.244614,-158.508957"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_217 id_226"
                                    points="54.029709,-514.915527 52.717720,-518.002380 55.711998,-517.817200"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_225 id_233"
                                    points="241.288528,516.031799 244.597046,515.480652 243.714539,518.347961"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_224 id_232"
                                    points="107.990837,-533.697021 105.049789,-535.309509 107.516220,-537.017395"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_225 id_233"
                                    points="241.288528,516.031799 244.597046,515.480652 243.714539,518.347961"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_232 id_235"
                                    points="118.322929,-496.588562 116.366196,-499.312744 119.328232,-499.788452"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_233 id_236"
                                    points="218.720108,489.232635 221.473373,491.148254 218.839584,492.584595"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_172 id_188"
                                    points="-364.657959,-448.030029 -364.043732,-451.327423 -361.651520,-449.517059"
                                    stroke="none"/>
                                <polyline fill="#dedf8e" fill-opacity="1.0" className="id_258 id_5"
                                    points="107.588104,-30.857065 104.561478,-29.411560 104.615723,-32.411068"
                                    stroke="none"/>
                                <polyline fill="#91746c" fill-opacity="1.0" className="id_258 id_29"
                                    points="-428.546509,240.486282 -430.244171,237.593552 -427.250885,237.392502"
                                    stroke="none"/>
                                <polyline fill="#71a694" fill-opacity="1.0" className="id_258 id_11"
                                    points="-168.330444,102.569939 -171.684341,102.532585 -170.312912,99.864418"
                                    stroke="none"/>
                                <polyline fill="#7cacda" fill-opacity="1.0" className="id_258 id_4"
                                    points="-497.316437,204.927017 -498.190033,201.688675 -495.249908,202.285141"
                                    stroke="none"/>
                                <polyline fill="#7b7487" fill-opacity="1.0" className="id_258 id_19"
                                    points="-585.616272,193.162018 -585.382935,189.816025 -582.799438,191.341110"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_143 id_155"
                                    points="-175.940338,-612.862671 -177.956329,-610.182068 -179.294434,-612.867126"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_128 id_134"
                                    points="-225.772034,-618.125244 -227.044754,-615.021973 -229.018265,-617.281494"
                                    stroke="none"/>
                                <polyline fill="#228c68" fill-opacity="1.0" className="id_16 id_18"
                                    points="-78.260025,100.449692 -80.936249,102.471527 -81.483231,99.521820"
                                    stroke="none"/>
                                <polyline fill="#9ede60" fill-opacity="1.0" className="id_258 id_58"
                                    points="-159.939285,341.864929 -162.940369,340.367096 -160.541687,338.565338"
                                    stroke="none"/>
                                <polyline fill="#9ede60" fill-opacity="1.0" className="id_258 id_31"
                                    points="-59.902969,287.460571 -63.161522,286.665680 -61.222198,284.376801"
                                    stroke="none"/>
                                <polyline fill="#d97070" fill-opacity="1.0" className="id_258 id_26"
                                    points="-224.552353,-0.927500 -227.770020,0.019453 -227.240509,-2.933449"
                                    stroke="none"/>
                                <polyline fill="#aa95b1" fill-opacity="1.0" className="id_258 id_110"
                                    points="-293.568512,-65.468468 -296.294434,-63.514160 -296.767517,-66.476624"
                                    stroke="none"/>
                                <polyline fill="#9ede60" fill-opacity="1.0" className="id_258 id_117"
                                    points="-329.317291,48.086926 -332.615997,47.480034 -330.811005,45.083801"
                                    stroke="none"/>
                                <polyline fill="#c965aa" fill-opacity="1.0" className="id_258 id_103"
                                    points="-290.328796,118.689476 -293.502411,117.604050 -291.364655,115.499329"
                                    stroke="none"/>
                                <polyline fill="#71a694" fill-opacity="1.0" className="id_258 id_10"
                                    points="-319.166626,-95.306488 -321.342743,-92.754120 -322.514191,-95.515945"
                                    stroke="none"/>
                                <polyline fill="#71a694" fill-opacity="1.0" className="id_258 id_15"
                                    points="-365.523499,23.348993 -368.809784,22.678061 -366.958527,20.317385"
                                    stroke="none"/>
                                <polyline fill="#71a694" fill-opacity="1.0" className="id_258 id_17"
                                    points="-313.339081,-29.203516 -316.458038,-27.969749 -316.197479,-30.958412"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_86 id_105"
                                    points="62.861130,232.293213 60.545250,234.719467 59.530602,231.896255"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_118 id_152"
                                    points="100.749939,173.531967 102.707314,176.255707 99.745384,176.732117"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_182 id_234"
                                    points="85.554825,96.597229 87.901817,98.993393 85.046089,99.912521"
                                    stroke="none"/>
                                <polyline fill="#7dfc00" fill-opacity="1.0" className="id_31 id_99"
                                    points="-59.214607,249.766006 -57.208324,252.453903 -60.161160,252.983780"
                                    stroke="none"/>
                                <polyline fill="#67c27a" fill-opacity="1.0" className="id_258 id_28"
                                    points="-369.577148,-161.846832 -369.939880,-158.512405 -372.462341,-160.136368"
                                    stroke="none"/>
                                <polyline fill="#4e6087" fill-opacity="1.0" className="id_29 id_237"
                                    points="-380.616669,245.122757 -383.429230,246.950165 -383.766144,243.969147"
                                    stroke="none"/>
                                <polyline fill="#3998f5" fill-opacity="1.0" className="id_237 id_154"
                                    points="-342.342041,233.745575 -344.652618,236.176865 -345.673431,233.355881"
                                    stroke="none"/>
                                <polyline fill="#71a694" fill-opacity="1.0" className="id_258 id_21"
                                    points="-118.316505,-64.893555 -121.199486,-63.179363 -121.417641,-66.171417"
                                    stroke="none"/>
                                <polyline fill="#9ede60" fill-opacity="1.0" className="id_258 id_63"
                                    points="-316.965912,-317.288055 -316.890167,-313.934814 -319.603058,-315.215515"
                                    stroke="none"/>
                                <polyline fill="#ab7a6e" fill-opacity="1.0" className="id_258 id_145"
                                    points="-566.570435,-201.246887 -563.577271,-199.733231 -565.985474,-197.944199"
                                    stroke="none"/>
                                <polyline fill="#ab7a6e" fill-opacity="1.0" className="id_258 id_139"
                                    points="-523.458008,-200.466125 -520.813660,-198.402802 -523.522034,-197.112640"
                                    stroke="none"/>
                                <polyline fill="#ac6c6c" fill-opacity="1.0" className="id_258 id_82"
                                    points="-523.991333,-138.571014 -520.960205,-137.134964 -523.321533,-135.284470"
                                    stroke="none"/>
                                <polyline fill="#7b88cd" fill-opacity="1.0" className="id_258 id_206"
                                    points="-459.704071,-344.518768 -458.084259,-341.581726 -461.081818,-341.460693"
                                    stroke="none"/>
                                <polyline fill="#fcff5d" fill-opacity="1.0" className="id_256 id_124"
                                    points="243.909363,275.127502 243.006866,271.897125 245.952179,272.467255"
                                    stroke="none"/>
                                <polyline fill="#67c27a" fill-opacity="1.0" className="id_258 id_34"
                                    points="-276.781616,55.487049 -280.131439,55.317909 -278.656219,52.705696"
                                    stroke="none"/>
                                <polyline fill="#7cacda" fill-opacity="1.0" className="id_258 id_45"
                                    points="-232.777695,-69.182320 -235.556030,-67.303253 -235.947937,-70.277542"
                                    stroke="none"/>
                                <polyline fill="#ac6c6c" fill-opacity="1.0" className="id_258 id_77"
                                    points="-274.146057,-120.009087 -276.252228,-117.398689 -277.498077,-120.127769"
                                    stroke="none"/>
                                <polyline fill="#9ede60" fill-opacity="1.0" className="id_258 id_162"
                                    points="-341.607788,-57.421070 -344.340454,-55.476215 -344.803284,-58.440304"
                                    stroke="none"/>
                                <polyline fill="#a5ccd4" fill-opacity="1.0" className="id_258 id_175"
                                    points="-271.076080,-31.295158 -274.153168,-29.960436 -273.990082,-32.956001"
                                    stroke="none"/>
                                <polyline fill="#dedf8e" fill-opacity="1.0" className="id_258 id_142"
                                    points="-360.151672,-92.906509 -361.961151,-90.082352 -363.496674,-92.659576"
                                    stroke="none"/>
                                <polyline fill="#9b75ae" fill-opacity="1.0" className="id_258 id_210"
                                    points="-355.492096,-20.443874 -358.746216,-19.630974 -358.094910,-22.559418"
                                    stroke="none"/>
                                <polyline fill="#e68f66" fill-opacity="1.0" className="id_20 id_163"
                                    points="-89.334869,-179.814880 -92.451851,-181.053619 -90.214073,-183.051697"
                                    stroke="none"/>
                                <polyline fill="#7775b0" fill-opacity="1.0" className="id_258 id_130"
                                    points="-285.532379,6.914492 -288.834381,7.503507 -287.984772,4.626318"
                                    stroke="none"/>
                                <polyline fill="#dedf8e" fill-opacity="1.0" className="id_258 id_227"
                                    points="-325.568970,8.393718 -328.912537,8.659547 -327.787781,5.878374"
                                    stroke="none"/>
                                <polyline fill="#7b7487" fill-opacity="1.0" className="id_258 id_119"
                                    points="-390.567169,127.861031 -392.946777,125.497246 -390.103882,124.539070"
                                    stroke="none"/>
                            </g>
                            <g id="nodes">
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="-245.50243"
                                    className="id_1" cy="-251.65053" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798">
                                </circle>
                                <circle fill-opacity="1.0" fill="#228c68" r="12.344303" cx="-211.16017"
                                    className="id_2" cy="-281.2816" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="2.1468353"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.7240505" cx="-158.0676"
                                    className="id_3" cy="-299.0147" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#3998f5" r="9.374683" cx="-499.3424"
                                    className="id_4" cy="214.91345" stroke="#276aab"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.549367" cx="117.966156"
                                    className="id_5" cy="-30.669365" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="12.1696205" cx="-170.3287"
                                    className="id_6" cy="-338.2337" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="2.1164556"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.374683" cx="-211.08157"
                                    className="id_7" cy="-322.8406" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.374683" cx="-126.01844"
                                    className="id_8" cy="-343.35815" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="10.073418" cx="-162.96167"
                                    className="id_9" cy="-231.23041" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.7518988"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.374683" cx="-309.78574"
                                    className="id_10" cy="-99.28549" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="10.073418" cx="-158.59218"
                                    className="id_11" cy="107.57542" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.7518988"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.374683" cx="-144.43155"
                                    className="id_12" cy="-188.88545" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#5d4c86" r="9.374683" cx="-140.24132"
                                    className="id_13" cy="76.29937" stroke="#41355d"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.374683" cx="-181.4727"
                                    className="id_14" cy="-192.07196" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.374683" cx="-357.50516"
                                    className="id_15" cy="29.637066" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.374683" cx="-104.06018"
                                    className="id_16" cy="105.23398" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.549367" cx="-302.99857"
                                    className="id_17" cy="-28.301985" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.7240505" cx="-67.86758"
                                    className="id_18" cy="98.52255" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#37294f" r="9.374683" cx="-590.7964"
                                    className="id_19" cy="201.93698" stroke="#261c37"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#e68f66" r="9.374683" cx="-106.330986"
                                    className="id_20" cy="-198.84978" stroke="#a16447"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.374683" cx="-108.15361"
                                    className="id_21" cy="-65.63457" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="12.868355" cx="-5.972518"
                                    className="id_22" cy="-343.6836" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="2.2379746"/>
                                <circle fill-opacity="1.0" fill="#228c68" r="9.7240505" cx="-118.8049"
                                    className="id_23" cy="-306.99338" stroke="#176248"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="12.518988" cx="177.93678"
                                    className="id_24" cy="-38.023956" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="2.1772153"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.7240505" cx="19.161364"
                                    className="id_25" cy="-284.34613" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#f22020" r="9.2" cx="-214.70935"
                                    className="id_26" cy="0.83749354" stroke="#a91616"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#29bdab" r="9.374683" cx="-62.17854"
                                    className="id_27" cy="58.477577" stroke="#1c8477"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="11.820253" cx="-362.62222"
                                    className="id_28" cy="-172.64973" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="2.0556962"/>
                                <circle fill-opacity="1.0" fill="#632819" r="9.2" cx="-427.87634"
                                    className="id_29" cy="250.4638" stroke="#451c11"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.2" cx="56.428272"
                                    className="id_30" cy="-387.25974" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="10.597468" cx="-51.1144"
                                    className="id_31" cy="294.90692" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.843038"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="23.349365" cx="263.11633"
                                    className="id_32" cy="-56.765892" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="4.060759"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="10.073418" cx="99.655396"
                                    className="id_33" cy="-387.9784" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.7518988"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.2" cx="-268.07425"
                                    className="id_34" cy="60.404533" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#235b54" r="11.121519" cx="-584.1175"
                                    className="id_35" cy="257.89233" stroke="#183f3a"
                                    stroke-opacity="1.0" strokeWidth="1.9341772"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="329.71735"
                                    className="id_36" cy="-63.083565" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#235b54" r="9.2" cx="-549.1811"
                                    className="id_37" cy="393.00018" stroke="#183f3a"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="226.39189"
                                    className="id_38" cy="-95.22824" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.2" cx="45.905243"
                                    className="id_39" cy="-353.325" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="371.48328"
                                    className="id_40" cy="-66.91315" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.2" cx="135.14876"
                                    className="id_41" cy="-376.4293" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#ffc413" r="9.374683" cx="-138.97034"
                                    className="id_42" cy="138.07904" stroke="#b2890d"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.7240505" cx="-31.38357"
                                    className="id_43" cy="-304.08554" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#3998f5" r="9.898734" cx="-566.8431"
                                    className="id_44" cy="174.93074" stroke="#276aab"
                                    stroke-opacity="1.0" strokeWidth="1.721519"/>
                                <circle fill-opacity="1.0" fill="#3998f5" r="9.898734" cx="-222.11041"
                                    className="id_45" cy="-70.587944" stroke="#276aab"
                                    stroke-opacity="1.0" strokeWidth="1.721519"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="12.518988" cx="4.8932824"
                                    className="id_46" cy="437.5832" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="2.1772153"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="412.87466"
                                    className="id_47" cy="-70.03407" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#235b54" r="9.374683" cx="-175.02718"
                                    className="id_48" cy="5.182671" stroke="#183f3a"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#c56133" r="9.374683" cx="-86.359825"
                                    className="id_49" cy="263.7649" stroke="#894323"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="72.14616"
                                    className="id_50" cy="446.7677" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.549367" cx="33.99054"
                                    className="id_51" cy="-249.83025" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#37294f" r="9.7240505" cx="-122.06932"
                                    className="id_52" cy="-232.22182" stroke="#261c37"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#29bdab" r="9.898734" cx="-63.62581"
                                    className="id_53" cy="-64.49774" stroke="#1c8477"
                                    stroke-opacity="1.0" strokeWidth="1.721519"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="455.48886"
                                    className="id_54" cy="-74.30992" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.2" cx="161.80513"
                                    className="id_55" cy="-352.99475" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="64.61358"
                                    className="id_56" cy="349.15515" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-37.87035"
                                    className="id_57" cy="405.6093" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.898734" cx="-153.47731"
                                    className="id_58" cy="350.4678" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.721519"/>
                                <circle fill-opacity="1.0" fill="#235b54" r="27.367088" cx="-613.4307"
                                    className="id_59" cy="364.24896" stroke="#183f3a"
                                    stroke-opacity="1.0" strokeWidth="4.759494"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="504.90463"
                                    className="id_60" cy="-73.93032" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#235b54" r="9.374683" cx="-138.07033"
                                    className="id_61" cy="5.818885" stroke="#183f3a"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#ffcba5" r="9.374683" cx="-461.18237"
                                    className="id_62" cy="185.43948" stroke="#b28e73"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-312.6158"
                                    className="id_63" cy="-326.50275" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="110.725006"
                                    className="id_64" cy="439.93347" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.374683" cx="51.01213"
                                    className="id_65" cy="-215.40665" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.549367" cx="72.56883"
                                    className="id_66" cy="384.72458" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="-18.33778"
                                    className="id_67" cy="371.44687" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.898734" cx="70.05868"
                                    className="id_68" cy="-324.29404" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.721519"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="11.64557" cx="553.04767"
                                    className="id_69" cy="-77.30382" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="2.0253165"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="11.994936" cx="-28.618725"
                                    className="id_70" cy="89.44195" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="2.0860758"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="22.825317" cx="-97.08298"
                                    className="id_71" cy="419.73114" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="3.9696202"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="497.78763"
                                    className="id_72" cy="-107.51669" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#277da7" r="9.2" cx="-7.524269"
                                    className="id_73" cy="517.5509" stroke="#1b5774"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="171.3508"
                                    className="id_74" cy="3.0994177" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="177.13812"
                                    className="id_75" cy="39.730423" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#29bdab" r="9.374683" cx="-70.3576"
                                    className="id_76" cy="-25.276503" stroke="#1c8477"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#991919" r="9.374683" cx="-264.87643"
                                    className="id_77" cy="-124.24079" stroke="#6b1111"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="487.45844"
                                    className="id_78" cy="-145.32085" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#29bdab" r="10.772152" cx="-32.93844"
                                    className="id_79" cy="-31.645847" stroke="#1c8477"
                                    stroke-opacity="1.0" strokeWidth="1.8734176"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="199.66177"
                                    className="id_80" cy="66.33341" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-3.1099582"
                                    className="id_81" cy="336.8697" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#991919" r="9.549367" cx="-530.39386"
                                    className="id_82" cy="-146.7409" stroke="#6b1111"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="465.05283"
                                    className="id_83" cy="-171.53235" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.2" cx="178.88538"
                                    className="id_84" cy="-318.43036" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="10.9468355" cx="193.7243"
                                    className="id_85" cy="-117.06812" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.9037974"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="12.518988" cx="25.002544"
                                    className="id_86" cy="245.8994" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="2.1772153"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="226.81589"
                                    className="id_87" cy="91.026436" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="459.5991"
                                    className="id_88" cy="-206.16522" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="14.917942"
                                    className="id_89" cy="204.173" stroke="#57b000" stroke-opacity="1.0"
                                    strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="105.20053"
                                    className="id_90" cy="356.2765" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#235b54" r="10.597468" cx="-508.67087"
                                    className="id_91" cy="384.4112" stroke="#183f3a"
                                    stroke-opacity="1.0" strokeWidth="1.843038"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="480.98615"
                                    className="id_92" cy="-236.46593" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="253.15042"
                                    className="id_93" cy="117.08309" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="12.868355" cx="-516.45734"
                                    className="id_94" cy="440.92267" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="2.2379746"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="22.650635" cx="-287.84366"
                                    className="id_95" cy="-380.0884" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="3.9392407"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="271.3726"
                                    className="id_96" cy="146.85464" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-93.98753"
                                    className="id_97" cy="358.96747" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-132.59024"
                                    className="id_98" cy="462.287" stroke="#57b000" stroke-opacity="1.0"
                                    strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-61.01436"
                                    className="id_99" cy="239.73633" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="472.32938"
                                    className="id_100" cy="-271.70596" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.2" cx="185.5246"
                                    className="id_101" cy="-284.3563" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-29.911587"
                                    className="id_102" cy="256.5786" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#d30b94" r="9.374683" cx="-283.17984"
                                    className="id_103" cy="125.95073" stroke="#930767"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="117.028725"
                                    className="id_104" cy="320.3916" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.7240505" cx="72.80787"
                                    className="id_105" cy="228.7184" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#ffcba5" r="11.64557" cx="-455.51288"
                                    className="id_106" cy="336.28455" stroke="#b28e73"
                                    stroke-opacity="1.0" strokeWidth="2.0253165"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="450.45334"
                                    className="id_107" cy="-305.17328" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="-262.45273"
                                    className="id_108" cy="-434.43942" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="279.44476"
                                    className="id_109" cy="185.19951" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#946aa2" r="9.374683" cx="-283.50613"
                                    className="id_110" cy="-67.07535" stroke="#674a71"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#29bdab" r="9.374683" cx="-8.878324"
                                    className="id_111" cy="-71.6836" stroke="#1c8477"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="437.24533"
                                    className="id_112" cy="-338.8425" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="-254.08055"
                                    className="id_113" cy="-472.92038" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="269.9381"
                                    className="id_114" cy="219.40895" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="417.89374"
                                    className="id_115" cy="-369.8077" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.2" cx="182.56548"
                                    className="id_116" cy="-247.41939" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-321.17816"
                                    className="id_117" cy="54.217857" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="105.77955"
                                    className="id_118" cy="204.80228" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#37294f" r="9.374683" cx="-387.3126"
                                    className="id_119" cy="137.51718" stroke="#261c37"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.7240505" cx="-251.53456"
                                    className="id_120" cy="-529.99" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#277da7" r="9.898734" cx="-24.498037"
                                    className="id_121" cy="567.78156" stroke="#1b5774"
                                    stroke-opacity="1.0" strokeWidth="1.721519"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="396.3523"
                                    className="id_122" cy="-400.09924" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="-287.97888"
                                    className="id_123" cy="-534.8928" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="242.00885"
                                    className="id_124" cy="284.94525" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#991919" r="9.374683" cx="-227.73402"
                                    className="id_125" cy="-126.02702" stroke="#6b1111"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.7240505" cx="66.79638"
                                    className="id_126" cy="-181.26904" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="370.61868"
                                    className="id_127" cy="-423.8386" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="-280.22977"
                                    className="id_128" cy="-570.5597" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="260.5347"
                                    className="id_129" cy="313.53976" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#2f2aa0" r="9.549367" cx="-275.57755"
                                    className="id_130" cy="9.853967" stroke="#201d70"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="337.58237"
                                    className="id_131" cy="-439.0264" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="143.12993"
                                    className="id_132" cy="184.14192" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="297.04065"
                                    className="id_133" cy="319.2217" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-218.09744"
                                    className="id_134" cy="-624.82855" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.374683" cx="-231.58585"
                                    className="id_135" cy="66.04886" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#f47a22" r="10.073418" cx="24.215927"
                                    className="id_136" cy="168.2339" stroke="#aa5517"
                                    stroke-opacity="1.0" strokeWidth="1.7518988"/>
                                <circle fill-opacity="1.0" fill="#235b54" r="35.577213" cx="-526.64343"
                                    className="id_137" cy="302.5668" stroke="#183f3a"
                                    stroke-opacity="1.0" strokeWidth="6.187341"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="92.0" cx="-336.87155"
                                    className="id_138" cy="590.7099" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="16.0"/>
                                <circle fill-opacity="1.0" fill="#96341c" r="9.2" cx="-527.75854"
                                    className="id_139" cy="-209.49416" stroke="#692413"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="301.99673"
                                    className="id_140" cy="-434.42014" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="424.82983"
                                    className="id_141" cy="230.04948" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="-351.3978"
                                    className="id_142" cy="-98.12218" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-221.33046"
                                    className="id_143" cy="-590.2425" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.549367" cx="330.30078"
                                    className="id_144" cy="309.59198" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#96341c" r="10.597468" cx="-573.4397"
                                    className="id_145" cy="-210.49352" stroke="#692413"
                                    stroke-opacity="1.0" strokeWidth="1.843038"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.2" cx="82.54972"
                                    className="id_146" cy="-288.3379" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="275.61948"
                                    className="id_147" cy="-412.5774" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="365.76477"
                                    className="id_148" cy="310.13272" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="9.374683" cx="-226.66411"
                                    className="id_149" cy="470.98038" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#3998f5" r="9.374683" cx="-499.94647"
                                    className="id_150" cy="117.490425" stroke="#276aab"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="246.70576"
                                    className="id_151" cy="-389.97128" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="99.13177"
                                    className="id_152" cy="163.4714" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.374683" cx="84.63279"
                                    className="id_153" cy="-150.65665" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#3998f5" r="9.549367" cx="-332.58163"
                                    className="id_154" cy="230.21375" stroke="#276aab"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.7240505" cx="-166.48035"
                                    className="id_155" cy="-617.5771" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#f22020" r="9.898734" cx="-252.13646"
                                    className="id_156" cy="152.7152" stroke="#a91616"
                                    stroke-opacity="1.0" strokeWidth="1.721519"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="20.903797" cx="-97.14074"
                                    className="id_157" cy="499.0426" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="3.635443"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="287.66196"
                                    className="id_158" cy="-378.18503" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="-123.12838"
                                    className="id_159" cy="-582.46027" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="396.7939"
                                    className="id_160" cy="330.51257" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-14.017995"
                                    className="id_161" cy="175.01859" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-331.5399"
                                    className="id_162" cy="-58.99307" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#e68f66" r="9.374683" cx="-82.5481"
                                    className="id_163" cy="-172.214" stroke="#a16447"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.549367" cx="-322.8438"
                                    className="id_164" cy="-194.10808" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="34.703796" cx="-444.1478"
                                    className="id_165" cy="417.46268" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="6.035443"/>
                                <circle fill-opacity="1.0" fill="#c0c0c0" r="9.2" cx="-447.4459"
                                    className="id_258" cy="-40.895535" stroke="#868686"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="-83.02369"
                                    className="id_167" cy="-580.1927" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="152.77966"
                                    className="id_168" cy="149.04947" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#29bdab" r="9.374683" cx="24.188921"
                                    className="id_169" cy="-55.164326" stroke="#1c8477"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="290.82394"
                                    className="id_170" cy="-340.87067" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="405.99857"
                                    className="id_171" cy="366.42236" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-340.32828"
                                    className="id_172" cy="-480.17966" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="9.374683" cx="-358.91562"
                                    className="id_173" cy="437.83957" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#f22020" r="9.549367" cx="-449.10452"
                                    className="id_174" cy="297.14236" stroke="#a91616"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="10.772152" cx="-259.38452"
                                    className="id_175" cy="-30.65875" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="1.8734176"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="386.0888"
                                    className="id_176" cy="398.98615" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="398.52258"
                                    className="id_177" cy="97.14342" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="155.9803"
                                    className="id_178" cy="-119.76487" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#29bdab" r="9.374683" cx="-35.43064"
                                    className="id_179" cy="-97.820816" stroke="#1c8477"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="300.396"
                                    className="id_180" cy="-304.1828" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.549367" cx="-57.58109"
                                    className="id_181" cy="-604.3785" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.549367" cx="93.852905"
                                    className="id_182" cy="122.37954" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="9.549367" cx="-216.27902"
                                    className="id_183" cy="508.94617" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.549367" cx="166.4625"
                                    className="id_184" cy="-216.58203" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="10.9468355" cx="-153.48228"
                                    className="id_185" cy="312.3719" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.9037974"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="13.567089" cx="233.01389"
                                    className="id_186" cy="1.203176" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="2.3594937"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="15.488606" cx="-406.1066"
                                    className="id_187" cy="341.20065" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="2.6936705"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="-370.6924"
                                    className="id_188" cy="-440.056" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="353.21133"
                                    className="id_189" cy="416.69244" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="-32.738037"
                                    className="id_190" cy="-568.7122" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="9.374683" cx="-271.17422"
                                    className="id_191" cy="413.77307" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#c3a5b4" r="9.374683" cx="-184.20805"
                                    className="id_192" cy="-71.149185" stroke="#88737d"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#3998f5" r="9.374683" cx="-550.9513"
                                    className="id_193" cy="-177.25746" stroke="#276aab"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.374683" cx="42.766174"
                                    className="id_194" cy="-150.40999" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="9.549367" cx="-300.52243"
                                    className="id_195" cy="439.58755" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.7240505" cx="121.34923"
                                    className="id_196" cy="-98.34463" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="10.597468" cx="320.06024"
                                    className="id_197" cy="-269.8511" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.843038"/>
                                <circle fill-opacity="1.0" fill="#235b54" r="11.470886" cx="-210.30774"
                                    className="id_198" cy="158.25124" stroke="#183f3a"
                                    stroke-opacity="1.0" strokeWidth="1.9949366"/>
                                <circle fill-opacity="1.0" fill="#277da7" r="21.253164" cx="-103.39461"
                                    className="id_199" cy="584.17444" stroke="#1b5774"
                                    stroke-opacity="1.0" strokeWidth="3.6962023"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.2" cx="-287.016"
                                    className="id_200" cy="-182.8072" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="319.89084"
                                    className="id_201" cy="431.02518" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="3.6611722"
                                    className="id_202" cy="-561.13306" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="127.837"
                                    className="id_203" cy="408.8701" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#8ad8e8" r="9.898734" cx="-158.3338"
                                    className="id_204" cy="580.65424" stroke="#6097a2"
                                    stroke-opacity="1.0" strokeWidth="1.721519"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="10.073418" cx="338.46954"
                                    className="id_205" cy="-233.69543" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.7518988"/>
                                <circle fill-opacity="1.0" fill="#3750db" r="12.69367" cx="-460.26065"
                                    className="id_206" cy="-358.305" stroke="#263899"
                                    stroke-opacity="1.0" strokeWidth="2.2075949"/>
                                <circle fill-opacity="1.0" fill="#c56133" r="21.253164" cx="-546.9982"
                                    className="id_207" cy="-259.8371" stroke="#894323"
                                    stroke-opacity="1.0" strokeWidth="3.6962023"/>
                                <circle fill-opacity="1.0" fill="#3750db" r="21.253164" cx="-512.6178"
                                    className="id_208" cy="-317.45276" stroke="#263899"
                                    stroke-opacity="1.0" strokeWidth="3.6962023"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="30.75384"
                                    className="id_209" cy="-591.0007" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#772b9d" r="9.374683" cx="-345.5453"
                                    className="id_210" cy="-18.231577" stroke="#531e6d"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.374683" cx="-36.28619"
                                    className="id_211" cy="-266.4122" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="336.78616"
                                    className="id_212" cy="-196.28252" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#b732cc" r="9.374683" cx="-391.428"
                                    className="id_213" cy="172.74835" stroke="#80238e"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.549367" cx="297.0154"
                                    className="id_214" cy="457.367" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#0ec434" r="9.549367" cx="3.3221061"
                                    className="id_215" cy="64.67321" stroke="#098924"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#277da7" r="9.7240505" cx="11.606764"
                                    className="id_216" cy="548.0185" stroke="#1b5774"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="55.967796"
                                    className="id_217" cy="-546.2586" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="282.22214"
                                    className="id_218" cy="492.7915" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#f07cab" r="9.374683" cx="-246.54646"
                                    className="id_219" cy="438.80313" stroke="#a85677"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.549367" cx="285.99072"
                                    className="id_220" cy="35.106037" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6607594"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.7240505" cx="306.4497"
                                    className="id_221" cy="-171.47925" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#3750db" r="10.772152" cx="-403.38202"
                                    className="id_222" cy="-404.986" stroke="#263899"
                                    stroke-opacity="1.0" strokeWidth="1.8734176"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="271.34073"
                                    className="id_223" cy="-166.84802" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="87.727974"
                                    className="id_224" cy="-562.9604" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="268.1639"
                                    className="id_225" cy="524.30365" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="53.400826"
                                    className="id_226" cy="-504.74506" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.374683" cx="-316.12238"
                                    className="id_227" cy="12.214095" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#632819" r="9.374683" cx="-357.19244"
                                    className="id_228" cy="374.18442" stroke="#451c11"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#3750db" r="9.7240505" cx="-452.8218"
                                    className="id_229" cy="-316.18896" stroke="#263899"
                                    stroke-opacity="1.0" strokeWidth="1.6911392"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="12.69367" cx="-53.288883"
                                    className="id_230" cy="534.488" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="2.2075949"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="237.40736"
                                    className="id_231" cy="-155.96828" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="113.683624"
                                    className="id_232" cy="-525.4756" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="231.73099"
                                    className="id_233" cy="513.09015" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.374683" cx="82.432915"
                                    className="id_234" cy="86.89737" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.6303798"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="119.90862"
                                    className="id_235" cy="-486.7151" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="213.93225"
                                    className="id_236" cy="480.4533" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#3998f5" r="9.2" cx="-370.67993"
                                    className="id_237" cy="243.99976" stroke="#276aab"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#3998f5" r="9.2" cx="-534.69806"
                                    className="id_238" cy="138.08795" stroke="#276aab"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="586.60516"
                                    className="id_239" cy="-52.227848" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="570.9701"
                                    className="id_240" cy="-20.523289" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="552.5199"
                                    className="id_241" cy="11.427479" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="529.5156"
                                    className="id_242" cy="36.823025" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="515.2176"
                                    className="id_243" cy="72.784744" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="520.9068"
                                    className="id_244" cy="106.63448" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="529.5243"
                                    className="id_245" cy="145.38022" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="528.19586"
                                    className="id_246" cy="182.71375" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="516.80835"
                                    className="id_247" cy="216.68738" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="491.33392"
                                    className="id_248" cy="240.89722" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="455.9178"
                                    className="id_249" cy="245.27072" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="400.82785"
                                    className="id_250" cy="202.71915" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="389.92334"
                                    className="id_251" cy="169.86014" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="391.11206"
                                    className="id_252" cy="133.6333" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="392.14978"
                                    className="id_253" cy="60.288082" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="360.74026"
                                    className="id_254" cy="38.785458" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="326.78772"
                                    className="id_255" cy="35.38056" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#fcff5d" r="9.2" cx="248.79106"
                                    className="id_256" cy="249.90952" stroke="#b0b241"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                                <circle fill-opacity="1.0" fill="#7dfc00" r="9.2" cx="139.8589"
                                    className="id_257" cy="227.27213" stroke="#57b000"
                                    stroke-opacity="1.0" strokeWidth="1.5999999"/>
                            </g>
                            <g id="node-labels">
                                <a href="https://es.wikipedia.org/wiki/Tennis_for_Two" target="_blank" rel="noreferrer">
                                    <text font-size="9" x="-245.50243" y="-250.0912" fill="#000000"
                                    style={{textAnchor: "middle",dominantBaseline: "central"}}
                                    font-family="Calibri" className="id_1">
                                    Tennis for Two
                                    </text>
                                </a>
                                <a href="https://es.wikipedia.org/wiki/Spacewar!" target="_blank" rel="noreferrer"><text font-size="10" x="-211.16017" y="-279.23407" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_2">
                                Spacewar
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Pong" target="_blank" rel="noreferrer"><text font-size="9" x="-158.0676" y="-297.1917" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_3">
                                Pong
                                </text></a>
                                <a href="https://dnd.wizards.com/es" target="_blank" rel="noreferrer"><text font-size="9" x="-499.3424" y="216.84119" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_4">
                                Dungeons And Dragons
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Football_(1978_video_game)" target="_blank" rel="noreferrer"><text font-size="9" x="117.966156" y="-29.112968" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_5">
                                Atari&apos;s Football
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Space_Invaders" target="_blank" rel="noreferrer"><text font-size="10" x="-170.3287" y="-336.0934" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_6">
                                Space Invaders
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Asteroids" target="_blank" rel="noreferrer"><text font-size="9" x="-211.08157" y="-321.293" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_7">
                                Asteroids
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Centipede_(videojuego)" target="_blank" rel="noreferrer"><text font-size="9" x="-126.01844" y="-341.4319" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_8">
                                Centipede
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Pac-Man" target="_blank" rel="noreferrer"><text font-size="9" x="-162.96167" y="-229.78754" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_9">
                                Pac-Man
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Frogger" target="_blank" rel="noreferrer"><text font-size="9" x="-309.78574" y="-97.462494" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_10">
                                Frogger
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Donkey_Kong_(videojuego)" target="_blank" rel="noreferrer"><text font-size="9" x="-158.59218" y="109.507545" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_11">
                                Donkey Kong
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/BurgerTime" target="_blank" rel="noreferrer"><text font-size="9" x="-144.43155" y="-187.02583" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_12">
                                Burgertime
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Donkey_Kong_Jr." target="_blank" rel="noreferrer"><text font-size="9" x="-140.24132" y="78.2315" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_13">
                                Donkey Kong Junior
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Ms._Pac-Man" target="_blank" rel="noreferrer"><text font-size="9" x="-181.4727" y="-190.62909" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_14">
                                Ms. Pac-Man
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Q*bert" target="_blank" rel="noreferrer"><text font-size="9" x="-357.50516" y="31.402935" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_15">
                                Q*bert
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Mario_Bros." target="_blank" rel="noreferrer"><text font-size="9" x="-104.06018" y="106.71347" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_16">
                                Mario Bros.
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Tetris" target="_blank" rel="noreferrer"><text font-size="9" x="-302.99857" y="-26.822493" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_17">
                                Tetris
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Super_Mario_Bros." target="_blank" rel="noreferrer"><text font-size="9" x="-67.86758" y="100.38071" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_18">
                                Super Mario Bros.
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/The_Legend_of_Zelda" target="_blank" rel="noreferrer"><text font-size="9" x="-590.7964" y="203.87643" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_19">
                                Legend of Zelda
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Metal_Gear_(video_game)" target="_blank" rel="noreferrer"><text font-size="9" x="-106.330986" y="-197.29778" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_20">
                                Metal Gear
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Rad_Racer" target="_blank" rel="noreferrer"><text font-size="9" x="-108.15361" y="-64.08696" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_21">
                                Rad Racer
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Street_Fighter_(videojuego)" target="_blank" rel="noreferrer"><text font-size="10" x="-5.972518" y="-341.5368" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_22">
                                Street Fighter
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Netrek" target="_blank" rel="noreferrer"><text font-size="9" x="-118.8049" y="-305.44138" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_23">
                                Netrek
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/John_Madden_Football_(1988_video_game)" target="_blank" rel="noreferrer"><text font-size="10" x="177.93678" y="-36.299507" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_24">
                                John Madden Football
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Street_Fighter_II" target="_blank" rel="noreferrer"><text font-size="9" x="19.161364" y="-282.414" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_25">
                                Street Fighter II
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Civilization_(video_game)" target="_blank" rel="noreferrer"><text font-size="9" x="-214.70935" y="2.3894954" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_26">
                                Civilization
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Super_Mario_Kart" target="_blank" rel="noreferrer"><text font-size="9" x="-62.17854" y="59.95707" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_27">
                                Mario Kart
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Mortal_Kombat_(franquicia)" target="_blank" rel="noreferrer"><text font-size="10" x="-362.62222" y="-170.9253" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_28">
                                Mortal Kombat
                                </text></a>
                                <a href="https://magic.wizards.com/es" target="_blank" rel="noreferrer"><text font-size="9" x="-427.87634" y="252.39594" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_29">
                                Magic: The Gathering
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Virtua_Fighter" target="_blank" rel="noreferrer"><text font-size="9" x="56.428272" y="-385.3276" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_30">
                                Virtua Fighter
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Doom_(videojuego_de_1993)" target="_blank" rel="noreferrer"><text font-size="9" x="-51.1144" y="296.3498" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_31">
                                Doom
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="13" x="263.11633" y="-54.693382" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_32">
                                FIFA
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Tekken_(videojuego)" target="_blank" rel="noreferrer"><text font-size="9" x="99.655396" y="-386.4264" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_33">
                                Tekken
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/The_King_of_Fighters_%2794" target="_blank" rel="noreferrer"><text font-size="9" x="-268.07425" y="62.343987" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_34">
                                The King of Fighters 94
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Warcraft:_Orcs_%26_Humans" target="_blank" rel="noreferrer"><text font-size="9" x="-584.1175" y="259.45166" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_35">
                                Warcraft: Orcs and Humans
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="329.71735" y="-61.619453" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_36">
                                FIFA 95
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Warcraft_II:_Tides_of_Darkness" target="_blank" rel="noreferrer"><text font-size="9" x="-549.1811" y="394.5595" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_37">
                                Warcraft II: Tides of Darkness
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/J.League_Jikkyou_Winning_Eleven" target="_blank" rel="noreferrer"><text font-size="9" x="226.39189" y="-93.29611" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_38">
                                Winning Eleven
                                </text></a>
                                <a href="https://soulcalibur.fandom.com/es/wiki/Soul_Edge_(videojuego)" target="_blank" rel="noreferrer"><text font-size="9" x="45.905243" y="-351.39288" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_39">
                                Soul Edge
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="371.48328" y="-65.449036" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_40">
                                FIFA 96
                                </text></a>
                                <a href="https://tekken.fandom.com/es/wiki/Tekken_2" target="_blank" rel="noreferrer"><text font-size="9" x="135.14876" y="-374.8773" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_41">
                                Tekken 2
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Crash_Bandicoot_(videojuego)" target="_blank" rel="noreferrer"><text font-size="9" x="-138.97034" y="139.63104" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_42">
                                Crash Bandicoot
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Marvel_vs._Capcom" target="_blank" rel="noreferrer"><text font-size="9" x="-31.38357" y="-302.15488" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_43">
                                Marvel vs. Capcom
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Diablo_(videojuego)po" target="_blank" rel="noreferrer"><text font-size="9" x="-566.8431" y="176.48274" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_44">
                                Diablo
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank" rel="noreferrer"><text font-size="9" x="-222.11041" y="-69.03594" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_45">
                                Pokemon
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Quake_(videojuego)" target="_blank" rel="noreferrer"><text font-size="10" x="4.8932824" y="439.51758" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_46">
                                Quake
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="412.87466" y="-68.56996" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_47">
                                FIFA 97
                                </text></a>
                                <a href="https://www.ageofempires.com/" target="_blank" rel="noreferrer"><text font-size="9" x="-175.02718" y="7.122124" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_48">
                                Age of Empires
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/GoldenEye_007" target="_blank" rel="noreferrer"><text font-size="9" x="-86.359825" y="265.69556" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_49">
                                GoldenEye 007
                                </text></a>
                                <a href="https://store.steampowered.com/app/2320/Quake_II/?l=spanish" target="_blank" rel="noreferrer"><text font-size="9" x="72.14616" y="448.50867" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_50">
                                Quake II
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Street_Fighter_III" target="_blank" rel="noreferrer"><text font-size="9" x="33.99054" y="-247.89812" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_51">
                                Street Fighter III
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Grand_Theft_Auto_(video_game)" target="_blank" rel="noreferrer"><text font-size="9" x="-122.06932" y="-230.66249" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_52">
                                Grand Theft Auto
                                </text></a>
                                <a href="https://www.gran-turismo.com/mx/" target="_blank" rel="noreferrer"><text font-size="9" x="-63.62581" y="-63.01825" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_53">
                                Gran Turismo
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="455.48886" y="-72.84581" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_54">
                                FIFA 98
                                </text></a>
                                <a href="https://tekken.fandom.com/es/wiki/Tekken_3" target="_blank" rel="noreferrer"><text font-size="9" x="161.80513" y="-351.44275" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_55">
                                Tekken 3
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Unreal_(1998_video_game)" target="_blank" rel="noreferrer"><text font-size="9" x="64.61358" y="350.70715" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_56">
                                Unreal
                                </text></a>
                                <a href="https://halflife.fandom.com/es/wiki/Half-Life" target="_blank" rel="noreferrer"><text font-size="9" x="-37.87035" y="407.16864" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_57">
                                Half-Life
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Tom_Clancy%27s_Rainbow_Six" target="_blank" rel="noreferrer"><text font-size="9" x="-153.47731" y="352.0198" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_58">
                                Rainbow Six
                                </text></a>
                                <a href="https://starcraft.com/es-es/" target="_blank" rel="noreferrer"><text font-size="14" x="-613.4307" y="366.6746" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_59">
                                StarCraft I
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="504.90463" y="-72.46621" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_60">
                                FIFA 99
                                </text></a>
                                <a href="https://store.steampowered.com/app/813780/Age_of_Empires_II_Definitive_Edition/?l=spanish" target="_blank" rel="noreferrer"><text font-size="9" x="-138.07033" y="7.758338" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_61">
                                Age of Empires II
                                </text></a>
                                <a href="https://www.everquest.com/home" target="_blank" rel="noreferrer"><text font-size="9" x="-461.18237" y="187.09256" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_62">
                                EverQuest
                                </text></a>
                                <a href="https://www.ea.com/es-es/games/medal-of-honor" target="_blank" rel="noreferrer"><text font-size="9" x="-312.6158" y="-324.94342" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_63">
                                Medal of Honor
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Quake_III_Arena" target="_blank" rel="noreferrer"><text font-size="9" x="110.725006" y="441.67444" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_64">
                                Quake III Arena
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Street_Fighter_III:_3rd_Strike" target="_blank" rel="noreferrer"><text font-size="9" x="51.01213" y="-213.47452" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_65">
                                Street Fighter III: 3rd Strike
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Unreal_Tournament" target="_blank" rel="noreferrer"><text font-size="9" x="72.56883" y="386.27658" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_66">
                                Unreal Tournament
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Aliens_Versus_Predator_(1999_video_game)" target="_blank" rel="noreferrer"><text font-size="9" x="-18.33778" y="372.99887" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_67">
                                Aliens Versus Predator
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Soulcalibur" target="_blank" rel="noreferrer"><text font-size="9" x="70.05868" y="-322.74203" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_68">
                                Soulcalibur
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="10" x="553.04767" y="-75.693306" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_69">
                                NBA2K
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Super_Smash_Bros." target="_blank" rel="noreferrer"><text font-size="10" x="-28.618725" y="91.58713" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_70">
                                Super Smash Bros
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Counter-Strike" target="_blank" rel="noreferrer"><text font-size="12" x="-97.08298" y="421.80048" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_71">
                                Counter-Strike 1.6
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="497.78763" y="-106.05258" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_72">
                                FIFA 2000
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Team_Fortress_Classic" target="_blank" rel="noreferrer"><text font-size="9" x="-7.524269" y="518.9938" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_73">
                                Team Fortress
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="171.3508" y="4.647025" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_74">
                                Madden NFL 2000
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="177.13812" y="41.27803" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_75">
                                Madden NFL 2001
                                </text></a>
                                <a href="https://www.motogp.com/es" target="_blank" rel="noreferrer"><text font-size="9" x="-70.3576" y="-23.813856" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_76">
                                MotoGP
                                </text></a>
                                <a href="https://www.ea.com/es-es/games/the-sims" target="_blank" rel="noreferrer"><text font-size="9" x="-264.87643" y="-122.68879" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_77">
                                The Sims
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="487.45844" y="-143.85674" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_78">
                                FIFA 2001
                                </text></a>
                                <a href="https://www.ea.com/es-es/games/f1/f1-22" target="_blank" rel="noreferrer"><text font-size="9" x="-32.93844" y="-30.20737" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_79">
                                F1
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="199.66177" y="67.88102" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_80">
                                Madden NFL 2002
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Aliens_Versus_Predator_2" target="_blank" rel="noreferrer"><text font-size="9" x="-3.1099582" y="338.4217" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_81">
                                Alien vs Predator 2
                                </text></a>
                                <a href="https://animal-crossing.com/es/" target="_blank" rel="noreferrer"><text font-size="9" x="-530.39386" y="-144.80878" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_82">
                                Animal Crossing
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="465.05283" y="-169.98035" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_83">
                                FIFA Football 2002
                                </text></a>
                                <a href="https://tekken.fandom.com/es/wiki/Tekken_4" target="_blank" rel="noreferrer"><text font-size="9" x="178.88538" y="-316.87836" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_84">
                                Tekken 4
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Pro_Evolution_Soccer" target="_blank" rel="noreferrer"><text font-size="9" x="193.7243" y="-115.51612" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_85">
                                Pro Evolution Soccer
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Halo:_Combat_Evolved" target="_blank" rel="noreferrer"><text font-size="10" x="25.002544" y="247.62384" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_86">
                                Halo: Combat Evolved
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="226.81589" y="92.57404" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_87">
                                Madden NFL 2003
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="459.5991" y="-204.61322" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_88">
                                FIFA Football 2003
                                </text></a>
                                <a href="https://www.ea.com/es-es/games/battlefield" target="_blank" rel="noreferrer"><text font-size="9" x="14.917942" y="205.73233" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_89">
                                Battlefield
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Unreal_Tournament_2003" target="_blank" rel="noreferrer"><text font-size="9" x="105.20053" y="357.8285" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_90">
                                Unreal Tournament 2003
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos" target="_blank" rel="noreferrer"><text font-size="9" x="-508.67087" y="386.35065" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_91">
                                Warcraft III: Reign of Chaos
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="480.98615" y="-234.91393" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_92">
                                FIFA Football 2004
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="253.15042" y="118.6307" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_93">
                                Madden NFL 2004
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Defense_of_the_Ancients" target="_blank" rel="noreferrer"><text font-size="10" x="-516.45734" y="442.65524" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_94">
                                Defence of the Ancients
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Call_of_Duty" target="_blank" rel="noreferrer"><text font-size="12" x="-287.84366" y="-377.50443" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_95">
                                Call of Duty
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="271.3726" y="148.40225" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_96">
                                Madden NFL 2005
                                </text></a>
                                <a href="https://store.steampowered.com/app/80/CounterStrike_Condition_Zero/?l=spanish" target="_blank" rel="noreferrer"><text font-size="9" x="-93.98753" y="360.51947" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_97">
                                Counter-Strike: Condition Zero
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Counter-Strike:_Source" target="_blank" rel="noreferrer"><text font-size="9" x="-132.59024" y="463.839" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_98">
                                Counter-Strike: Source
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Doom_3" target="_blank" rel="noreferrer"><text font-size="9" x="-61.01436" y="241.18579" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_99">
                                Doom III
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="472.32938" y="-270.24185" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_100">
                                FIFA 05
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Tekken_5" target="_blank" rel="noreferrer"><text font-size="9" x="185.5246" y="-282.8043" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_101">
                                Tekken 5
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Painkiller_(video_game)" target="_blank" rel="noreferrer"><text font-size="9" x="-29.911587" y="258.1306" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_102">
                                Painkiller
                                </text></a>
                                <a href="https://www.travian.com/cl" target="_blank" rel="noreferrer"><text font-size="9" x="-283.17984" y="127.43022" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_103">
                                Travian
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Unreal_Tournament_2004" target="_blank" rel="noreferrer"><text font-size="9" x="117.028725" y="321.9436" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_104">
                                Unreal Tournament 2004
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Halo_2" target="_blank" rel="noreferrer"><text font-size="9" x="72.80787" y="230.2704" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_105">
                                Halo 2
                                </text></a>
                                <a href="https://worldofwarcraft.blizzard.com/es-es/" target="_blank" rel="noreferrer"><text font-size="10" x="-455.51288" y="338.01712" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_106">
                                World of Warcraft
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="450.45334" y="-303.70917" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_107">
                                FIFA 06
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Call_of_Duty_2" target="_blank" rel="noreferrer"><text font-size="9" x="-262.45273" y="-432.50143" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_108">
                                Call of Duty 2
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="279.44476" y="186.74712" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_109">
                                Madden NFL 06
                                </text></a>
                                <a href="https://www.chess.com/home" target="_blank" rel="noreferrer"><text font-size="9" x="-283.50613" y="-65.523346" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_110">
                                Chess.com
                                </text></a>
                                <a href="https://forza.net/" target="_blank" rel="noreferrer"><text font-size="9" x="-8.878324" y="-70.24073" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_111">
                                Forza
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="437.24533" y="-337.3784" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_112">
                                FIFA 07
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Call_of_Duty_3" target="_blank" rel="noreferrer"><text font-size="9" x="-254.08055" y="-470.9824" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_113">
                                Call of Duty 3
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="269.9381" y="220.95656" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_114">
                                Madden NFL 07
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="417.89374" y="-368.3436" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_115">
                                FIFA 08
                                </text></a>
                                <a href="https://tekken.fandom.com/es/wiki/Tekken_6" target="_blank" rel="noreferrer"><text font-size="9" x="182.56548" y="-245.86739" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_116">
                                Tekken 6
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/BioShock" target="_blank" rel="noreferrer"><text font-size="9" x="-321.17816" y="55.76986" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_117">
                                Bioshock
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Halo_3" target="_blank" rel="noreferrer"><text font-size="9" x="105.77955" y="206.35428" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_118">
                                Halo 3
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/The_Witcher_(serie_de_televisi%C3%B3n)" target="_blank" rel="noreferrer"><text font-size="9" x="-387.3126" y="139.06918" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_119">
                                The Witcher
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Call_of_Duty_4:_Modern_Warfare" target="_blank" rel="noreferrer"><text font-size="9" x="-251.53456" y="-528.052" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_120">
                                Call of Duty 4: Modern Warfare
                                </text></a>
                                <a href="https://www.teamfortress.com/" target="_blank" rel="noreferrer"><text font-size="9" x="-24.498037" y="569.24567" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_121">
                                Team Fortress 2
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="396.3523" y="-398.63513" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_122">
                                FIFA 09
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Call_of_Duty:_World_at_War" target="_blank" rel="noreferrer"><text font-size="9" x="-287.97888" y="-532.95483" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_123">
                                Call of Duty: World at War
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="242.00885" y="286.49286" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_124">
                                Madden NFL 09
                                </text></a>
                                <a href="https://www.farming-simulator.com/" target="_blank" rel="noreferrer"><text font-size="9" x="-227.73402" y="-124.094894" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_125">
                                Farming Simulator
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Street_Fighter_IV" target="_blank" rel="noreferrer"><text font-size="9" x="66.79638" y="-179.33691" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_126">
                                Street Fighter IV
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="370.61868" y="-422.37448" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_127">
                                FIFA 10
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_2" target="_blank" rel="noreferrer"><text font-size="9" x="-280.22977" y="-568.6217" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_128">
                                Call of Duty: Modern Warfare II
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="260.5347" y="315.08737" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_129">
                                Madden NFL 10
                                </text></a>
                                <a href="https://justdancenow.com/" target="_blank" rel="noreferrer"><text font-size="9" x="-275.57755" y="11.30343" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_130">
                                Just Dance
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="337.58237" y="-437.58792" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_131">
                                FIFA 11
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Halo:_Reach" target="_blank" rel="noreferrer"><text font-size="9" x="143.12993" y="185.69392" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_132">
                                Halo: Reach
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="297.04065" y="320.76932" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_133">
                                Madden NFL 11
                                </text></a>
                                <a href="https://www.callofduty.com/es/blackops" target="_blank" rel="noreferrer"><text font-size="9" x="-218.09744" y="-622.89056" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_134">
                                Call of Duty: Black Ops
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/The_King_of_Fighters_XIII" target="_blank" rel="noreferrer"><text font-size="9" x="-231.58585" y="67.98831" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_135">
                                The King of Fighters XIII
                                </text></a>
                                <a href="https://worldoftanks.com/es-ar/" target="_blank" rel="noreferrer"><text font-size="9" x="24.215927" y="169.79323" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_136">
                                World of Tanks
                                </text></a>
                                <a href="www.google.com" target="_blank" rel="noreferrer"><text font-size="16" x="-526.64343" y="305.33893" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_137">
                                StarCraft II
                                </text></a>
                                <a href="https://starcraft2.com/es-es/" target="_blank" rel="noreferrer"><text font-size="30" x="-336.87155" y="597.17474" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_138">
                                League of Legends
                                </text></a>
                                <a href="https://store.steampowered.com/app/105600/Terraria/?l=spanish" target="_blank" rel="noreferrer"><text font-size="9" x="-527.75854" y="-208.01466" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_139">
                                Terraria
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="301.99673" y="-432.97067" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_140">
                                FIFA 12
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="424.82983" y="231.49895" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_141">
                                NBA2K12
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/World_Cricket_Championship_(mobile_game)" target="_blank" rel="noreferrer"><text font-size="9" x="-351.3978" y="-96.66539" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_142">
                                WCC
                                </text></a>
                                <a href="https://www.callofduty.com/es/mw3" target="_blank" rel="noreferrer"><text font-size="9" x="-221.33046" y="-588.3045" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_143">
                                Call of Duty: Modern Warfare III
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="330.30078" y="311.1396" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_144">
                                Madden NFL 12
                                </text></a>
                                <a href="https://www.minecraft.net/es-es" target="_blank" rel="noreferrer"><text font-size="9" x="-573.4397" y="-208.93419" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_145">
                                Minecraft
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Soulcalibur_V" target="_blank" rel="noreferrer"><text font-size="9" x="82.54972" y="-286.7859" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_146">
                                Soulcalibur V
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="275.61948" y="-411.11328" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_147">
                                FIFA 13
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="365.76477" y="311.68033" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_148">
                                Madden NFL 13
                                </text></a>
                                <a href="https://www.awesomenauts.com/" target="_blank" rel="noreferrer"><text font-size="9" x="-226.66411" y="472.42984" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_149">
                                Awesomenauts
                                </text></a>
                                <a href="https://us.diablo3.blizzard.com/es-mx/" target="_blank" rel="noreferrer"><text font-size="9" x="-499.94647" y="119.04243" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_150">
                                Diablo III
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="246.70576" y="-388.41928" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_151">
                                FIFA Ultimate Team
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Halo_4" target="_blank" rel="noreferrer"><text font-size="9" x="99.13177" y="165.0234" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_152">
                                Halo 4
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Street_Fighter_X_Tekken" target="_blank" rel="noreferrer"><text font-size="9" x="84.63279" y="-148.72452" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_153">
                                Street Fighter X Tekken
                                </text></a>
                                <a href="https://www.guildwars2.com/es/" target="_blank" rel="noreferrer"><text font-size="9" x="-332.58163" y="231.76575" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_154">
                                Guild Wars 2
                                </text></a>
                                <a href="https://www.callofduty.com/es/blackops2" target="_blank" rel="noreferrer"><text font-size="9" x="-166.48035" y="-615.6391" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_155">
                                Call of Duty: Black Ops 2
                                </text></a>
                                <a href="https://supercell.com/en/games/clashofclans/" target="_blank" rel="noreferrer"><text font-size="9" x="-252.13646" y="154.27452" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_156">
                                Clash of Clans
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Counter-Strike:_Global_Offensive" target="_blank" rel="noreferrer"><text font-size="12" x="-97.14074" y="501.1217" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_157">
                                Counter-Strike: Global Offensive
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="287.66196" y="-376.74655" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_158">
                                FIFA 14
                                </text></a>
                                <a href="https://www.callofduty.com/es/ghosts" target="_blank" rel="noreferrer"><text font-size="9" x="-123.12838" y="-580.5223" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_159">
                                Call of Duty: Ghosts
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="396.7939" y="332.06018" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_160">
                                Madden NFL 14
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Battlefield_4" target="_blank" rel="noreferrer"><text font-size="9" x="-14.017995" y="176.57791" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_161">
                                Battlefield 4
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/ShootMania_Storm" target="_blank" rel="noreferrer"><text font-size="9" x="-331.5399" y="-57.441067" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_162">
                                Shootmania
                                </text></a>
                                <a href="https://www.ubisoft.com/en-gb/game/splinter-cell/blacklist" target="_blank" rel="noreferrer"><text font-size="9" x="-82.5481" y="-170.28334" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_163">
                                Splinter Cell: Blacklist
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Injustice:_Dioses_entre_nosotros" target="_blank" rel="noreferrer"><text font-size="9" x="-322.8438" y="-192.24846" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_164">
                                Injustice
                                </text></a>
                                <a href="https://www.dota2.com/home" target="_blank" rel="noreferrer"><text font-size="15" x="-444.1478" y="420.06155" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_165">
                                Defense of the Ancients 2
                                </text></a>
                                <text font-size="3" x="-447.4459" y="-40.407497" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_258">
                                INICIO
                                </text>
                                <a href="https://www.callofduty.com/es/advancedwarfare" target="_blank" rel="noreferrer"><text font-size="9" x="-83.02369" y="-578.2547" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_167">
                                Call of Duty: Advanced Warfare
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Destiny_(videojuego)" target="_blank" rel="noreferrer"><text font-size="9" x="152.77966" y="150.90762" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_168">
                                Destiny
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Driveclub" target="_blank" rel="noreferrer"><text font-size="9" x="24.188921" y="-53.612324" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_169">
                                DriveClub
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="290.82394" y="-339.41754" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_170">
                                FIFA 15
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="405.99857" y="367.96997" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_171">
                                Madden NFL 15
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Titanfall" target="_blank" rel="noreferrer"><text font-size="9" x="-340.32828" y="-478.62033" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_172">
                                Titanfall
                                </text></a>
                                <a href="https://www.vainglorygame.com/" target="_blank" rel="noreferrer"><text font-size="9" x="-358.91562" y="439.7717" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_173">
                                Vainglory
                                </text></a>
                                <a href="https://hearthstone.blizzard.com/es-es" target="_blank" rel="noreferrer"><text font-size="9" x="-449.10452" y="298.69437" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_174">
                                Hearthstone
                                </text></a>
                                <a href="https://www.smitegame.com/" target="_blank" rel="noreferrer"><text font-size="9" x="-259.38452" y="-29.179258" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_175">
                                Smite
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="386.0888" y="400.53375" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_176">
                                Madden NFL 16
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="398.52258" y="98.60753" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_177">
                                NBA2K16
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Pro_Evolution_Soccer_2016" target="_blank" rel="noreferrer"><text font-size="9" x="155.9803" y="-118.21287" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_178">
                                Pro Evolution Soccer 2016
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Project_CARS" target="_blank" rel="noreferrer"><text font-size="9" x="-35.43064" y="-95.9612" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_179">
                                Project Cars
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="300.396" y="-302.72015" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_180">
                                FIFA 16
                                </text></a>
                                <a href="https://www.callofduty.com/es/blackops3" target="_blank" rel="noreferrer"><text font-size="9" x="-57.58109" y="-602.4405" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_181">
                                Call of Duty: Black Ops 3
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Halo_5:_Guardians" target="_blank" rel="noreferrer"><text font-size="9" x="93.852905" y="123.93154" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_182">
                                Halo 5: Guardians
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Crisis_infinita" target="_blank" rel="noreferrer"><text font-size="9" x="-216.27902" y="510.5055" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_183">
                                Infinite Crisis
                                </text></a>
                                <a href="https://tekken.fandom.com/es/wiki/Tekken_7" target="_blank" rel="noreferrer"><text font-size="9" x="166.4625" y="-215.03003" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_184">
                                Tekken 7
                                </text></a>
                                <a href="https://www.ubisoft.com/es-mx/game/rainbow-six/siege" target="_blank" rel="noreferrer"><text font-size="9" x="-153.48228" y="314.30402" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_185">
                                Rainbow Six: Siege
                                </text></a>
                                <a href="https://www.rocketleague.com/es-es/" target="_blank" rel="noreferrer"><text font-size="10" x="233.01389" y="3.3499858" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_186">
                                Rocket League
                                </text></a>
                                <a href="https://heroesofthestorm.com/es-es/" target="_blank" rel="noreferrer"><text font-size="11" x="-406.1066" y="343.1065" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_187">
                                Heroes of the Storm
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Titanfall_2" target="_blank" rel="noreferrer"><text font-size="9" x="-370.6924" y="-438.49667" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_188">
                                Titanfall 2
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="353.21133" y="418.24005" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_189">
                                Madden NFL 17
                                </text></a>
                                <a href="https://www.callofduty.com/es/infinitewarfare" target="_blank" rel="noreferrer"><text font-size="9" x="-32.738037" y="-566.77423" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_190">
                                Call of Duty: Infinite Warfare
                                </text></a>
                                <a href="https://m.mobilelegends.com/" target="_blank" rel="noreferrer"><text font-size="9" x="-271.17422" y="415.7052" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_191">
                                Mobile Legends
                                </text></a>
                                <a href="https://pokemongolive.com/es/" target="_blank" rel="noreferrer"><text font-size="9" x="-184.20805" y="-69.59718" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_192">
                                Pokemon Go
                                </text></a>
                                <a href="https://es.stardewvalleywiki.com/Stardew_Valley_Wiki" target="_blank" rel="noreferrer"><text font-size="9" x="-550.9513" y="-175.3268" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_193">
                                Stardew Valley
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Street_Fighter_V" target="_blank" rel="noreferrer"><text font-size="9" x="42.766174" y="-148.47786" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_194">
                                Street Fighter V
                                </text></a>
                                <a href="https://www.arenaofvalor.com/" target="_blank" rel="noreferrer"><text font-size="9" x="-300.52243" y="441.14688" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_195">
                                Arena of Valor
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Pro_Evolution_Soccer_2017" target="_blank" rel="noreferrer"><text font-size="9" x="121.34923" y="-96.792625" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_196">
                                Pro Evolution Soccer 2017
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="320.06024" y="-268.41263" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_197">
                                FIFA 17
                                </text></a>
                                <a href="https://clashroyale.com/es/" target="_blank" rel="noreferrer"><text font-size="10" x="-210.30774" y="160.39642" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_198">
                                Clash Royale
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Overwatch" target="_blank" rel="noreferrer"><text font-size="12" x="-103.39461" y="586.2438" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_199">
                                Overwatch
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Injustice_2" target="_blank" rel="noreferrer"><text font-size="9" x="-287.016" y="-180.94759" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_200">
                                Injustice 2
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="319.89084" y="432.57278" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_201">
                                Madden NFL 18
                                </text></a>
                                <a href="https://www.callofduty.com/es/wwii" target="_blank" rel="noreferrer"><text font-size="9" x="3.6611722" y="-559.19507" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_202">
                                Call of Duty: WWII
                                </text></a>
                                <a href="https://quake.bethesda.net/es/" target="_blank" rel="noreferrer"><text font-size="9" x="127.837" y="410.80075" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_203">
                                Quake Champions
                                </text></a>
                                <a href="https://supercell.com/en/games/brawlstars/" target="_blank" rel="noreferrer"><text font-size="9" x="-158.3338" y="582.20624" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_204">
                                Brawl Stars
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="338.46954" y="-232.23132" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_205">
                                FIFA 18
                                </text></a>
                                <a href="https://pubg.com/es-es" target="_blank" rel="noreferrer"><text font-size="10" x="-460.26065" y="-356.15332" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_206">
                                PlayerUnknown&apos;s Battlegrounds
                                </text></a>
                                <a href="https://pubg.com/es-es" target="_blank" rel="noreferrer"><text font-size="12" x="-546.9982" y="-257.86444" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_207">
                                Fortnite
                                </text></a>
                                <a href="https://pubg.com/es-es" target="_blank" rel="noreferrer"><text font-size="12" x="-512.6178" y="-314.87854" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_208">
                                Fortnite: Battle Royale
                                </text></a>
                                <a href="https://www.callofduty.com/es/blackops4" target="_blank" rel="noreferrer"><text font-size="9" x="30.75384" y="-589.0627" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_209">
                                Call of Duty: Black Ops 4
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Among_Us" target="_blank" rel="noreferrer"><text font-size="9" x="-345.5453" y="-16.401987" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_210">
                                Among Us
                                </text></a>
                                <a href="https://es.bandainamcoent.eu/dragon-ball/dragon-ball-fighterz" target="_blank" rel="noreferrer"><text font-size="9" x="-36.28619" y="-264.48007" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_211">
                                Dragon Ball FighterZ
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="336.78616" y="-194.8184" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_212">
                                FIFA 19
                                </text></a>
                                <a href="https://www.playgwent.com/es" target="_blank" rel="noreferrer"><text font-size="9" x="-391.428" y="174.20953" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_213">
                                GWENT
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="297.0154" y="458.9146" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_214">
                                Madden NFL 19
                                </text></a>
                                <a href="https://www.smashbros.com/es_ES/" target="_blank" rel="noreferrer"><text font-size="9" x="3.3221061" y="66.603874" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_215">
                                Super Smash Bros: Ultimate
                                </text></a>
                                <a href="https://www.paladins.com/" target="_blank" rel="noreferrer"><text font-size="9" x="11.606764" y="549.5705" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_216">
                                Paladins
                                </text></a>
                                <a href="https://www.callofduty.com/es/modernwarfare" target="_blank" rel="noreferrer"><text font-size="9" x="55.967796" y="-544.2994" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_217">
                                Call of Duty: Modern Warfare(2019)
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="282.22214" y="494.3391" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_218">
                                Madden NFL 20
                                </text></a>
                                <a href="https://teamfighttactics.leagueoflegends.com" target="_blank" rel="noreferrer"><text font-size="9" x="-246.54646" y="440.74258" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_219">
                                Teamfight Tactics
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="285.99072" y="36.57015" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_220">
                                NBA2K20
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="306.4497" y="-170.01514" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_221">
                                FIFA 20
                                </text></a>
                                <a href="https://www.ea.com/es-es/games/apex-legends" target="_blank" rel="noreferrer"><text font-size="9" x="-403.38202" y="-403.05826" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_222">
                                Apex Legends
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="271.34073" y="-165.39856" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_223">
                                FIFA 21
                                </text></a>
                                <a href="https://www.callofduty.com/es/blackopscoldwar" target="_blank" rel="noreferrer"><text font-size="9" x="87.727974" y="-561.0224" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_224">
                                Call of Duty: Black Ops Cold War
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="268.1639" y="525.85126" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_225">
                                Madden NFL 21
                                </text></a>
                                <a href="https://www.activision.com/es/games/call-of-duty/call-of-duty-warzone" target="_blank" rel="noreferrer"><text font-size="9" x="53.400826" y="-502.80707" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_226">
                                Call of Duty: Warzone
                                </text></a>
                                <a href="https://www.team17.com/games/golf-with-your-friends/" target="_blank" rel="noreferrer"><text font-size="9" x="-316.12238" y="13.773421" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_227">
                                Golf with Your Friends
                                </text></a>
                                <a href="https://playruneterra.com/es-es/" target="_blank" rel="noreferrer"><text font-size="9" x="-357.19244" y="376.12387" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_228">
                                Legends of Runeterra
                                </text></a>
                                <a href="https://www.fallguys.com/es-ES" target="_blank" rel="noreferrer"><text font-size="9" x="-452.8218" y="-314.2583" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_229">
                                Fall Guys
                                </text></a>
                                <a href="https://playvalorant.com/es-es/" target="_blank" rel="noreferrer"><text font-size="10" x="-53.288883" y="536.2124" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_230">
                                Valorant
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/FIFA_(serie)" target="_blank" rel="noreferrer"><text font-size="9" x="237.40736" y="-154.51881" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_231">
                                FIFA 22
                                </text></a>
                                <a href="https://www.callofduty.com/es/vanguard" target="_blank" rel="noreferrer"><text font-size="9" x="113.683624" y="-523.53613" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_232">
                                Call of Duty: Vanguard
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="231.73099" y="514.63776" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_233">
                                Madden NFL 22
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Halo_Infinite" target="_blank" rel="noreferrer"><text font-size="9" x="82.432915" y="88.456696" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_234">
                                Halo Infinite
                                </text></a>
                                <a href="https://www.callofduty.com/es/modernwarfare2" target="_blank" rel="noreferrer"><text font-size="9" x="119.90862" y="-484.75586" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_235">
                                Call of Duty: Modern Warfare II(2022)
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="213.93225" y="482.00092" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_236">
                                Madden NFL 23
                                </text></a>
                                <a href="https://www.guildwars.com/es" target="_blank" rel="noreferrer"><text font-size="9" x="-370.67993" y="245.55176" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_237">
                                Guild Wars
                                </text></a>
                                <a href="https://diablo2.blizzard.com/es-es/" target="_blank" rel="noreferrer"><text font-size="9" x="-534.69806" y="139.63995" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_238">
                                Diablo II
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="586.60516" y="-50.778385" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_239">
                                NBA 2K1
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="570.9701" y="-19.073826" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_240">
                                NBA 2K2
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="552.5199" y="12.89159" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_241">
                                NBA 2K3
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="529.5156" y="38.375027" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_242">
                                ESPN NBA Basketball
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="515.2176" y="74.248856" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_243">
                                ESPN NBA 2K5
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="520.9068" y="108.098595" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_244">
                                NBA 2K6
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="529.5243" y="146.82968" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_245">
                                NBA 2K7
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="528.19586" y="184.17786" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_246">
                                NBA 2K8
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="516.80835" y="218.15149" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_247">
                                NBA 2K9
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="491.33392" y="242.36133" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_248">
                                NBA 2K10
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="455.9178" y="246.72018" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_249">
                                NBA 2K11
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="400.82785" y="204.18326" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_250">
                                NBA 2K13
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="389.92334" y="171.3096" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_251">
                                NBA 2K14
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="391.11206" y="135.09741" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_252">
                                NBA 2K15
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="392.14978" y="61.737545" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_253">
                                NBA 2K17
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="360.74026" y="40.24957" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_254">
                                NBA 2K18
                                </text></a>
                                <a href="https://www.nba2k.com/" target="_blank" rel="noreferrer"><text font-size="9" x="326.78772" y="36.844673" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_255">
                                NBA 2K19
                                </text></a>
                                <a href="https://en.wikipedia.org/wiki/Madden_NFL" target="_blank" rel="noreferrer"><text font-size="9" x="248.79106" y="251.45712" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_256">
                                Madden NFL 08
                                </text></a>
                                <a href="https://es.wikipedia.org/wiki/Halo_3:_ODST" target="_blank" rel="noreferrer"><text font-size="9" x="139.8589" y="228.82413" fill="#000000"
                                style={{textAnchor: "middle",dominantBaseline: "central"}}
                                font-family="Calibri" className="id_257">
                                Halo 3: ODST
                                </text></a>
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
            
        </div>

    )
}

export default Historico;