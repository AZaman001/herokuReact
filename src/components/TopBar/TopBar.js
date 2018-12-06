import React from 'react';
import temp from '../images/temp.png';
import user from '../images/u.03.png';

const topBar = {
    padding: "10px",
    backgroundColor: "#D9E3F0",
    marginBottom: "40px"
};

const logo = {
  width: "20px",
  height: "25px",
  margin: "5px"
};

const profile = {
  position: "absolute",
  right: 115,
  width: "40px",
  height: "40px"
};

const status = {
  position: "absolute",
  right: 25,
};

function TopBar() {
  return (
    <div style={topBar}>
        <img src={temp} style={logo}  alt =''/>
        <h>Water Leakage Monitoring</h>
        <img src={user} style={profile} alt = ''/>
        <button type="button" class="btn btn-outline-success" style={status}>Sign Out</button>
    </div>
  );
}

export default TopBar;