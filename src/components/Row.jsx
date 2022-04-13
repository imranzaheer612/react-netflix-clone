import axios from '../axios'
import React from 'react'
import { useEffect, useState } from 'react';
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({tittle, fetchUrl, isLargeRow}) {

  /**
   * baseurl for requesting the images from the api
   * 'w780' & 'originals' are the image resolutions
  */
  // const baseUrl = "https://image.tmdb.org/t/p/original/"
  const baseUrl = "https://image.tmdb.org/t/p/w780/"

  /**
   * @movies will receive the json data on axios request 
  */
  const [movies, setMovies] = useState([]);

  /**
   * @trailerUrl will have the video id of trailer
  */
  const [trailerUrl, setTrailerUrl] = useState("");

  /**
   * Set of props for the youtube video player
  */
  const opts = {
    height : '390', 
    width : '100%',
    playerVar : {
      autoplay : 1, 
    }, 
  }

  /**
   * Fetching movies data from the api on competent mount only
   * */
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request;
    }
    fetchData();
    console.log(movies);

  }, [fetchUrl])


  /**
   * Clicking on a movie thumbnail should play the trailer
  */
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    }
    else {
      movieTrailer(movie?.name || movie?.title ||'').then((url) => {
        console.log('movie-name: ', movie.name, ' ', movie.original_name);
        console.log("movie-url: " , url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log('video-id: ', urlParams.get('v'));
        setTrailerUrl(urlParams.get('v'))
      }).catch((error) => {console.log(error);})
    }
  }


  return (
    <div className='row'>
      <h1>{tittle}</h1>

      <div className='row-posters'>
        {movies.map(movie => (
          <img 
            key={movie.id} 
            onClick={() => handleClick(movie)}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`} 
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} 
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

    </div>
  )
}

export default Row


