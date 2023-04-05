import React from 'react'
import portfolioZetaGroup from '../public/assets/atornilladoraSeleccion.png'
import portfolioNetflix from '../public/assets/amoladoraSeleccion.png'
import portfolioSavino from '../public/assets/compresorLabor.png'
import portfolioFagnani from '../public/assets/amoladoraBancoDogo2.png'
import portfolioDivano from '../public/assets/pistolaPinturaDogo.png'
import portfolioResisten from '../public/assets/pistolaCalorArgentec.png'
import portfolioFood from '../public/assets/mascaraSoldarFoxtter.png'
import portfolioMadero from '../public/assets/taladroAcc.png'
import CardProductItem from './CardProductItem'

const Catalogo = () => {

    





  return (
    <div id='catalogo' className='w-full text-center'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='py-8 text-xl tracking-widest uppercase text-blue-700'>Catalogo</p>
            <h2 className='py-4'>Proyectos y Plantillas</h2>
            <div className='grid md:grid-cols-3 gap-8'>


           

                <CardProductItem
                    title='Zeta Group'
                    backgroundImg={portfolioZetaGroup}
                    projectUrl='/portfolioZetaGroupPage'
                    detail='Asistencia al Inmigrante.'
                />

                <CardProductItem
                    title='Netflix Clon'
                    backgroundImg={portfolioNetflix}
                    projectUrl='/portfolioNetflixPage'
                    detail='UI + Usuarios.'
                />

                <CardProductItem
                    title='Savino SRL'
                    backgroundImg={portfolioSavino}
                    projectUrl='/portfolioSavinoPage'
                    detail='Equipos Médicos.'
                />

                <CardProductItem
                    title='Casa Fagnani'
                    backgroundImg={portfolioFagnani}
                    projectUrl='/portfolioFagnaniPage'
                    detail='Servicios Fúnebres.'
                />

                <CardProductItem
                    title='RE-SIS-TEN.COM'
                    backgroundImg={portfolioResisten}
                    projectUrl='/portfolioResistenPage'
                    detail='Resistencias de Avanzada.'
                />

                <CardProductItem
                    title='Ferretería Industrial Divano'
                    backgroundImg={portfolioDivano}
                    projectUrl='/portfolioDivanoPage'
                    detail='¡Nosotros lo tenemos!.'
                />

                <CardProductItem
                    title='Food App'
                    backgroundImg={portfolioFood}
                    projectUrl='/portfolioFoodPage'
                    detail='App-Responsive-React-CSS.'
                />

                <CardProductItem
                    title='Madero Imprime'
                    backgroundImg={portfolioMadero}
                    projectUrl='/portfolioMaderoPage'
                    detail='Diseño e Impresión 3D.'
                />

            </div>
        </div>
    </div>
  )
}

export default Catalogo