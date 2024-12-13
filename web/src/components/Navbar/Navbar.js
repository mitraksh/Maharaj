import React from 'react'
import '../Style.css'
import Logo from  '../../images/nyslogo.png'
function Navbar({props}) {
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-menu").style.bottom = "0";
  } else {
    document.getElementById("nav-menu").style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

const toggleDarkMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
  return (
    <>
    <header className='nav_header' id='header'>
            <nav className='nav container'>
                <a className='nav__logo' onClick={toggleDarkMode}>NYS Media</a>

                <div className='nav__menu' id='nav-menu'>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            {props === 'home' ? <a href='/' className='nav__link active-link'><i className='bx bx-home-alt nav__icon'></i>
                                <span className='nav__name'>Home</span>
                            </a> : <a href='/' className='nav__link'><i className='bx bx-home-alt nav__icon'></i>
                                <span className='nav__name'>Home</span>
                            </a>}
                                
                        </li>
                        
                        <li className='nav__item'>
                            {props === 'lectures' ?  <a href='lectures' className='nav__link active-link'>
                                <i className='bx bx-play-circle nav__icon'></i>
                                <span className='nav__name'>Media</span>
                            </a> :  <a href='lectures' className='nav__link'>
                                <i className='bx bx-play-circle nav__icon'></i>
                                <span className='nav__name'>Media</span>
                            </a>}
                           
                        </li>

                        <li className='nav__item'>
                            {props === 'events' ? <a href='events' className='nav__link active-link'>
                                <i class='bx bx-news nav__icon'></i>
                                <span className='nav__name'>News</span>
                            </a> : <a href='events' className='nav__link'>
                                <i class='bx bx-news nav__icon'></i>
                                <span className='nav__name'>News</span>
                            </a>}
                            
                        </li>

                        <li className='nav__item'>
                            {props === 'blogs' ? <a href='blogs' className='nav__link active-link'>
                                <i className='bx bxl-blogger nav__icon'></i>
                                <span className='nav__name'>Blogs</span>
                            </a> : <a href='blogs' className='nav__link'>
                                <i className='bx bxl-blogger nav__icon'></i>
                                <span className='nav__name'>Blogs</span>
                            </a>}
                            
                        </li>

                        <li className='nav__item'>
                            {props === 'supportus' ? <a href='supportus' className='nav__link active-link'>
                                <i className='bx bx-donate-heart nav__icon'></i>
                                <span className='nav__name'>Support Us</span>
                            </a> : <a href='supportus' className='nav__link'>
                                <i className='bx bx-donate-heart nav__icon'></i>
                                <span className='nav__name'>Support Us</span>
                            </a>}
                            
                        </li>
                    </ul>
                </div>
                <img src={Logo} alt='navayogendraswami_logo' className='nav__img'/>
            </nav>
        </header>
    </>
  )
}

export default Navbar