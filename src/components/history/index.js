import { Box, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
const History = ({ jogadas }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.boxPaper}>
      <Typography>Historico das jogadas</Typography>
      <Box>
        {jogadas.map((jogada) => (
          <h1>{jogada}</h1>
        ))}
      </Box>
    </Paper>
  );
};
export default History;
