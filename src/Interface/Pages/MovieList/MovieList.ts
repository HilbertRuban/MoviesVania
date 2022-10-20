export interface IMovies {
  adult?: boolean;
  backdrop?: string;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface IMoviesProps {
  movies: {
    page: number;
    results: IMovies[];
    total_pages: number;
    total_results: number;
  };
  numberOfMovies?: number;
  title?: string;
  excludeFirst?: boolean;
}
