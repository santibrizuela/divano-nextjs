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
                    
                    <h5>TELEFONOS</h5>
                    <h4>4602-0696</h4>
                    <h4>11-5939-3931</h4>
                </div>          
            </article>

            <article className='line'>
                <AiOutlineClockCircle className='line__icon' />
                <div className="line__head">
                    
                
                    <h5>HORARIO</h5>
                    <h4>Lunes a Viernes:</h4>
                    <h4>9-12hs/13:15-16hs</h4>
                </div>
            </article>

            <article className='line'>
                <GoLocation className='line__icon' />
                <div className="line__head">
                
                    
                    <h5>UBICACION</h5>
                    <h4>CABA,</h4>
                    <h4>Fonrouge 3870</h4>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Lines