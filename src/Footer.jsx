import { FaGithub, FaInstagram,FaFacebook,FaYoutube, FaTwitter, FaTable } from "react-icons/fa";




const Footer = () => {
  return (
    <>
     <section  className="bg-stone-900 p-3">
      <h1 className="text-white text-center
      p-3 capitalize tracking-wide">making the world a better place through construction elegant hierarchies</h1>
      <article className="flex justify-around  m-7">
      <a href="#">
       <FaFacebook className="h-6 w-6 text-white  hover:text-yellow-800"/>
      </a>
      <a href="#">
       <FaInstagram className="h-6 w-6 text-white  hover:text-yellow-800"/>
      </a>
      <a href="#">
       <FaTwitter className="h-6 w-6 text-white hover:text-yellow-800 "/>
      </a>
      <a href="#">
       <FaGithub className="h-6 w-6 text-white  hover:text-yellow-800"/>
      </a>
      <a href="#">
       <FaYoutube className="h-6 w-6 text-white hover:text-yellow-800 "/>
      </a>
      </article>
      <article>
      <p className="text-blue-300 text-center p-3 mt-5" >© 2024 Your Company, Inc. All rights reserved and using <span className="text-sky-100">Tailwind</span></p>
      </article>
      </section>  

    </>
  )
}
export default Footer