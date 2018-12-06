exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
          {
              title: 'Schizopolis', 
              director: 'Steven Soderbergh', 
              year: 1976, 
              rating: 4, 
              poster: 'https://m.media-amazon.com/images/M/MV5BMTc4NDQ5NjQ2MF5BMl5BanBnXkFtZTcwNzU3NDAwMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg'
          },
          {
              title: 'Nashville', 
              director: 'Robert Altman', 
              year: 1976, 
              rating: 5, 
              poster: 'https://cdn.shopify.com/s/files/1/1057/4964/products/nashville-vintage-movie-poster-original-1-sheet-27x41-7347.jpg?v=1535847579'
          },
          {
              title: 'Idiocracy', 
              director: 'Mike Judge', 
              year: 2006, 
              rating: 5, 
              poster: 'https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
          },
          {
              title: 'Love Actually', 
              director: 'Richard Curtis', 
              year: 2003, 
              rating: 1, 
              poster: 'https://www.movieposter.com/posters/archive/main/177/MPW-88655'
          },
          {
              title: 'Holy Mountain', 
              director: 'Alejandro Jodorowsky', 
              year: 1973, 
              rating: 4, 
              poster: 'https://images-na.ssl-images-amazon.com/images/I/812wJ8msjmL._SY550_.jpg'
          }
      ]);
    });
};
