import {Outlet} from 'react-router-dom'
import { SearchBar } from '../Components/SearchBar';
export const OutputLayout = () => {
    return(
        <div className="output">
            <SearchBar/>
            <Outlet/>
        </div>
    )
};
