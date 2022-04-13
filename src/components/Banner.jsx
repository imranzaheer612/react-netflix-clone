import axios from '../axios';
import React from 'react'
import { useEffect, useState } from 'react'
import requests from '../requests';
import "./Banner.css"



function Banner() {

    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const fetchUrl = requests.fetchTrending;
    const [movies, setMovies] = useState([]);

    /**
     * Fetching the movies data on component mount
    */
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();

    }, [fetchUrl])


    /**
     * Selecting a random movie to be set as a banner
    */
    const randomMovie = () => {
        return movies[Math.floor(Math.random() * movies.length)];
    }


    /**
     * Overview string data can be long. So truncating to a limited
     * length.
    */
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }


    if (movies.length) {
        const movie = randomMovie(); 
        const backgroundImage = baseUrl + movie?.backdrop_path
    
        return (
            <header className='banner' style={{ backgroundImage:`url(${backgroundImage})`}}>
                <div className="banner_content">
                    <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>

                    <div className="banner_buttons">
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>My List</button>
                    </div>

                    <h1 className='banner_description'>{truncate(movie.overview, 150)}</h1>
                </div>
                <div className="banner_fadeBottom"></div>
            </header>
      )     
    }
}

export default Banner