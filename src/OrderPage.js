import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function OrderPage() {
  return(
      <div className="page">
        <Jumbotron fluid className="jumbotron-other">
            <Container>
                <h1 className="display-3 text-white">Ready to order? So are we!</h1>
            </Container>
        </Jumbotron>

        <Container>
            <div className="p-2 pt-md-4 pb-md-3 mx-auto text-center">
                <h1 className="display-4">Your details</h1>
            </div>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <h4 className="mb-3">Your Address</h4>
                    <Form>
                        <Row>
                            <Col md={{span: 6}} className="mb-3">
                              <Form.Group>
                                <Form.Label htmlFor="firstName"> First Name</Form.Label>
                                <Form.Control type="text" id="firstName" placeholder="Your First Name"/>
                              </Form.Group>
                            </Col>
                            <Col md={{span: 6}} className="mb-3">
                              <Form.Group>
                                <Form.Label htmlFor="lastName"> Last Name</Form.Label>
                                <Form.Control type="text" id="lastName" placeholder="Your Last Name"/>
                              </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="email">Email</Form.Label>
                          <InputGroup>
                              <InputGroup.Prepend>
                                  <InputGroup.Text>@</InputGroup.Text>
                              </InputGroup.Prepend>
                              <Form.Control type="email" placeholder="Email"/>
                          </InputGroup>
                        </Form.Group>

                        <div className="mb-3">
                            <Row>
                                <Col md={6}>
                                  <Form.Group>
                                    <Form.Label htmlFor="zip">Zip</Form.Label>
                                    <Form.Control type="text" placeholder="Zip Code"/>
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group>
                                    <Form.Label htmlFor="city">City</Form.Label>
                                    <Form.Control type="text" placeholder="City"/>
                                  </Form.Group>
                                </Col>
                            </Row>
                        </div>

                        <Row>
                            <Col md={4}>
                              <Form.Group>
                                <Form.Label htmlFor="state">State</Form.Label>
                                <Form.Control className="w-100" as="select" custom>
                                    <option value="">Select state...</option>
                                    <option>Not applicable</option>
                                    <option>Alabama</option>
                                    <option>Alaska</option>
                                    <option>Arizona</option>
                                    <option>Arkansas</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>
                            <Col md={5}>
                              <Form.Group>
                                <Form.Label htmlFor="country">Country</Form.Label>
                                <Form.Control className="w-100" as="select" custom>
                                    <option value="">Select Country...</option>
                                    <option>Not applicable</option>
                                    <option>Belgium</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                    <option>United Kingdom</option>
                                    <option>United States</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group>
                            <Form.Label htmlFor="remarks">Remarks</Form.Label>
                            <Form.Control as="textarea" rows={3}></Form.Control>
                        </Form.Group>
                        <div className="mb-5">
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember my shipping information"/>
                          </Form.Group>
                        </div>
                        <Button variant="success" size="lg" block>Place your order now!</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OrderPage;