import React, { useState, useEffect } from 'react';
import draw from './draw'
import './App.css';

function App() {
  const pixelEnum = { 0: ' ', 1: '-', 2: '|'};
  const [matrix, setMatrix] = useState([]);
  const [formError, setFormError] = useState([]);
  const [formValues, setFormValues] = useState({ width: 20, height: 20, padding: 4 });

  useEffect(() => {
    applyMatrix();
  }, []);

  const handleInputChange = e => {
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: Number(value)})
  }

  const applyMatrix = () => {
    let drawObj = draw.init(formValues.width, formValues.height, formValues.padding);
    setMatrix(drawObj.map(row => row.map(i => pixelEnum[i]).join``).join`\n`);
  }

 
const validate = () => {
  const errors = [];
  if(formValues.width < 20){
    errors.push("Error in width" );
  }
  if(formValues.height < 20){
    errors.push("Error in height" );
  }
  if(formValues.padding < 4){
    errors.push("Error in padding")
  } 
  return errors;
}

  const handleSubmit = (event) => {
    event && event.preventDefault();
    const errors = validate();
    if (errors) {
      setFormError(errors);
      return;
    }
    applyMatrix();
  }
  

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <div className="formInput">
        <label>Width:</label>
        <input name="width" type="number" step={5} value={formValues.width} onChange={handleInputChange}  />
      </div>
      <div className="formInput">
        <label>Height:</label>
        <input name="height" type="number" step={5} value={formValues.height} onChange={handleInputChange}  />
      </div>
      <div className="formInput">
        <label>Padding:</label>
        <input name="padding" type="number" step={2} value={formValues.padding} onChange={handleInputChange}  />
      </div>
      <input className="formSubmit" type="submit" value="Submit"  />
        {formError.map((value, index) => {
          return <div key={index}>{value}</div>
        })}
        <pre>{matrix}</pre>
    </form>
    </div>
  );
}

export default App;
