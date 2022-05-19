import React, { useEffect } from "react";
import List from "@mui/material/List";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ data, query, loading, getData }) => {
  
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
        {data && data.filter((group) => group.name.toLowerCase().includes(query.toLowerCase())).map((group, index) => <CategoryItem group={group} query={query} key={group.groupId} index={index} />)}
      </List>
    </>
  );
};

export default CategoryList;
