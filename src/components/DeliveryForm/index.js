import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl} from 'material-ui/Form';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Select from 'material-ui/Select';


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
});


class CustomizedInputs extends React.Component {
    state = {
        name: '',
        address: '',
        city: '',
        zip: '',
        voivodeship: '',
        phone: '',

    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        const {classes} = this.props;

        return (
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
        );
    }
}

CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);