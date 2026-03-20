import axios from "axios";
import { API_BASE_URL } from "@/config";

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/cv`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  async getCvInfo() {
    const response = await apiClient.get("/getCvInfo");
    return response.data;
  },
};
