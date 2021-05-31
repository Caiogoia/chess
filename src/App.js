import { Grid } from "@material-ui/core";
import History from "./components/history";
import Table from "./components/table";

import useStyles from "./styleApp";

function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container} spacing={3}>
      <Grid item xs={8}>
        {/* <h1>table</h1> */}
        <Table />
      </Grid>
      <Grid item xs={4}>
        <History />
      </Grid>
    </Grid>
  );
}

export default App;
