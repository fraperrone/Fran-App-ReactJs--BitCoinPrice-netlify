// generamos el routeer
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import Home from '../pages/Home'
import NavBar from '../components/NavBar'
import NotFound from '../components/NotFound404'
import Features from '../components/Features'
import Footer from '../components/Footer'

function RouterApp() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default RouterApp
