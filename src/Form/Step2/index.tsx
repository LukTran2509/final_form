import { Text, View, TextInput, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Form, Field, useFormState, useForm } from 'react-final-form';
const Step2 = () => {
    return (
        <View>
            <Field name="username">
                {({ input, meta }) => (
                    <View>
                        <TextInput
                            {...input}
                            placeholder="username"
                            style={styles.input}
                        />
                        {meta.touched && meta.error && (
                            <Text style={styles.error}>{meta.error}</Text>
                        )}
                    </View>
                )}
            </Field>
            <Field name="password">
                {({ input, meta }) => (
                    <View>
                        <TextInput
                            {...input}
                            placeholder="password"
                            style={styles.input}
                            secureTextEntry
                        />
                        {meta.touched && meta.error && (
                            <Text style={styles.error}>{meta.error}</Text>
                        )}
                    </View>
                )}
            </Field>
        </View>
    );
};

export default Step2;

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
        borderWidth: 1,
        padding: 15,
        marginTop: 15,
        borderRadius: 10,
        borderColor: 'gray',
    },
    error: {
        color: 'red',
        marginTop: 5,
    },
});
