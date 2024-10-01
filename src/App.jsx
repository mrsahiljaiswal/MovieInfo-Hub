import { SearchTab , ContentInfo } from './Components'
import { Route , createRoutesFromElements , Routes , createBrowserRouter } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

function App() {
  const [ movieData , setMovieData ] = useState("not availabe")

  return (
    <>
      <Routes>
        <Route path='/' element={<SearchTab setMovieData={setMovieData}/>}/>
        <Route path='search' element={<SearchTab setMovieData={setMovieData} />}/>
        <Route path='contentinfo/:contentinfo' element={<ContentInfo movieData={movieData} />} />
      </Routes>
    </>
  )
}

export default App
