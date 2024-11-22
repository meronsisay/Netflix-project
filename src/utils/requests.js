const API_KEY = import.meta.env.VITE_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `/discover/tv?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc`,
};
export default requests;