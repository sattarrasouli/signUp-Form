import { ErrorMessage, Field, Form } from 'formik';
import Image from 'next/image';
import avatarDefault from '../../assets/avatar.png';
import { InputError, TextInput, validateNames } from './FormComponents';
import axios from 'axios';

function StepOneBasicInfoForm({ setAvatar, avatar, HandleSteps, errors, validateForm }: any) {

    const previewAvatar: string = avatar && URL.createObjectURL(avatar)

    function ValidateNextStep() {
        validateForm()
        if (!errors.firstName && !errors.lastName) {
            HandleSteps('secondStep')
        }
    }

    function UploadPhoto(e: any) {
        setAvatar(e.target.files[0])
    }

    return (
        <Form className='flex flex-col w-[450px] min-h-[450px] bg-white rounded p-3 items-center'>
            <p className='text-center text-[24px] mb-6 font-semibold'>Sign Up</p>
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label htmlFor="file-upload" className="relative flex flex-col items-center cursor-pointer rounded-md bg-white font-semibold text-gray-600 -2 hover:text-gray-500">
                    <Image src={avatar ? previewAvatar : avatarDefault} width={80} height={80} alt="avatar" />
                    <p className='text-center'>Upload a Avatar</p>
                    <input id="file-upload" onChange={UploadPhoto} accept="image/gif, image/jpeg, image/png" name="file-upload" type="file" className="sr-only" />
                </label>
            </div>
            <div className='relative mb-1'>
                <Field name="firstName" component={TextInput} placeholder="First Name" validate={validateNames} />
                <ErrorMessage name="firstName" render={(msg: any) => <InputError fieldName={msg} />} />
            </div>
            <div className='relative mb-1'>
                <Field name="lastName" component={TextInput} placeholder="Last Name" validate={validateNames} />
                <ErrorMessage name="lastName" render={(msg: any) => <InputError fieldName={msg} />} />
            </div>
            <p className='text-sm text-center mt-3 text-gray-500 mt-7'>By continuing, you go to set username and password.</p>
            <button type="button" onClick={ValidateNextStep} className='bg-sky-400 h-10 mt-3 text-white rounded py-2 px-3' >Continue</button>
        </Form >
    )
}

export default StepOneBasicInfoForm