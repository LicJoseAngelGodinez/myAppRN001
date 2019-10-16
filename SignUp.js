import React, { Component } from 'react';
import {
    KeyboardAvoidingView, SafeAreaView, Text, Alert,
} from 'react-native';

import myStyles from './app/styles';

import FormBuilder from './app/js/components/FormBuilder';

export default class App extends Component {
    getFormFields = () => {

        const formFields = [
            [
                {
                    name: 'firstName',
                    label: 'First Name',
                    type: 'text',
                    inputProps: {
                        autoCorrect: false,
                    },
                },
                {
                    name: 'lastName',
                    label: 'Last Name',
                    type: 'text',
                    inputProps: {
                        autoCorrect: false,
                    },
                },
            ],
            [
                {
                    name: 'email',
                    label: 'Email',
                    type: 'text',
                    inputProps: {
                        autoCorrect: false,
                        autoCapitalize: 'none',
                        keyboardType: 'email-address',
                    },
                },
            ],
            [
                {
                    name: 'skills',
                    label: 'Skills',
                    type: 'text',
                    inputProps: {
                        autoCorrect: false,
                        multiline: true,
                        numberOfLines: 4,
                        blurOnSubmit: false,
                    },
                },
            ],
            [
                {
                    name: 'password',
                    label: 'Password',
                    type: 'text',
                    inputProps: {
                        secureTextEntry: true,
                    },
                },
            ],
        ];

        return formFields;
    };

    /**
     * Grab user's input data and do the math.
     */
    handleSubmit = (state) => {

        const {
            firstName, lastName, email, skills, password,
        } = state;

        Alert.alert(
            'Your info',
            `First Name: ${firstName}\n Last Name: ${lastName}\n Email: ${email}\n Skills: ${skills} \n Password: ${password}`,
        );
    };

    render() {
        return (
            <SafeAreaView style={myStyles.safeArea}>
                <KeyboardAvoidingView style={myStyles.container}>
                    <Text style={myStyles.screenTitle}>Sign Up</Text>
                    <FormBuilder
                        formFieldsRows={this.getFormFields()}
                        handleSubmit={this.handleSubmit}
                        submitBtnTitle="Sign Up"
                    />
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
