const API_KEY = 'aae6530568639a0bf2eeee224a299170';
const API_BASE = 'https://api.themoviedb.org/3/';
 
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

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'originals de Netflix',
        items: []
      },
      {
        slug: 'trending',
        title: 'Recomendados para ti',
        items: [],
      },
      {
        slug: 'toprated',
        title: Alto,
        items: [],
      },
      {
        slug: '',
        title: '',
        items: ,
      },
      {
        slug: '',
        title: '',
        items: ,
      },
      {
        slug: '',
        title: '',
        items: ,
      },
    ]
  }
} 
