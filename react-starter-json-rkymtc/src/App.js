import React, { useState } from "react";
import DATA from "./data.json";
import Assistans from "./components/Assistans";
import List from "./components/List";
import NonAssistants from "./components/NonAssistants";
import Groups from "./components/Groups";
function App() {
  const groupNames = DATA.reduce((member, item) => {
    member[item.group] = "";
    return member;
  }, {});
  return (
    <>



      <List data={DATA}></List>
      <Assistans data={DATA}></Assistans>
      <NonAssistants data={DATA}></NonAssistants>
      {Object.keys(groupNames).map((groupName) => (<Groups data={DATA} groupName={groupName}></Groups>))}
    </>
  );
}

export default App;
