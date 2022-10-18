export interface IPaginationProps {
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
}
