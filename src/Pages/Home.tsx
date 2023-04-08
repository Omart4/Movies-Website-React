import { ApiProps } from 'myTypes';
import {FC,useEffect,useState} from 'react'
import '../Styles/Home.css'
import { MediaCard } from '../Components/MediaCard';
import { Loading } from '../Components/small components/Loading';
export const Home:FC<ApiProps> = ({api}):JSX.Element => {
    const [list,setList] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`)
        .then(res=>res.json())
        .then(data=>{
            setList(data.results)
            setIsLoading(false)
        })
        .finally(()=>console.log(list))
    },[])
    
    return(
        <div className="home">
            {isLoading && <Loading/>}
            {!isLoading && list.map(media=><MediaCard media={media}/>)}
        </div>
    )
};

