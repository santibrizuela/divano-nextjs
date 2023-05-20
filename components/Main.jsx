import Link from 'next/link'
import React from 'react'
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { BsPersonVcard } from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center mask'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-100 font-bold'>¡Nosotros lo tenemos!</p>
                <h1 className='py-4 text-blue-700'>DIVANO</h1>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-gray-300'>
                    <Link target='_blank' href='https://wa.link/quekoy'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineWhatsApp/>
                        </div>
                    </Link>
                    <Link target='_blank' href='https://www.linkedin.com/company/ferreteria-industrial-divano/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineLinkedin/>
                        </div>
                    </Link>
                    <Link href='/#contact'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </Link>
                    <Link target='_blank' href='https://www.instagram.com/ferreteriadivano/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineInstagram/>
                        </div>
                    </Link>    
                </div>
                
                <Link className='mr-2' target='_blank' href='https://wa.link/quekoy'>
                    <div className='text-emerald-700 border-emerald-700 font-bold text-lg cursor-pointer btn btn-outline shadow-none hover:bg-emerald-700'>
                        <p className='p-2 '>Whatsapp</p>
                    </div>
                </Link>
                <Link href='/CatalogoFull'>
                    <div className='btn-outline'>
                        <p className='p-2'>Catalogo</p>
                    </div>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Main