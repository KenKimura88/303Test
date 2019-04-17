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

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Paper,
  Grid
} from '@material-ui/core';

/* eslint-disable react/prefer-stateless-function */
export default class Article extends React.PureComponent {

  render() {
    const { post } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper style={{padding: 8}}>
          {post && (
            <Fragment>
              <Typography variant="h6">{post.title.rendered}</Typography>
              <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </Fragment>
          )}
          {!post && (
            <Typography>There's error with this data</Typography>
          )}
        </Paper>
      </Grid>
    );
  }
};

Article.propTypes = {
  post: PropTypes.object,
};

Article.defaultProps = {
  post: null
};