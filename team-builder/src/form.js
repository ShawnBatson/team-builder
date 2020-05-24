import React, { useState } from "react";

const Form = props => {
  const [person, setPerson] = useState({ name: "", email: "", role: "" });

  const changeHandler = event => {
    setPerson({
      ...person,
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.role]: event.target.value
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    props.setTeam(prevTeam => [...prevTeam, person]);
    setPerson({ name: "", email: "", role: "" });
  };

  return (
    <form className="formAdd" onSubmit={submitHandler}>
      <label>
        Name:
        <input name="name" value={person.name} onChange={changeHandler} />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={changeHandler} />
      </label>
      <label>
        Role: <input name="role" value={person.role} onChange={changeHandler} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
