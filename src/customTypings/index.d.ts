declare module 'myTypes'{
    interface ApiProps{
        api:string;
    }
    interface genres{
        id:number;
        name:string;
    }
    type mediaType = {
        backdrop_path:string;
        poster_path:string;
        first_air_date:string;
        release_date:string;
        genre_ids:number[];
        genres:genres[]
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
    interface mediaProp{
        media:mediaType;
    }
}
module.exports = {
    ApiProps,
    movie
}