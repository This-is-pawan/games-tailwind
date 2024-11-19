import { nanoid } from "nanoid";
import { FaGithub, FaHtml5,FaJs,FaReact, FaWikipediaW } from "react-icons/fa";

export const links =[
 {id:nanoid(),href:'#home',text:'home'},
 {id:nanoid(),href:'#about',text:'about'},
 {id:nanoid(),href:'#skills',text:'skills'},
 {id:nanoid(),href:'#projects',text:'projects'},

];

export const skills =[
 {id:nanoid,
 title:'HTML&CSS',
 icon:<FaHtml5 className="h-16 w-16 text-emerald-500"/>,
 text:'High skilled in HTML & CSS ,adeptly crafting visually appealing and responsive website for optimal user experiences.',
 pra:'High skilled in Javascript ,adeptly crafting visually appealing and responsive website for optimal user experiences.High skilled in Javascript ,adeptly crafting visually appealing and responsive website for optimal user experiences.High skilled in Javascript ,adeptly crafting visually appealing and responsive website for optimal user experiences.visually appealing and responsive website for optimal user experiences.High skilled in Javascript ,adeptly crafting visually appealing and responsive website for optimal user experiences.visually appealing and responsive website for optimal user experiences.High skilled in Javascript ,adeptly crafting visually appealing and responsive website for optimal user experiences.'
 },

 {id:nanoid,
  title:'Javascript',
  icon:<FaJs className="h-16 w-16 text-emerald-500"/>,
  text:'High skilled in Javascript ,adeptly crafting visually appealing and responsive website for optimal user experiences.',
  },
 
  {id:nanoid,
   title:'React',
   icon:<FaReact className="h-16 w-16 text-emerald-500"/>,
   text:'High skilled in HTML & CSS ,adeptly crafting visually appealing and responsive website for optimal user experiences.',
   },
   
   
]
export const Webs =[
   {
   id:nanoid(),   
   img:'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400',
   title:'first project',
   text:'Create an online video course, reach students across the globe, and earn moneyCreate an online video course, reach students across the globe, and earn moneyCreate an online video course, reach students across the globe, and earn money',
   icon1:<FaWikipediaW className="h-6 w-6 text-emerald-500"/>,
   icon2:<FaGithub className="h-6 w-6 text-emerald-500"/>,
},
{
   id:nanoid(),   
   img:'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=400',
   title:'second project',
   text:'Create an online video course, reach students across the globe, and earn moneyCreate an online video course, reach students across the globe, and earn moneyCreate an online video course, reach students across the globe, and earn money',
   icon1:<FaWikipediaW className="h-6 w-6 text-emerald-500"/>,
   icon2:<FaGithub className="h-6 w-6 text-emerald-500"/>,
},
{
   id:nanoid(),   
   img:'https://images.pexels.com/photos/577560/pexels-photo-577560.jpeg?auto=compress&cs=tinysrgb&w=400',
   title:'third project',
   text:'Create an online video course, reach students across the globe, and earn moneyCreate an online video course, reach students across the globe, and earn moneyCreate an online video course, reach students across the globe, and earn money',
   icon1:<FaWikipediaW className="h-6 w-6 text-emerald-500"/>,
   icon2:<FaGithub className="h-6 w-6 text-emerald-500"/>,
},

  
]