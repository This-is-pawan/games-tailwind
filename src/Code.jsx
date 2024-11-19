import {skills} from './data'

export const Code = () => {
  return (
    <div>
<section className='h-auto bg-pink-50 ' >
 <h1 className='font-semibold capitalize p-3 text-3xl text-center'>code and coffee</h1>
 {
  skills.map((texts)=>{
   const {id, pra}=texts
   return (
    <>
    <section key={id} className='p-6  text-justify '>
     <p>{pra}</p>
 
    </section>
    </>
   )
  })
 }

</section>


    </div>
  )
}

