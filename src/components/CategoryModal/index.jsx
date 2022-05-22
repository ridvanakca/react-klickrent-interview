import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CategoryList from "../CategoryList";

const CategoryModal = ({ open, handleClose }) => {
  const [query, setQuery] = useState("");

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            DIRECT REQUEST
          </Typography>
          <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container maxWidth='sm'>
        <TextField sx={{ margin: "2rem 0", width: "100%" }} value={query} onChange={(event) => setQuery(event.target.value)} id='outlined-search' label='Machine Name' type='search' />
        <CategoryList query={query} />
      </Container>
    </Dialog>
  );
};

export default CategoryModal;
