import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Inicio from './Inicio/Inicio';
import Historico from './Historico/Historico';

function App() {
	const [paginaActual, setPaginaActual] = React.useState("Inicio");
	var paginaRenderizada = <div></div>;
	if (paginaActual === "Inicio"){
		window.scrollTo(0, 0);
		paginaRenderizada = <Inicio />;
	}else if (paginaActual === "Sobre el Estudio"){
		paginaRenderizada = <div></div>;
	}else if (paginaActual === "Historico"){
		paginaRenderizada = <Historico/>;
	}

	function cambiarPagina(origen: string, destino: string){
		console.log("cambiando pagina");
		console.log(origen);
		console.log(destino);
		setPaginaActual(destino);
		// si se está volviendo al inicio, de debe recargar la página
		if (destino === "Inicio"){
			window.location.reload();
		}
	}
	useEffect(() => {
		// cargar el script de flourish para que se puedan ver los gráficos
		const script = document.createElement('script');
		script.src = 'https://public.flourish.studio/resources/embed.js';
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		}
	}, []);

	return (
		<div className="App">
			{/* navbar */}
			<Navbar pagina={cambiarPagina} paginaActual={paginaActual}/>
			{/* body with title and description */}
			<div className="body">
				{paginaRenderizada}
			</div>
			<div className="container">
				<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
					<div className="col-md-8 d-flex align-items-center">
						<span className="text-muted">Copyright ©2023, Sebastián Sepúlveda. Todos los derechos reservados. Las visualizaciones y el contenido de esta página web son el resultado de mi investigación y esfuerzo personal para optar al grado de Ingeniero Civil Informático de la Universidad Técnica Federico Santa María.</span>
					</div>
					<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
						<li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/sebastian-sepulveda-552963234/" target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg></a></li>
					</ul>
				</footer>
			</div>
		</div>
	);
}

export default App;