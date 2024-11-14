import React from "react";
import requests from "../../../utils/requests";
import Row from "../row/Row";
const RowList = () => {
  return (
    <>
      <Row
        title="Netflex Original"
        fetchURL={requests.fetchOriginal}
        isLarge={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchAction} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedy} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorror} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomance} />
      <Row title="TV Shows" fetchURL={requests.fetchTvShow} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentary} />
    </>
  );
};

export default RowList;
