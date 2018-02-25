import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';


export function PhoneNumber(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={[ /[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

PhoneNumber.propTypes = {
    inputRef: PropTypes.func.isRequired,
};