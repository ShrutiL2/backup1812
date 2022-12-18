import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';




const Subevent = () => {

  const [searchTerm, setsearchTerm] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const [sub, setSub] = useState(
    []
  )
  const back = () => {
    console.log("back ");
    navigate(`/events/${id}`);
  }

  var eventid = sessionStorage.getItem("event");
  console.log(eventid);

  const addDependancy = (val) => {
    sessionStorage.setItem("subevent", val);
    window.location = `add/${id}`;
  }

  useEffect(() => {

    fetch(`http://localhost:59760/api/Subevent/event/${eventid}`)
      .then(res => res.json())
      .then(res => {
        setSub(res);

      })
      .catch(err => console.log(err));

  }, [])



  return (
    <div style={{ backgroundColor: " #eee" }}>

      <h2 style={{ textAlign: "center" }}>Events we have</h2>
      <br />
      <section style={{ alignItems:"center" }}>
        <input type="text" placeholder="Enter your highest budget" className="form-control"
          style={{ width: "42%",marginLeft:"30%" }}
          onChange={(f) => {
            setsearchTerm(f.target.value)
          }}
        />

        {sub.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.subeventname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (val.budget <= searchTerm)
          ) {
            return val;
          }



        }).map(e => (

          <MDBCard style={{ width: "1000px",marginLeft:"400px" ,marginTop:"20px",marginBottom:"20px" }}>
            <MDBRow className='g-0'>
              <MDBCol md='4'>
                <MDBCardImage src={e.subeventimage} alt='...' fluid />
              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody>
                  <MDBCardTitle>{e.subeventname}</MDBCardTitle>
                  <MDBCardText>
                    <p class="card-text">This is an {e.subeventname}</p>
                    <p class="card-text">The budget is {e.budget}</p>
                    <p class="card-text">{e.details}</p>
                  </MDBCardText>
                  <div class="col-md-8">

                    <button onClick={addDependancy.bind(this, e.subeventid)} color="info" rounded>add as dependancy</button>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>





        ))}

      </section >

      <Button variant="primary" onClick={back.bind(this)} style={{ marginLeft: "45%", marginTop: "1%", marginBottom:"2%", width: "10%" }}>Back</Button>
    </div >
  );

}
export default Subevent;
