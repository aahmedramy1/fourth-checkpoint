import logo from './logo.svg';
import React from "react";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className = "App">
      <div className="card" style={{width: "18rem"}}>
        <ProfilePhoto />
        <div className="card-body">
          <FullName />
          <Address />
          <br />
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default App;
