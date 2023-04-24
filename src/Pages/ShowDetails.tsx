import React, { useEffect } from "react"
import { API_KEY as api } from "../App";
import { useLoaderData, useParams } from "react-router-dom";
import { Show } from "myTypes";
import { toHoursAndMinutes } from "../assets/helpers";
import { GenreTag } from "../Components/small components/GenreTag";
import '../Styles/ShowDetails.css'
import MediaList from "../Components/MediaList";

const ShowDetails = () => {
    useEffect(()=>{
        console.log(show)
    },[])
    const {id} = useParams()
    const show = useLoaderData() as Show
    return (
        <div className="show">
            <div className='backdrop'>
                <img src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`} alt={show.name} />
            </div>
            <h2>
                {show.name} &#8226;	{show.first_air_date} &#8226; {show.adult?"Adults only":"General audience"}<br/>
                <span style={{fontSize:"1rem"}}>Genres: </span>{show.genres.map(g=><GenreTag genre={g.name}/>)}
            </h2>
            <div className='movie-details'>
                <p className='overview'>{show.overview}</p>
            </div>
            <MediaList gen={0} iden={0} heading={`Similar shows to ${show.name}`} link={`https://api.themoviedb.org/3/tv/${show.id}/similar?api_key=${api}&language=en-US&page=1`} />
        </div>
    )
};

export const showDetailsLoader = async ({ params }:any) => {
    const { id } = params
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api}&language=en-US`)
    
    if (!res.ok) {
      throw Error('Could not find that show.')
    }
    return res.json()
}

export default ShowDetails;
