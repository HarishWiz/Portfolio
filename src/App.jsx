import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AmazonLogin from './Components/LoginPages/AmazonLogin'
import YahooSignin from './Components/LoginPages/YahooSignin'
import Main from './Components/Main'
import ErrorPage from './Components/ErrorPage';

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='amazon' element={<AmazonLogin/>}/>
    <Route path='/yahoo' element={<YahooSignin/>}/>
    <Route path='*' element={<ErrorPage/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
