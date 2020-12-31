import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ApplePie from './images/products/applepie.jpg';
import StrawberryPie from './images/products/strawberrypiesmall.jpg';
import RhubarbPie from "./images/products/rhubarbpiesmall.jpg";
import PeachPie from "./images/products/peachpiesmall.jpg";
import CranberryPie from "./images/products/cranberrypiesmall.jpg";

function BasketModal(props) {
    return(
        <Modal show={props.show} onHide={props.handleClose} className="fade" tabIndex="-1">
            <Modal.Header closeButton>
                <h5 className="modal-title">Bethany's Pie Shop</h5>
            </Modal.Header>
            <Modal.Body>
                <p>Apple pie was added to your basket</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Continue shopping</Button>
                <Button variant="primary" onClick={props.handleClose}>View basket</Button>
            </Modal.Footer>
        </Modal>
    )
}

function ApplePiePage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="page">
            <Jumbotron className="jumbotron-detail-apple-pie">
                <Container>
                    <h1 className="display-3 text-white">Apple Pie</h1>
                </Container>
            </Jumbotron>
                <Container>
                    <h1>
                        Apple pie <small className="text-muted">Our famous, number-one selling pie.</small>
                    </h1>
                    <Row>
                        <Col md={8}>
                            <img src={ApplePie} className="rounded img-fluid" alt="Apple pie"/>
                        </Col>

                        <Col md={4}>
                            <h3 className="mb-3 text-capitalize text-white">About this pie</h3>
                            <p className="text-left font-weight-lighter">Sweet ice cream jelly beans lemon drops. <small>Pastry toffee fruitcake</small>gingerbread jelly-o.
                                Lollipop <strong>sesame snaps muffin.</strong> Macaroon halvah marshmallow sesame snaps sugar plum dragée.
                                <mark>Wafer pudding sesame snaps tootsie</mark> roll sesame snaps cake chupa chups jelly beans.</p>
                            <h3 className="my-3">Ingredients</h3>
                            <ul>
                                <li>Apple</li>
                                <li>Sugar</li>
                                <li>Eggs</li>
                                <li>Milk</li>
                            </ul>
                            <Row>
                                <Col md={4}>
                                    <strong>$14.95</strong>
                                </Col>
                                <Col md={8}>
                                    <Button variant="info" className="float-right" data-toggle="modal" data-target="#addToBasketModal" onClick={handleShow}>
                                        Add to basket
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                        
                    <div className="p-4 mb-3 mt-2 bg-light rounded border border-primary">
                        <h4>A quote from Bethany</h4>
                        <p className="mb-0 font-italic">My recipes have been in our family for generations. We hope you enjoy our pies! - Bethany</p>
                    </div>
                    <Row>
                        <h3 className="display-5 my-4">Other customers also bought...</h3>
                    </Row>
                    <Row>
                        <Col sm={6} md={3}>
                            <a href="applepie.html">
                                <img className="img-fluid" src={StrawberryPie} alt=""/>
                            </a>
                        </Col>
                        <Col sm={6} md={3}>
                            <a href="applepie.html">
                                <img className="img-fluid" src={RhubarbPie} alt=""/>
                            </a>
                        </Col>
                        <Col sm={6} md={3}>
                            <a href="applepie.html">
                                <img className="img-fluid" src={PeachPie} alt=""/>
                            </a>
                        </Col>
                        <Col sm={6} md={3}>
                            <a href="applepie.html">
                                <img className="img-fluid" src={CranberryPie} alt=""/>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <div className="table-responsive p-4">
                            <table className="table table-striped table-hover table-border">
                                <thead>
                                    <tr>
                                        <th>Ingredient</th>
                                        <th>Risk</th>
                                        <th>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-primary">
                                        <td>Apple</td>
                                        <td>Yes</td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <td>Eggs</td>
                                        <td>Yes</td>
                                        <td className="table-danger">10%</td>
                                    </tr>
                                    <tr>
                                        <td>Nuts</td>
                                        <td>Maybe</td>
                                        <td>&lt;0.1%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Row>
                </Container>
                <BasketModal handleClose={handleClose} handleShow={handleShow} show={show}></BasketModal>
        </div>
    )
}

export default ApplePiePage;