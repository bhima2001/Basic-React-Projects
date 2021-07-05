import './App.css';
import React,{useState,useEffect} from 'react';
import {FaSearch} from 'react-icons/fa'
import Picture from './Picture';

const mainurl='https://api.unsplash.com/photos/' 
const searchurl='https://api.unsplash.com/search/photos/'
const accessQuery=`?client_id=${process.env.REACT_APP_client_id}`

function App(){
  const [loading,setLoading]=useState(false)
  const [photos,setPhotos]=useState([])
  const [page,setPage]=useState(1)
  const [query,setQuery]=useState([])

  const fetchPhotos=async()=>{
    setLoading(true)
    let pageUrl=`&page=${page}`
    let search=`&query=${query}`
    let url=''
    if (query){
      url=`${searchurl}${accessQuery}${pageUrl}${search}`
    }
    else{
      url=`${mainurl}${accessQuery}${pageUrl}`
    }
    try {
      const response=await fetch(url);
      const data=await response.json();
      setPhotos((oldPhotos)=>{
        if (query && page===1){
          return data.results
        }
        else if (query){
          return [...oldPhotos,...data.results]
        }
        else {
          return [...oldPhotos,...data]
        }
    })
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.log('There is an error ',e)
    }
  }
  useEffect(fetchPhotos,[page])
  useEffect(()=>{
    const event=window.addEventListener('scroll',async ()=>{
      if (!loading &&(window.scrollY+window.innerHeight)>=document.body.scrollHeight){
        setPage((oldPage)=>{
          return oldPage+1
        })
      }
    })
    window.removeEventListener('scroll',event);
  },[])



  const searchSubmit=(e)=>{
    e.preventDefault()
    fetchPhotos()
  }



  return (
    <main>
      <section>
        <div className="container">
        <div>
          <input type="text" placeholder="search" id='form1' value={query} onChange={(e)=>{setQuery(e.target.value)}}></input>
          <button onClick={searchSubmit}><FaSearch/></button>
          </div>
          <section>
          <div>
            {photos.map((photo)=>{
              return <Picture key={photo.id} {...photo} />
            })}
          </div>
          </section>
          {loading && <h4>loading</h4>}
        </div>
      </section>
    </main>
  )
}


export default App;
