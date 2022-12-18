import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';

const ViewDetails = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [dep, setDep] = useState({
        "deptid": 0,
        "custid": 0,
        "eventid": 0,
        "subeventid": 0,
        "remarks": "",
        "cust": null,
        "event": null,
        "subevent": null
    })


    const [event, setEvent] = useState({
        "eventid": 0,
        "eventname": "",
        "eventimage": "",
        "dependancy": [],
        "subevent": []
    })
    const [sub, setSub] = useState({
        "subeventid": 0,
        "eventid": 0,
        "subeventname": "",
        "details": "",
        "budget": 0,
        "subeventimage": "",
        "event": null,
        "dependancy": []
    })

    let deptid = sessionStorage.getItem("depid");
    let did = parseInt(deptid);

    const back = () => {
        console.log("back ");
        navigate(`/view/${id}`);
      }


    useEffect(() => {
        //alert("useeffect" + did);
        fetch(`http://localhost:59760/api/Dependancy/${did}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setDep(res);
                console.log(res.deptid);

                const eid = res.eventid;
                const sid = res.subeventid;
                //alert("eid" + eid);
                fetch(`http://localhost:59760/api/Event/id/${eid}`)
                    .then(res => res.json())
                    .then(res => {
                        setEvent(res);

                        //alert("subevent" + sid);
                        fetch(`http://localhost:59760/api/Subevent/${sid}`)
                            .then(res => res.json())
                            .then(res => {
                                setSub(res);
                            })
                            .catch(err => console.log(err));

                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));


    }, [])

    return (
        <div>
            <MDBCard className='mb-3' style={{ width: "50%", marginLeft: "26%", marginTop: "3%", paddingBottom:"2%" ,background: "#fbeab6ad" }}>
                <MDBCardImage position='top' style={{ width: "70%", marginLeft: "15%", marginTop: "5%"}} src={sub.subeventimage} alt='...' />
                <MDBCardBody style={{alignItems:"center"}}>
                    <MDBCardTitle style={{
                        textTransform: "uppercase",
                        fontFamily: "inherit", fontSize: "x-large",textAlign:"center"
                    }}><b>Event Name: {event.eventname}</b></MDBCardTitle>
                    <MDBCardTitle style={{
                        textTransform: "uppercase",
                        fontFamily: "inherit", fontSize: "x-large" ,textAlign:"center"
                    }}>SubEvent Name: {sub.subeventname}</MDBCardTitle>
                    <MDBCardText>
                       
                        <h4 class="card-text" style={{textAlign:"center"}}>The budget is {sub.budget}</h4>
                        <h4 class="card-text" style={{textAlign:"center"}}>Details: {sub.details}</h4>
                    </MDBCardText>
                    
                    <Button variant="primary" onClick={back} style={{ marginLeft: "38%", marginTop: "2%", width: "23%", marginBottom:"1%"}}>Back</Button>
                </MDBCardBody>
            </MDBCard>


        </div>
    )
}

export default ViewDetails;