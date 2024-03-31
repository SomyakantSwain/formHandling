import React from 'react'
import { useForm } from "react-hook-form"

function Form({ handleSubmitData }) {
    const {
        register,
        handleSubmit,
        reset

    } = useForm();
    const handleFormSubmit = ((data) => {
        handleSubmitData(data)
        reset()
    })
    return (
        <div className='mt-10 flex justify-center '>
            <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)} >
                <input {...register("name")} className='rounded-md px-2 py-1 text-base font-semibold outline-none ' placeholder='name' type="text" />
                <input {...register("email")} className='rounded-md px-2 py-1 text-base font-semibold outline-none ' placeholder='email' type="text" />
                <input {...register("image")} className='rounded-md px-2 py-1 text-base font-semibold outline-none ' placeholder='image' type="text" />
                <input {...register("description")} className='rounded-md px-2 py-1 text-base font-semibold outline-none ' placeholder='descrption' type="text" />
                <input type="submit" className='rounded-md px-5 py-1 bg-blue-400 text-xs' />
            </form>
        </div >
    )
}

export default Form