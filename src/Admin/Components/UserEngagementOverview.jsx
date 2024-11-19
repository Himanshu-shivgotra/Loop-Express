import React from 'react';
import { Box, Card, CardContent, CardHeader, Grid2, IconButton, Typography, Avatar } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const engagementData = [
    {
        stats: "32,452",
        title: "Total Logins",
        color: "#FF5722",
        icon: <PeopleIcon sx={{ fontSize: "1.75rem" }} />,
    },
    {
        stats: "12,896",
        title: "Active Users",
        color: "#009688",
        icon: <AccessTimeIcon sx={{ fontSize: "1.75rem" }} />,
    },
    {
        stats: "1,562",
        title: "Recent Feedback",
        color: "#9C27B0",
        icon: <FeedbackIcon sx={{ fontSize: "1.75rem" }} />,
    },
    {
        stats: "3,912",
        title: "Posts Created",
        color: "#2196F3",
        icon: <PostAddIcon sx={{ fontSize: "1.75rem" }} />,
    },
];

const renderEngagementStats = () => {
    return engagementData.map((item, index) => (
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

const UserEngagementOverview = () => {
    return (
        <Card sx={{ bgcolor: '#2F363F', color: 'white', height: "100%", width: "100%" }}>
            <CardHeader
                title="User Engagement Overview"
                action={
                    <IconButton sx={{ color: 'white' }} size="small">
                        <MoreVertIcon />
                    </IconButton>
                }
                subheader={
                    <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 600 }}>
                            Total 25.3% increase
                        </Box>
                        in engagement this week
                    </Typography>
                }
            />
            <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
                <Grid2 container spacing={3}>
                    {renderEngagementStats()}
                </Grid2>
            </CardContent>
        </Card>
    );
};

export default UserEngagementOverview;
