import React, { useState, useEffect } from "react";
import { getAllProduce, deleteProduce } from "../services/produceService";

const ProduceList = ({ onEdit }) => {
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    fetchProduce();
  }, []);

  const fetchProduce = async () => {
    const response = await getAllProduce();
    setProduce(response.data);
  };

  const handleDelete = async (id) => {
    await deleteProduce(id);
    fetchProduce();
  };

  return (
    <div>
      <h1>Produce List</h1>
      <ul>
        {produce.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProduceList;
