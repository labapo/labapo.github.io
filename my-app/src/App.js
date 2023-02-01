import React from 'react';
//import components
import { Contents } from './components/Contents';
import Profile from './components/Profile'
import { Stack, Box } from '@mui/material';


const App = () => {
    return (
    <>
    <Stack direction="row" spacing={2}>
    <Box
        sx={{
            width: "30%",
            height: "600px", 
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            alignContent: 'center',
            justifyContent: 'center', 
            margin: '3em'
    }}
    >
        <Profile />
    </Box>
    <Box
    sx={{
        width: "65%",
        height: "vh", 
        border: '2px solid grey',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "#6D7175",
        margin: '3em', 
        padding: '10px'
    }}
    >
        <Contents />
    </Box>
    </Stack>
    </>
    )
}

export default App;