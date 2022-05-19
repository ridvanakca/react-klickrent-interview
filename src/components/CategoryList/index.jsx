import React, { useState, useEffect } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";

const CategoryList = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3004/data")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data.map((datum) => datum.familyId));
          setData(data);
        }
      });
  };

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
        {data &&
          data.map((group) => (
            <li key={`group-${group.groupId}`}>
              <ul>
                <ListSubheader style={{ padding: "0.5rem", fontSize: "2rem", fontWeight: "700", backgroundColor: "#F0F0F0", marginBottom: "0.8rem" }}>{`Category ${group.groupId}`}</ListSubheader>
                {group.products.map((product) => (
                  <ListItem key={`item-${product.typeId}`}>
                    <ListItemText primary={product.name} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
      </List>
    </>
  );
};

export default CategoryList;
