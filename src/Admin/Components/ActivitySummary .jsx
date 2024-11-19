import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const activityData = [
    { month: "Jan", workouts: 1200, users: 800, sales: 300 },
    { month: "Feb", workouts: 1500, users: 900, sales: 500 },
    { month: "Mar", workouts: 1800, users: 1200, sales: 700 },
    { month: "Apr", workouts: 2000, users: 1300, sales: 800 },
    { month: "May", workouts: 2200, users: 1500, sales: 1000 },
];

const ActivitySummary = () => {
    return (
        <Card
            sx={{
                bgcolor: '#2F363F',
                color: 'white',
                height: '100%',
                width: { xs: '100%', sm: '100%', md: '50rem' },
                mx: 'auto',
                mb: 3,
            }}
        >
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Activity Summary
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={activityData}>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" stroke="white" />
                        <YAxis stroke="white" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="workouts" stroke="#4CAF50" name="Workouts" />
                        <Line type="monotone" dataKey="users" stroke="#FF9800" name="Users" />
                        <Line type="monotone" dataKey="sales" stroke="#2196F3" name="Sales" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default ActivitySummary;
