"use client"

import BasicInfoInput from "@/components/Form/StepOneBasicInfoForm";
import StepTwoPassAndUserForm from "@/components/Form/StepTwoPassAndUserForm";
import { Formik } from "formik";
import { useState } from "react";

export const initialValues = {
  firstName: '',
  lastName: '',
  avatar: [],
  userName: '',
  password: '',
  confirmPassword: '',
}

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
        <>
          {steps === "firstStep" && <BasicInfoInput avatar={avatar} setAvatar={setAvatar} />}
          {steps === "secondStep" && <StepTwoPassAndUserForm HandleSteps={HandleSteps} />}
        </>
      </Formik>
    </div>
  )
}
