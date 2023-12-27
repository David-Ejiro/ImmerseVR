import React from "react";
import img from "../assets/image 81.png";
import "./Home.css";

const Home = () => {
  return (
    <div id="welcomepg">
      <main className="left-container">
        <h1>Watch Movies In Virtual Reality</h1>
        <p>Download and watch offline wherever you are</p>
        <button className="button">Sign up</button>
        <p id="guest">continue as a guest</p>
      </main>
      <aside className="right-container">
        <div id="imgcard">
          <img src={img}></img>
        </div>
      </aside>
    </div>
  );
};

export default Home;
