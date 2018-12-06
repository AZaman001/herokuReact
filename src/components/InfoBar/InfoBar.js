import React from 'react';
import leak from '../images/r.9.png';
import save from '../images/r.1.png';
import time from '../images/r.7.png';
import money from '../images/r.8.png';

const card1 = {
    //maxWidth: "10rem",
    //maxHeight: "10rem",
    height: "160px",
    width: "160px",
    position: "absolute",
    bottom: "5px",
    left: "150px",
    margin: "80px"
};

const card2 = {
    //maxWidth: "150px",
    //maxHeight: "150px",
    height: "160px",
    width: "160px",
    position: "absolute",
    bottom: "5px",
    left: "450px",
    margin: "80px"
};

const card3 = {
    //maxWidth: "15rem",
    //maxHeight: "10rem",
    height: "160px",
    width: "160px",
    position: "absolute",
    bottom: "5px",
    left: "750px",
    margin: "80px"
};


const card4 = {
    //maxWidth: "15rem",
    //maxHeight: "10rem",
    height: "160px",
    width: "160px",
    position: "absolute",
    bottom: "5px",
    left: "1050px",
    margin: "80px"
};

function InfoBar() {
  return (
    <div>
    <div class="card text-white bg-warning mb-3" style={card1}>
        <div class="card-body">
          <img src={leak} alt=''/>
        </div>
    </div>
    <div>
      <div class="card text-white bg-secondary mb-3" style={card2}>
        <div class="card-body">
            <img src={save} alt=''/>
        </div>
      </div>
    </div>
    <div>
      <div class="card text-white bg-success mb-3" style={card3}>
        <div class="card-body">
            <img src={time} alt = ''/>
        </div>
      </div>
    </div>
    <div>
      <div class="card text-white bg-info mb-3" style={card4}>
        <div class="card-body">
            <img src={money} alt=''/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default InfoBar;