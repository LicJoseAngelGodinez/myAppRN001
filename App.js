import React, { Component } from 'react';
import {
    KeyboardAvoidingView, Text, Alert,
} from 'react-native';

import myStyles from './app/styles';

import FormBuilder from './app/js/components/FormBuilder';

export default class App extends Component {
    getFormFields = () => {
        const inputProps = {
            placeholder: '0',
            autoCapitalize: 'none',
            autoCorrect: false,
            keyboardType: 'numeric',
            returnKeyType: 'done',
        };

        const formFields = [
            [
                {
                    name: 'hourlyRate',
                    label: 'Hourly Rate',
                    type: 'text',
                    inputProps,
                },
                {
                    name: 'hoursPerWeek',
                    label: 'Hours / Week',
                    type: 'text',
                    inputProps,
                },
            ],
            [
                {
                    name: 'daysPerWeek',
                    label: 'Days / Week',
                    type: 'text',
                    inputProps,
                },
            ],
        ];

        return formFields;
    };

    /**
     * Grab user's input data and do the math.
     */
    handleSubmit = (state) => {
        // using Javascript object destructuring to
        // get user's input data from the state.
        const { hourlyRate, hoursPerWeek, daysPerWeek } = state;

        if ( !parseFloat(hourlyRate) || !parseFloat(hoursPerWeek) || !parseFloat(daysPerWeek) ) {
            Alert.alert('Input error', 'Please input some positive numeric values.');
            return;
        }

        const weeksPerYear = 52;
        const hoursPerDay = Math.ceil(parseFloat(hoursPerWeek) / parseFloat(daysPerWeek));
        const weeklyIncome = Math.abs(
            parseFloat(hourlyRate) * hoursPerDay * parseFloat(daysPerWeek),
        );
        const annualIncome = Math.abs(
            parseFloat(hourlyRate) * parseFloat(hoursPerWeek) * weeksPerYear,
        );

        // show results
        Alert.alert(
            'Results',
            `Weekly Income: $${weeklyIncome}, \n Annual Income: $${annualIncome}`,
        );
    };

    render() {
        return (
            <KeyboardAvoidingView style={myStyles.container}>
                <Text style={myStyles.screenTitle}>Salary Calculator</Text>
                <FormBuilder
                    formFieldsRows={this.getFormFields()}
                    handleSubmit={this.handleSubmit}
                    submitBtnTitle="Calculate"
                />
            </KeyboardAvoidingView>
        );
    }
}
