import React from 'react'
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#home">Tienda Nintendo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to='/nuevo'>Nuevos Juegos</Link>
                        <Link to='/vintage'>Juegos vintage</Link>
                        <Link to='/lanzamientos'>Proximos lanzamientos</Link>
                        <Link to=''><CartWidget/></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar