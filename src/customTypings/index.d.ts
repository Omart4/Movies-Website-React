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
    interface network{
        id:number;
        logo_path:string;
        name:string;
    }
    interface season{
        air_date:string;
        episode_count:number;
        id:number;
        name:string;
        overview:string;
        poster_path:string;
        season_number:number;
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
    type Show = {
        name:string;
        id:number;
        adult:boolean;
        backdrop_path:string;
        poster_path:string;
        first_air_date:string;
        last_air_date:string;
        genres:genres[]
        homepage:string;
        number_of_episodes:number;
        number_of_seasons:number;
        overview:string;
        networks:network[]
        companies:companies[]
        popularity:number;
        vote_average:number;
        vote_count:number;
        seasons:season[]
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
    interface SeasonProp{
        season:season;
        showId:number;
    }
}
module.exports = {
   
}