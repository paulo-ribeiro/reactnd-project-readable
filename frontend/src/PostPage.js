import React, { Component } from 'react'
import {
  Card,
  IconButton,
  Typography,
  CardContent,
  TextField,
  Button,
  withStyles
} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  commentSection: {
    marginTop: 2 * theme.spacing.unit,
  },
  formHeader: {
    borderBottom: `1px solid #000`
  },
  commentForm: {
    marginBottom: 2 * theme.spacing.unit
  }
});

const post = {
  title: 'Featured post',
  date: 'Nov 12',
  description:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
};

class PostPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
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
        <div className={classes.commentSection}>
          <Typography className={classes.formHeader} variant="h6" gutterBottom>
            Comment section
          </Typography>
          <div className={classes.commentForm}>
            <TextField
              required
              id="body"
              name="body"
              label="post a comment..."
              fullWidth
              margin="normal"
              variant="outlined"
              multiline={true}
              rows={3} />
            <Button
              className={classes.sendButton}
              variant="contained"
              color="primary">
              Send
            </Button>
          </div>
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
                <Typography variant="caption" color="textSecondary">
                  {`Posted by user ${post.date}`}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  {post.description}
                </Typography>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PostPage);
