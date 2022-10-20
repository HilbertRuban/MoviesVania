export type IAlanProps =  {
  command: string;
  mode: string;
  genres: IGenres[];
  genreOrCategory: string;
  query: string;
}

export type IGenres =  {
  id:number;
  name: string;
}
