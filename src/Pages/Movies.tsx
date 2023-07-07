import '../Styles/Movies.css'
import MediaList from '../Components/MediaList'
import { API_KEY as api } from '../App';

export const Movies = ():JSX.Element => {
    return(
        <div className="movies">
            <MediaList gen={0} iden={0} heading='Popular movies' link={`https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`}/>
            <MediaList gen={0} iden={1} heading='Top Rated' link={`https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`}/>
            <MediaList gen={0} iden={2} heading='Now playing' link={`https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`}/>
        </div>
    )
};
