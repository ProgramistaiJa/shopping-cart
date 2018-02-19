import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Moment from 'react-moment';
import 'moment/locale/pl';
import moment from 'moment';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit,
    }),
});

class Summary extends React.Component{
    render(){
        const { classes, products, deliveries } = this.props;
        const date = new Date();
        return(
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Typography variant="headline" component="h2">
                        Podsumowanie
                    </Typography>
                    {/*{products.map(product=>())}*/}
                    {deliveries.map(delivery=>console.log(delivery))}
                    <Typography variant="body1" gutterBottom >
                        Twoje zamówienie zostało przyjęte.<br/>
                        Planowana realizacja zamówienia<br/>
                        za trzy dni <br/>
                        <Moment
                            format="DD.MM.YYYY"
                            add={{ days: 3, hours: 0 }}
                        >
                            {date}
                        </Moment>


                    </Typography>
                </Paper>
            </div>
        )
    }
}

Summary.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Summary);
