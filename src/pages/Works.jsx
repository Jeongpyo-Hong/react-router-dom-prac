import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { data } from "../shared/data";

const Works = () => {
  const location = useLocation();

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.id}&nbsp;
          <Link to={`/works/${item.id}`}>{item.todo}</Link>
        </div>
      ))}
    </div>
  );
};

export default Works;
