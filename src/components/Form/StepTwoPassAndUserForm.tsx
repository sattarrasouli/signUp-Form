import { ErrorMessage, Field, Form } from 'formik';
import Image from 'next/image';
import { useState } from 'react';
import arrowLeft from '../../assets/arrowleft.svg';
import { InputError, TextInput, validateNames } from './FormComponents';

interface IProps {
    HandleSteps: (arg0: string) => void,
    isLoading: boolean
}

function StepTwoPassAndUserForm({ HandleSteps, isLoading }: IProps): JSX.Element {

    const [password, setPassword] = useState<string>("")

    function validatePassword(value: string) {
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

    function validatePasswordConfirm(value: string) {
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
                <Field name="username" component={TextInput} validate={validateNames} placeholder="User Name" />
                <ErrorMessage name="username" render={(msg: string) => <InputError fieldName={msg} />} />
            </div>
            <div className='relative mb-1'>
                <Field name="password" component={TextInput} validate={validatePassword} type="password" placeholder="Password" />
                <ErrorMessage name="password" render={(msg: string) => <InputError fieldName={msg} />} />
            </div>
            <div className='relative mb-1'>
                <Field name="confirmPassword" component={TextInput} validate={validatePasswordConfirm} type="password" placeholder="Confirm Password" />
                <ErrorMessage name="confirmPassword" render={(msg: string) => <InputError fieldName={msg} />} />
            </div>
            <p className='text-sm text-center mt-3 text-gray-500 mt-7 italic'>By submiting, you agreed to our <a className='text-sky-400' href="/">Terms and Service</a>.</p>
            <button disabled={isLoading} type="submit" className='disabled:bg-gray-400 bg-sky-400 h-10 mt-3  text-white rounded py-2 px-6'>Submit</button>
        </Form>
    )
}

export default StepTwoPassAndUserForm