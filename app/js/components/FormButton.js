import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import myStyles from '../../styles';

/**
 * A stateless function component which renders a button.
 *
 * @param {obj} props
 */
const FormButton = (props) => {
    const { children, onPress } = props;

    return (
        <TouchableOpacity style={myStyles.button} onPress={onPress}>
            <Text style={myStyles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
};

FormButton.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.string.isRequired,
};

FormButton.defaultProps = {
    onPress: f => f,
};

export default FormButton;