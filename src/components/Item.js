import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(false)
  
  function handleClick() {
    setItem((item) => !item);
  }


  return (
    <li className={item ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={item ? "remove" : "add"}
      onClick={handleClick} >{item ? "Remove From" : "Add to"}</button>
    </li>
  );
}

export default Item;
