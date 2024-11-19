import React, { useState } from "react";
import { Box, Button, Container, Grid, TextField, Typography, InputAdornment, MenuItem, createTheme, ThemeProvider } from "@mui/material";

// Define categories
const categories = ["Supplement", "Equipment", "Clothing", "Accessories"];

// Define the custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#ff7722",
        },
    },
});

const CreateProducts = () => {
    const [productData, setProductData] = useState({
        imageUrl: "",
        brand: "",
        title: "",
        color: "",
        discountedPrice: "",
        price: "",
        sizeOrWeight: "",
        quantity: "",
        description: "",
        category: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product Data Submitted:", productData); // Log product data to console
        alert("Product added successfully!");
        setProductData({
            imageUrl: "",
            brand: "",
            title: "",
            color: "",
            discountedPrice: "",
            price: "",
            sizeOrWeight: "",
            quantity: "",
            description: "",
            category: "",
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" sx={{ mt: 4, p: 3, borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Add New Product
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2} sx={{ height: "auto" }}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Image URL"
                                name="imageUrl"
                                value={productData.imageUrl}
                                onChange={handleChange}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Brand"
                                name="brand"
                                value={productData.brand}
                                onChange={handleChange}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Title"
                                name="title"
                                value={productData.title}
                                onChange={handleChange}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Color"
                                name="color"
                                value={productData.color}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Discounted Price"
                                name="discountedPrice"
                                value={productData.discountedPrice}
                                onChange={handleChange}
                                variant="outlined"
                                type="number"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Original Price"
                                name="price"
                                value={productData.price}
                                onChange={handleChange}
                                variant="outlined"
                                type="number"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Size or Weight"
                                name="sizeOrWeight"
                                value={productData.sizeOrWeight}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Quantity"
                                name="quantity"
                                value={productData.quantity}
                                onChange={handleChange}
                                variant="outlined"
                                type="number"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                label="Category"
                                name="category"
                                value={productData.category}
                                onChange={handleChange}
                                variant="outlined"
                                required
                            >
                                {categories.map((category, index) => (
                                    <MenuItem key={index} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Description"
                                name="description"
                                value={productData.description}
                                onChange={handleChange}
                                variant="outlined"
                                multiline
                                rows={4}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ bgcolor: "#ff7722" }}>
                                Add Product
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default CreateProducts;
