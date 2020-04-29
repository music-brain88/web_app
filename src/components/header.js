import React, {Component} from "react";
import { Grid } from '@material-ui/core';

import styles from '../assets/main.css';

export default class HeaderComponent extends Component {
    render() {
      return (
        <div className={styles.sample}>
        {styles.sample}
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
        HEADER
        </Grid>
        </div>
      )
    }
}

