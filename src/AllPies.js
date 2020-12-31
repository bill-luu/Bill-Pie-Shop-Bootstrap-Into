import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import HolidayApplePie from './images/products/christmasapplepiesmallsquare.jpg';
import CranberryPie from './images/products/cranberrypiesmallsquare.jpg';
import PumpkinPie from './images/products/pumpkinpiesmallsquare.jpg';
import ApplePie from './images/products/applepiesmall.jpg';
import BlueberryPie from './images/products/blueberrycheesecakesmall.jpg';
import CheeseCake from './images/products/cheesecakesmall.jpg';

import { Link }  from 'react-router-dom'; 

function AllPies() {
    return (
        <div className="page">
            <Container className="mt-5">
                <Row>
                    <Col md={4}>
                    <img width="175" height="175" src={HolidayApplePie} alt=""/>
                        <h2>Christmas apple pie</h2>
                        <p>Happy holidays with this pie!</p>
                        <p>
                            <Link to="/applepie">
                                <Button variant="primary">View details</Button>
                            </Link>
                        </p>
                    </Col>
                    <Col md={4}>
                        <img width="175" height="175" src={CranberryPie} alt=""/>
                        <h2>Cranberry pie</h2>
                        <p>A Christmas favorite</p>
                        <p>
                            <Link to="/applepie">
                                <Button variant="primary">View details</Button>
                            </Link>
                        </p>
                    </Col>
                    <Col md={4}>
                        <img width="175" height="175" src={PumpkinPie} alt=""/>
                        <h2>Pumpkin pie</h2>
                        <p>Our Halloween favorite</p>
                        <p>
                            <Link to="/applepie">
                                <Button variant="primary">View details</Button>
                            </Link>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <img width="175" height="175" src={ApplePie} alt=""/>
                        <h2>Apple pie</h2>
                        <p>Our famous apple pies!</p>
                        <p>
                            <Link to="/applepie">
                                <Button variant="primary">View details</Button>
                            </Link>
                        </p>
                    </Col>
                    <Col md={4}>
                        <img width="175" height="175" src={BlueberryPie} alt=""/>
                        <h2>Blueberry cheese cake</h2>
                        <p>A Christmas favorite</p>
                        <p>
                            <Link to="/applepie">
                                <Button variant="primary">You'll Love It!</Button>
                            </Link>
                        </p>
                    </Col>
                    <Col md={4}>
                        <img width="175" height="175" src={CheeseCake} alt=""/>
                        <h2>Cheese cake</h2>
                        <p>Plain cheese cake. Plain pleasure.</p>
                        <p>
                            <Link to="/applepie">
                                <Button variant="primary">View details</Button>
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AllPies;