import React, { useEffect, useState } from 'react'

const SearchTab = () => {

    const APIKEY = process.env.APIKEY;

    const [ searchInput, setSearchInput ] = useState("");
    const [ movieData , setMoiveData ] = useState(null);
    const [ isBtnClicked, setIsBtnClicked ] = useState(false); 
    const [ searchLength , setSearchLength ] = useState(0);
    const [ suggestionData , setSuggestionData ] = useState(null)

    const handleChange = (e) => {
        setSearchInput(e.target.value)
        setSearchLength((e.target.value).length)
    }

    const fetchMovieData = async (searchInput) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=${APIKEY}`);
        const data = await res.json();
        setMoiveData(data);
        setSuggestionData(movieData.results)
    }

    useEffect(()=>{
        if(searchLength>2) fetchSuggestion()
    } , [searchLength] )

    useEffect(()=>{
        if(isBtnClicked)fetchMovieData(searchInput);
    } , [isBtnClicked]) 

    const fetchSuggestion = () => {     
            fetchMovieData(searchInput);
            
        }    
    
  return (

    <div>
        <input 
        className='search-input-box' 
        type="text"  
        placeholder='Search for a movie...'
        value={searchInput}
        onChange={handleChange}
        />

        <button 
        className='search-btn'
        onClick={()=>{setIsBtnClicked((prevValve)=>!prevValve)}}
        >Search</button>
    <ul>
        
         {suggestionData && suggestionData.map((result , index )=>{
            return(
                <li> result.title</li>
            )
         }) }
    </ul>
    </div>

  )
}

export default SearchTab