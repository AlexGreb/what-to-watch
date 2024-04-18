export const createMovie = (movie) => {
  return {
    title: movie.name,
    genre: movie.genre,
    date: movie.released,
    backgroundColor: movie.backgroundColor,
    background: movie.backgroundImage,
    poster: movie.previewImage,
    posterImage: movie.posterImage,
    id: movie.id,
    description: movie.description,
    rating: movie.rating,
    votes: movie.scoresCount,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.runTime,
    preview: movie.previewVideoLink,
    videoLink: movie.videoLink,
    isFavorite: movie.isFavorite,
  };
};

export const createReview = (review) => {
  return {
    id: review.id,
    name: review.user.name,
    userId: review.user.id,
    rating: review.rating,
    date: review.date,
    comment: review.comment
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
