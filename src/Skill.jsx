import { skills } from "./data.jsx";




const Skill = () => {
  return (
    <div>
    <section className="py-2 align-element bg-slate-50" >
 <h2 className="border-b-2 border-yellow-700 w-44 m-auto border-g-200 pb-5 text-3xl font-medium tracking-wider capitalize  mr-auto text-center">tech stack</h2>
<div className="p-7  grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{skills.map((item)=>{
 const{id,title,text,icon} =item;
 return(
  <>
  <section key={id}  className="bg-white shadow-sm p-2 rounded hover:scale-105 transition-all m-2" >
   <article className="mb-4 border-r-2 bg-pink-200 p-3 shadow-md ">
   <a href="#" >{icon}</a>
   </article>
  <h2>{title}</h2>
  <p>{text}</p>

  </section>
  </>
 )
})}
</div>
    </section>
         
    </div>
  )
}

export default Skill
