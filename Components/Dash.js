import React, { useState, useEffect } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import {useNavigate,useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Dash(){

  const {username}=useParams();
  const navigate= useNavigate();
  //const [id,setId]=useState(0);
  const logOut =()=>{
    sessionStorage.clear();
    navigate('/login');
  }
  const lookdep =()=>{
    navigate(`/view/${id}`);
  }

  const showevents =()=>{
    navigate(`/events/${id}`);
  }

  const [cust,setCust]= useState({
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
});
useEffect(() => {

  //alert("inside");
  //get manager details
      fetch(`http://localhost:59760/api/Customer/details/${username}`)
      .then(res => res.json())
      .then(res => {
          setCust(res);
          //console.log(cust.custid);
          //setId=res.custid;
      })
      
    },[]
);
console.log(cust.custid);
const id = cust.custid;


    return(
    <div>
      <button className="btn btn-secondary" onClick={logOut}style={{marginLeft:"93%", marginTop:"1%"}}>Logout</button>
        <Container style={{marginTop:"0.01px"}}>
                <Card style={{background:"#0bc4c4"}}>

            <Card.Header><h2 style={{marginLeft:"35%"}}>{cust.name}'s Dashboard</h2></Card.Header>
            </Card>
            
            <Card style={{marginTop:"0.5%",background:"#b4e8e9", height:"180px"}}>
              <table style={{width:"80%", marginLeft:"21%"}}>
              
                <tr>
                  <td><b style={{marginLeft:"4%",fontSize:"22px"}}>Email:</b><i style={{marginLeft:"4%",fontSize:"19px"}}>{cust.email}</i> </td>
                  <td><b style={{marginLeft:"4%",fontSize:"22px"}}>Age:</b><i style={{marginLeft:"4%",fontSize:"19px"}}>{cust.age}</i> </td>
                </tr>
                <br/>
                <tr>
                  <td><b style={{marginLeft:"4%",fontSize:"22px"}}>Address:</b><i style={{marginLeft:"4%",fontSize:"19px"}}>{cust.address}</i> </td>
                  <td><b style={{marginLeft:"4%",fontSize:"22px"}}>Gender:</b><i  style={{marginLeft:"4%",fontSize:"19px"}}>{cust.gender}</i> </td>
                </tr>
                <br/>
                <tr>
                  <td><b style={{marginLeft:"4%",fontSize:"22px"}}> Username: </b><i style={{marginLeft:"4%",fontSize:"19px"}}>{cust.username}</i></td>
                  <td><b style={{marginLeft:"4%",fontSize:"22px"}}>Phone number: </b><i style={{marginLeft:"4%",fontSize:"19px"}}>{cust.phone}</i> </td>
                </tr>
              </table>

            </Card>
<div style={{marginTop:"3%"}}>
      <MDBRow>
      <MDBCol sm='6'>
        <MDBCard style={{height:"160%",background:"rgb(160 186 186 / 30%)"}}>
          <MDBCardBody>
            <MDBCardTitle>All Events</MDBCardTitle>
            <MDBCardText>
              Ready to get surprised by the events we organize...
              Have a look at all events
            </MDBCardText>
            
            <MDBBtn onClick={showevents} style={{marginTop:"3%",backgroundColor:"#0bc4c4"}}>have a look!!</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard style={{height:"160%",background:"rgb(160 186 186 / 30%)"}}>
          <MDBCardBody>
            <MDBCardTitle>Dependencies</MDBCardTitle>
            <MDBCardText>
              Have a look at what are your requirements from us...
            </MDBCardText>
            <MDBBtn onClick={lookdep} style={{marginTop:"3%" ,backgroundColor:"#0bc4c4"}}>View It!!</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
    </MDBRow>
    </div>
    </Container>

    </div>
    );
}

export default Dash;