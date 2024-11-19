import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

const revenueData = [
    { name: "Subscriptions", value: 400 },
    { name: "Product Sales", value: 300 },
    { name: "Advertisements", value: 200 },
    { name: "Others", value: 100 },
];

const COLORS = ["#4CAF50", "#FF9800", "#E91E63", "#2196F3"];

const RevenueBreakdown = () => {
    return (
        <Card sx={{ bgcolor: '#2F363F', color: 'white', height: '100%', width: { xs: '19rem', sm: '40rem', md: '20rem' }, }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Revenue Breakdown
                </Typography>
                <div style={{ width: '100%', height: '300px' }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={revenueData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {revenueData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default RevenueBreakdown;
