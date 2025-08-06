import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Img1 from './img1.jpg'
import Img2 from './img2.jpg'
import Img3 from './img3.jpg'
import Img4 from './img4.jpg'
 
const images = [
  Img1,
  Img2,
  Img3,
  Img4
];
 
const Corousel = () => {
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', zIndex: -0.5}}>
      <img
        src={images[index]}
        alt="carousel"
        style={{
          margin: "auto",
          marginTop: 70,
          marginLeft: 70,
          width: '25vw',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: 20 ,
          transition: 'opacity 2s',
          
        }}
      />
    </Box>
  );
};
 
export default Corousel;


      // <img
      //   src={Img1}
      //   alt="carousel"
      //   style={{
      //     margin: "auto",
      //     marginTop: 50,
      //     marginLeft: 40,
      //     width: '20vw',
      //     height: 'auto',
      //     objectFit: 'cover',
      //     transition: 'opacity 1s',
      //   }}
      // />
      // <img
      //   src={Img2}
      //   alt="carousel"
      //   style={{
      //     margin: "auto",
      //     marginTop: 50,
      //     marginLeft: 40,
      //     width: '20vw',
      //     height: 'auto',
      //     objectFit: 'cover',
      //     transition: 'opacity 1s',
      //   }}
      // />
      // <img
      //   src={Img3}
      //   alt="carousel"
      //   style={{
      //     margin: "auto",
      //     marginTop: 50,
      //     marginLeft: 40,
      //     width: '20vw',
      //     height: 'auto',
      //     objectFit: 'cover',
      //     transition: 'opacity 1s',
      //   }}
      // />
      // <img
      //   src={Img4}
      //   alt="carousel"
      //   style={{
      //     margin: "auto",
      //     marginTop: 50,
      //     marginLeft: 40,
      //     width: '20vw',
      //     height: 'auto',
      //     objectFit: 'cover',
      //     transition: 'opacity 1s',
      //   }}
      // />