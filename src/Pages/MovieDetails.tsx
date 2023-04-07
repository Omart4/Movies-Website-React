import { useLoaderData, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { PopularMediaProp, Movie } from 'myTypes';
import {toHoursAndMinutes} from '../assets/helpers'
import '../Styles/MovieDetails.css'
import { GenreTag } from '../Components/small components/GenreTag';
import { YoutubeTrailer } from '../Components/YoutubeTrailer';
const api:string = '0b338d8560dffa32035a5a08fa0a2dcd'


export const MovieDetails = ():JSX.Element => {
  const { id } = useParams()
  const [key,setKey] = useState()
  const movie = useLoaderData() as Movie
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}&language=en-US`)
    .then(res=>res.json())
    .then(data=>{
      let teaserArr:any[] = data.results.filter((d: { type: any; }) => d.type === "Teaser")
      setKey(teaserArr[0].key)
      console.log(key)
    })
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
        {key !== undefined? <iframe src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}></iframe>:"No Trailer😞"}
      </div>
    </div>
  )
};
export const mediaDetailsLoader = async ({ params }:any) => {
  const { id } = params
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`)
  
  if (!res.ok) {
    throw Error('Could not find that career.')
  }
  
  return res.json()
}
// `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}&language=en-US`