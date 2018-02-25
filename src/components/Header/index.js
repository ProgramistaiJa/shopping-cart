import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom'
import MenuIcon from 'material-ui-icons/Menu';
import ShoppingCart from 'material-ui-icons/ShoppingCart';
import Badge from 'material-ui/Badge';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuList from './MenuList';

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
    },
    list: {
        width: 250,
    },
    listFull: {
        width: 'auto',
    },
});

class ButtonAppBar extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const {classes, products} = this.props;

        const fullList = (
            <div className={classes.listFull}>
                <List><MenuList/></List>
                <Divider />
                {/*<List>{otherMailFolderListItems}</List>*/}
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            // component={Link} to="/"
                            onClick={this.toggleDrawer('left', true)}
                        >
                            <MenuIcon/>
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
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);