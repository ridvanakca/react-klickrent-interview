import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import ListSubheader from "@mui/material/ListSubheader";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

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
            {/* <List>
              <ListItem button>
                <ListItemText primary='Phone ringtone' secondary='Titania' />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary='Default notification ringtone' secondary='Tethys' />
              </ListItem>
            </List> */}
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
              {[0, 1, 2, 3, 4].map((sectionId) => (
                <li key={`section-${sectionId}`}>
                  <ul>
                    <ListSubheader style={{ padding: 0 }}>{`Category ${sectionId}`}</ListSubheader>
                    {[0, 1, 2].map((item) => (
                      <ListItem style={{ padding: 0 }} key={`item-${sectionId}-${item}`}>
                        <ListItemText primary={`Item ${item}`} />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              ))}
            </List>
          </Container>
        </Dialog>
      </Box>
    </>
  );
};

export default Modal;
