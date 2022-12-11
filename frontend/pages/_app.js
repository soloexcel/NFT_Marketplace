import '../styles/globals.css'

// internal imports
import { NavBar, Footer } from '../components/componentsIndex';


const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);


export default MyApp
