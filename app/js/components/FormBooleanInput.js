import React from 'react';
import PropTypes from 'prop-types';
import myStyles from '../../styles';
import {
    View, Switch, Text,
} from 'react-native';

/**
 * A stateless function component which renders a Boolean input (Switch).
 *
 * @param {obj} props
 */
const FormBooleanInput = (props) => {
    const { labelText, ...inputProps } = props;

    return (
        <View style={myStyles.switchWrapper}>
            <Switch {...inputProps} />
            {labelText && <Text style={myStyles.label}>{labelText}</Text>}
        </View>
    );
};

FormBooleanInput.propTypes = {
    labelText: PropTypes.string,
};

FormBooleanInput.defaultProps = {
    labelText: null,
};

export default FormBooleanInput;