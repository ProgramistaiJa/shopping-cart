import React from 'react';
import products from '../../utilities/productsList';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit,
        flexGrow: 1,
    }),
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        minWidth: 275,
        maxWidth: 300
    },
    price: {
        marginTop: theme.spacing.unit,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    },
});


class Products extends React.Component {
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Typography variant="headline" gutterBottom>
                    Produkty
                </Typography>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        {
                            Object.entries(products).map(
                                ([key,value]) =>
                                    <Grid key={key} item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <Paper className={classes.root} elevation={4} >
                                                <AppBar position="static" color="default">
                                                    <Toolbar>
                                                        <Typography variant="title" color="inherit" gutterBottom align="center">
                                                            {value.name}
                                                        </Typography>
                                                    </Toolbar>
                                                </AppBar>
                                                <Typography variant="headline" gutterBottom className={classes.price}>
                                                    {value.price}zł<span> / {value.unit}</span>
                                                </Typography>

                                                <FormControl className={classes.formControl}>
                                                    <InputLabel
                                                        FormControlClasses={{
                                                            focused: classes.inputLabelFocused,
                                                        }}
                                                        htmlFor="custom-color-input"
                                                    >
                                                        Ilość
                                                    </InputLabel>
                                                    <Input
                                                        classes={{
                                                            inkbar: classes.inputInkbar,
                                                        }}
                                                        id="custom-color-input"
                                                    />
                                                </FormControl>

                                                <Button variant="raised" color="primary" className={classes.button} >
                                                    Dodaj
                                                </Button>

                                        </Paper>
                                    </Grid>
                            )
                        }
                    </Grid>
                </div>
            </div>
        )
    }
}

Products.propTypes = {
    classes: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);