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
    useEffect(()=>{
        
    },[])

    
    return(
        <div className="home">
            <MediaList gen={0} iden={0} heading='Trending' link={`trending/all/week?api_key=${api}`}/>
            <MediaList gen={28} iden={1} heading='Action' link={`trending/all/week?api_key=${api}`}/>
            <MediaList gen={53} iden={2} heading='Thriller' link={`trending/all/week?api_key=${api}`}/>
            <MediaList gen={16} iden={3} heading='Animation' link={`trending/all/week?api_key=${api}`}/>
        </div>
    )
};

