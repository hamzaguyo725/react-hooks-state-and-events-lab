import React from "react";
import{useState} from "react"

function Item({ name, category }) {
  const [state, setState] = useState(true)
  const [isIn,setBtnState] = useState(false)
  let handleAdding = () =>{
    if (state === true) {
      setBtnState(true)
      setState(false);}
      else{
        setBtnState(false)
       setState(true);
      }
  }
  let nameClass = state ? "" : "in-cart";
  let buttonText = isIn ? "Remove From Cart" : "Add To Cart"
  return (
    <li className={nameClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAdding} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;