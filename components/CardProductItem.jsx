import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardProductItem = ({id, title, backgroundImg, projectUrl, detail}) => {
  return (




    
    <div className='  items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group scale-90 hover:scale-100 ease-in duration-300'>
        <Image className='rounded-xl ' src={backgroundImg} alt={title}/>
        <div className='  text-black'>
            <h3 className='text-2xl tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2'>{detail}</p>
            <Link href={projectUrl}>
                <p className='py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer btn btn-outline hover:shadow-none'>Leer más</p>
            </Link>
        </div>
    </div>
  )
}

export default CardProductItem