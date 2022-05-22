import React, { useState } from "react";
import CategoryModal from "../../components/CategoryModal";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Main = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <Box sx={{ margin: "10rem auto", textAlign: "center" }}>
        <Button variant='outlined' onClick={handleClickOpen}>
          Start inquiry
        </Button>
        <CategoryModal open={open} handleClose={handleClose} />
      </Box>
    </>
  );
};

export default Main;
