import React from 'react';
import PropTypes from 'prop-types';
import myStyles from '../../styles';
import { TouchableOpacity, Text, } from 'react-native';

/**
 * A stateless function component which renders a button.
 *
 * @param {obj} props
 */
const FormButton = (props) => {
    const { children, onPress, disabled } = props;

    return (
        <TouchableOpacity
            style={[myStyles.button, disabled && myStyles.buttonDisabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={myStyles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
};

FormButton.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

FormButton.defaultProps = {
    onPress: f => f,
    disabled: false,
};

export default FormButton;
