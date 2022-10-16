export type genreOrCategoryType = string | number;

export interface InitialStateProps {
  genreIdOrCategoryName?: genreOrCategoryType;
  page?: number;
  searchQuery?: genreOrCategoryType;
}
