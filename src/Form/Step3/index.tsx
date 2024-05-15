import { Text, View, TextInput, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Form, Field, useFormState, useForm } from 'react-final-form';
const Step3 = () => {
    const formState = useFormState();
    const form = useForm();
    return (
        <View>
            <Text>UserName: {JSON.stringify(formState.values.username)}</Text>
            <Text>Password: {JSON.stringify(formState.values.password)}</Text>
            <Text>CheckBox: {JSON.stringify(formState.values.checkBox)}</Text>
            <Text>Phone: {JSON.stringify(formState.values.phone)}</Text>
            <Text>Email: {JSON.stringify(formState.values.email)}</Text>
        </View>
    );
};

export default Step3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    field: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
    },
});
