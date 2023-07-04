import Axios from 'axios';
import { useState } from 'react';

const Form = ({ user, setUser }) => {
  const [file, setFile] = useState();

  // localhost url
  const url = 'http://localhost:7070/';

  // form handler
  const handleForm = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('firstName', user.firstName);
    form.append('lastName', user.lastName);
    form.append('email', user.email);
    form.append('description', user.description);
    form.append('file', file);

    // sent a post request to the server
    Axios.post(url + 'candidate', form)
      .then((res) => {
        alert('Your request submitted successfully 🫡');
      })
      .catch((err) => {
        alert('Something went wrong 🤕');
        console.log(err);
      });

    // to clear the form
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      description: '',
    });
    e.currentTarget.reset();
  };

  // input handler
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleForm}>
        <input
          placeholder="First name"
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Last name"
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder="About you"
          type="text"
          id="description"
          name="description"
          value={user.description}
          onChange={handleChange}
        />
        <input
          type="file"
          id="cv"
          name="file"
          required
          // handle file input
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
