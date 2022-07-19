import React from "react";

function NonAssistants({ data }) {
  const results = data.filter((item) => item.assistant === false);
  return (
  
    <ul className=""> Asistan Olmayanlar ve Grupları
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

export default NonAssistants;
