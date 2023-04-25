import { SeasonProp, season } from "myTypes";
import React from "react"
import { Link } from "react-router-dom";
import '../Styles/SeasonCard.css'

const SeasonCard = ({season,showId}:SeasonProp) => {
  return (
    <Link className="season-card" to={`/shows/${showId}/season`}>
        <img src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`} alt={season.name} />
        <p className="season-details">
            <h4>{season.name}</h4>
        </p>
    </Link>
  )
};

export default SeasonCard;
