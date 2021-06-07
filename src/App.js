import { Grid } from "@material-ui/core";
import History from "./components/history";
import Table from "./components/table";
import { useState } from "react";

import useStyles from "./styleApp";

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const handleClick = (letter, number) => {
    setCoordinates([...coordinates, [letter, number]]);
  };
  console.log(coordinates);
  const classes = useStyles();
  return (
    <Grid container className={classes.container} spacing={3}>
      <Grid item xs={4}>
        {/* <h1>table</h1> */}
        <Table handleClick={handleClick} />
      </Grid>
      <Grid item xs={4}>
        <History coordinates={coordinates} />
      </Grid>
    </Grid>
  );
}

export default App;
