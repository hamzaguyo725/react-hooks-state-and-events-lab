import React from "react";
import{useState} from "react"
import Item from "./Item";


function ShoppingList({ items }) {
  let Produce = items.filter(item => item.category === "Produce")
  let Dairy = items.filter(item => item.category === "Dairy")
  let Dessert = items.filter(item => item.category === "Dessert")
  // console.log(produceArray)

const [selectedCategory, setCategory] = useState(items)


let select = (value)=>{
 setCategory(value)
}


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e)=>{
           if(e.target.value === 'Produce'){
            select(Produce)
           }
          else if(e.target.value === 'Dairy'){
            select(Dairy)
           }
           else if(e.target.value === 'Dessert'){
            select(Dessert)
           }
        }} name="filter">
          <option value="All">Filter by category</option>
          <option  value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option  value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
