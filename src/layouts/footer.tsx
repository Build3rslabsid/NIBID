import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100vw",
        marginTop: '20px',
        paddingBottom:'50px',
        zIndex: "1",
      }}
    >
      <Container
        sx={{
          // border: "1px solid red",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >

        <Box sx={{ display: "flex", flexDirection: "row", paddingX: { xs: "10px", sm: "0px" }, gap: { sm: "40px", xs: "30px" } }}>
          <a href="https://twitter.com/nib_id" target="_blank">
            <Box
              sx={{
                display: 'flex',
                height: "100%",
                padding: { sm: "16px 0", xs: "20px 0" },
                img: {
                  height: "35px",
                },
                cursor: "pointer"
              }}
            >
              <img alt="" src="./twitter128.png" />
            </Box>
          </a>

          <a href="https://nibid-documentation.gitbook.io/nibid-documentation/" target="_blank">
            <Box
              sx={{
                display: 'flex',
                height: "100%",
                padding: { sm: "16px 0", xs: "20px 0" },
                img: {
                  height: "35px",
                },
                cursor: "pointer"
              }}
            >
              <img alt="" src="./gitbook.png" />
            </Box>
          </a>
        </Box>


      </Container>
    </Box>
  );
}
