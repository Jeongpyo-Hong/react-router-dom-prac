import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

const Work = () => {
  const { id } = useParams();

  // 어떤 todo인지 찾아보기
  // param으로 전달 받은 id값은 문자열이므로, 숫자로 변경
  const foundData = data.find((item) => {
    return item.id === parseInt(id);
  });

  return <h3>TODO: {foundData.todo}</h3>;
};

export default Work;
