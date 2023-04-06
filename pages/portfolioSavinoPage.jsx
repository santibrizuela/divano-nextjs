import Image from 'next/image'
import React from 'react'
import portfolioSavino from '../public/assets/portfolioSavino.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const portfolioSavinoPage = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={portfolioSavino} alt='Green Card & Visa'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Savino SRL</h2>
                <h3>ReactApp-MDBootstrap-ProductCards</h3>
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Proyecto Activo</p>
                <h2>Savino SRL</h2>
                <p>Con más de 35 años de trayectoria en la industria dental decidimos expandirnos 
                    a los rubros que necesiten toda clase de equipamientos ya sean Odontológicos, 
                    Ginecológicos, Podológicos, etc. Nuestros productos tienen garantizada la 
                    solidez de siempre.
                </p>
                <Link target='_blank' href='https://savino-srl.com.ar/'>
                    <button className='btn btn-outline px-8 py-2 mt-4 mr-8 text-emerald-500'>Demo</button>
                </Link>
                <Link target='_blank' href='https://www.whatsapp.com/'>
                    <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Whatsapp</button>
                </Link>
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center folt-bold pb-2'>Herramientas</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> JavaScript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> React
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> FormSumbit
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Responsive
                        </p>
                    </div>
                </div>

            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer font-bold'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default portfolioSavinoPage