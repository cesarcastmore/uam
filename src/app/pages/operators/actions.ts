export const updateResponse = (response: any) => {
    let movies: any[] = response.response.results;
    movies.map(item => {
      item.poster_path = 'https://image.tmdb.org/t/p/w500/' + item.poster_path;
      return item;
    })

    return movies;
  }