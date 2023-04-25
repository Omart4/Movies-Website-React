import React, { useEffect } from "react"
import { useParams } from "react-router-dom";

const ShowSeason = () => {
    const {id} = useParams()
    useEffect(()=>{
        console.log(id)
    },[])
    return (
        <div>
            <h1>{id}</h1>     
        </div>
    )
};

export default ShowSeason;
