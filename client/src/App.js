import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Router } from "@reach/router";
import Home from './Home';
import CompanyData from './CompanyData';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ffb3c3',
        main: '#FE6B8B',
        dark: '#fe1b4c',
      },
      secondary: {
        light: '#ffbd99',
        main: '#FF8E53',
        dark: '#ff5900',
      }
    },
      
})
  

// import logo from './RombaldLogo.png';

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="https://www.rombald.com/" target="_blank">
                    {/* <img
                        alt="Rombald Logo"
                        src={logo}
                        width="105"
                        height="31"
                        className="d-inline-block align-top"
                        style={{paddingRight: 30 +'px'}}

                    />  */}
                    Rombald Inc
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="http://192.168.23.117/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="http://192.168.23.117:90/v1/">Quoting</Nav.Link>
                        <Nav.Link href="companyData">Company Data</Nav.Link>

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>


            <Router>
                <Home path="/" />
                <CompanyData path="/companyData" />
            </Router>
        </MuiThemeProvider>
        
    );
}



export default App;