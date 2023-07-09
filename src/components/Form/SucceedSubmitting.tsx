import React from 'react'
import tick from '../../assets/tick.png'
import Image from 'next/image'
function SucceedSubmitting() {
    return (
        <div className='flex flex-col w-[450px] min-h-[450px] bg-white rounded p-3 items-center justify-center'>
            <Image src={tick} alt="tick" />
            <p className='text-lg'>You Signed Up Successfully</p>
        </div>
    )
}

export default SucceedSubmitting