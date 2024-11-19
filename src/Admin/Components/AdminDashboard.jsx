import React from 'react';

import Achievement from './Achievement';
import MonthlyOverview from './MonthlyOverview';
import UserEngagementOverview from './UserEngagementOverview';
import RevenueBreakdown from './RevenueBreakdown ';
import ActivitySummary from './ActivitySummary ';
import { Grid2 } from '@mui/material';

const AdminDashboard = () => {
    return (
        <div className="p-4 md:p-6">
            <Grid2 container spacing={3}>

                {/* Revenue Breakdown Chart */}
                <Grid2 >
                    <RevenueBreakdown />
                </Grid2>

                {/* Activity Summary Chart */}
                <Grid2 >
                    <ActivitySummary />
                </Grid2>


                {/* Achievement Card */}
                <Grid2 item xs={12} sm={6} md={4}>
                    <Achievement />
                </Grid2>

                {/* Monthly Overview Card */}
                <Grid2 item xs={12} sm={6} md={8}>
                    <MonthlyOverview />
                </Grid2>



                {/* User Engagement Overview Card */}
                <Grid2 item xs={12} sm={6} md={4}>
                    <UserEngagementOverview />
                </Grid2>
            </Grid2>
        </div>
    );
};

export default AdminDashboard;
