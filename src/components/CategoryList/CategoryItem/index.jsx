import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";

const CategoryItem = ({ group, index }) => {
  return (
    <li key={`group-${group.groupId}`}>
      <ul>
        <ListSubheader style={{ padding: "0.5rem", fontSize: "1.6rem", fontWeight: "700", backgroundColor: "#F0F0F0", marginBottom: "0.8rem" }}>{`Category #${(index += 1)}`}</ListSubheader>
        {group.products.map((product) => (
          <ListItem key={`item-${product.typeId}`}>
            <ListItemText primary={product.name} />
          </ListItem>
        ))}
      </ul>
    </li>
  );
};

export default CategoryItem;
