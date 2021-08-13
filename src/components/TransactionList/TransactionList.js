import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { GlobalContext } from '../../context/GlobalState';
import { Transaction } from '../Transaction/Transaction'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function InteractiveList(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const transactions = props.transactions
  return (
    <div className={classes.root}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List dense={true}>
                {transactions.map((transaction) => {
                    return <Transaction transaction={transaction} />
                })}
            </List>
          </div>
        </Grid>
    </div>
  );
}
