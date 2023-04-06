import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children, title, description}) => {
    Layout.defaultProps = {
        title: 'LayoutDivano',
        description: 'descripcion',
    }

  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Head>
        <main>{children}</main>
    </div>
  )
}

export default Layout