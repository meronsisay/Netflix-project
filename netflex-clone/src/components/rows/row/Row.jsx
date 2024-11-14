import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import "./row.css";
const Row = ({ title, fetchURL, isLarge }) => {
  console.log(fetchURL);
  const [movies, setMovies] = useState([]);
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
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
          {movies?.map((movie, i) => (
            <img
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
      </div>
    </>
  );
};

export default Row;
