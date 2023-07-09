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


export default function Form(): JSX.Element {
    const [steps, setSteps] = useState<string>("firstStep")
    const [avatar, setAvatar] = useState<any>()

    const _submit = async (data: any) => {
        const { data: response } = await API.post(ENDPOINTS.postForm, data);
        return response;
    };

    const { mutate, isLoading, data } = useMutation(_submit, {
        onSuccess: (data) => {
            setSteps("succeed")
            console.log("response", data);
            alert("success")
        },
        onError: () => {
            alert("there was an error")
        },
    });

    function SubmitForm(props: any) {
        console.log('values in submit', props)
        const formData = new FormData()
        // formData.append("photo", avatar)
        formData.append("firstName", props.firstName)
        formData.append("lastName", props.lastName)
        formData.append("password", props.password)
        formData.append("userName", props.username)
        mutate(formData)
        console.log('formData', formData)
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
                    console.log('values', values)
                    if (values.confirmPassword.length > 7) {
                        SubmitForm(values)
                    }
                }}
            >
                {({ errors, validateForm }) => (
                    <>
                        {steps === "firstStep" && <BasicInfoInput errors={errors} validateForm={validateForm} avatar={avatar} HandleSteps={HandleSteps} setAvatar={setAvatar} />}
                        {steps === "secondStep" && <StepTwoPassAndUserForm errors={errors} isLoading={isLoading} HandleSteps={HandleSteps} />}
                        {steps === "succeed" && <SucceedSubmitting />}
                    </>
                )}
            </Formik>
        </div>
    )
}
