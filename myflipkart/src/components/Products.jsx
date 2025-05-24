import React, { Component } from 'react'
import { productsdata } from '../Navdata'
import {Box} from '@mui/material'



const Products = () => {
  return (
    <Box className='flex flex-row gap-25 justify-center m-5  rounded-[30px]'>
        {
           productsdata.map(data => (
            <Box className='flex flex-col gap-1 mt-5'>
                <img className='h-12 w-16' src={data.url}/>
                <p className='ml-1'>{data.name}</p>
             </Box>   
           ))
        }
    </Box>
  )
}

export default Products
