export type ServerMovie = {
    name: string;
    genre: string;
    released: number;
    background_color: string;
    background_image: string;
    preview_image: string;
    poster_image: string;
    id: number;
    description: string;
    rating: number;
    scores_count: number;
    director: string;
    starring: Array<string>;
    run_time: number;
    preview_video_link: string;
    video_link: string;
    is_favorite: boolean;
  }

export type Movie = {
    title: string;
    genre: string;
    date: number;
    backgroundColor: string;
    background: string;
    poster: string;
    posterImage: string;
    id: number;
    description: string;
    rating: number;
    votes: number;
    director: string;
    starring: Array<string>;
    runTime: number;
    preview: string;
    videoLink: string;
    isFavorite: boolean;
};

export type MovieReviews = {
    id: number;
    user: {
      id: number;
      name: string;
    };
    rating: number;
    comment: string;
    date: string;
}