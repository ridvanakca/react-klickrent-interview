import { useState } from "react";
import api from "../api";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const response = await api.get(url);
      if (response) {
        setData(response.data.machines);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return { data, loading, getData };
};

export default useFetch;
