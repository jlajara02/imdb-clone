
'use client'
//import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import MovieTitles from '@/app/components/movieTiles';



function Home() {
  const IMDBAPI = 'c7d86efee0273e5fa951ad3b0983f65c'; // process.env.IMDB_API_KEY

  const searchParams = useSearchParams();
  //const genre = searchParams.get('genre') || 'fetchTrending';
  let genre = searchParams.get('genre') == null? `popular`:searchParams.get('genre');
  console.log("process.env.IMDB_API_KEY: " + process.env.IMDB_API_KEY )
  console.log("IMDBAPI: " + IMDBAPI );
  console.log("genre: " + genre );
  
  if(!genre){
    genre = 'popular'
  }

  genre = 'list'; 

  //const url = `https://api.themoviedb.org/3${genre.toLowerCase() === 'fetchtoprated' ? `/movie/top_rated`:`/movie/popular`}?api_key=${IMDBAPI}&language=en-US`
  //const url = `https://api.themoviedb.org/3/tv/${genre}?api_key=${IMDBAPI}&language=en-US`
  //const url = `https://api.themoviedb.org/3/genre/tv/${genre}?api_key=${IMDBAPI}&language=en-US`
  //const url=`https://api.themoviedb.org/3/account/8563427/lists?page=1`
  const url=`https://api.themoviedb.org/3/account/8276930`
  
  console.log("url :" + url);
  
  const [movieData, setMovieData] = useState(0)
  useEffect (() =>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q4NmVmZWUwMjczZTVmYTk1MWFkM2IwOTgzZjY1YyIsIm5iZiI6MTU1MDAxODIzOS43MTgwMDAyLCJzdWIiOiI1YzYzNjZiZmMzYTM2ODQzYzZkNTIzMTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HcLOA1mouh3gDBiJzIvmAoCitZ22DTw8zbjvYe7eHO4'
      }
    };
    let fetchData = async () => {
      let result = await fetch(url, options);
      console.log("result:" + result);
      result.json().then(jsonData =>{
        //let data = JSON.parse(jsonData);
        //let data = JSON.parse(JSON.stringify(jsonData));
        console.log("jsonData:" + jsonData.results);
        setMovieData(jsonData.results)
      })
      
    }

    fetchData();
  }, [url]);

  
   console.log("movieData :" + movieData);
  
  let dataJSON = JSON.parse(JSON.stringify(movieData));
  //let dataJSON = (JSON.stringify(movieData));
  //console.log("dataJSON :" + JSON.stringify(movieData));
  
  let dataArray = Array.from(dataJSON)
  console.log(JSON.stringify(dataArray))

  return (
    <div> home page <br/>
    Movie data: 
    <ul>
      { 
          dataArray.map(function(movieData){
            //return <li key={dataJSON.id}> {dataJSON.name} </li>
            if(movieData){
              return <MovieTitles key={movieData.id} id={movieData.id} title={movieData.title} overview={movieData.overview} release_date={movieData.release_date} poster_path={movieData.poster_path} />
            }
          })    
      }
    </ul></div>
  )
}

export default Home