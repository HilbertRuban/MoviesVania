import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    movie: {
      padding: "10px", 
    },
    title: {
        color: theme.palette.text.primary,
        textOverflow:'ellipsis',
        width:'230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: '10',
        textAlign: 'center',
    }
  };
});

export default useStyles;
