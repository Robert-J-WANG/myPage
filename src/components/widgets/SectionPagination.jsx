import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import MyTheme from "./MyTheme.js";
import "./pagination.scss";

export default function SectionPagination({ count, handlePage }) {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    handlePage(event, value);
  };

  return (
    <ThemeProvider theme={MyTheme}>
      <Stack spacing={2}>
        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          color="primary"
          size="large"
          page={page} // Controlled pagination
          onChange={handleChange}
          className="custom-pagination"
        />
      </Stack>
    </ThemeProvider>
  );
}
