import React, { Component, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
 
const animatedComponents = makeAnimated();
 

 
const MultiSelectDropdown =()=>{
  
    const Countries = [
        { label: "Deepak (Frontend Developer)", value: 355, Id:1},
        { label: "Aman (Tester)", value: 54, Id:3 },
        { label: "Ritesh (Frontend Developer)", value: 43 , Id:4},
        { label: "Sakshi (Backend Developer)", value: 61 , Id:90},
        { label: "shruti (Backend Developer)", value: 965, Id:12 },
        { label: "Rahul (Frontend Developer)", value: 46 , Id:10},
        { label: "Yogesh (Tester)", value: 58 ,Id:20}
      ];
    
      const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = e => {
        setSelectedOption(e);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={Countries} components={animatedComponents}
               placeholder="Select employess.."
               value={selectedOption} 
               onChange={handleChange}
              isMulti />
          </div>
          <div className="col-md-4"></div>
        </div>

        {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Options</b><br />
        <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
      </div>}

      </div>
    );
  }
 

 
export default MultiSelectDropdown;