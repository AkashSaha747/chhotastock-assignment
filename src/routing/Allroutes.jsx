import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Gateway from '../Pages/Gateway'

const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Gateway/>}></Route>
    </Routes> 

    </>
  )
}

export default Allroutes
