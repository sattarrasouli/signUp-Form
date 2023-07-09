
export const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
}

export const TextInput = ({ field, form, ...props }: any) => {
    return <input className="border-[1px] w-[320px] rounded border-gray-200 p-2 mt-4" {...field} {...props} />;
};

export const InputError = ({ fieldName }: any) => {
    return <p className=' text-rose-500 float-right w-[320px] text-xs absolute'>{fieldName}</p>;
};

export function validateNames(value: any) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 3) {
        error = 'too short';
    }
    else if (value.length > 50) {
        error = 'too long';
    }
    return error;
}
