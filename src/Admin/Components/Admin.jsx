import React, { useState } from 'react';
import {
    Box,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
    Drawer,
    IconButton,
    Typography,
    TextField,
    InputAdornment,
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";

const adminMenu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <InventoryIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <PeopleIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingCartIcon /> },
    { name: "Add Products", path: "/admin/products/create", icon: <AddBoxIcon /> },
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState("Dashboard");
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerContent = (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "#1e1e2f",
                color: "#fff",
            }}
        >
            {/* Logo Section */}
            <Box
                sx={{
                    height: "5rem",
                    backgroundImage: 'url(https://loopin.netlify.app/static/media/logo.245df7adb7de257385e2.png)',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                }}
            />

            {/* Search Bar */}
            <Box sx={{ padding: "1rem" }}>
                <TextField
                    fullWidth
                    placeholder="Search"
                    size="small"
                    sx={{
                        backgroundColor: "#2c3e50",
                        borderRadius: "4px",
                        "& .MuiOutlinedInput-root": {
                            color: "#fff",
                            "& fieldset": { borderColor: "#555" },
                            "&:hover fieldset": { borderColor: "#fff" },
                            "&.Mui-focused fieldset": { borderColor: "#fff" },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "#fff" }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Menu Items */}
            <List>
                {adminMenu.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton
                            sx={{
                                color: "#fff",
                                '&:hover': { backgroundColor: '#2c3e50' },
                                backgroundColor: selectedItem === item.name ? '#2c3e50' : 'transparent',
                                boxShadow: selectedItem === item.name
                                    ? 'inset 4px 4px 10px rgba(0, 0, 0, 0.2), inset -4px -4px 10px rgba(255, 255, 255, 0.3)'
                                    : '4px 4px 10px rgba(0, 0, 0, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.3)',
                                transition: 'all 0.3s ease',
                            }}
                            onClick={() => {
                                setSelectedItem(item.name);
                                navigate(item.path);
                                setMobileOpen(false); // Close drawer on mobile after navigation
                            }}
                        >
                            <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} sx={{ color: "#fff" }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            {/* Account Section */}
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            color: "#fff",
                            '&:hover': { backgroundColor: '#2c3e50' }
                        }}
                    >
                        <ListItemIcon sx={{ color: "#fff" }}>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Account" sx={{ color: "#fff" }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div className="flex h-screen">
            <CssBaseline />
            {/* Sidebar */}
            {isLargeScreen ? (
                <div className="w-[15rem]">{drawerContent}</div>
            ) : (
                <Drawer
                    anchor="left"
                    open={mobileOpen}
                    onClose={toggleDrawer}
                    ModalProps={{ keepMounted: true }} // Improve performance on mobile
                >
                    {drawerContent}
                </Drawer>
            )}
            {/* Main Content Area */}
            <div
                className={`flex-1 p-8 bg-gray-100 overflow-auto`}
                style={{ height: '100vh' }}
            >
                {isLargeScreen ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0.75rem 1rem",
                            backgroundColor: "#1e1e2f",
                            borderRadius: "8px",
                            marginBottom: "1rem",
                            color: "#fff",
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
                            {selectedItem}
                        </Typography>
                    </Box>
                ) : (
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                        sx={{ position: "fixed", top: 8, left: 8 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                {/* Render the Outlet */}
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
