function Navbar(props: any){
    const pageName = process.env.REACT_APP_PAGE_NAME;

    function cambiarPaginaNavbar(origen: string, destino: string){
        console.log("cambiando pagina");
        console.log(origen);
        console.log(destino);
        props.pagina(origen, destino);
    }

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/eSportsLore">{pageName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="btn btn-link nav-link active" onClick={()=>{cambiarPaginaNavbar(props.paginaActual,"Inicio")}}>Inicio</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-link nav-link active" onClick={()=>{cambiarPaginaNavbar(props.paginaActual,"Historico")}}>Historia de los eSports</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );    
}

export default Navbar;