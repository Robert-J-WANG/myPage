import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function SectionPagination({ count, handlePage }) {
    return (
        <Stack spacing={2}>
            <Pagination count={count} variant="outlined" color="primary" size="large" onChange={handlePage} />
        </Stack>
    )
}

