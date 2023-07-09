import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {NavLink,Link} from 'react-router-dom'
import Logo from '../assets/LogoText.png'
import '../Styles/Navbar.css'


export const Navbar = ():JSX.Element => {
    //test
    return(
        <nav>
            <Link className='logolink' to='/'><img src={Logo} alt="Logo" /></Link>
            <div className='links'>
                <NavLink to='/'><FontAwesomeIcon icon={["fas","house"]}/> Home</NavLink>
                <NavLink to='movies'><FontAwesomeIcon icon={["fas","video"]} /> Movies</NavLink>
                <NavLink to='shows'><FontAwesomeIcon icon={["fas","tv"]} /> TV Series</NavLink>
                <NavLink to='discover'><FontAwesomeIcon icon={["fas","calendar"]} /> Discover</NavLink>
            </div>
            <p className='logout'><FontAwesomeIcon style={{marginRight:'1rem'}} icon={["fas","arrow-right-from-bracket"]} />Logout</p>
        </nav>
    )
};
