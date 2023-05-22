import React from "react";
import img from '../assets/image 81.png'
import "./Home.css";

const Home = () => {
  return (
    <div >
      <main>
        <h1>Watch Movies In Virtual Reality</h1>
        <p>Download and watch offline wherever you are</p>
        <button>sign up</button>
      </main>
      <aside>
        <img src={img}></img>
      </aside>
    </div>
  );
};

export default Home;
