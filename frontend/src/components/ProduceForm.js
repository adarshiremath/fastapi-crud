import React, { useState, useEffect } from "react";
import { createProduce, updateProduce } from "../services/produceService";

const ProduceForm = ({ produceToEdit, onSave }) => {
  const [produce, setProduce] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (produceToEdit) {
      setProduce(produceToEdit);
    }
  }, [produceToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduce((prevProduce) => ({
      ...prevProduce,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (produce.id) {
      await updateProduce(produce.id, produce);
    } else {
      await createProduce(produce);
    }
    onSave();
    setProduce({
      name: "",
      description: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={produce.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="description"
        value={produce.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="number"
        name="price"
        value={produce.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="number"
        name="quantity"
        value={produce.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        required
      />
      <button type="submit">{produce.id ? "Update" : "Add"} Produce</button>
    </form>
  );
};

export default ProduceForm;
