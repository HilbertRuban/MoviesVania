export interface ISidebarProps {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
export interface IGenreIcons {
  [prop: string]: string;
}
