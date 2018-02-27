import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from "react-router-dom";


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 300,
    },
    button: {
        margin: theme.spacing.unit,
    },
});


const ShoppingList = (props) => {
    const { classes, products } = props;
    return(
        <Paper className={classes.root}>
            <Typography variant="title" gutterBottom>
                Produkty w koszyku
            </Typography>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Produkt</TableCell>
                        <TableCell numeric>Cena</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {products.map(product =>
                        <TableRow key={product.id}>
                            <TableCell>{product.product}</TableCell>
                            <TableCell numeric>{product.price}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Typography variant="caption" gutterBottom >
                SUMA: {
                        products.map(product=>product.price).reduce((prev,curr)=>prev + curr,0)
                        } zł
            </Typography>
            <Button
                variant="raised"
                color="primary"
                className={classes.button}
                component={Link} to="/deliveryform"
            >
                Dokończ zamówienie
            </Button>
        </Paper>
    );
};
ShoppingList.propTypes = {
    classes: PropTypes.object.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            product:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
};

export default withStyles(styles)(ShoppingList);
