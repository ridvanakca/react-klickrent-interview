import { useState, useEffect } from "react";
import api from "../api";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await api.get(url);
      if (response) {
        setData(response.data.machines);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
