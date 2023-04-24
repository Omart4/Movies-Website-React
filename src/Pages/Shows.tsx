import React from "react"
import '../Styles/Shows.css'
import MediaList from "../Components/MediaList";
import { API_KEY as api } from "../App";

const Shows = () => {
  return (
    <div className="shows">
      <MediaList gen={0} iden={0} heading="Popular shows" link={`https://api.themoviedb.org/3/tv/popular?api_key=${api}&language=en-US&page=1`}/>
      <MediaList gen={0} iden={1} heading="Top rated shows" link={`https://api.themoviedb.org/3/tv/top_rated?api_key=${api}&language=en-US&page=1`}/>
    </div>
  )
};

export default Shows;
