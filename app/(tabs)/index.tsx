import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    Button,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Form, Field, useForm, useFormState } from 'react-final-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Step1 from '@/src/Form/Step1';
import Step2 from '@/src/Form/Step2';
import Step3 from '@/src/Form/Step3';
import * as yup from 'yup';
import { Colors } from '@/constants/Colors';

const initialValues = {
    username: '',
    password: '',
    checkBox: false,
    phone: '',
    email: '',
};
const step2Schema = yup.object().shape({
    username: yup.string().required('Name is required'),
    password: yup.string().required('required'),
    checkBox: yup.boolean().notRequired(),
});

const step1Schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('require'),
});

const HomeScreen = () => {
    const [step, setStep] = useState(1);
    const onSubmit = (values: any) => {
        setStep((prev) => prev + 1);
        console.log(values);
    };
    const nextStep = (values: any, form: any) => {
        const errors = validate(values);
        if (Object.keys(errors).length === 0) {
            setStep((prevStep) => prevStep + 1);
        } else {
            form.batch(() => {
                for (const field in errors) {
                    form.change(field, form.getFieldState(field).value);
                    form.blur(field);
                }
            });
        }
    };
    const handlePrevStep = () => {
        setStep((prev) => prev - 1);
    };

    const validate = (values: any) => {
        let errors = {};
        try {
            switch (step) {
                case 1:
                    step1Schema.validateSync(values, { abortEarly: false });
                    break;
                case 2:
                    step2Schema.validateSync(values, { abortEarly: false });
                    break;
                default:
                    break;
            }
        } catch (err) {
            err.inner.forEach((error) => {
                errors[error.path] = error.message;
            });
        }
        return errors;
    };
    return (
        <SafeAreaView style={styles.container}>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, values, form }) => (
                    <View style={{ padding: 20 }}>
                        {step > 1 && (
                            <TouchableOpacity onPress={handlePrevStep}>
                                <Image
                                    source={require('../../assets/images/left-arrow.png')}
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        )}
                        <View style={{ marginTop: 50 }}>
                            {step === 1 && <Step1 />}
                            {step === 2 && <Step2 />}
                            {step === 3 && <Step3 />}
                        </View>

                        {step < 3 && (
                            <View style={styles.footer}>
                                {step < 2 ? (
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => nextStep(values, form)}
                                    >
                                        <Text style={styles.titleButton}>
                                            Next
                                        </Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        style={styles.button}
                                    >
                                        <Text style={styles.titleButton}>
                                            Submit
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
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
    button: {
        backgroundColor: '#104291',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 100,
    },
    titleButton: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
    },
    error: {
        color: 'red',
    },
    footer: {
        marginTop: 50,
    },
});

export default HomeScreen;
