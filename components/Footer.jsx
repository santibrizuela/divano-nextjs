import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsPersonVcard } from 'react-icons/bs'

const Footer = () => {
  return (
    
    <div id='footer' className='w-full text-center bg-black/80 text-gray-300'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <Link href='/'>
                <h2 className='icolink ease-in duration-300 text-md py-4'>DIVANO</h2>
            </Link>
            
            
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-gray-300'>
                <Link target='_blank' href='https://www.whatsapp.com/quekoy'>
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
            
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>

                
              <div className="">
                <h5 className="uppercase my-1">Navegación</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="/#home" className="icolink">Inicio</a>
                  </li>
                  <li>
                    <a href="/#about" className="icolink">Acerca de</a>
                  </li>
                  <li>
                    <a href="/#catalogo" className="icolink">Catalogo</a>
                  </li>
                  <li>
                    <a href="/#contact" className="icolink">Contacto</a>
                  </li>
                </ul>
              </div>
              
              <div className="">
                <h5 className="uppercase my-1">Redes</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="https://www.instagram.com/ferreteriadivano/"  target="_blank" className="icolink">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100079284678037"  target="_blank" className="icolink">Facebook</a>
                  </li>
                  <li>
                    <a href="https://wa.link/quekoy"  target="_blank" className="icolink">Whatsapp</a>
                  </li>
                  <li>
                    
                    <a href="https://www.linkedin.com/company/ferreteria-industrial-divano/" className="icolink" target="_blank">Linkedin</a>
                  </li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h5 className="uppercase my-1">Location</h5>
                <p>Cnel. Thorne 831, Ciudad Madero, Buenos Aires, Argentina.</p>
                <p>Lunes a viernes: 8hs a 12:30 / 16:30 a 20hs.</p>
                <p>Sabados: 8 a 12:30hs.</p>
              </div>
             
                

            </div>


            
            
        </div>

        <p className='bg-black mt-2 py-4 text-sm'>Ferretería Divano © Todos los derechos reservados | Diseño y Desarrollo Web Brisider.</p>
    </div>
  )
}

export default Footer