import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [FormData], setFormData] = useState({
    UserName: '',
    age: ''
  });
  const [formErrors, setFormErrors] = useState({});
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2537925222.
  const [isSubmitted, setIsSubmitted] = useState(false);

// Suggested code may be subject to a license. Learn more: ~LicenseLog:242998741.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
const validate = (values) => {
  const errors = {};
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1113894838.
  if (!values.UserName){
    errors.UserName = "Username is required"

  }
  if ( !values.age) {
    errors.age = "Age is required"
  }
  return errors;
};
const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(FormData));
  setIsSubmitted(true);
};
if (object.keys(formErrors).length === 0){
  setIsSubmitted(true);
}
}
return (
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2838823882.
  <div className="App">
    <h2>Sign Up </h2>
    {isSubmitted ? (
      <div>
        <p>You have successfully submitted the form</p>
    ): ( 
      <form onSubmit = {handleSubmit}
      <div className='Form_grp'
      <label>Username</label>
    
      <input type="text" name="UserName" value={FormData.UserName} onChange={handleChange} />
      <input type="" name="age" value={FormData.age} onChange={handleChange} />
    <div className='form_grp'>
    </div>
      
    )
    <form onSubmit={handleSubmit}></form>
)

  
