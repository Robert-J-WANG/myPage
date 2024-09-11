import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import MyTheme from "../MyTheme.js";
import "./pagination.scss";

export default function SectionPagination({ count, handlePage }) {
  const [page, setPage] = useState(1);

  /* useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => {
        const nextPage = prevPage >= count ? 1 : prevPage + 1;
        handlePage(null, nextPage); // Invoke handlePage with the new page
        return nextPage;
      });
    }, 6000); // Auto change page every 6 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [count, handlePage]); */

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
