import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to='/'>Tienda Nintendo</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to='category/nuevo'>Nuevos Juegos</Link>
                        <Link to='category/clasico'>Juegos Clasicos</Link>
                        <Link to='category/lanzamiento'>Proximos lanzamientos</Link>
                        <Link to=''><CartWidget /></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar