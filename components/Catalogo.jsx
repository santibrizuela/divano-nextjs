import React from 'react'
import atornilladoraSeleccion from '../public/assets/atornilladoraSeleccion.png'
import amoladoraSeleccion from '../public/assets/amoladoraSeleccion.png'
import compresorLabor from '../public/assets/compresorLabor.png'
import amoladoraBanco from '../public/assets/amoladoraBancoDogo2.png'
import pistolaPinturaDogo from '../public/assets/pistolaPinturaDogo.png'
import pistolaCalorArgentec from '../public/assets/pistolaCalorArgentec.png'
import CardProductItem from './CardProductItem'
import  Link from 'next/link'



const Catalogo = () => {

    





  return (
    <div id='catalogo' className='w-full text-center'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='py-8 text-xl tracking-widest uppercase text-blue-700'>Catalogo</p>
            <h2 className='py-4'>Máquinas y Herramientas</h2>
            <div className='grid md:grid-cols-3 gap-8'>


                <CardProductItem
                    id={1}
                    title='Atornilladora Campeón'
                    backgroundImg={atornilladoraSeleccion}
                    projectUrl='/pages/products/${id}'
                    detail='Argentec.'
                />

                <CardProductItem
                    title='Amoladora Campeón'
                    backgroundImg={amoladoraSeleccion}
                    projectUrl='/portfolioNetflixPage'
                    detail='Argentec.'
                />

                <CardProductItem
                    title='Compresor 2HP'
                    backgroundImg={compresorLabor}
                    projectUrl='/portfolioSavinoPage'
                    detail='Labor.'
                />

                <CardProductItem
                    title='Amoladora de Banco'
                    backgroundImg={amoladoraBanco}
                    projectUrl='/portfolioFagnaniPage'
                    detail='DOGO.'
                />

                <CardProductItem
                    title='Pistola de Calor'
                    backgroundImg={pistolaCalorArgentec}
                    projectUrl='/portfolioResistenPage'
                    detail='Argentec.'
                />

                <CardProductItem
                    title='Pistola para Pintura'
                    backgroundImg={pistolaPinturaDogo}
                    projectUrl='/portfolioDivanoPage'
                    detail='DOGO.'
                />
            </div>
            
            <Link href='/CatalogoFull'>
                <p 
                    className='p-2 rounded-lg btn text-gray-200 font-bold text-lg cursor-pointer w-fit m-auto shadow-xl hover:scale-105 ease-in duration-300'
                >
                    Ver Mas
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Catalogo