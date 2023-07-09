"use client"

import BasicInfoInput from "@/components/Form/StepOneBasicInfoForm";
import StepTwoPassAndUserForm from "@/components/Form/StepTwoPassAndUserForm";
import { Formik, useFormikContext } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};



export const initialValues = {
  firstName: '',
  lastName: '',
  avatar: [],
  userName: '',
  password: '',
  confirmPassword: '',
}

const SignupSchema = Yup.object().shape({

  password: Yup.string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  confirmPassword: Yup.string()
    .required("Please re-type your password")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});


export default function Home(): JSX.Element {
  const [steps, setSteps] = useState<string>("firstStep")
  const [avatar, setAvatar] = useState<any>()
  function HandleSteps(props: string) {
    setSteps(props)
  }


  return (

    <div className="flex flex-col w-full items-center gap-y-1 mt-40">
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values)
          setSteps("secondStep")
        }}
      >
        {({ errors, touched, validateField, validateForm }) => (
          <>
            {steps === "firstStep" && <BasicInfoInput validateField={validateField} avatar={avatar} setAvatar={setAvatar} />}
            {steps === "secondStep" && <StepTwoPassAndUserForm HandleSteps={HandleSteps} />}
          </>
        )}
      </Formik>


    </div>
  )
}
