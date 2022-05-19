import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import CategoryItem from "./CategoryItem";
import api from "../../api";

const CategoryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const response = await api.get('/data');
      if(response) {
        setData(response.data);
        setLoading(false);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 500,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}>
        {loading && <p>Loading...</p>}
        {data && data.map((group, index) => <CategoryItem group={group} key={group.groupId} index={index} />)}
      </List>
    </>
  );
};

export default CategoryList;
