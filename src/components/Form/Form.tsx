"use client"

import { initialValues } from "@/components/Form/FormComponents";
import BasicInfoInput from "@/components/Form/StepOneBasicInfoForm";
import StepTwoPassAndUserForm from "@/components/Form/StepTwoPassAndUserForm";
import API from "@/services/API";
import { ENDPOINTS } from "@/services/EndPoints";
import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import { useState } from "react";
import SucceedSubmitting from "./SucceedSubmitting";

interface IApiError {
    message: string;
    description: string;
    statusCode: string | number;
}

export interface IDataSubmit {
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    avatar?: File[],
    confirmPassword?: string | undefined
}

export default function Form(): JSX.Element {
    const [steps, setSteps] = useState<string>("firstStep")
    const [avatar, setAvatar] = useState<File>()

    const _submit = async (data: IDataSubmit) => {
        const { data: response } = await API.post(ENDPOINTS.postForm, data);
        return response;
    };

    const { mutate, isLoading } = useMutation<any, IApiError, any, unknown>(_submit, {
        onSuccess: () => {
            setSteps("succeed")
            setAvatar(undefined)
        },
        onError: (error: IApiError) => {
            console.error(error)
        },
    });

    function SubmitForm(props: IDataSubmit) {
        const formData = new FormData()
        // formData.append("photo", avatar)
        formData.append("firstName", props.firstName)
        formData.append("lastName", props.lastName)
        formData.append("password", props.password)
        formData.append("userName", props.username)
        mutate(formData)
    }

    function HandleSteps(props: string) {
        setSteps(props)
    }
    return (
        <div className="flex flex-col w-full items-center gap-y-1 mt-40">
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={values => {
                    setSteps("secondStep")
                    if (values.confirmPassword && values.confirmPassword.length > 7) {
                        SubmitForm(values)
                    }
                }}
            >
                {({ errors, validateForm, resetForm }) => (
                    <>
                        {steps === "firstStep" && <BasicInfoInput errors={errors} validateForm={validateForm} avatar={avatar} HandleSteps={HandleSteps} setAvatar={setAvatar} />}
                        {steps === "secondStep" && <StepTwoPassAndUserForm isLoading={isLoading} HandleSteps={HandleSteps} />}
                        {steps === "succeed" && <SucceedSubmitting resetForm={resetForm} HandleSteps={HandleSteps} />}
                    </>
                )}
            </Formik>
        </div>
    )
}
