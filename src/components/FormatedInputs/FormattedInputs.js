import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import {PhoneNumber} from "./PhoneNumber";
import {NumberFormatCustom} from "./NumberFormatCustom";
import {ZipNumber} from "./ZipNumber";

const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
});

class FormattedInputs extends React.Component {
    state = {
        phonenumber: '',
        numberformat: '',
        zipnumber: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Input
                    value={this.state.phonenumber}
                    inputComponent={PhoneNumber}
                    onChange={this.handleChange('phonenumber')}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'phonenumber',
                    }}
                />
                <Input
                    value={this.state.numberformat}
                    onChange={this.handleChange('numberformat')}
                    inputComponent={NumberFormatCustom}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'numberformat',
                    }}
                />
                <Input
                    value={this.state.zipnumber}
                    inputComponent={ZipNumber}
                    onChange={this.handleChange('zipnumber')}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Zip Number',
                    }}
                />
            </div>
        );
    }
}

FormattedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormattedInputs);
