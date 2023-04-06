import { useLoaderData, useParams } from 'react-router-dom'
const api:string = '0b338d8560dffa32035a5a08fa0a2dcd'
import { PopularMediaProp, Movie } from 'myTypes';

import '../Styles/MovieDetails.css'
export const MovieDetails = ():JSX.Element => {
    const { id } = useParams()
    const movie = useLoaderData() as Movie
    return(
      <div className='movie-details'>
        <div className='backdrop'>
          <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
        </div>
        <h1>{movie.title}</h1>
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