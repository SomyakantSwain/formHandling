import React from 'react'
import Card from './Card'

function Cards({ users, handleRemove }) {
    return (
        <div className='w-full -h-96  p-2 flex overflow-auto justify-center gap-4 flex-wrap'>

            {users.map((item, index) => {

                return <Card handleRemove={handleRemove} id={index} key={index} user={item} />
            })}


        </div>
    )
}

export default Cards