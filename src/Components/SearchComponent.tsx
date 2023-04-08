import '../Styles/SearchComponent.css'
import {Link} from 'react-router-dom'
import { MediaSearchProp } from "myTypes";
import { FC } from "react";
export const SearchComponent:FC<MediaSearchProp> = ({search}) => {
    const isMovie = (type:string) =>{
        if(type === "movie"){
            return true;
        }else if(type === "tv"){
            return false;
        }
    }
    return(
        <Link to={`${isMovie(search.media_type)?"movies":"shows"}/${search.id}`} className="search-component">
            <img src={`https://image.tmdb.org/t/p/w500${search.poster_path}`} alt={isMovie(search.media_type)?search.title:search.name} />
            <h4>{isMovie(search.media_type)?search.title:search.name}</h4>
        </Link>
    )
};
