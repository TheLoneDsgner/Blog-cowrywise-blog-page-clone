import logo from '../assets/cowrywise-logo.png'
import search from '../assets/icons/search_line.svg'
import menu from '../assets/icons/menu_fill.svg'
import BtnPrimary from './BtnPrimary';
import { Link } from 'react-router-dom';
import BtnSecondary from './BtnSecondary';


const Navbar = () => {

    return ( 
        <>
        <nav className="navbar">
            <div className='logo-nd-links-wrapper'>
                <img className='logo-img' src={logo} alt="logo" />
                <div className="links">
                    <Link to="/savings">Savings</Link>
                    <Link to="/guides">Guides</Link>
                    <Link to="/investing">Investing</Link>
                    <Link to="/testimonials">Testimonials</Link>
                    <Link to="/blog"></Link>
                </div>
            </div>

            <div className="button-wrapper">
                <BtnPrimary
                text={"Sign Up For Free"} />

                <BtnSecondary iconOnly={ <img className='icon-svg' src={search} alt='search icon'/>}/>

                <div className='menu-wrapper'>
                    <img src={menu} alt="menu icon" />
                </div>
            </div>


            
        </nav>
        </>
     );
}
 
export default Navbar;