import React from "react";

export default function List({ data }) {
  return (
    <ul> Tüm Sonuçlar
      {data.map((item) => {
        return (
          <>
            <li key={item.id}>{item.name.toUpperCase()}</li>
          </>
        );
      })}
    </ul>
  );
}
