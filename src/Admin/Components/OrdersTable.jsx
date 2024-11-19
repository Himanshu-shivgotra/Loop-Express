import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Typography } from '@mui/material';

// Sample order data
const orders = [
    { id: 1, customer: 'John Doe', product: 'Protein Shake', quantity: 2, status: 'Shipped', date: new Date() },
    { id: 2, customer: 'Jane Smith', product: 'Yoga Mat', quantity: 1, status: 'Pending', date: new Date() },
    { id: 3, customer: 'Mike Johnson', product: 'Dumbbells', quantity: 3, status: 'Delivered', date: new Date() },
    { id: 4, customer: 'Alice Brown', product: 'Resistance Bands', quantity: 1, status: 'Shipped', date: new Date() },
];

const OrdersTable = () => {
    // Helper function to format the date
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    return (
        <div>
            <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3, overflow: 'hidden', mt: "1.5rem" }}>
                <Table sx={{ minWidth: 650 }} aria-label="orders table">
                    <TableHead sx={{ background: 'linear-gradient(to right, #ff7722, #ff5e62)', color: '#fff' }}>
                        <TableRow>
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', padding: '16px' }}>Order ID</TableCell>
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', padding: '16px' }}>Customer</TableCell>
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', padding: '16px' }}>Product</TableCell>
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', padding: '16px' }}>Quantity</TableCell>
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', padding: '16px' }}>Status</TableCell>
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', padding: '16px' }}>Date</TableCell>
                            <TableCell sx={{ color: '#fff', fontWeight: 'bold', padding: '16px' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order, index) => (
                            <TableRow
                                key={order.id}
                                sx={{
                                    backgroundColor: index % 2 === 0 ? '#f7f7f7' : '#fff',  // Alternating row colors
                                    '&:hover': { backgroundColor: '#e0e0e0' },  // Hover effect for rows
                                    transition: 'background-color 0.3s ease',
                                }}
                            >
                                <TableCell sx={{ padding: '12px', fontSize: '14px' }}>{order.id}</TableCell>
                                <TableCell sx={{ padding: '12px', fontSize: '14px' }}>
                                    <Typography variant="body2">{order.customer}</Typography>
                                </TableCell>
                                <TableCell sx={{ padding: '12px', fontSize: '14px' }}>{order.product}</TableCell>
                                <TableCell sx={{ padding: '12px', fontSize: '14px' }}>{order.quantity}</TableCell>
                                <TableCell sx={{ padding: '12px', fontSize: '14px' }}>{order.status}</TableCell>
                                <TableCell sx={{ padding: '12px', fontSize: '14px' }}>{formatDate(order.date)}</TableCell>
                                <TableCell sx={{ padding: '12px', fontSize: '14px' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            backgroundColor: '#ff7722',
                                            color: '#fff',
                                            '&:hover': { backgroundColor: '#ff5e62' },
                                            padding: '6px 12px',
                                        }}
                                    >
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default OrdersTable;
