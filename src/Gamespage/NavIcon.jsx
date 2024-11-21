// import React from 'react'
import { FaFacebook, FaGithub, FaTwitter ,FaVoicemail} from 'react-icons/fa'


 const Icon = () => {
  return (
    <div>
     <section className=' p-3 flex justify-between'>
      <a href="#"><FaTwitter className='border p-2 text-4xl  text-white hover:bg-blue-800  '/> </a>
      
      <a href="#"> <FaFacebook className='border p-2 text-4xl text-white hover:bg-blue-800  '/></a>
      
      <a href="#"><FaGithub className='border p-2 text-4xl text-white hover:bg-blue-800  '/> </a>
      
      <a href="#"><FaVoicemail className='border p-2 text-4xl text-white hover:bg-blue-800  '/> </a>
      
     </section>
    </div>
  )
}
export default Icon
