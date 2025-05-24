import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Products from './components/Products.jsx'
import Slidebar from './components/Slidebar.jsx'
import {Box} from '@mui/material'



function App() {
  return (
    <div>
    <Navbar/>
     <Box>
      <Products/>
    </Box>
      <Slidebar/>
  
      
      
    

     </div>
  );
}

export default App
