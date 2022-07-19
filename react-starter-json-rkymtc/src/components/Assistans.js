import React from "react";
import "./style.scss";
function Assistans({ data }) {
  const results = data.filter((item) => item.assistant === true);
  return (
    <ul className="assistant"> Asistanlar ve Grupları
      {results.map((item) => (
        <>
          <li key={item.id}>
          <span>{item.name.toUpperCase()}</span>  - <span>{item.group.toUpperCase()}</span>
          </li>
        </>
      ))}
    </ul>
  );
}

export default Assistans;
