// src/components/ProduceList.js
import React, { useState, useEffect } from "react";
import { getAllProduce, deleteProduce } from "../services/produceService";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProduceList = () => {
  const [produce, setProduce] = useState([]);
  const navigate = useNavigate();

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
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Produce List
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/add")}
      >
        Add Produce
      </Button>
      <List>
        {produce.map((item) => (
          <ListItem key={item.id} divider>
            <ListItemText primary={item.name} secondary={item.description} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ProduceList;
