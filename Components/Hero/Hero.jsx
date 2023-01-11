import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <Box sx={{ width: "100%", background: "#454c51" }}>
      <Container sx={{ width: "100%", background: "#454c51", height: "70vh" }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", height: "100%", color: "white" }}
        >
          <Typography variant="h2" textAlign="center">
            Welcome to Tradefare
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
