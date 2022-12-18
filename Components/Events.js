import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';



const ViewEvent = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)
  const back = () => {
    console.log("back ");
    navigate(`/dashboard/${username}`);
  }

  const [index, setIndex] = useState(0);
  const [dep, setDep] = useState(
    []
  )

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [cust, setCust] = useState({
    "custid": 0,
    "name": "",
    "age": 0,
    "gender": "",
    "email": "",
    "phone": "",
    "address": "",
    "username": "",
    "password": "",
    "dependancies": []
  })

  const username = cust.username;

  const subevent = (val) => {
    sessionStorage.setItem("event", val);
    window.location = `subevent/${id}`;
  }

  useEffect(() => {

    fetch(`http://localhost:59760/api/Event`)
      .then(res => res.json())
      .then(res => {
        setDep(res);

      })
      .catch(err => console.log(err));

    fetch(`http://localhost:59760/api/Customer/${id}`)
      .then(res => res.json())
      .then(res => {
        setCust(res);


      })
      .catch(err => console.log(err));

  }, [])
  console.log(dep);
  console.log(cust.username);


  return (
    <div>

      <h3 style={{ textAlign: "center",paddingTop: "4px", paddingBottom: "3px" }}>Events we have</h3>
      
      <Carousel activeIndex={index} onSelect={handleSelect}
            style={{paddingLeft:"400px",paddingTop:"7px"}}>
                {dep.map(e => (
              <Carousel.Item style={{width:"72%"}}>
                <img
                  className="d-block w-100"
                  src={e.eventimage}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{e.eventname}</h3>
                  <button onClick={subevent.bind(this, e.eventid)}  style={{backgroundColor:"rgb(151 229 220 / 58%)",borderRadius: "6px",paddingLeft:"15%", paddingRight:"15%",fontFamily:"cursive",fontSize:"18px"}}>Explore more</button>
                </Carousel.Caption>
              </Carousel.Item>
             
             ))}
            </Carousel>

      <Button variant="primary" onClick={back} style={{ marginLeft: "45%", marginTop: "2%", width: "10%", marginBottom:"4%"}}>Back</Button>
    </div >
  );

}
export default ViewEvent;
