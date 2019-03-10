import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import NewPost from './NewPost';
import Nav from './Nav';
import PostPage from './PostPage';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
});

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <div className={classes.layout}>
            <Nav />
            <Route path="/" exact component={Dashboard} />
            <Route path="/new" exact component={NewPost} />
            <Route path="/post" exact component={PostPage} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
