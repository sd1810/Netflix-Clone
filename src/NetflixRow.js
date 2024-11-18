import React, { useEffect, useState } from "react";
import axios from "./axios";
import './NetflixRow.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function NetflixRow({title, fetchUrl, isLargeRow})
{
    const [movies, setMovies] = useState([]);
    const [trailerId, setTrailerId] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original/";

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    };

    const handleClick = (movie) => {
        if(trailerId)
        {
            setTrailerId("");
        }
        else{
            movieTrailer(movie?.name || movie?.title || movie?.original_title || movie?.original_name || "").then(url => {
                if(url)
                {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerId(urlParams.get('v'));
                }
                
            }).catch(error => console.log(error));
        }
    }

    useEffect(() =>{

        async function fetchData()
        {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }

        fetchData();

    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map((movie)=> (
                        <img 
                        onClick={() => handleClick(movie)}
                        key={movie.id} 
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                        src= {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}/>
                    ))
                }
            </div>
            {trailerId && <YouTube videoId={trailerId} opts={opts}/>}
        </div>
        
    )
}

export default NetflixRow; 