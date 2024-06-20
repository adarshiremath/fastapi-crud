import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getAllProduce = async () => {
  return await axios.get(`${API_URL}/produce`);
};

export const getProduce = async (id) => {
  return await axios.get(`${API_URL}/produce/${id}`);
};

export const createProduce = async (data) => {
  return await axios.post(`${API_URL}/produce`, data);
};

export const updateProduce = async (id, data) => {
  return await axios.put(`${API_URL}/produce/${id}`, data);
};

export const deleteProduce = async (id) => {
  return await axios.delete(`${API_URL}/produce/${id}`);
};
