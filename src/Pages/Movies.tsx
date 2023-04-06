import '../Styles/Movies.css'
import {Outlet} from 'react-router-dom'
export const Movies = ():JSX.Element => {
    return(
        <div className="movies">
            <h1>Movies</h1>
            <Outlet/>
        </div>
    )
};
