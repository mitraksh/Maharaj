import {React} from 'react'
import '../Style.css'
import './home.css'
import NYSImage from '../../images/navayogendra_maharaj.jpg'
import Navbar from '../Navbar/Navbar'
function Home(props) {
  return (
    <>
    <Navbar props={'home'}></Navbar>
        <section className='container section section__height'>
            {/* <h2 className='section__title'>Home</h2> */}
            <img src={NYSImage} alt='navayogendra_maharaj' id='home_image_nys'/>
        </section>
    </>
  )
}

export default Home;
