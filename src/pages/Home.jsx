import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navi = useNavigate();

  return (
    <div>
      Home
      <br />
      <button onClick={() => navi("/works")}>Works 이동</button>
    </div>
  );
};

export default Home;
