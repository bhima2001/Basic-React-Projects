import React from 'react'
import './movie.css'

const Moviedb=({Title,Year,Type,Poster})=>{
  return(
      <article>
        <img src={Poster}/>
        <div>
        <strong>{Title}({Year})</strong>
        </div>
      </article>
  )
}

export default Moviedb;