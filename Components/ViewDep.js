import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



const ViewDep = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  //console.log(id);

  const [dep, setDep] = useState(
    []
  )
  const [eveid,setEveid]=useState();
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
const back = () => {
    
    navigate(`/dashboard/${username}`);
}

const viewMore=(val)=>{
    sessionStorage.setItem("depid",val);
    window.location=`detail/${id}`;
  }

  const deleteEmployee=(did)=> {
    alert("are you sure");

    fetch ('http://localhost:59760/api/Dependancy/delete/'+ did,
    { method: 'DELETE',})
    .then( 
        
        res =>  {
          window.location.reload(false);


       }
    )
    .catch( err => console.error(err))               
} 

  useEffect(() => {

    fetch(`http://localhost:59760/api/Dependancy/customer/${id}`)
      .then(res => res.json())
      .then(res => {
        setDep(res);
 
      })
      .catch(err => console.log(err));

      //for getting event details
      
      //just for going back
      fetch(`http://localhost:59760/api/Customer/${id}`)
            .then(res => res.json())
            .then(res => {
                setCust(res)
                //console.log(cust);

            })
            .catch(err => console.log(err));


  }, [])
  const username = cust.username;
  //console.log(dep);
  return(
    <div>
    <div style={{
        display: 'block',
        width: 1200,
        padding: 30, margin: 'auto',
        marginTop: "3%"


    }}>
        <h2 style={{ textAlign: "center" }}>services you need</h2>
        <br />
        <MDBTable align='middle'>
            <MDBTableHead>
                <tr>
                    <th scope="col">Dependency Id:</th>
                    <th scope="col">event Id</th>
                    <th scope="col">Remarks</th>
                    <th scope="col">Action</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {dep.map(e => (
                    <tr key={e.deptid}>
                        <td>
                            <p className='fw-normal mb-1'>{e.deptid}</p>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>{e.eventid}</p>
                        </td>

                        <td>
                            <p className='fw-normal mb-1'>{e.remarks}</p>
                        </td>

                        <td>
                            <center><button className="btn btn-success" onClick={viewMore.bind(this,  e.deptid)}>View details</button></center>
                            
                            <br/><center><button className="btn btn-danger" onClick={deleteEmployee.bind(this,  e.deptid)} >Delete</button></center>
                        </td>
                    </tr>
                ))}
            </MDBTableBody>
        </MDBTable>
    </div>
    <Button variant="primary" onClick={back} style={{ marginLeft: "43%", marginTop: "2%" , marginBottom: "4%", width: "10%" }}>Back</Button>
</div>
  );

}

export default ViewDep;