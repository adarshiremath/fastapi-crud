// src/components/ProduceForm.js
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createProduce,
  updateProduce,
  getProduce,
} from "../services/produceService";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.number().required("Required").positive(),
  quantity: Yup.number().required("Required").positive().integer(),
});

const ProduceForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      quantity: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      if (id) {
        await updateProduce(id, values);
      } else {
        await createProduce(values);
      }
      navigate("/");
    },
  });

  useEffect(() => {
    if (id) {
      const fetchProduce = async () => {
        const response = await getProduce(id);
        useFormik.setValues(response.data);
      };
      fetchProduce();
    }
  }, [id]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {id ? "Edit Produce" : "Add Produce"}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          margin="normal"
          id="description"
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
          fullWidth
          margin="normal"
          id="price"
          name="price"
          label="Price"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          fullWidth
          margin="normal"
          id="quantity"
          name="quantity"
          label="Quantity"
          type="number"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          error={formik.touched.quantity && Boolean(formik.errors.quantity)}
          helperText={formik.touched.quantity && formik.errors.quantity}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          {id ? "Update" : "Add"} Produce
        </Button>
      </form>
    </Container>
  );
};

export default ProduceForm;
