import { UserInfo } from "./UserInfo";
import '../Styles/SearchBar.css'
export const SearchBar = ():JSX.Element => {
    return(
        <div className="search">
            <input type="text" placeholder="Search for movies,TV shows..." />
            <UserInfo/>
        </div>
    )
};
