import React from 'react'
import atornilladoraSeleccion from '../public/assets/atornilladoraSeleccion.png'
import amoladoraSeleccion from '../public/assets/amoladoraSeleccion.png'
import compresorLabor from '../public/assets/compresorLabor.png'
import amoladoraBanco from '../public/assets/amoladoraBancoDogo2.png'
import pistolaPinturaDogo from '../public/assets/pistolaPinturaDogo.png'
import pistolaCalorArgentec from '../public/assets/pistolaCalorArgentec.png'
import mascaraSoldarFoxtter from '../public/assets/mascaraSoldarFoxtter.png'
import taladroAcc from '../public/assets/taladroAcc.png'
import rotopercutorArgentec from '../public/assets/rotopercutorArgentec.png'
import amoladoraABateriaCajaHamilton from '../public/assets/amoladoraABateriaCajaHamilton.png'
import discosTyrolit from '../public/assets/discosTyrolit.png'
import llavesFrancesas from '../public/assets/llavesFrancesas.png'
import martillosV from '../public/assets/martillosV.png'
import picoDeLoroBahco from '../public/assets/picoDeLoroBahco.png'
import atornilladorAngulo from '../public/assets/atornilladorAngulo.png'
import lijadora from '../public/assets/lijadora.png'
import soldadoraPegaso2 from '../public/assets/soldadoraPegaso2.png'
import sierraCaladora from '../public/assets/sierraCaladora.png'
import taladroBateriaArgentec5 from '../public/assets/taladroBateriaArgentec5.png'
import amoladoraBancoDogo2 from '../public/assets/amoladoraBancoDogo2.png'
import remachadoraDualBremen2 from '../public/assets/remachadoraDualBremen2.png'
import discoCorte from '../public/assets/discoCorte.png'
import discoDesbaste2 from '../public/assets/discoDesbaste2.png'
import llaveImpactoBremen from '../public/assets/llaveImpactoBremen.png'
import pistolaCalorStanley from '../public/assets/pistolaCalorStanley.png'
import taladroArgentec2 from '../public/assets/taladroArgentec2.png'
import amoladora from '../public/assets/amoladora.png'
import cinta from '../public/assets/10mGiant.png'
import CardProductItem from '../components/CardProductItem'

const CatalogoFull = () => {
  return (
    <div id='catalogoFull' className='w-full text-center'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='py-8 text-xl tracking-widest uppercase text-blue-700'>Catalogo Completo</p>
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

                <CardProductItem
                    title='Máscara para Soldar'
                    backgroundImg={mascaraSoldarFoxtter}
                    projectUrl='/portfolioFoodPage'
                    detail='Foxtter.'
                />

                <CardProductItem
                    title='Taladro Percutor'
                    backgroundImg={taladroAcc}
                    projectUrl='/portfolioMaderoPage'
                    detail='Black & Decker.'
                />

                <CardProductItem
                    title='Rotopercutor'
                    backgroundImg={rotopercutorArgentec}
                    projectUrl='/portfolioMaderoPage'
                    detail='Argentec.'
                />

                <CardProductItem
                    title='Amoladora'
                    backgroundImg={amoladoraABateriaCajaHamilton}
                    projectUrl='/portfolioMaderoPage'
                    detail='Inalámbrica.'
                />

                <CardProductItem
                    title='Disco de Desbaste'
                    backgroundImg={discosTyrolit}
                    projectUrl='/portfolioMaderoPage'
                    detail='Tyrolit.'
                />

                <CardProductItem
                    title='Llave Francesa'
                    backgroundImg={llavesFrancesas}
                    projectUrl='/portfolioMaderoPage'
                    detail='Bahco.'
                />

                <CardProductItem
                    title='Martillo'
                    backgroundImg={martillosV}
                    projectUrl='/portfolioMaderoPage'
                    detail='Martillo Bolita.'
                />

                <CardProductItem
                    title='Pico De Loro'
                    backgroundImg={picoDeLoroBahco}
                    projectUrl='/portfolioMaderoPage'
                    detail='Bahco.'
                />

                <CardProductItem
                    title='Atornillador Inalámbrico'
                    backgroundImg={atornilladorAngulo}
                    projectUrl='/atornilladorAngulo'
                    detail='Pegaso.'
                />

                <CardProductItem
                    title='Lijadora Orbital'
                    backgroundImg={lijadora}
                    projectUrl='/portfolioMaderoPage'
                    detail='Labor.'
                />

                <CardProductItem
                    title='Soldadora Inverter'
                    backgroundImg={soldadoraPegaso2}
                    projectUrl='/portfolioMaderoPage'
                    detail='Pegaso.'
                />

                <CardProductItem
                    title='Sierra Caladora'
                    backgroundImg={sierraCaladora}
                    projectUrl='/portfolioMaderoPage'
                    detail='Black & Decker.'
                />

                <CardProductItem
                    title='Taladro Inalámbrico'
                    backgroundImg={taladroBateriaArgentec5}
                    projectUrl='/portfolioMaderoPage'
                    detail='Inalámbrica.'
                />

                <CardProductItem
                    title='Remachadora Dual'
                    backgroundImg={remachadoraDualBremen2}
                    projectUrl='/portfolioMaderoPage'
                    detail='Bremen.'
                />

                <CardProductItem
                    title='Discos de Corte'
                    backgroundImg={discoCorte}
                    projectUrl='/portfolioMaderoPage'
                    detail='DOGO.'
                />

                <CardProductItem
                    title='Llave de Impacto'
                    backgroundImg={discoCorte}
                    projectUrl='/llaveImpactoBremen'
                    detail='Bremen.'
                />

                <CardProductItem
                    title='Pistola de Calor'
                    backgroundImg={pistolaCalorStanley}
                    projectUrl='/portfolioMaderoPage'
                    detail='Stanley.'
                />

                <CardProductItem
                    title='Cinta Métrica 10m'
                    backgroundImg={cinta}
                    projectUrl='/portfolioMaderoPage'
                    detail='Giant.'
                />

            </div>
        </div>
    </div>
  )
}

export default CatalogoFull