import React, { useEffect, useState} from 'react'
import Suggestion from './Suggestion';
import { IoIosSearch } from "react-icons/io";
import { useNavigate , Link } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import "./searchTab.css"
import { BiMailSend } from 'react-icons/bi';


const SearchTab = ({setMovieData}) => {

    const Navigate = useNavigate();
    const APIKEY = process.env.APIKEY;

    const [ searchInput, setSearchInput ] = useState("");
    const [ movieSearch , setMovieSearch ] = useState("")
    const [ searchLength , setSearchLength ] = useState(0);
    const [ suggestionData , setSuggestionData ] = useState(null)


    const handleChange = (e) => {
        setSearchLength((e.target.value).length)
        setMovieSearch(e.target.value)
        setSearchInput(e.target.value)
    }

    const handleSearch = () => {
        if(searchInput){
            setMovieSearch(searchInput)
            Navigate(`/contentInfo/${searchInput}`)
            setSearchInput("")
        }
    }

    const fetchMovieData = async (movieSearch) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieSearch}&api_key=${APIKEY}`);
        const data = await res.json();
        setSuggestionData(data.results)
        setMovieData(suggestionData)
    }

    useEffect(()=>{

        if(searchLength>0) fetchSuggestion(movieSearch)
        if(searchLength<1) setSuggestionData(null)

    } , [searchLength] )


    const fetchSuggestion = () => {     
            fetchMovieData(searchInput);
        }    
    
  return (

    <main>
        <div className='header'>
            <h1>MovieHub</h1>
        </div>

        <div className='search-suggestion-container'>
            <div className='search-btn-container'>
        
            <IoIosSearch className='search-icon' />
                <input 
                className='search-input-box' 
                type="text"  
                placeholder='Search for a movie...'
                value={searchInput}
                onChange={handleChange}
                />

                <button 
                className='search-btn'
                onClick={()=>{handleSearch()}}
                >Search</button>
            </div>
            <div className='suggestion-container'>
                <Suggestion 
                setMovieData={setMovieData}
                suggestionData={suggestionData}
                setSearchInput={setSearchInput}
                />
            </div>
        </div>

        <div className="social-icon-container">
            <Link to={`https://www.github.com/mrsahiljaiswal`}>
                 <FaGithub className='social-icon '/>    
            </Link>
            
            <Link to={`https://www.linkedin.com/in/mrsahiljaiswal`}>
                <FaLinkedin className='social-icon '/>
            </Link>

            <Link to={`https://www.instagram.com/mr_sahiljaiswal`}>
            <FaInstagram className='social-icon '/>
            </Link>

            <Link  to={`mailto:sahiljaiswal757@gmail.com`}>
                <IoMdMail className='social-icon '/>
            </Link>

        </div>
    </main>
    
  )
}

export default SearchTab