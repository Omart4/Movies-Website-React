declare module 'myTypes'{
    interface ApiProps{
        api:string;
    }
    interface genres{
        id:number;
        name:string;
    }
    interface companies{
        id:number;
        logo_path:string;
        name:string;
        origin_country:string;
    }
    type PopularMediaType = {
        backdrop_path:string;
        poster_path:string;
        first_air_date:string;
        release_date:string;
        genre_ids:number[];
        genres:genres[];
        id:number;
        name:string;
        title:string;
        overview:string;
        original_language:string;
        original_title:string;
        original_name:string;
        adult:boolean;
        vote_average:number;
        vote_count:number;
        popularity:number;
    }
    type Movie = {
        title:string;
        id:number;
        adult:boolean;
        backdrop_path:string;
        poster_path:string;
        release_date:string;
        genres:genres[];
        budget:number;
        original_language:string;
        overview:string;
        popularity:number;
        vote_average:number;
        vote_count:number;
        production_companies:companies[];
        runtime:number;
    }
    type MediaSearch = {
        title:string;
        name:string;
        id:number;
        adult:boolean;
        backdrop_path:string;
        poster_path:string;
        media_type:string;
        vote_average:number;
    }
    interface PopularMediaProp{
        media:PopularMediaType;
    }
    interface MediaSearchProp{
        search:MediaSearch;
    }
}
module.exports = {
   
}