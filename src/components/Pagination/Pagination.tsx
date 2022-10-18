import { Button, Typography } from "@mui/material";
import { IPaginationProps } from "../../Interface/Pages/Pagination/Pagination";
import useStyles from "./styles";
const Pagination = ({ currentPage, setPage, totalPage }: IPaginationProps) => {
  const { classes } = useStyles();
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  if (totalPage === 0) return null;
  return (
    <div className={classes.container}>
      <Button
        onClick={handlePrev}
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
      >
        Prev
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        onClick={handleNext}
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
