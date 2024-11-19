import React from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar, Button, Grid, LinearProgress } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const customerData = [
    { id: 1, name: 'Ash', achievements: '450.6k', status: 'Congratulations 🥳', exercisesCompleted: 350, progress: 70, lastActive: '2 hours ago' },
    { id: 2, name: 'John Doe', achievements: '120.3k', status: 'Keep Going 💪', exercisesCompleted: 210, progress: 50, lastActive: '1 day ago' },
    { id: 3, name: 'Jane Smith', achievements: '280.1k', status: 'Almost There 🏆', exercisesCompleted: 295, progress: 65, lastActive: '3 hours ago' },
    { id: 4, name: 'Mike Johnson', achievements: '500.5k', status: 'Great Work 👍', exercisesCompleted: 420, progress: 80, lastActive: 'Yesterday' },
];

const CustomerAchievements = () => {
    return (
        <div style={{ padding: '16px' }}>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="stretch"
            >
                {customerData.map((customer) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={customer.id}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Card
                            sx={{
                                background: 'linear-gradient(to bottom right, #2f363f, #1a222a)',
                                color: '#fff',
                                borderRadius: 2,
                                boxShadow: 3,
                                width: '100%',
                                maxWidth: 300,
                                '&:hover': { boxShadow: 6 },
                            }}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar
                                        sx={{
                                            bgcolor: '#ff7722',
                                            width: 60,
                                            height: 60,
                                            border: '2px solid #FFD700',
                                        }}
                                    >
                                        <PersonIcon sx={{ fontSize: 35 }} />
                                    </Avatar>
                                }
                                title={
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: 18, md: 20 },
                                            textAlign: 'center',
                                        }}
                                    >
                                        {customer.name}
                                    </Typography>
                                }
                                subheader={
                                    <Typography
                                        variant="body2"
                                        sx={{ color: '#ccc', textAlign: 'center' }}
                                    >
                                        {customer.status}
                                    </Typography>
                                }
                                sx={{ color: '#fff', textAlign: 'center' }}
                            />
                            <CardContent>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#FFD700',
                                        textAlign: 'center',
                                        fontSize: { xs: 24, md: 28 },
                                    }}
                                >
                                    {customer.achievements}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#ccc', marginTop: 1, textAlign: 'center' }}
                                >
                                    Exercises Completed: {customer.exercisesCompleted}
                                </Typography>
                                {/* Progress Bar */}
                                <LinearProgress
                                    sx={{
                                        marginTop: 2,
                                        height: 8,
                                        borderRadius: 5,
                                        backgroundColor: '#3e3e3e',
                                    }}
                                    variant="determinate"
                                    value={customer.progress}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#ccc',
                                        marginTop: 1,
                                        textAlign: 'center',
                                    }}
                                >
                                    Progress: {customer.progress}%
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#aaa',
                                        marginTop: 2,
                                        textAlign: 'center',
                                    }}
                                >
                                    Last Active: {customer.lastActive}
                                </Typography>
                            </CardContent>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: '#FFD700',
                                    borderColor: '#FFD700',
                                    margin: 2,
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    '&:hover': {
                                        backgroundColor: '#FFD700',
                                        color: '#2f363f',
                                    },
                                }}
                            >
                                View Exercises
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CustomerAchievements;
