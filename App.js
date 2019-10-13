import React, { Component } from 'react';
import {
  StyleSheet, KeyboardAvoidingView, Text, Keyboard, Alert,
} from 'react-native';

import myStyles from './app/styles';
import entities from 'html-entities';

import FormTextInput from './app/js/components/FormTextInput';
import FormButton from './app/js/components/FormButton';

const htmlDecode = new entities.AllHtmlEntities();

export default class App extends Component {
    constructor(props) {
        super(props);

        // define the initial state, so we can use it later
        // when we'll need to reset the form
        this.initialState = { hourlyRate: '', hoursPerWeek: '' };

        this.state = this.initialState;
    }

    /**
     * Grab user's input data and do the math.
     */
    handleSubmit = () => {
        // using Javascript object destructuring to
        // get user's input data from the state.
        const { hourlyRate, hoursPerWeek } = this.state;

        // hide the keyboard
        // NOTE: the keyboard seems to show up after being dismissed
        //       when using the Alert react native component.
        //       Not a big deal at the moment (this is fine 😜).
        Keyboard.dismiss();

        // make sure we have some numeric values to work with
        if (!parseFloat(hourlyRate) || !parseFloat(hoursPerWeek)) {
            Alert.alert('Error de datos', htmlDecode.decode('Por favor ingrese s&oacute;lo n&uacute;mero positivos.'));
            return;
        }

        // do the Math
        const annualIncome = Math.abs(parseFloat(hourlyRate) * parseFloat(hoursPerWeek) * 52);

        // show results
        Alert.alert(
            'Lo que ingresaste y resultado',
            `$/hora: ${hourlyRate},\n Horas/semana: ${hoursPerWeek}, \n Ingreso Anual: $${annualIncome}`,
        );
    };

    /**
     * Reset the form and hide the keyboard.
     */
    resetForm = () => {
        Keyboard.dismiss();
        this.setState(this.initialState);
    };

    render() {
        const { hourlyRate, hoursPerWeek } = this.state;

        return (
          <KeyboardAvoidingView behavior="padding" style={myStyles.container}>
              <Text style={myStyles.screenTitle}>Calculador de Salario</Text>
              <FormTextInput
                  placeholder="$0"
                  keyboardType="numeric"
                  returnKeyType="done"
                  onChangeText={text => this.setState({ hourlyRate: text })}
                  value={hourlyRate}
                  labelText="Tarifa por hora"
              />
              <FormTextInput
                  placeholder="0"
                  keyboardType="numeric"
                  returnKeyType="done"
                  onChangeText={text => this.setState({ hoursPerWeek: text })}
                  value={hoursPerWeek}
              />
              <FormButton onPress={this.handleSubmit}>Calcular</FormButton>
              <FormButton onPress={this.resetForm}>Reset</FormButton>
          </KeyboardAvoidingView>
      );
    }
}
