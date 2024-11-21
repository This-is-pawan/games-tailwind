import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { FaSquareCaretDown, FaSquareCaretUp, FaXmark } from "react-icons/fa6";
import Icon from './NavIcon'

export const NavBartop = () => {

  
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [xMarks, xMarkSet] = useState(false);
 
  const togglePageSection = () => {
    setIsPageOpen((prev) => !prev);
  };
  const xMark = () => {
    alert('xmark')
  };

  return (

    <div>
       
      <section   className="bg-sky-950 w-[250px] h-[38rem] fixed z-20 right-1 top-[5rem] overflow-y-scroll scrollbar-thin opacity-[0.9] sm:hidden  " >
  
        <article className="flex justify-between p-2">
          <FaFire className="text-blue-800 text-5xl" />
          <FaXmark className="text-white text-xl font-extrabold cursor-pointer hover:text-slate-500  "onClick={xMark} />
        </article>

        <article>
          <ul className="grid grid-cols-1 divide-y divide-gray-500">
            <li className="flex items-center">
              <a href="#" className="text-white font-bold font-sans p-3">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-white font-bold font-sans p-3">
                Explore
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-white font-bold font-sans p-3">
                Collection
              </a>
            </li>
            <li className="flex items-center">
              <button
                onClick={togglePageSection}
                className="text-white font-bold font-sans p-3 flex items-center w-full text-left"
              >
                Pages
                {isPageOpen ? (
                  <FaSquareCaretUp className="ml-auto text-blue-400 cursor-pointer hover:text-slate-200" />
                ) : (
                  <FaSquareCaretDown className="ml-auto text-blue-400 cursor-pointer  hover:text-slate-200 " />
                )}
              </button>
            </li>
          </ul>

          
          {isPageOpen && (
            <article className="page   ">
              <ul className="grid grid-cols-1 divide-y divide-gray-500   ">
                <li className="flex items-center">
                  <a href="#" className="text-white font-bold font-sans p-3">
                    Activity
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="text-white font-bold font-sans p-3">
                    Category
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="text-white font-bold font-sans p-3">
                    Ranking
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="text-white font-bold font-sans p-3">
                    Creators
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="text-white font-bold font-sans p-3">
                    Market Single
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="text-white font-bold font-sans p-3">
                    Live Bidding
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="text-white font-bold font-sans p-3">
                    Creative Item
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="text-white font-bold font-sans p-3">
                    Author Profile
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="text-white font-bold font-sans p-3">
                    Login & Register
                  </a>
                </li>
              </ul>
            </article>
          )}
        </article>

          <Icon/>
      </section>
       
    </div>
  );
};
