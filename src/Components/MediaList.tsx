import React, { useEffect, useState } from "react"
import '../Styles/MediaList.css'
import { Loading } from "./small components/Loading";
import { MediaCard } from "./MediaCard";
import { PopularMediaProp } from "myTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../API/axios";

// The different props passed down like:
// -Heading and link to make the component more dynamic and reusable,
// -iden for the scroll function of the list explained below,
// -and gen to get the genre id of the media 

interface MediaListProp{
    heading:string;
    link:string;
    iden:number;
    gen:number;
}


const MediaList = ({heading,link,iden,gen}:MediaListProp) => {
    //Gives a unique id to each list if i press a scroll button without it it would only scroll the first list
    const lista = document.getElementById(`media-list-scroll${iden}`)
    const [items,setItems] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [leftScroll,setLeftScroll] = useState(false)
    const [rightScroll,setRightScroll] = useState(true)

    useEffect(()=>{
        getMedia(link)
    },[link])

    // a function to get the data based on the link passed down from the prop
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

    const toggleScroll = (direction:string) => {
        let scrollLeft:number = lista?.scrollLeft as number;
        let scrollWidth = lista?.scrollWidth as number
        let right:number = scrollWidth  - scrollLeft;
        if(direction === 'left'){
            if(lista?.scrollLeft as number >= 0 && lista?.scrollLeft as number <= 360){
                setLeftScroll(false)
            }else{setLeftScroll(true)}
        }
        else if(direction === 'right'){
            if(lista?.scrollLeft as number >= 0){
                setLeftScroll(true)
            }
            if(right == 1077){
                console.log("No space")
            }

        }
    }

    return (
     <section>
         <div className='media-list-nav'>
             <h2>{heading}</h2>
             <div className="media-list-buttons">
                 <span className={`${leftScroll?"":"noclick"}`} onClick={(e)=>{
                    lista?.scrollBy(-360,0); 
                    toggleScroll('left')
                }}>
                     <FontAwesomeIcon icon={["fas","chevron-left"]}/>
                 </span>
                 <span onClick={(e)=>{
                    lista?.scrollBy(360,0)
                    toggleScroll('right')
                }}>
                     <FontAwesomeIcon icon={["fas","chevron-right"]}/>    
                 </span>
             </div>
         </div>
         <div className='media-list' id={`media-list-scroll${iden}`}>
             {isLoading && <Loading/>}
             {
                //if gen equals 0 it will return all genres of media 
                //if it's an id it will return medias that have that genre id
                !isLoading && 
                gen === 0? items.map(media=><MediaCard media={media}/>):items.filter((i:{genre_ids:number[]})=> i.genre_ids.includes(gen)).map(media=><MediaCard media={media}/>)
            }
         </div>
     </section>
    )
};

export default MediaList;
