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

  if(formValues.width < 20 || formValues.width > 300){
    errors.push(`width value should be even and greater or equal to 20 and less than or equal 300 , ${formValues.width} given`);
  }
  if(formValues.height < 20 || formValues.height > 300){
    errors.push(`height value should be even and greater or equal to 20 and less than or equal 300 , ${formValues.height} given`);
  }
  if(formValues.padding < 4 || formValues.padding > 60 || formValues.padding % 2 != 0){
    errors.push(`Padding value should be even and greater or equal to 4 and less than or equal 60 and even number, ${formValues.padding} given`)
  } 
  return errors;
  
}

  const handleSubmit = (event) => {
    event && event.preventDefault();
    const errors = validate();
    if (errors.length > 0) {
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
          return <div className="formErrors" key={index}>{value}</div>
        })}
        <pre>{matrix}</pre>
    </form>
    </div>
  );
}

export default App;
