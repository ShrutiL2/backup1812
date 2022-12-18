import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [UsernameError, setUsernameError] = useState('');
  const [PasswordError, setPasswordError] = useState('');



  const validate = () => {

    console.log(username);
    console.log(password);
    let res = 0
    if (username == " ") {

      setUsernameError("username cannot be blank");
      res = res + 1;
    }

    if (password == " ") {
      setPasswordError("password cannot be blank");
      res = res + 1;
    }
    if (res == 0) {
      return true;

    }
    else {

      return false;
    }

  }

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


  const navigate = useNavigate();

  const LoginPage = () => {

    // setUsernameError('');
    // setPasswordError('');
    alert("hello")
    if (validate()) {
      //alert("hi")
      fetch(`http://localhost:59760/api/Customer/login/${username}/${password}`)
      
        .then(res => res.json())
        .then(res => {
          console.log(res);
          alert(JSON.stringify(res));
          // setCust(res);
          if(res!= null){
          navigate(`/dashboard/${username}`);
          }
          else{
            alert("invalid");
          }
          //alert(res.username)
        })
        .catch(err => console.log(err));

    }
  }


  const handleChange = (event) => {
    setUsername(event.target.value);
  }

  const handleChangee = (event) => {
    setPassword(event.target.value);

  }

  // useEffect(() => {

  // }, [issent])


  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column' style={{ backgroundColor: "#f8f8ff", borderRadius: '2rem' }}>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>


              <MDBInput onChange={handleChange} wrapperClass='mb-4 w-100' label='Username' type='text' size="lg" />
              {username === "" && <p style={{ color: "red" }}>{UsernameError}</p>}

              <MDBInput onChange={handleChangee} wrapperClass='mb-4 w-100' label='password' type='password' size="lg" />
              {password === "" && <p style={{ color: "red" }}>{PasswordError}</p>}

              {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' /> */}

              <button className='btn btn-primary' size='lg' onClick={LoginPage} >
                Login
              </button>

              <hr className="my-4" />
              <div>
                <p className="mb-0" >Don't have an account? <a href="/register" class="text-black-50 fw-bold" > Sign Up</a></p>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;

