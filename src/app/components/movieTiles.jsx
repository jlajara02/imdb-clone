import React from 'react'
import Image from 'next/image'

export default function movieTiles({title, id, overview, release_date, poster_path}) {
    let posterImage = "https://image.tmdb.org/t/p/w500" + poster_path;
  return (
    <li key={id} id={id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Image src={posterImage} alt="Picture of the author" width={75} height={75} /><br/>
        {title} - {release_date}<br/>
        {overview}<br/>
        
    
    
    
    </li>
    
  )
}
