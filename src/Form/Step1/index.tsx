import { Text, View, TextInput, StyleSheet } from 'react-native';
import React, { Component, useEffect } from 'react';
import { Form, Field, useFormState, useForm } from 'react-final-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox';
const Step1 = () => {
    const formState = useFormState();
    const form = useForm();
    return (
        <View>
            <Field name="phone">
                {({ input, meta }) => (
                    <View>
                        <TextInput
                            {...input}
                            placeholder="Phone"
                            style={styles.input}
                        />
                        {meta.touched && meta.error && (
                            <Text style={styles.error}>{meta.error}</Text>
                        )}
                    </View>
                )}
            </Field>
            <Field name="email">
                {({ input, meta }) => (
                    <View>
                        <TextInput
                            {...input}
                            placeholder="Email"
                            style={styles.input}
                        />
                        {meta.touched && meta.error && (
                            <Text style={styles.error}>{meta.error}</Text>
                        )}
                    </View>
                )}
            </Field>

            <Field name="checkBox">
                {({ input, meta }) => (
                    <View>
                        <View style={styles.checkbox}>
                            <BouncyCheckbox
                                size={25}
                                fillColor="#104291"
                                unFillColor="#FFFFFF"
                                // text="Checkbox"
                                iconStyle={{ borderColor: '#104291' }}
                                innerIconStyle={{ borderWidth: 1 }}
                                textStyle={{
                                    fontFamily: 'JosefinSans-Regular',
                                }}
                                onPress={(isChecked: boolean) => {
                                    form.change('checkBox', isChecked);
                                }}
                                isChecked={input.value}
                            />
                            <Text style={{ fontSize: 16 }}>Checkbox</Text>
                        </View>

                        {meta.touched && meta.error && (
                            <Text style={styles.error}>{meta.error}</Text>
                        )}
                    </View>
                )}
            </Field>
        </View>
    );
};

export default Step1;

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
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
});
