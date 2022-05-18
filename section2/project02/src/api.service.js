import axios from "axios";

export const getCategories = () => {
  return axios.get("https://api.publicapis.org/categories");
};
