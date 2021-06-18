import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, setMode] = useState(true);
  console.log(mode);

  function onDarkModeClick() {
    setMode((mode) => !mode);
  }

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (mode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick}/>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
