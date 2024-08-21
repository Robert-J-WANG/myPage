import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import MyTheme from "../MyTheme.js";
import "./mui.css";

export default function SectionPagination({ count, handlePage }) {
  return (
    <ThemeProvider theme={MyTheme}>
      <Stack spacing={2}>
        <Pagination
          count={count}
          variant="outlined"
          color="primary"
          size="large"
          onChange={handlePage}
          className="custom-pagination" // Add a custom class
        />
      </Stack>
    </ThemeProvider>
  );
}
