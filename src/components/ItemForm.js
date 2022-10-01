import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit} ) {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   category: "Produce"
  // });

  // function handleChange(event) {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   });
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const newItem = {
  //     id: uuid(), // the `uuid` library can be used to generate an unique id
  //     name: formData.name,
  //     category: formData.category
  //   };
    
  //   onItemFormSubmit(newItem);
  // }

  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce',
    id: uuid()
  })
  // function addElement(element) {
  //   setArray([...array, element]);
  // }

  // const newItem = {
  //   id: uuid(), // the `uuid` library can be used to generate a unique id
  //   name: itemName,
  //   category: itemCategory,
  // };
  const handleChange = (e) => {
    // console.log(e)
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault()
        // console.log(e)
        onItemFormSubmit(formData)
      }}
      // onSubmit={() => handleSubmit}
      className="NewItem">
      <label>
        Name:
        <input 
          onChange={handleChange}  
          value={formData.name} 
          type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleChange} value={formData.category} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
