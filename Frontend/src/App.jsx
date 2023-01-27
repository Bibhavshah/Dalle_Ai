import React from "react";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"

import {logo} from "./ai_mern_app_assets/assets"
import {Home, CreatePost} from './pages/index'

function App() {
  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to='/'>
          <img src={logo} alt="open ai logo" className="w-28 object-contain" />
        </Link>
        <Link to="/CreatePost" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9faf6] min-h-[calc(100vh-73px)]">
         <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/CreatePost" element={<CreatePost/>}>Create Post</Route>
         </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App;
