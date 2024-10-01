import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Content-info.css"

const ContentInfo = ({ movieData }) => {

    const [bgStyle, setBgStyle] = useState({})
    const [posterStyle, setPosterStyle] = useState({})

    const navigate = useNavigate();

    const updateBg = (movieData) => {
        const bgPoster = movieData?.backdrop_path;
        const mainPoster = movieData?.poster_path;

        setBgStyle({
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.85)) , url(https://image.tmdb.org/t/p/original${bgPoster}.jpg)`
        })

        setPosterStyle({
            backgroundImage: `url(https://image.tmdb.org/t/p/original${mainPoster}.jpg)`
        })
    }

    useEffect(() => {
        if (movieData) {
            updateBg(movieData)
        }
    }, [movieData])

    const handleClick = () => {
        navigate(`/`)
    }

    // Ensure movieData is available before rendering
    if (!movieData || typeof movieData !== 'object') return (
        <h1>No Data Available</h1>
    );

    return (
        <div className='content-container' style={bgStyle}>
            <div className='content-header'>
                <button className="back-btn" onClick={handleClick}>Back</button>
            </div>

            <div className="movie-content-container" id="movieDetails">
                <div className="poster-container" style={posterStyle}>
              
                </div>
                <div className='content-data'>
                    <h1 id="title">{movieData.title}</h1>
                    <h3 id="releaseDate">
                        Release-Date: {movieData.release_date}</h3>
                    <h4 id="popularity">Popularity: {movieData.popularity}</h4>
                    <p className='summary-title'>Summary:</p>
                    <p id="summary">
                         {movieData.overview}</p>
                </div>
                
            </div>
        </div>
    )
}

export default ContentInfo;
