// generamos el routeer
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import Home from '../pages/Home'
import NavBar from '../components/NavBar'
import NotFound from '../components/NotFound404'
import Features from '../components/Features'
import Footer from '../components/Footer'

import MainLayout from '../layouts/MainLayout'

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas que comparten el layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
