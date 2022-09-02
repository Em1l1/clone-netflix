const API_KEY = 'aae6530568639a0bf2eeee224a299170';
const API_BASE = 'https://api.themoviedb.org/3';
 
/*
- originals netflix
- recomendados (trending)
- top rated
- anime
- comedia
- terror
- romance
- documentales
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originals de Netflix',
        items: await basicFetch(`/discover/tv?with_network=123&language=pt-EN&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para ti',
        items: await basicFetch(`/trending/all/week?language=pt-EN&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Alto',
        items: await basicFetch(`/movie/top_rated?language=pt-EN&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Action',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-EN&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comey',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-EN&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-EN&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-EN&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentary',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-EN&api_key=${API_KEY}`)
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId) {
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
          case 'tv':
            info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
          default:
            info = null;
          break;
      }
    }

    return info;
  }
} 
