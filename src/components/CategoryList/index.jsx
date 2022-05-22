import List from "@mui/material/List";
import CategoryItem from "./CategoryItem";
import useFetch from "../../hooks/useFetch";

const CategoryList = ({ query }) => {
  const { data, loading } = useFetch(`/api?query=${query}`);

  return (
    <>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: "100vh",
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
