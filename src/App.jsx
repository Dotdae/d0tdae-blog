import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./globalStyles"

// Pages.

import {Home, Projects, About} from './pages'


function App() {

  return (
   <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route index path="/projects"  element={<Projects/>} />
        <Route index path="/about"  element={<About/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
