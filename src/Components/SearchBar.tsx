import { UserInfo } from "./UserInfo";
import '../Styles/SearchBar.css'
import { useEffect, useState } from "react";
import { API_KEY as api } from "../App";
import { SearchComponent } from "./SearchComponent";
export const SearchBar = ():JSX.Element => {
    const [shown,setShown] = useState(false)
    const [query,setQuery] = useState<string>("")
    const [queryResults,setQueryResults] = useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${api}&language=en-US&query=${encodeURIComponent(query)}&page=1`)
        .then(res=>res.json())
        .then(data=>{
            const queryArr = data.results.slice(0,5)
            setQueryResults(queryArr)
            console.log(queryResults)
        })
        document.addEventListener('click',()=>{setShown(false)})
    },[query])
    return(
        <div className="search">
            <div className="search-tools">
                <input value={query} onChange={(e)=>{
                    setQuery(e.target.value)
                    setShown(true)
                    if(e.target.value === ""){
                        setQueryResults([])
                    }
                }} type="text" placeholder="Search for movies,TV shows..." />

                <div className="search-results" onClick={(e)=>{setQueryResults([]);setShown(false)}}>
                    {!shown?"":queryResults.map(s=><SearchComponent search={s}/>)}
                </div>
            </div>
            <UserInfo/>
        </div>
    )
};
