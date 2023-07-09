import React from 'react'
import tick from '../../assets/tick.png'
import Image from 'next/image'
import { FormikState } from 'formik'
import { IDataSubmit } from './Form'


interface IProps {
    HandleSteps: (arg0: string) => void,
    resetForm: (nextState?: Partial<FormikState<IDataSubmit>> | undefined) => void
}

function SucceedSubmitting({ resetForm, HandleSteps }: IProps): JSX.Element {

    function GetHome() {
        resetForm()
        HandleSteps("firstStep")
    }

    return (
        <div className='flex flex-col w-[450px] min-h-[450px] bg-white rounded p-3 items-center justify-center'>
            <Image src={tick} alt="tick" />
            <p className='text-lg'>You Signed Up Successfully</p>
            <button onClick={GetHome} className=' bg-sky-400 h-10 mt-20  text-white rounded py-2 px-6'>Home</button>
        </div >
    )
}

export default SucceedSubmitting