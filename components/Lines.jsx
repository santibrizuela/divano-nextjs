import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsWhatsapp} from 'react-icons/bs'

const Lines = () => {
  return (
    <section id='lines' className='bg-blue-500 text-gray-200'>
        <div className="lines__container flex justify-around text-center">

            <article className='line'>
                <BsWhatsapp className='line__icon' />
                <div className="line__head">
                    
                    <h5>TELEFONO</h5>
                    <h4>11 5165-5081</h4>
                </div>          
            </article>

            <article className='line'>
                <AiOutlineClockCircle className='line__icon' />
                <div className="line__head">
                    
                
                    <h5>HORARIO</h5>
                    <h4>Lunes a Viernes:</h4>
                    <h4>8hs a 12:30 / 16:30 a 20hs</h4>
                    <h4>Sábados:</h4>
                    <h4>8hs a 12:30</h4>
                </div>
            </article>

            <article className='line'>
                <GoLocation className='line__icon' />
                <div className="line__head">
                
                    
                    <h5>UBICACION</h5>
                    <h4>CIUADAD MADERO,</h4>
                    <h4>Cnel. Thorne 831</h4>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Lines