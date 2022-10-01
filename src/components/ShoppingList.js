import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  

  const handleSearch = e => {
    setSearch(e.target.value)
  }
  function handleCategoryChange(event) {
    console.log(event.target.value)
    setSelectedCategory(event.target.value);
  }
  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    // .filter(item => item.name.includes(search))
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  
  
  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
          onCategoryChange={handleCategoryChange} 
          onSearchChange={handleSearch} 
          search={search}
          category={selectedCategory}
        />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
