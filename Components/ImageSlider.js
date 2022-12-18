import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const ImageSlider=()=>{
  
          const [index, setIndex] = useState(0);
          const [dep, setDep] = useState(
            []
          )
        
          const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
          };
          useEffect(() => {

            fetch(`http://localhost:59760/api/Event`)
              .then(res => res.json())
              .then(res => {
                setDep(res);
        
              })
              .catch(err => console.log(err));
            });
          return (
            <Carousel activeIndex={index} onSelect={handleSelect}
            style={{paddingLeft:"270px",paddingTop:"30px"}}>
                {dep.map(e => (
              <Carousel.Item style={{width:"72%"}}>
                <img
                  className="d-block w-100"
                  src={e.eventimage}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{e.eventname}</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
             
             ))}
            </Carousel>
          
        
        
    );

}

export default ImageSlider;