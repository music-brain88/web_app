import React, {Component} from "react";
import { css } from 'emotion';
import { Grid } from '@material-ui/core';

const myStyle = css({
  color: 'red',
  fontSize: '20pt'
});

export default class HeaderComponent extends Component {
    render() {
      return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={myStyle}
        >
        HEADER
        </Grid>
      )
    }
}

