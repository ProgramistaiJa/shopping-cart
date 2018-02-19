import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input, {InputLabel} from 'material-ui/Input';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import {addDeliveryData} from "../../actions/deliveryActions";
import store from "../../store";
import {connect} from "react-redux";
import Radio, { RadioGroup } from 'material-ui/Radio';



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        margin: theme.spacing.unit,
    }),
    formControl: {
        margin: theme.spacing.unit,
    },
    inputLabelFocused: {
        color: 'primary',
    },
    inputInkbar: {
        '&:after': {
            backgroundColor: 'primary',
        },
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});


class CustomizedInputs extends React.Component {
    state = {
        name: '',
        address: '',
        city: '',
        zip: '',
        voivodeship: '',
        phone: '',
        payment: '',
        nameoncard: '',
        creditcardnumber: '',
        expiration: '',
        cvv: ''

    };

    handleChange = name => event => {
        console.log(name);
        console.log(event);
        this.setState({[name]: event.target.value});
    };

    handleChangePayment = (event, value) => {
        this.setState({ value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        store.dispatch(addDeliveryData(this.state));
    };


    render() {
        const {classes} = this.props;

        return (
            <div>
                <form
                    onSubmit={event => this.handleSubmit(event)}
                >
                    <Paper className={classes.root} elevation={4}>
                        <Typography variant="headline" component="h2">
                            Adres rozliczeniowy
                        </Typography>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="name"
                            >
                                Imię i Nazwisko
                            </InputLabel>
                            <Input
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                classes={{
                                    inkbar: classes.inputInkbar,
                                }}
                                id="name"
                            />
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="address"
                            >
                                Adres
                            </InputLabel>
                            <Input
                                value={this.state.address}
                                onChange={this.handleChange('address')}
                                classes={{
                                    inkbar: classes.inputInkbar,
                                }}
                                id="address"
                            />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="city"
                            >
                                Miasto
                            </InputLabel>
                            <Input
                                value={this.state.city}
                                onChange={this.handleChange('city')}
                                classes={{
                                    inkbar: classes.inputInkbar,
                                }}
                                id="city"
                            />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="zip"
                            >
                                Kod pocztowy
                            </InputLabel>
                            <Input
                                value={this.state.zip}
                                onChange={this.handleChange('zip')}
                                classes={{
                                    inkbar: classes.inputInkbar,
                                }}
                                id="zip"
                            />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="voivodeship">
                                Województwo
                            </InputLabel>
                            <Select
                                native
                                value={this.state.voivodeship}
                                onChange={this.handleChange('voivodeship')}
                                inputProps={{
                                    id: 'voivodeship',
                                }}
                            >
                                <option value=""/>
                                <option value={'dolnośląskie'}>dolnośląskie</option>
                                <option value={'kujawsko-pomorskie'}>kujawsko-pomorskie</option>
                                <option value={'lubelskie'}>lubelskie</option>
                                <option value={'lubuskie'}>lubuskie</option>
                                <option value={'łódzkie'}>łódzkie</option>
                                <option value={'małopolskie'}>małopolskie</option>
                                <option value={'mazowieckie'}>mazowieckie</option>
                                <option value={'opolskie'}>opolskie</option>
                                <option value={'podkarpackie'}>podkarpackie</option>
                                <option value={'podlaskie'}>podlaskie</option>
                                <option value={'pomorskie'}>pomorskie</option>
                                <option value={'śląskie'}>śląskie</option>
                                <option value={'świętokrzyskie'}>świętokrzyskie</option>
                                <option value={'warmińsko-mazurskie'}>warmińsko-mazurskie</option>
                                <option value={'wielkopolskie'}>wielkopolskie</option>
                                <option value={'zachodniopomorskie'}>zachodniopomorskie</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="phone"
                            >
                                Telefon
                            </InputLabel>
                            <Input
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}
                                classes={{
                                    inkbar: classes.inputInkbar,
                                }}
                                id="phone"
                            />

                        </FormControl>
                    </Paper>

                    <Paper className={classes.root} elevation={4}>
                        <FormControl component="fieldset" required error className={classes.formControl}>
                            <Typography variant="headline" component="h2">
                                Płatność
                            </Typography>
                            <RadioGroup
                                aria-label="gender"
                                name="gender2"
                                className={classes.group}
                                value={this.state.value}
                                onChange={this.handleChangePayment}
                            >
                                <FormControlLabel value="creditcard" control={<Radio color="primary" />} label="Karta kredytowa" />
                                <FormControlLabel value="debitcard" control={<Radio color="primary" />} label="Karta debetowa" />
                                <FormControlLabel value="paypal" control={<Radio color="primary" />} label="PayPal" />

                            </RadioGroup>
                            {/*<FormHelperText>You can display an error</FormHelperText>*/}
                        </FormControl>
                    </Paper>

                    <Paper className={classes.root} elevation={4}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="nameoncard"
                            >
                                Nazwa karty
                            </InputLabel>
                            <Input
                                value={this.state.nameoncard}
                                onChange={this.handleChange('nameoncard')}
                                classes={{
                                    inkbar: classes.inputInkbar,
                                }}
                                id="nameoncard"
                            />

                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="creditcardnumber"
                            >
                                Nr karty
                            </InputLabel>
                            <Input
                                value={this.state.creditcardnumber}
                                onChange={this.handleChange('creditcardnumber')}
                                classes={{
                                    inkbar: classes.inputInkbar,
                                }}
                                id="creditcardnumber"
                            />

                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="expiration"
                            >
                                Data wygaśnięcia
                            </InputLabel>
                            <Input
                                value={this.state.expiration}
                                onChange={this.handleChange('expiration')}
                                classes={{
                                    inkbar: classes.inputInkbar,
                                }}
                                id="expiration"
                            />

                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="cvv"
                            >
                                CVV
                            </InputLabel>
                            <Input
                                value={this.state.cvv}
                                onChange={this.handleChange('cvv')}
                                classes={{
                                    inkbar: classes.inputInkbar,
                                }}
                                id="cvv"
                            />

                        </FormControl>
                    </Paper>

                    <Paper className={classes.root} elevation={4}>
                        <Button
                            type="submit"
                            variant="raised"
                            color="primary"
                            className={classes.button}
                        >
                            Kupuję i Płacę
                        </Button>
                    </Paper>
                </form>

            </div>
        );
    }
}

CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
};
CustomizedInputs = connect()(CustomizedInputs);

export default withStyles(styles)(CustomizedInputs);