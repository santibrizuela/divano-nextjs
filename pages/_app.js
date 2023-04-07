import Footer from '../components/Footer'
import Navbarb from '../components/Navbarb'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Navbarb/>
    <Component {...pageProps} />
    <Footer/>
  </> 
}
