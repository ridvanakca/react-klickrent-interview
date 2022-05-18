import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ResponsiveDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ margin: "10rem auto", textAlign: "center" }}>
        <Button variant='outlined' onClick={handleClickOpen}>
          Open full-screen dialog
        </Button>
      </Box>
    </>
  );
}
