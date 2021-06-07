import { Box, Paper, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
const History = ({ coordinates, player, ref }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.boxPaper}>
      <Typography>Historico das jogadas</Typography>
      <Box>
        <Grid container className={classes.player}>
          <Grid item xs={6}>
            <Typography>White</Typography>
            {coordinates.map((coord, index) => {
              if (index % 2 === 0) {
                return <h1>{coord}</h1>;
              }
            })}
          </Grid>
          <Grid item xs={6}>
            <Typography>Black</Typography>
            {coordinates.map((coord, index) => {
              if (index % 2 === 1) {
                return <h1>{coord}</h1>;
              }
            })}
          </Grid>
        </Grid>
        {/*  {coordinates.map((coord) => (
          <h1>{coord}</h1>
        ))} */}
      </Box>
    </Paper>
  );
};
export default History;
