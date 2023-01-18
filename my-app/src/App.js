import React from 'react';
//import components
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Profile from './components/Profile'


import {Grid, Stack, Box, autocompleteClasses } from '@mui/material';


const App = () => {
    return (
    <>
    <Stack direction="row" spacing={2}>
    <Box
        component="span"
        sx={{
            width: "50%",
            height: "600px", 
            border: '2px solid grey',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            alignContent: 'center',
            justifyContent: 'center'
    }}
    >
        <Profile />
    </Box>
    <Box
    component="span"
    sx={{
        width: "50%",
        height: "600px", 
        border: '2px solid grey',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "#6D7175"
    }}
    >
        <Portfolio />
        <Resume />
        <Testimonials />
    </Box>
    </Stack>
    </>
    )
}

export default App;