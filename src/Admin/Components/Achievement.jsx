import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'


const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    position: "absolute",

})

const TrophyImg = styled('img')({
    right: 36,
    bottom: 20,
    height: 80,
    width: 70,
    position: 'absolute',
})

const Achievement = () => {

    return (
        <Card className='w-[22rem] lg:w-[20rem]' sx={{ position: "relative", bgcolor: "#2F363F", color: "white" }} >
            <CardContent>
                <Typography variant='h6' sx={{ lettterSpacing: ".25px" }}>
                    Achieve With LooP Fitness
                </Typography>
                <Typography variant='body2'>Congratulations🥳</Typography>
                <Typography variant='h5' sx={{ my: 3.1 }}>450.6k
                </Typography>
                <Button
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: '#f77320', '&:hover': { backgroundColor: '#e5661a' } }}
                >
                    View Exercises
                </Button>


                <TriangleImg src='' />
                <TrophyImg src='https://static.vecteezy.com/system/resources/previews/009/315/016/non_2x/winner-trophy-in-flat-style-free-png.png' />
            </CardContent>
        </Card>
    )
}

export default Achievement