import { Field, Form } from 'formik'
import React from 'react'

function StepOneBasicInfoForm({ errors, touched }: any) {
    return (
        <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
            ) : null}
            <button type="submit">Submit</button>
        </Form>
    )
}

export default StepOneBasicInfoForm