import React from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, Grid2, IconButton, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const saleData = [
    {
        stats: "15,892",
        title: "Total Workouts Completed",
        color: "#4CAF50",
        icon: <FitnessCenterIcon sx={{ fontSize: "1.75rem" }} />,
    },
    {
        stats: "7,432",
        title: "Active Members",
        color: "#FF9800",
        icon: <GroupIcon sx={{ fontSize: "1.75rem" }} />,
    },
    {
        stats: "3,214",
        title: "Fitness Products Sold",
        color: "#E91E63",
        icon: <StoreIcon sx={{ fontSize: "1.75rem" }} />,
    },
    {
        stats: "$512k",
        title: "Total Revenue",
        color: "#3F51B5",
        icon: <TrendingUpIcon sx={{ fontSize: "1.75rem" }} />,
    },
];

const renderStats = () => {
    return saleData.map((item, index) => (
        <Grid2 item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                    variant="rounded"
                    sx={{
                        mr: 2,
                        width: 44,
                        height: 44,
                        boxShadow: 3,
                        color: 'white',
                        background: `${item.color}`,
                    }}
                >
                    {item.icon}
                </Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="caption">{item.title}</Typography>
                    <Typography variant="h6">{item.stats}</Typography>
                </Box>
            </Box>
        </Grid2>
    ));
};

const MonthlyOverview = () => {
    return (
        <Card sx={{ bgcolor: '#2F363F', color: 'white', height: "100%" }}>
            <CardHeader
                title="Monthly Overview"
                action={
                    <IconButton sx={{ color: 'white' }} size="small">
                        <MoreVertIcon />
                    </IconButton>
                }
                subheader={
                    <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 600 }}>
                            Total 48.5% growth
                        </Box>
                        😎this month
                    </Typography>
                }
            />
            <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
                <Grid2 container spacing={3}>
                    {renderStats()}
                </Grid2>
            </CardContent>
        </Card>
    );
};

export default MonthlyOverview;
