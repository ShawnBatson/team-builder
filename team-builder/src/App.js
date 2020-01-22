import React from "react";
import logo from "./logo.svg";
import "./App.css";
import react, { useState } from "react";
import Form from "./form";

function App() {
  const [team, setTeam] = useState([]);
  return (
    <div className="App">
      {/* Render list of team members */}
      <Form setTeam={setTeam} />
      <h1>Team Members</h1>
      {team.map(member => {
        return (
          <div className="member">
            <h1>{member.name}</h1>
            <h6>{member.email}</h6>
            <h6>{member.role}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default App;
