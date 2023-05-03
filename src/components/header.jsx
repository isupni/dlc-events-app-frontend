import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import {
  Parallax,
  CompanyName,
  CompanyAvatar,
} from "./theming/companyVariation";

const Header = () => {
  return (
    <Stack spacing={-10}>
      <Parallax elevation={3}>
        <CompanyName />
      </Parallax>
      <Stack direction="row" spacing={13}>
        <CompanyAvatar
          alt="Training Company Logo"
          sx={{
            width: 300,
            height: 300,
            left: 50,
          }}
        />

        <Typography variant="h1" alignSelf={"center"} fontWeight={"bold"}>
          Simple Event App
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
