import React from 'react'
import './picture.css'

function Picture({urls:{regular},likes,alt_description,user:{username}}){
  return(
    <article>
      <img src={regular} alt={alt_description}/>
    </article>  
  );
}

export default Picture;