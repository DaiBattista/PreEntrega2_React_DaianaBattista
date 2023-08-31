import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import style from './style.module.css'

export default function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('/data/productos.json')
            const productos = await response.json()

            const productosFiltrados = productos.filter(producto => producto.category == id)

            if (productosFiltrados.length > 0) return setItems(productosFiltrados)

            setItems(productos)
        }

        getProducts()
    }, [id])

    return (
        <Container fluid className='mt-4'>
            <Row>
                {items.map(item => (
                    <Col key={item.id} lg={4} className='mb-4'>
                        <Card>
                            <Card.Img variant='top' src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                {/* <Button variant='dark'>Agregar al carrito</Button> */}
                                <Link to={`/item/${item.id}`}>Agregar al carrito</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

// export const ItemListContainer = () => {
//     return (
//         <><h1>Bienvenidos a la tienda</h1>
//             <div className={style['container']}>
//                 <div class="row row-cols-1 row-cols-md-2 g-4">
//                     <div class="col">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Super Mario Bros.™ Wonder</h5>
//                                 <p class="card-text">Precio: $61.539</p>
//                                 <a href="#" class="btn btn-primary">Agregar al carrito</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..." />
//                             <div class="card-body">
//                                 <h5 class="card-title">Super Mario™ 3D World + Bowsers Fury</h5>
//                                 <p class="card-text">Precio: $61.539</p>
//                                 <a href="#" class="btn btn-primary">Agregar al carrito</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..." />
//                             <div class="card-body">
//                                 <h5 class="card-title">Mario Kart™ 8 Deluxe</h5>
//                                 <p class="card-text">Precio: $34.809</p>
//                                 <a href="#" class="btn btn-primary">Agregar al carrito</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..." />
//                             <div class="card-body">
//                                 <h5 class="card-title">Mario + Rabbids spark of hope</h5>
//                                 <p class="card-text">Precio: $36.999</p>
//                                 <a href="#" class="btn btn-primary">Agregar al carrito</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Super Mario Bros.™ Wonder</h5>
//                                 <p class="card-text">Precio: $61.539</p>
//                                 <a href="#" class="btn btn-primary">Agregar al carrito</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Super Mario Bros.™ Wonder</h5>
//                                 <p class="card-text">Precio: $61.539</p>
//                                 <a href="#" class="btn btn-primary">Agregar al carrito</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Super Mario Bros.™ Wonder</h5>
//                                 <p class="card-text">Precio: $61.539</p>
//                                 <a href="#" class="btn btn-primary">Agregar al carrito</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Super Mario Bros.™ Wonder</h5>
//                                 <p class="card-text">Precio: $61.539</p>
//                                 <a href="#" class="btn btn-primary">Agregar al carrito</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ItemListContainer