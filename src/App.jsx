import { useState } from 'react'
import Form from './Components/Form'
import Cards from './Components/Cards'


function App() {
  const [users, setusers] = useState([])
  const handleSubmitData = ((data) => {
    setusers([...users, data])
  })
  const handleRemove = (id) => {
    setusers(() => users.filter((item, index) => index != id))
  }

  return (
    <div className='w-full h-screen bg-zinc-400 flex justify-center items-center '>
      <div className='container mx-auto'>
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleSubmitData={handleSubmitData} />
      </div>
    </div>
  )
}

export default App
