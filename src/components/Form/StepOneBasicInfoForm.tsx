import { ErrorMessage, Field, Form } from 'formik';
import Image from 'next/image';
import avatarDefault from '../../assets/avatar.png';

const TextInput = ({ field, form, ...props }: any) => {
    return <input className="border-[1px] w-[240px] rounded border-gray-200 p-2 mt-4" {...field} {...props} />;
};

export const InputError = ({ fieldName }: any) => {
    console.log('fieldName', fieldName)
    return <p className=' text-rose-500 float-right w-[240px] text-xs'>{fieldName}</p>;
};

function validateName(value: any) {
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
function validateLastName(value: any) {
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
function StepOneBasicInfoForm({ setAvatar, avatar }: any) {

    const previewAvatar: string = avatar && URL.createObjectURL(avatar)

    return (
        <Form className='flex flex-col w-[450px] h-[450px] bg-white rounded p-3 items-center'>
            <p className='text-center text-[24px] mb-6 font-semibold'>Sign Up</p>
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label htmlFor="file-upload" className="relative flex flex-col items-center cursor-pointer rounded-md bg-white font-semibold text-gray-600 -2 hover:text-gray-500">
                    <Image src={avatar ? previewAvatar : avatarDefault} width={80} height={80} alt="avatar" />
                    <p className='text-center'>Upload a Avatar</p>
                    <input id="file-upload" onChange={(event: any) => setAvatar(event.target.files[0])} accept="image/gif, image/jpeg, image/png" name="file-upload" type="file" className="sr-only" />
                </label>
            </div>
            <Field name="firstName" component={TextInput} placeholder="First Name" validate={validateName} />
            <ErrorMessage name="firstName" render={(msg: any) => <InputError fieldName={msg} />} />
            <ErrorMessage name="password" render={(msg: any) => <InputError fieldName={msg} />} />
            <ErrorMessage name="username" render={(msg: any) => <InputError fieldName={msg} />} />
            <Field name="lastName" component={TextInput} placeholder="Last Name" validate={validateLastName} />
            <ErrorMessage name="lastName" render={(msg: any) => <InputError fieldName={msg} />} />
            <ErrorMessage name="avatar" render={(msg: any) => <InputError fieldName={msg} />} />
            <p className='text-sm text-center mt-3 text-gray-500 mt-7'>by continuing, you go to set username and password</p>
            <button type="submit" className='bg-sky-400 h-10 mt-3 text-white rounded p-2'>Continue</button>
        </Form>
    )
}

export default StepOneBasicInfoForm