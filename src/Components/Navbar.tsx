import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {NavLink,Link} from 'react-router-dom'
import Logo from '../assets/LogoText.png'
import '../Styles/Navbar.css'
export const Navbar = () => {
    return(
        <nav>
            <Link className='logolink' to='/'><img src={Logo} alt="Logo" /></Link>
            <div className='links'>
                <NavLink to='/'><FontAwesomeIcon icon="fa-solid fa-house"/> Home</NavLink>
                <NavLink to='movies'><FontAwesomeIcon icon="fa-solid fa-video" /> Movies</NavLink>
                <NavLink to='shows'><FontAwesomeIcon icon="fa-solid fa-tv" /> TV Series</NavLink>
                <NavLink to='upcoming'><FontAwesomeIcon icon="fa-regular fa-calendar-days" /> Upcoming</NavLink>
            </div>
            <p><FontAwesomeIcon style={{marginRight:'1rem'}} icon="fa-solid fa-arrow-right-from-bracket" />Logout</p>
        </nav>
    )
};
