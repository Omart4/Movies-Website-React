import React from "react"
import MediaList from "../Components/MediaList";
import { API_KEY as api } from "../App";
import '../Styles/Discover.css'

const Discover = ():JSX.Element => {
  return (
    <div className="upcoming">
      <MediaList gen={0} iden={0} heading="Discover movies" link={`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${api}`}/>
      <MediaList gen={0} iden={1} heading="Discover Series" link={`https://api.themoviedb.org/3/discover/tv?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${api}`}/>
      <MediaList gen={0} iden={2} heading="Upcoming movies" link={`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${api}`}/>
    </div>
  )
};

export default Discover;
