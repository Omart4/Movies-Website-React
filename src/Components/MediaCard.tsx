import { mediaProp } from 'myTypes';
import {Link} from 'react-router-dom'
import '../Styles/MediaCard.css'
import {FC} from 'react'
export const MediaCard = ({media}:mediaProp):JSX.Element => {
    return(
        <Link to={`${media.title?'movies':'shows'}/${media.id}`} className="card">
            <span className="card-rating">⭐{media.vote_average}</span>
            <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt="" />
        </Link>
    )
};
