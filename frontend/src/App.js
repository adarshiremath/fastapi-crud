import React, { useState } from "react";
import ProduceList from "./components/ProduceList";
import ProduceForm from "./components/ProduceForm";
import "./App.css";

function App() {
  const [produceToEdit, setProduceToEdit] = useState(null);

  const handleEdit = (produce) => {
    setProduceToEdit(produce);
  };

  const handleSave = () => {
    setProduceToEdit(null);
  };

  return (
    <div className="App">
      <h1>FastAPI CRUD with React</h1>
      <ProduceForm produceToEdit={produceToEdit} onSave={handleSave} />
      <ProduceList onEdit={handleEdit} />
    </div>
  );
}

export default App;
