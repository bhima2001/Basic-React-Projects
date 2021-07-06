import './App.css';
import React,{useState,useEffect} from 'react'
import Moviedb from './movie'

const movie_id=`apikey=${process.env.REACT_APP_Movie_id}`
// const movie_images=`http://img.omdbapi.com/?${movie_id}`
const url=`https://www.omdbapi.com/?${movie_id}`

const App=()=>{
  const [loading,setLoading]=useState(false)
  const [title,setTitle]=useState('')
  const [movielist,setMovielist]=useState([])
  const [err,setErr]=useState(false)
  const movieData=async (e)=>{
    setLoading(true)
    let query=`&s=${title}`
    try {
      const response=await fetch(`${url}${query}`)
      const movies=await response.json()
      if (movies.Response==='True'){
        setMovielist(movies.Search)
        setErr(false)
      }
      else{
        setErr(true)
      } 
      console.log(movies.Search)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.log(e) 
    }
    console.log(movielist)
  }

  useEffect(()=>{
    movieData()
  },[title])

  const handlesubmit=(e)=>{
    e.preventDefault()
    movieData()
  }

  return <main>
    <div>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="search"></input>
    <button onClick={handlesubmit}>response</button>
    <div>{loading && <h1>Loading</h1>}</div>
    <div>{err && <span>Movie Not Found</span>}</div>
     <div>
       {!err &&movielist.map((cinema)=>{
         return <Moviedb key={cinema.imdbID} {...cinema}/>
       })
       }
    </div> 
    </div>
  </main>
}


export default App;
