export const createMovie = (movie) => {
  return {
    title: movie.name,
    genre: movie.genre,
    date: movie.released,
    backgroundColor: movie.background_color,
    background: movie.background_image,
    poster: movie.preview_image,
    posterImage: movie.poster_image,
    id: movie.id,
    description: movie.description,
    rating: movie.rating,
    votes: movie.scores_count,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.run_time,
    preview: movie.preview_video_link,
    videoLink: movie.video_link,
    isFavorite: movie.is_favorite,
  };
};

const Rating = {
  AWESOME: 10,
  VERY_GOOD: 8,
  GOOD: 5,
  NORMAL: 3,
};

export const getRatingValue = (rating) => {
  if (rating === Rating.AWESOME) {
    return `Awesome`;
  }
  if (rating < Rating.AWESOME && rating >= Rating.VERY_GOOD) {
    return `Very good`;
  }
  if (rating < Rating.VERY_GOOD && rating >= Rating.GOOD) {
    return `Good`;
  }
  if (rating < Rating.GOOD && rating >= Rating.NORMAL) {
    return `Normal`;
  }
  return `Bad`;
};
