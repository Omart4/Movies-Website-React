import { useLoaderData, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { PopularMediaProp, Movie } from 'myTypes';
import {toHoursAndMinutes} from '../assets/helpers'
import '../Styles/MovieDetails.css'
import { GenreTag } from '../Components/small components/GenreTag';
import { API_KEY as api } from '../App';
import MediaList from '../Components/MediaList';



export const MovieDetails = ():JSX.Element => {
  const { id } = useParams()
  const movie = useLoaderData() as Movie


  useEffect(()=>{
    console.log(movie)
  },[])

  return(
    <div className='movie'>
      <div className='backdrop'>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
      </div>
      <h2>
        {movie.title} &#8226;	{movie.release_date.slice(0,4)} &#8226; {toHoursAndMinutes(movie.runtime)} &#8226; {movie.adult?"Adults only":"General audience"}<br/>
        <span style={{fontSize:"1rem"}}>Genres: </span>{movie.genres.map(g=><GenreTag genre={g.name}/>)}
      </h2>
      <div className='movie-details'>
        <p className='overview'>{movie.overview}</p>
      </div>
      <MediaList gen={0} iden={0} heading={`Similar movies to ${movie.title}`} link={`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${api}&language=en-US&page=1`} />
    </div>
  )
};
export const mediaDetailsLoader = async ({ params }:any) => {
  const { id } = params
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`)
  
  if (!res.ok) {
    throw Error('Could not find that movie.')
  }
  return res.json()
}
