import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  Typography
} from '@material-ui/core';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 10,
    marginRight: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  categoryInput: {
    marginTop: theme.spacing.unit * 2
  },
  sendButton: {
    marginTop: theme.spacing.unit * 3
  },
  formHeader: {
    borderBottom: `1px solid #000`
  }
});

class NewPost extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography className={classes.formHeader} variant="h6" gutterBottom>
          New post
        </Typography>
        <Grid
          container
          direction="column"
          alignItems="left"
          justify="center">
          <TextField
            required
            id="author"
            name="author"
            label="author"
            fullWidth
            margin="normal"
            variant="outlined" />
          <TextField
            required
            id="body"
            name="body"
            label="body"
            fullWidth
            margin="normal"
            variant="outlined"
            multiline={true}
            rows={8} />
          <FormControl className={classes.categoryInput} variant="outlined">
            <InputLabel
              htmlFor="outlined-age-simple">
              Category
              </InputLabel>
            <Select
              value={10}
              input={
                <OutlinedInput
                  labelWidth={64}
                  name="category"
                  id="outlined-age-simple"
                />
              }>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button
            className={classes.sendButton}
            variant="contained"
            color="primary">
            Send
          </Button>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(NewPost);
