import '../Styles/Home.css'
import {FC,useEffect,useRef,useState} from 'react'
import { PopularMediaProp } from 'myTypes';
import { MediaCard } from '../Components/MediaCard';
import MediaList from '../Components/MediaList'
import { Loading } from '../Components/small components/Loading';
import axios from '../API/axios';
import { API_KEY as api } from '../App';
export const Home = ():JSX.Element => {
    const [trending,setTrending] = useState([]);
    const [isLoading,setIsLoading] = useState(true)


    useEffect(()=>{
        getTrending()
    },[])
    const getTrending = async () => {
        try{
            const TRENDING_URL = `trending/all/week?api_key=0b338d8560dffa32035a5a08fa0a2dcd`
            const response = await axios.get(TRENDING_URL)
            let maxTrending = response.data.results.slice(0,20)
            setTrending(maxTrending)
            setIsLoading(false)
        }catch(err){
            console.log(err)
        }
    }
    
    return(
        <div className="home">
            <MediaList isLoading={isLoading} arr={trending} heading='Trending'/>
        </div>
    )
};

