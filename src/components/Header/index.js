import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom'
import HomeIcon from 'material-ui-icons/Home';
import ShoppingCart from 'material-ui-icons/ShoppingCart';
import Badge from 'material-ui/Badge';

const styles = theme =>( {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    shoppingCart: {
        margin: theme.spacing.unit * 2,
    }
});

function ButtonAppBar(props) {
    const { classes, products } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        component={Link} to="/"
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        "Warzywniak"
                    </Typography>
                    <IconButton
                        className={classes.shoppingCart}
                        color="inherit"
                        aria-label="Basket"
                        component={Link} to="/productslist"
                    >
                        <Badge badgeContent={products.length} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);