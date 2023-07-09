import { ErrorMessage, Field, Form } from 'formik';
import Image from 'next/image';
import { useState } from 'react';
import arrowLeft from '../../assets/arrowleft.svg';
import { InputError, TextInput, } from './StepOneBasicInfoForm';


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


function StepTwoPassAndUserForm({ HandleSteps }: any) {
    const [password, setPassword] = useState<number>()


    async function validatePassword(value: any) {
        setPassword(value)
        let error;
        if (!value) {
            error = 'Required';
        } else if (! /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)) {
            error = 'it must contains a lowercase,a uppercase and a symbol';
        } else if (value.length < 8) {
            error = 'at least 8 characters!';
        }
        return error;
    }

    function validatePasswordConfirm(value: any) {
        let error;
        if (value !== password) {
            error = 'password are not equal';
        }
        return error;
    }

    return (
        <Form className='flex flex-col w-[450px] h-[450px] bg-white rounded p-3 items-center justify-evenly'>
            <div className='w-full ml-4'>
                <button onClick={() => HandleSteps("firstStep")}><Image className='color-white' src={arrowLeft} alt='back' width={20} height={20} /></button>
            </div>
            <p className='text-xl'>Enter your username and password</p>
            <div className='relative mb-1'>
                <Field name="username" component={TextInput} validate={validateUserName} placeholder="User Name" />
                <ErrorMessage name="username" render={(msg: any) => <InputError fieldName={msg} />} />
            </div>

            <div className='relative mb-1'>
                <Field name="password" component={TextInput} validate={validatePassword} type="password" placeholder="Password" />
                <ErrorMessage name="password" render={(msg: any) => <InputError fieldName={msg} />} />
            </div>

            <div className='relative mb-1'>
                <Field name="confirmPassword" component={TextInput} validate={validatePasswordConfirm} type="password" placeholder="Confirm Password" />
                <ErrorMessage name="confirmPassword" render={(msg: any) => <InputError fieldName={msg} />} />
            </div>

            <button type="submit" className='bg-sky-400 h-10 mt-3 text-white rounded py-2 px-3'>Submit</button>
        </Form>
    )
}

export default StepTwoPassAndUserForm