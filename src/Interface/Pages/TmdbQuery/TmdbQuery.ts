export interface ITmdbGetMoviesQueryProps {
  genreIdOrCategoryName?: string | number;
  page?: number;
  searchQuery?: string;
}
export interface ITmdbGetRecommendationsQueryProps {
  movie_id?: string | number;
  list?: string;
}
