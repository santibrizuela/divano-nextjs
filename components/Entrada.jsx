import Link from 'next/link'
import React from 'react'

const Entrada = ({entrada}) => {
    const {name, description, price, image, id} = entrada
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Precio: {price}</p>
      <img src={image} alt={name} />
      <Link href={`/products/${id}`}>
        <a href="">Entrar a {id} detail</a>
      </Link>
    </div>
  )
}

export default Entrada