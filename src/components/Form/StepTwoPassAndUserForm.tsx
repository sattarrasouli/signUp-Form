import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { InputError, } from './StepOneBasicInfoForm';



const TextInput = ({ field, form, ...props }: any) => {
    return <input className="border-[1px] rounded border-gray-800 p-2 mt-4" {...field} {...props} />;
};
const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
};

const SignupSchema = Yup.object().shape({
    // password: Yup.string()
    //     .required("Please enter a password")
    //     .min(8, "Password must have at least 8 characters")
    //     .matches(/[0-9]/, getCharacterValidationError("digit"))
    //     .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    //     .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    // confirmPassword: Yup.string()
    //     .required("Please re-type your password")
    //     .oneOf([Yup.ref("password")], "Passwords does not match"),
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
});


function validateUserName(value: any) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 3) {
        error = 'too short!';
    }
    else if (value.length > 50) {
        error = 'too long!';
    }
    return error;
}


async function validatePassword(value: any) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (! /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)) {
        error = 'invalid password, it must contains a lowercase and uppercase and a symbol';
    } else if (value.length < 8) {
        error = 'at least 8 characters!';
    }
    return error;
}

function StepTwoPassAndUserForm({ HandleSteps }: any) {
    return (
        <Form className='flex flex-col w-[400px] h-[400px] bg-white rounded p-3'>
            <Field name="username" component={TextInput} validate={validateUserName} placeholder="User Name" />
            <ErrorMessage name="username" render={(msg: any) => <InputError fieldName={msg} />} />

            <Field name="password" component={TextInput} validate={validatePassword} type="password" />
            <ErrorMessage name="password" render={(msg: any) => <InputError fieldName={msg} />} />
            {/* 
            <Field name="confirmPassword" component={TextInput} validate={validatePasswordConfirm} type="password" />
            <ErrorMessage name="confirmPassword" render={(msg: any) => <InputError fieldName={msg} />} /> */}

            <button type="submit">Submit</button>
            <button onClick={() => HandleSteps("firstStep")}>back</button>
        </Form>
    )
}

export default StepTwoPassAndUserForm