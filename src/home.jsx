
import Header from './header';
import React,{ useState, useEffect, useContext } from 'react';
import  axios from 'axios'
import { ScrollContainer } from 'react-indiana-drag-scroll'
import genres from './moviesGenres';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import Spinner from './spinner';

export default function Home(){
const [details,setDetails] = useState([])
const [data,setData] = useState([]) 
const {addList,ifLogin,setErrs} = useContext(UserContext)
const navigate = useNavigate()



useEffect(() => { run()
async function run(){
   
await axios.get('https://movies-0533.onrender.com/').then(response=>setData([response.data[0].results, response.data[1].results,response.data[2].results]))}}, []);




async function addItem(x){

const loged = await ifLogin()
loged===true?addList(x):navigate('/login')

}

function genero(x){
   const result = genres.find( e => e.id === x );
  
   return result.name}



return(<div className=' w-screen h-screen overflow-x-hidden bg-slate-700 fixed'>
<div className=''>{data.length===0?<Spinner/>:""}</div>


{details[0]?
   <div style={details[0].length<=0?{visibility:'hidden'}:{visibility:'visible'}} onClick={()=>setDetails([])} className='w-screen h-screen flex items-center justify-center bg-slate-700 fixed' >
   <div className="text-black fixed w-full h-1/4 bg-white  flex mt-8 rounded-md shadow-2xl text-base  sm:h-1/3 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5 ">
   <img className="h-full rounded-md" src={"https://image.tmdb.org/t/p/w500/"+details[0].poster_path} alt="" />
  <div className="justify-around p-8 items-center text-xs sm:text-sm md:text-base lg:text-base xl:text-lg flex flex-col"><p>{details[0].original_title}</p>
   <p>{details[0].overview.substring(0,250) + "..."}</p> 
   <div className="w-full flex justify-between"><span>{details[0].release_date?details[0].release_date.substring(0,4):details[0].first_air_date.substring(0,4)}</span> <span>{details[0].vote_average}</span> <span>{genero(details[0].genre_ids[0])}</span><img className='h-8 animate-bounce cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/3128/3128313.png" alt="like"  onClick={()=>addItem(details[0])} /> </div>
   </div></div>
   </div>:""}
<Header></Header>



<ScrollContainer className='flex overflow-x-hidden max-[640px]:overflow-x-scroll'>{data.length>1?data[0].map(e=><img  onClick={()=>setDetails([e])} className='cursor-pointer w-1/4 shadow-2xl m-8 scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):''}</ScrollContainer>

<ScrollContainer className='flex  overflow-x-hidden max-[640px]:overflow-x-scroll'>{data.length>1?data[1].map(e=><img onClick={()=>setDetails([e])} className='cursor-pointer w-1/4 shadow-2xl m-8 scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):""}</ScrollContainer>

<ScrollContainer className='flex  overflow-x-hidden max-[640px]:overflow-x-scroll'>{data.length>1?data[2].map(e=><img onClick={()=>setDetails([e])} className='cursor-pointer w-1/4 shadow-2xl m-8 scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):""}</ScrollContainer>


</div>)

}