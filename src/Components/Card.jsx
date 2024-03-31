import React from 'react'


function Card({ user, handleRemove, id }) {
    return (


        <div className='w-48 h-full bg-zinc-200 rounded-lg flex flex-col items-center p-2'>
            <div className=' image w-[5vw] h-[5vw] bg-zinc-300 rounded-full overflow-hidden '>
                <img className='w-full h-full object-cover ' src={user.image} alt="" />

            </div>
            <h1 className='mt-1'>{user.name}</h1>
            <h4 className='opacity-40'>{user.email}</h4>
            <p className=' mt-1 text-center text-xs leading-1 tracking-tight font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ut. </p>
            <button onClick={() => handleRemove(id)} className='px-3 py-1 bg-red-500 text-xs text-white font-semibold rounded-md p4 mt-2 '>Remove It</button>
        </div>


    )
}

export default Card