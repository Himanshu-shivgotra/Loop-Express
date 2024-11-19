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
    AppBar,
    Toolbar,
    Typography
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
    const [selectedItem, setSelectedItem] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerContent = (
        <Box
            sx={{
                overflow: "auto",
                height: '100%',
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                backgroundColor: "#1e1e2f",
                justifyContent: 'space-between'
            }}
        >
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
        <div className="flex h-screen bg-gray-50">
            <CssBaseline />
            {/* Navbar */}
            {!isLargeScreen && (
                <AppBar position="fixed" sx={{ backgroundColor: "#1e1e2f" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer}
                            sx={{ marginRight: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div">
                            Admin Panel
                        </Typography>
                    </Toolbar>
                </AppBar>
            )}
            {/* Sidebar */}
            {isLargeScreen ? (
                <div className="w-[15rem] bg-[#1e1e2f]">
                    {drawerContent}
                </div>
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
                className={`flex-1 p-8 bg-gray-100 overflow-auto ${!isLargeScreen && "pt-[64px]"}`}
                style={{ height: '100vh' }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
