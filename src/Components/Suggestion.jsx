import React, { useEffect, useRef, useState } from 'react';
import "./suggestion.css";

const Suggestion = ({ suggestionData, setSearchInput 
    , setMovieData }) => {
   
    const suggestionRef = useRef(null)
    const [ selectedIndex , setSelectedIndex ] = useState(-1)

    const handleClick = (e) => {
        setSearchInput(e.target.innerText);
        setMovieData(suggestionData[e.target.id])
        setSelectedIndex(-1)
        document.querySelector("ul").classList.remove("hidden");
        document.querySelector("ul").classList.add("hidden");
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter" && selectedIndex>=0){
            setSearchInput(suggestionData[selectedIndex].title);
            setSelectedIndex(-1);
            setMovieData(suggestionData[selectedIndex])
            document.querySelector("ul").classList.remove("hidden");
            document.querySelector("ul").classList.add("hidden");
           }
    }

    const handleArrowKey = ( e ) => {

        if(Array.isArray(suggestionData)){
            if(e.key === "ArrowUp"){
                setSelectedIndex((prevValue)=>(prevValue - 1 + suggestionData.length) % suggestionData.length );
            }
            else if(e.key === 'ArrowDown'){
                setSelectedIndex((prevValue)=>(prevValue + 1 ) % suggestionData.length)
            }
        }
    }

    useEffect(()=>{

        const handleKeyDownEvent = (e) =>{
            if(e.key === "Enter"){
                handleKeyDown(e);
            }
            else if(e.key === "ArrowDown" || e.key === "ArrowUp"){
                handleArrowKey(e)
            }
        }

            window.addEventListener( "keydown" , handleKeyDownEvent )

            return (()=>{
                window.removeEventListener( "keydown" , handleKeyDownEvent)
            })
        
    } , [ selectedIndex , suggestionData ] )


    useEffect(() => {
        if (!Array.isArray(suggestionData) || suggestionData.length === 0) {
            setSelectedIndex(-1); 
            setMovieData(null)
            
        } 
        else if (selectedIndex >= 0 && suggestionRef.current) {
            const selectedItem = suggestionRef.current.children[selectedIndex];
            if (selectedItem) {
                selectedItem.scrollIntoView({ block: 'nearest' }); 
            }
        }
    }, [selectedIndex, suggestionData]);

    return (
        <ul className='suggestion-list' ref={suggestionRef}>
            {Array.isArray(suggestionData) && suggestionData.map((result, index) => {
                const isSelected = index === selectedIndex;
                return (
                    
                    <li
                        key={index}
                        onClick={handleClick}
                        className={`suggestion-item ${isSelected ? "selected" : ""}`} 
                        id={index}
                    >
                        {result.title}
                    </li>
                )
            })}
        </ul>
    );
}

export default Suggestion;
