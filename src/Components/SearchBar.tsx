import { UserInfo } from "./UserInfo";
import '../Styles/SearchBar.css'
export const SearchBar = () => {
    return(
        <div className="search">
            <input type="text" placeholder="Search for movies,TV shows..." />
            <UserInfo/>
        </div>
    )
};
