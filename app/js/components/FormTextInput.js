import React from 'react';
import PropTypes from 'prop-types';
import {
    View, TextInput, Text,
} from 'react-native';

import myStyles from '../../styles';

/**
 * A component which renders a TextInput with a label above it.
 * Note: This component can easily be written as a stateless function
 *      since it only includes the `render()` function and nothing else
 *      (see FormButton component as an example).
 */
class FormTextInput extends React.Component {
    render() {
        const { labelText, multiline, ...inputProps } = this.props;

        return (
            <View style={myStyles.inputWrapper}>
                {labelText && <Text style={myStyles.label}>{labelText}</Text>}
                <TextInput 
                style={[myStyles.textInput, multiline && myStyles.textarea]} 
                blurOnSubmit 
                {...inputProps} 
                multiline={multiline}
                />
            </View>
        );
    }
}

FormTextInput.propTypes = {
    labelText: PropTypes.string,
    multiline: PropTypes.bool,
};

FormTextInput.defaultProps = {
    labelText: null,
    multiline: false,
};

export default FormTextInput;
