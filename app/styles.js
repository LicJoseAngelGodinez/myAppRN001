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
        flex: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
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
    },
    textarea: {
        height: 80,
    },
    // FormButton
    button: {
        backgroundColor: '#FD6592',
        borderRadius: 3,
        height: 40, 
        marginHorizontal: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    // Form Builder
    row: {
        flexDirection: 'row',
    },
    // SignUp
    safeArea: {
        flex: 1,
        backgroundColor: '#3F4EA5',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#3F4EA5',
    },
    screenTitle: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        color: '#FFF',
    },
  });