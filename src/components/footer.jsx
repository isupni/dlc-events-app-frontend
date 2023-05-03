import { Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const wrapIcon = {
    verticalAlign: "middle",
    display: "flex",
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          boxShadow: "1px -1px 3px",
          backgroundColor: "grey",
          padding: "20px",
        }}
      >
        <Stack direction="row">
          <Stack spacing={1} sx={{ width: "40%", paddingLeft: "10%" }}>
            <Typography textAlign="left" fontWeight="bold" variant="h5">
              Contact
            </Typography>
            <Link
              color="inherit"
              underline="hover"
              href="mailto:sebastiano.secchiaroli@klabs.it"
            >
              <Typography textAlign="left" sx={wrapIcon}>
                <EmailIcon sx={{ paddingRight: "5px" }} />
                sebastiano.secchiaroli@klabs.it
              </Typography>
            </Link>
            <Link
              color="inherit"
              underline="hover"
              href="https://www.linkedin.com/in/sebastiano-secchiaroli-1a6328187/"
            >
              <Typography textAlign="left" sx={wrapIcon}>
                <LinkedInIcon sx={{ paddingRight: "5px" }} /> Sebastiano
                Secchiaroli
              </Typography>
            </Link>
            <Link
              color="inherit"
              underline="hover"
              href="https://github.com/Sebssekk"
            >
              <Typography textAlign="left" sx={wrapIcon}>
                <GitHubIcon sx={{ paddingRight: "5px" }} />
                Sebssekk
              </Typography>
            </Link>
          </Stack>
          <Typography alignSelf="center" sx={{ color: "white" }}>
            @ 2022 Sebssekk Creation for training purpose
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "30px",
          backgroundColor: "#4D4B4A",
        }}
      />
    </React.Fragment>
  );
};

export default Footer;
