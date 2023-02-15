import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Intro from '../Intro'
import Testimonials from '../Testimonials';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio';



export const NavBar = () => {
  return (
    <>
        <Navbar bg="light">
            <Container style={{ 
                flexDirection: "column"
                }}>
                    <Tabs
                    className='mb-3'
                    justify
                    >
                    <Tab eventKey='introduction' title="Introduction" variant="tabs">
                    <Intro />
                    </Tab>
                    <Tab eventKey="resume" title="Resume" variant="tabs">
                        <Resume />
                    </Tab>
                    <Tab eventKey="portfolio" title="Portfolio" variant="tabs"> 
                        <Portfolio />
                    </Tab>
                    <Tab eventKey="testimonials" title="Testimonals" variant="tabs">
                        <Testimonials />
                    </Tab>
                    </Tabs>
            </Container>
        </Navbar>
    </>
    
  )
}
