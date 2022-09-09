import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/system";

const App = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography align="center" p={2} variant="h4" color="initial">
          Registration form
        </Typography>

        <Stack spacing={2}>
          <TextField label="Full Name" variant="outlined" />
          <TextField label="Email" variant="outlined" />

          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default App;
