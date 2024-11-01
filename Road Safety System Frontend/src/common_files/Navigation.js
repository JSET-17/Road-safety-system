import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <div classNameName='container'>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body"
                data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">RSS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link"
                                    aria-current="page"
                                    to="/home">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicles">Vehiculos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Registrar</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/login">Cerrar Sesión</Link>
                            </li>
                        </ul>                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
