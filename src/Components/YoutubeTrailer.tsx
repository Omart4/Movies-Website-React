export const YoutubeTrailer = ({key}:any) => {
    return(
        <iframe src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}></iframe>
    )
};
