import React from 'react'
import { SlidebarData } from '../Navdata.js';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from '@mui/material';


const Image = styled('img')({
    width: '100%',
    height: 300,
    padding:10,
    paddingBottom:0

});


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slidebar = () => {
  return (
    <div>
        <Carousel responsive={responsive}
         autoPlay={true}
        autoPlaySpeed={2000}
        showDots={true}
        infinite={true}
        >
            {
                SlidebarData.map(data => (
                    <Image src={data.url}/>
                ))
            }
        </Carousel>
    </div>
  )
}

export default Slidebar
