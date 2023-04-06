import { mediaProp } from 'myTypes';
import { useLoaderData, useParams } from 'react-router-dom'
const api:string = '0b338d8560dffa32035a5a08fa0a2dcd'

export const MovieDetails = ():JSX.Element => {
    const { id } = useParams()
    const media:any = useLoaderData()
    return(
      <h2 onClick={()=>console.log(media)}>{media.title}</h2>
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