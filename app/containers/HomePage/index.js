/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid
} from '@material-ui/core';
import Article from 'components/Article';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = {
    posts: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    fetch('https://thewirecutter.com/wp-json/wp/v2/posts')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          posts: data,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          error: err,
          loading: false,
        });
      });
  }

  render() {
    const { posts, loading, error } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              HomePage
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{padding: 24}}>
          {loading && (
            <Typography variant="h1">Loading Data...</Typography>
          )}
          {error && (
            <Typography variant="h1" color="color">{error}</Typography>
          )}
          {posts && posts.length > 0 && (
            <Grid container spacing={24}>
              {posts.map(post => (
                <Article post={post} key={post.id} />
              ))}
            </Grid>
          )}
        </div>
      </div>
    );
  }
}
