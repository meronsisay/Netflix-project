import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const Row = ({ title, fetchURL, isLarge }) => {
  // console.log(fetchURL);
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    (async () => {
      try {
        let request = await axios.get(fetchURL);
        // console.log(request)
        setMovies(request.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [fetchURL]);
  const clickHandler = (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailer(urlParams.get("v"));
        }
      );
    }
  };
  const base_url = "https://image.tmdb.org/t/p/original";
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
          {movies?.map((movie, i) => (
            <img
              onClick={() => clickHandler(movie)}
              key={i}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title}
              className={`row_poster {
 ${isLarge ? "row_posterLarge" : ""}`}
            />
          ))}
        </div>
        <div style={{ padding: "40px" }}>
          {trailer && <YouTube videoId={trailer} opts={opts} />}
        </div>
      </div>
    </>
  );
};

export default Row;
