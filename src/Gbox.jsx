// Import React and Icons

import { data } from "./DataG"; 

export const Gbox = () => {
  return (
    <div>
      <section className="main w-full bg-blue-600 opacity-75 top-[49rem] border-white absolute p-6 m-auto">
        {/* Title Section */}
        <article className="flex flex-col items-center mb-8">
          <h2 className="text-white text-4xl font-bold">Top Sellers</h2>
          <img
            src="https://nftmak.netlify.app/assets/img/icons/title_icon01.png"
            className="p-3"
            alt="Title Icon"
          />
        </article>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {data.map((item, index) => {
            const { img, icon1, icon2, Name, price } = item;
            return (
              <div
                key={index}
                className="bg-blue-950 border-4 border-gray-700 rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col items-center space-y-4">
                
                  <img
                    src={img}
                    className="w-20 h-20 rounded-full border-2 border-gray-500"
                    alt={`${Name}'s Avatar`}
                  />
                 
                  <div className="text-center">
                    <h1 className="text-white text-lg font-semibold">{Name}</h1>
                    <h3 className="text-gray-400 text-sm">
                      {price} <span className="text-blue-500 font-bold">Eth</span>
                    </h3>
                  </div>
              
                  <div className="flex space-x-4 text-white">
                    {icon1}
                    {icon2}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
