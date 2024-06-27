import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ UserName: '', age: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.UserName) {
      errors.UserName = "Username is required";
    }
    if (!values.age) {
      errors.age = "Age is required";
    } else if (!/^\d+$/.test(values.age) || values.age <= 0) {
      errors.age = "Age must be a positive number";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      setUserList([...userList, formData]);
      setFormData({ UserName: '', age: '' });
    } else {
      setIsSubmitted(false);
    }
  };

  const removeUser = (index) => {
    setUserList(userList.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h2>Sign Up</h2>
      {isSubmitted && Object.keys(formErrors).length === 0 ? (
        <div>
          <p>You have successfully submitted the form</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form_grp">
            <label>Username</label>
            <input type="text" name="UserName" value={formData.UserName} onChange={handleChange} />
            {formErrors.UserName && <p className="error">{formErrors.UserName}</p>}
          </div>
          <div className="form_grp">
            <label>Age</label>
            <input type="text" name="age" value={formData.age} onChange={handleChange} />
            {formErrors.age && <p className="error">{formErrors.age}</p>}
          </div>
          <button type="submit">Add User</button>
        </form>
      )}
      <h3>User List</h3>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            {user.UserName} ({user.age}) <button onClick={() => removeUser(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
