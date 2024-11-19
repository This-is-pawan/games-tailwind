import { Webs } from "./data"

const Web = () => {
  return (
    <div>
    <h1 className=" text-left  text-3xl m-4 p-7">web creation</h1>
    <section className="p-4 md:grid grid-cols-3 place-items-center ">
    {Webs.map((item)=>{
      const {id,img,title,text,icon1,icon2}=item;
      return (
        <>
        <section className="shadow-md shadow-cyan-300 m-5 text-center border-r-4 p-4" key={id}>
        <article className="">
          <img src={img} alt="" className="w-50  m-auto   max-md:w-full  object-cover" />
        </article>
        <article>
          <h2 className="font-sans from-neutral-500 text-2xl capitalize text-cyan-900 p-4">{title}</h2>
          <p>{text}</p>
          <article className="p-3 m-3 rounded  flex  justify-between bg-black ">
          <a href="#" >
            {icon1}
          </a>
          <a href="#">
            {icon2}
          </a>
          </article>
        </article>
        </section>
        </>
      )


    })}
    </section>
    </div>
  )
}

export default Web