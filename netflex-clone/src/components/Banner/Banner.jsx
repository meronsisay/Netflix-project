import axios from "../../utils/axios.js";
import React, { useState, useEffect } from "react";
import requests from "../../utils/requests.js";
import "./Banner.css"
const Banner = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        let request = await axios.get(requests.fetchOriginal);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("Error:" + error);
      }
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "550px",
        }}
      >
        {" "}
        <div className="banner_container">
          <div className="title">
            {movie?.name || movie?.original_name || movie?.title}
          </div>
          <div className="banner_bottons">
            <button>Play</button>
            <button className="list_button">My List</button>
          </div>
          <div className="banner_discription">
            {truncate(movie?.overview, 150)}
          </div>
        </div>
        <div className="bottom_fade"></div>
      </div>
    </>
  );
};

export default Banner;
