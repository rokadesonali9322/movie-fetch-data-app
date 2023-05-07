import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowMovie from './Compoents/ShowMovie/ShowMovie'
import ShowSummary from './Compoents/ShowSummary/ShowSummary'
import './App.css'

import BookTiket from './Compoents/BookTiket/BookTiket'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowMovie />} />
          <Route path="/showsumary/:id" element={<ShowSummary />} />
          <Route path="/BookTiket" element={<BookTiket />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
