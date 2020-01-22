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
      <div className="formApp">
        <Form setTeam={setTeam} />
      </div>
      <h1>Team Members</h1>
      <div className="flexStart">
        {team.map(member => {
          return (
            <div className="memberCard">
              <div className="name">
                <h1>{member.name}</h1>
              </div>
              <div className="bottomSection">
                <h6>{member.email}</h6>

                <h6>{member.role}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
