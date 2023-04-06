import {Outlet} from 'react-router-dom'
import { SearchBar } from '../Components/SearchBar';
export const OutputLayout = ():JSX.Element => {
    return(
        <div className="output">
            <SearchBar/>
            <Outlet/>
        </div>
    )
};
