import { Grid } from '@material-ui/core';
import History from './components/history'
import Table from './components/table'


function App() {
  return (
    <Grid container>
        <Grid item xs={8}>
          <Table/>
        </Grid>
        <Grid item xs={4}>
          <History/>
      </Grid>
    </Grid>
  );
}

export default App;
