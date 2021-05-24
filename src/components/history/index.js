import { Box, Paper, Typography } from "@material-ui/core";
import useStyles from './styles'
const History = () => {
    const classes = useStyles()

  return (
    <Paper className={classes.boxPaper}>
      <Typography>Historico das jogadas</Typography>
    </Paper>
  );
};
export default History;
