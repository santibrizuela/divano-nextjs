import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import aboutImg from '../public/assets/logo-PhotoRoom.png'
import ProductList from '../pages/product'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen py-20 md:p-2 flex items-center text-center'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>Acerca de</p>
                <h2 className='py-4'><span className='text-blue-700 uppercase'>Divano</span></h2>
                <p className='py-2 text-gray-600'>¡Nosotros lo tenemos!</p>
                <p className='py-2 text-gray-600'>
                ¡Nosotros lo tenemos! Llevamos medio siglo ofreciendo asesoría a nuestros clientes, 
                abasteciendo industrias y empresas nacionales con flujos contínuos de producción. 
                Podemos decir que nuestra trayectoria respalda que seamos ubicados como proveedores 
                líderes y garantiza el excelente servicio de venta y post-venta que ofrecemos en 
                Ferretería Divano. 
                </p>

                



                <Link href='/#contact'>
                    <p 
                        className='p-2 rounded-lg btn text-gray-200 font-bold text-lg cursor-pointer w-fit m-auto shadow-xl hover:scale-105 ease-in duration-300'
                    >
                        Contactanos
                    </p>
                </Link>
                
                
                
            </div>
            <div className='w-full h-auto scale-90 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-100 ease-in duration-300'>
                <Image className='rounded-xl' src={aboutImg} alt="Ferretería Divano"></Image>
            </div>
        </div>
    </div>
  )
}

export default About