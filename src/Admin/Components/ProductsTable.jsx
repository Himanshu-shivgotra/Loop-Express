import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Card, CardHeader, Typography, TablePagination } from '@mui/material';

// Function to create rows of data with unique ID
function createData(id, name, imageUrl, category, price, stock, description) {
    return { id, name, imageUrl, category, price, stock, description };
}

const rows = [
    createData(1, 'Yoga Mat', 'https://via.placeholder.com/50', 'Fitness', 19.99, 120, 'A comfortable yoga mat for your yoga practice.'),
    createData(2, 'Dumbbells', 'https://via.placeholder.com/50', 'Fitness', 29.99, 150, 'Set of 2 adjustable dumbbells for home workouts.'),
    createData(3, 'Resistance Bands', 'https://via.placeholder.com/50', 'Fitness', 14.99, 200, 'Perfect for strength training and flexibility exercises.'),
    createData(4, 'Protein Shake', 'https://via.placeholder.com/50', 'Nutrition', 24.99, 180, 'A high-quality protein shake for post-workout recovery.'),
    createData(5, 'Treadmill', 'https://via.placeholder.com/50', 'Equipment', 399.99, 40, 'A powerful treadmill for cardio and weight loss.'),
    createData(6, 'Kettlebell Set', 'https://via.placeholder.com/50', 'Fitness', 89.99, 60, 'Set of 3 kettlebells for functional training.'),
    createData(7, 'Jump Rope', 'https://via.placeholder.com/50', 'Cardio', 12.99, 250, 'A durable jump rope for cardio training.'),
    createData(8, 'Smart Scale', 'https://via.placeholder.com/50', 'Health Tech', 49.99, 100, 'A digital scale to track weight and body composition.'),
    createData(9, 'Foam Roller', 'https://via.placeholder.com/50', 'Recovery', 19.99, 140, 'A foam roller for muscle recovery and flexibility.'),
    createData(10, 'Barbell', 'https://via.placeholder.com/50', 'Fitness', 99.99, 80, 'Heavy-duty barbell for strength training.'),
    createData(11, 'Medicine Ball', 'https://via.placeholder.com/50', 'Fitness', 29.99, 95, 'A durable medicine ball for functional exercises.'),
    createData(12, 'Yoga Blocks', 'https://via.placeholder.com/50', 'Yoga', 15.99, 220, 'Two yoga blocks for better alignment and support.'),
    createData(13, 'Running Shoes', 'https://via.placeholder.com/50', 'Apparel', 69.99, 300, 'Comfortable running shoes for daily use.'),
    createData(14, 'Bike Trainer', 'https://via.placeholder.com/50', 'Cycling', 149.99, 70, 'A portable bike trainer for indoor cycling.'),
    createData(15, 'Hydration Pack', 'https://via.placeholder.com/50', 'Outdoor', 34.99, 180, 'A backpack with a built-in hydration system for hiking.'),
    createData(16, 'Tennis Racket', 'https://via.placeholder.com/50', 'Sports', 79.99, 130, 'Lightweight racket for recreational tennis players.'),
    createData(17, 'Resistance Bands Set', 'https://via.placeholder.com/50', 'Fitness', 19.99, 160, 'A set of resistance bands for home workouts.'),
    createData(18, 'Water Bottle', 'https://via.placeholder.com/50', 'Accessories', 14.99, 220, 'A durable, leak-proof water bottle for fitness.'),
    createData(19, 'Electric Massage Gun', 'https://via.placeholder.com/50', 'Recovery', 79.99, 50, 'A high-performance massage gun for muscle relief.'),
    createData(20, 'Basketball', 'https://via.placeholder.com/50', 'Sports', 29.99, 180, 'Official size basketball for indoor or outdoor use.')
];


const ProductTable = () => {
    const [page, setPage] = React.useState(0); // Current page
    const [rowsPerPage, setRowsPerPage] = React.useState(5); // Rows per page

    // Handle delete functionality using unique ID
    const handleDelete = (id, name) => {
        alert(`Product with ID "${id}: ${name}" deleted!`);
    };

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
        <div>
            <Card className="mt-2" sx={{ backgroundColor: '#2f363f' }}>
                <CardHeader title="All Products" sx={{ backgroundColor: '#2f363f', color: '#fff' }} />
                <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#2f363f' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="product table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: '#fff' }}>Product Image</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Product Name</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Category</TableCell>
                                <TableCell align="right" sx={{ color: '#fff' }}>Price ($)</TableCell>
                                <TableCell align="right" sx={{ color: '#fff' }}>Stock</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Description</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Delete</TableCell>
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
                                        <Avatar src={row.imageUrl} alt={row.name} />
                                    </TableCell>

                                    <TableCell component="th" scope="row">
                                        <Typography variant="body2" sx={{ color: '#fff' }}>{row.name}</Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography variant="body2" color="textSecondary" sx={{ color: '#ccc' }}>{row.category}</Typography>
                                    </TableCell>

                                    <TableCell align="right" sx={{ color: '#fff' }}>${row.price}</TableCell>

                                    <TableCell align="right" sx={{ color: '#fff' }}>{row.stock} units</TableCell>

                                    <TableCell sx={{ color: '#fff' }}>{row.description}</TableCell>

                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => handleDelete(row.id, row.name)}
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

export default ProductTable;
