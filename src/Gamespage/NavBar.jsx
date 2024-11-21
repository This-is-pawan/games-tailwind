import { FaArrowCircleRight, FaBars, FaSearch } from "react-icons/fa";
import { NavBartop } from "./NavBartop";
import { useState } from "react";
import { Gbox } from "../Gbox";

console.log(Gbox);

const NavBar = () => {
  const [barF,barT]=useState(false)
  const Handle=()=>{
    alert('on bar')
   
  }
  return (

    <div className="bg-blue-950">
      {/* <NavBartop onClick={Handle}/> */}
      <section className="w-full h-[200vh] bg-[url('https://cdn.pixabay.com/photo/2021/11/14/20/08/background-6795626_960_720.png')] bg-cover bg-no-repeat bg-left">
        <article className="  text-white  absolute top-[15rem] ml-10  font-bold  ">
          <h1 className=" text-5xl tracking-wider pb-5 uppercase  leading-[4rem] ">
            Buy and sell digital art
            <span className="text-blue-700"> NFT </span>
            collection
          </h1>
          <p className="text-x text-gray-400 font-mono mt-3">
            Everything you need to build, host, scale amazing dapps free by
            creating account today
          </p>
          <article className=" w-14 h-14 mt-6 rounded-full text-white bg-blue-700 hover:w-[200px] transition-all 2s cursor-pointer ">
            <span className="tracking-wider p-2 leading-9 absolute ">
              lets Getting start
              <FaArrowCircleRight className="absolute left-[10rem] bottom-3 text-xl" />
            </span>
          </article>
        </article>
        <div className="bg-sky-950  w-full h-20 flex justify-around  fixed  opacity-[0.9] items-center border border-black   rounded-md max-700:show z-10 ">
          <h1 className="text-red-50 text-3xl font-bold ">
            NFT<span className="text-blue-800">Mr</span>
          </h1>
          <article className="relative ">
            <input
              type="text"
              placeholder="Search Artwork"
              className="w-40 h-6 text-white bg-blue-950 rounded pl-6 p-4 border-dashed border   border-sky-800"
            />
            <FaSearch className="w-3 h-3 absolute top-3 left-2  text-white  " />
          </article>
          <article className="text-white bg-blue-500  text-xs p-1  rounded-xl uppercase max-800:hidden   ">
            <h5 className="outline-dotted rounded-xl outline-2 p-1 font-bold text-center text-xs ">
              wallet connect
            </h5>
          </article>

          <FaBars  onClick={Handle}  className="w-7 h-7 text-white hover:text-slate-500 cursor-pointer sm:hidden" />
          <ul className="flex justify-around text-white max-700:hidden " >
            <li>
              <a href="#" className="m-3 hover:text-slate-500 capitalize">
                home
              </a>
            </li>
            <li>
              <a href="#" className="m-3 hover:text-slate-500 capitalize">
                explore
              </a>
            </li>
            <li>
              <a href="#" className="m-3 hover:text-slate-500 capitalize">
                collection
              </a>
            </li>
            <li>
              <a href="#" className="m-3 hover:text-slate-500 capitalize">
                pages
              </a>
            </li>
            <li>
              <a href="#" className="m-3 hover:text-slate-500 capitalize">
                blog
              </a>
            </li>
          </ul>
        </div>
      <Gbox/>
      </section>
     

    </div>
  );
};
export default NavBar;
