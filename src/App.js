import { Grid } from "@material-ui/core";
import History from "./components/history";
import Table from "./components/table";

import useStyles from "./styleApp";

function App() {
  // const classes = useStyles()
  // const [position, setPosition] = useState({ x: 1, y: 1 })
  // const [history] = useState([])

  // const onPositionChanged = pos => {
  //   setPosition(pos)
  //   history.push(pos)
  // }

  // const undo = () => {
  //   if (history.length > 0) {
  //     let pos = history.pop()
  //     setPosition(pos)
  //   }
  // }
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
