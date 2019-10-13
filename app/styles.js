import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    // Main
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#3F4EA5',
    },
    screenTitle: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        color: '#FFF',
        fontFamily: 'Oxygen',
    },
    // FormTextInput
    inputWrapper: {
        marginBottom: 15,
        flexDirection: 'column',
    },
    textInput: {
        height: 40,
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        fontSize: 18,
        color: '#3F4EA5',
    },
    label: {
        color: '#FFF',
        marginBottom: 5,
        fontFamily: 'Oxygen',
    },
    // FormButton
    button: {
        backgroundColor: '#FD6592',
        borderRadius: 3,
        height: 40,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
  });