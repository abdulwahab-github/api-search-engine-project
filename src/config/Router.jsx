import React from 'react'
import "../App.css"
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom'
import Dash from "../components/Dash"
import Post from '../components/Post'
import Comment from '../components/Comment'
function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dash />} >

            <Route path='post' element={<Post />} />
            <Route path='comment/*' element={<Comment />} />

          </Route>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default AppRouter;