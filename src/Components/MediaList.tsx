import React from "react"
import '../Styles/MediaList.css'
import { Loading } from "./small components/Loading";
import { MediaCard } from "./MediaCard";
import { PopularMediaProp } from "myTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface MediaListProp{
    isLoading:boolean;
    arr:PopularMediaProp[];
    heading:string;
}


const MediaList = ({isLoading,arr,heading}:MediaListProp) => {
    const lista = document.getElementById('lista')

    return (
     <section>
         <div className='media-list-nav'>
             <h2>{heading}</h2>
             <div className="media-list-buttons">
                 <span onClick={(e)=>{lista?.scrollBy(-360,0)}}>
                     <FontAwesomeIcon icon={["fas","chevron-left"]}/>
                 </span>
                 <span onClick={(e)=>{lista?.scrollBy(360,0)}}>
                     <FontAwesomeIcon icon={["fas","chevron-right"]}/>    
                 </span>
             </div>
         </div>
         <div className='media-list' id='lista'>
             {isLoading && <Loading/>}
             {!isLoading && arr.map(media=><MediaCard media={media}/>)}
         </div>
     </section>
    )
};

export default MediaList;
