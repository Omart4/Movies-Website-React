import React, { useEffect, useState } from "react"
import '../Styles/MediaList.css'
import { Loading } from "./small components/Loading";
import { MediaCard } from "./MediaCard";
import { PopularMediaProp } from "myTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../API/axios";
interface MediaListProp{
    heading:string;
    link:string;
    iden:number;
    gen:number;
}


const MediaList = ({heading,link,iden,gen}:MediaListProp) => {
    const lista = document.getElementById(`lista${iden}`)
    const [items,setItems] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        getMedia(link)
    },[])

    const getMedia = async (url:string) => {
        try{
            const response = await axios.get(url)
            let maxTrending = response.data.results
            setItems(maxTrending)
            setIsLoading(false)
            console.log(maxTrending)
        }catch(err){
            console.log(err)
        }
    }

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
         <div className='media-list' id={`lista${iden}`}>
             {isLoading && <Loading/>}
             {
                !isLoading && 
                gen === 0? items.map(media=><MediaCard media={media}/>):items.filter((i:{genre_ids:number[]})=> i.genre_ids.includes(gen)).map(media=><MediaCard media={media}/>)
            }
         </div>
     </section>
    )
};

export default MediaList;
