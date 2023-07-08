"use client"

import BasicInfoInput from "@/components/Form/StepOneBasicInfoForm";
import StepTwoPassAndUserForm from "@/components/Form/StepTwoPassAndUserForm";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  avatar: [],
  userName: '',
  password: 0,
}

export default function Home(): JSX.Element {
  return (

    <div className="flex flex-col w-full items-center gap-y-1">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <>
            <BasicInfoInput errors={errors} touched={touched} />
            <StepTwoPassAndUserForm errors={errors} touched={touched} />
          </>
        )}
      </Formik>
    </div>
  )
}
