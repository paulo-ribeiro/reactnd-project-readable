import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  inlineLabel: {
    marginRight: theme.spacing.unit
  }
});

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

function Dashboard(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Toolbar variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Link
            key={section}
            color="inherit"
            component="button"
            variant="body2">
            {section}
          </Link>
        ))}
      </Toolbar>
      <Toolbar>
        <InputLabel htmlFor="state" className={classes.inlineLabel}>Sort by:</InputLabel>
        <Select
          value={"voteScore"}
          inputProps={{
            name: 'state',
            id: 'state'
          }}>
          <MenuItem value={"voteScore"}>Vote score</MenuItem>
          <MenuItem value={"date"}>Date</MenuItem>
        </Select>
      </Toolbar>
      <main>
        {/* Sub featured posts */}
        <Grid container spacing={40} className={classes.cardGrid}>
          {featuredPosts.map(post => (
            <Grid item key={post.title} xs={12} md={6}>
              <Card className={classes.card}>
                <div>
                  <div>
                    <IconButton aria-label="Up">
                      <KeyboardArrowUpIcon />
                    </IconButton>
                  </div>
                  <Typography variant="subtitle2" align="center" gutterBottom>
                    51.2k
                    </Typography>
                  <div>
                    <IconButton aria-label="Down">
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </div>
                </div>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`Posted by user ${post.date}`}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.description}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </Fragment>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);