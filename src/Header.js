import Pie from './images/pie.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavDropdown } from 'react-bootstrap';
import { Link }  from 'react-router-dom'; 

function Header() {
    return(
        <Navbar expand="sm" variant="dark" fixed="top" bg="navbar">
            <Container>
                <Link to="/">
                    <Navbar.Brand>
                        <img src={Pie} width="30" height="30" className="d-inline-block align-top" alt=""/>
                        Bill's Pie Shop
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarCollapse" />
                <Navbar.Collapse id="navbarCollapse">
                    <Nav activeKey="/home" className="mr-auto">
                        <Link to="/" className="nav-link">
                            <Nav.Item>
                                    Home
                            </Nav.Item>
                        </Link>
                        <NavDropdown title="Pies">
                            <NavDropdown.Item>Fruit Pies</NavDropdown.Item>
                            <NavDropdown.Item>Cheese Cakes</NavDropdown.Item>
                            <NavDropdown.Item>Seasonal Pies</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <Link to="/allpies">
                                    All Pies
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/order" className="nav-link">
                            <Nav.Item>
                                Order
                            </Nav.Item>                                                
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Header;
