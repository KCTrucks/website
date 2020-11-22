import React, { Component } from 'react';
import {
  Hidden,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  titleImage: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      textAlign: 'center',
      paddingLeft: '2em',
      paddingRight: '2em'
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'left',
      paddingLeft: '6rem',
      textAlign: 'left',
      paddingRight: '20%'
    }
  }
});

// Props: title, image
class ImageTitle extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.titleImage} style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url(${this.props.image})`,
          backgroundSize: 'cover',
          backgroundPosition: this.props.backgroundPosition ? this.props.backgroundPosition : 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          backgroundAttachment: 'scroll',
          paddingTop: '1em',
          paddingBottom: '1em',
          ...this.props.style
      }}>
        <Hidden mdDown><Typography variant='h1'>{this.props.title}</Typography></Hidden>
        <Hidden lgUp><Typography variant='h2' component='h1'>{this.props.title}</Typography></Hidden>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageTitle);
