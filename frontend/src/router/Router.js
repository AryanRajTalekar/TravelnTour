import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './../Pages/Home'
import Tours from './../Pages/Tours'
import ToursDetails from './../Pages/ToursDetails'
import Register from './../Pages/Register'
import SearchResult from './../Pages/SearchResult'
import Login from './../Pages/Login'


const Router = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigate to='/home' />} />
    <Route path='/home' element={<Home/>} />
    <Route path='/tour' element={<Tours/>} />
    <Route path='/tour/:id' element={<ToursDetails />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/tour/search' element={<SearchResult/>} />
    </Routes>

  );
};

export default Router