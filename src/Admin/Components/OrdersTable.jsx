import * as React from 'react';
import { Avatar, Button, Card, CardHeader, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper } from '@mui/material';

// Example order data
const createData = (id, customer, date, amount, status) => {
    return { id, customer, date, amount, status };
};

const rows = [
    createData(1, 'John Doe', '2024-11-10', 150.00, 'Shipped'),
    createData(2, 'Jane Smith', '2024-11-12', 245.50, 'Pending'),
    createData(3, 'Alice Brown', '2024-11-13', 99.99, 'Delivered'),
    createData(4, 'Bob Johnson', '2024-11-14', 350.20, 'Shipped'),
    createData(5, 'Charlie Davis', '2024-11-15', 179.40, 'Pending'),
    createData(6, 'Dana Wilson', '2024-11-16', 89.99, 'Delivered'),
    createData(7, 'Eva White', '2024-11-17', 120.00, 'Shipped'),
    createData(8, 'Frank Harris', '2024-11-18', 200.50, 'Pending'),
    createData(9, 'Grace Lee', '2024-11-19', 90.00, 'Delivered'),
    createData(10, 'Henry Walker', '2024-11-20', 150.75, 'Shipped')
];

const OrderTable = () => {
    const [page, setPage] = React.useState(0); // Current page
    const [rowsPerPage, setRowsPerPage] = React.useState(5); // Rows per page

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset to first page when rows per page is changed
    };

    // Get rows to display based on the current page and rows per page
    const displayedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <div className="overflow-x-auto">
            <Card className="mt-2" sx={{ backgroundColor: '#2f363f' }}>
                <CardHeader title="Order Table" sx={{ backgroundColor: '#2f363f', color: '#fff' }} />
                <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#2f363f' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="order table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: '#fff' }}>Customer</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Order Date</TableCell>
                                <TableCell align="right" sx={{ color: '#fff' }}>Order Amount ($)</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Status</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {displayedRows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        '&:hover': { backgroundColor: '#3b434b', cursor: 'pointer' }
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Typography variant="body2" sx={{ color: '#fff' }}>{row.customer}</Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography variant="body2" color="textSecondary" sx={{ color: '#ccc' }}>{row.date}</Typography>
                                    </TableCell>

                                    <TableCell align="right" sx={{ color: '#fff' }}>${row.amount}</TableCell>

                                    <TableCell sx={{ color: '#fff' }}>
                                        <Typography variant="body2" sx={{ color: row.status === 'Delivered' ? 'green' : row.status === 'Shipped' ? 'orange' : 'red' }}>
                                            {row.status}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* Pagination */}
                <TablePagination
                    component="div"
                    count={rows.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[6, 10, 15]} // Options for rows per page
                    sx={{ backgroundColor: '#2f363f', color: '#fff' }}
                />
            </Card>
        </div>
    );
};

export default OrderTable;
