import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
 const [state, setState] = useState(false);

 let handleToggle = () => {
  if (state === true) {
 setState(false);}
 else{
  setState(true);
 }
 }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = state ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleToggle} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
