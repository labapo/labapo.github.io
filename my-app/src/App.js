import React from 'react';
//import components
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Profile from './components/Profile'


import {Grid, Container} from '@mui/material';


const App = () => {
    const containerStyle = {
        display: Grid,
        gridTemplateColumns: '1fr 1fr',
    }
    return (
    <>
    <Container style={containerStyle}>
    <Grid>
        <Grid>
        <Profile />
        </Grid>
    </Grid>
    <div>
        <Portfolio />
        <Resume />
        <Testimonials />
    </div>
    </Container>
    </>
    )
}

export default App;