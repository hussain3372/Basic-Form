import React, { useState } from "react";
import Images from "./Images";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [toggle, setToggle] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePassword = (e) => {
    setpassword(e.target.value);
  };

  const openForm = () => {
    setToggle(true);
  };
  const closeForm = () => {
    setToggle(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log({ email, name, password });
    if (!email || !password) {
      alert("Fields are required");
    } else {
      alert("Your form is submitted");
    }
  };
  return (
    <div>
      <button onClick={openForm}>Open</button>

      {toggle && (
        <form onSubmit={handleChange} className="form">
          <br />
          <br />
          <label>Email</label>
          <br />
          <input
            placeholder="Enter Your Email"
            type="text"
            onChange={changeEmail}
            value={email}
            required
            autoFocus
          />
          <br />
          <br />
          <label>Name</label>
          <br />
          <input
            placeholder="Enter Your Name"
            type="text"
            onChange={changeName}
            value={name}
            required
            autoFocus
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            placeholder="Enter Your password"
            type="Password"
            onChange={changePassword}
            value={password}
            required
            autoFocus
          />
          <br />
          <br />
          <input type="submit" />
          <br />
          <br />
          <button onClick={closeForm}>Close</button>
        </form>
      )}
      <br />
      <br />
      <Images />
    </div>
  );
};

export default Login;
