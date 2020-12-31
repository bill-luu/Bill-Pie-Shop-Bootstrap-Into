
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function HomePage() {
  return (
    <div className="page">
      <Container>
        <Carousel>
          <Carousel.Item className="welcome-carousel-image1 ">
              <Container>
                <Carousel.Caption>
                  <h1>Welcome to Bethany's Pie Shop</h1>
                  <p>Home to the best pies on the internet.</p>
                </Carousel.Caption>
              </Container>
          </Carousel.Item>
          <Carousel.Item className="welcome-carousel-image2">
              <Container>
                <Carousel.Caption className="text-left">
                  <h1>Discover our pie subscription</h1>
                  <p>Our delicious pies delivered to your door. Every week.</p>
                  <p><Button size="lg" variant="primary">Sign up today</Button></p>
                </Carousel.Caption>
              </Container>
          </Carousel.Item>
          <Carousel.Item className="welcome-carousel-image3">
              <Container>
                <Carousel.Caption className="text-right">
                  <h1>Browse the pies of summer.</h1>
                  <p>Every season has its pies. Enjoy our summer fruit pies now.</p>
                  <p><Button size="lg" variant="primary">Fruit pies</Button></p>
                </Carousel.Caption>
              </Container>
          </Carousel.Item>      
        </Carousel>

        <Row>
          <Col md={8}>
            <h2 className="pb-4 mb-4 font-italic">
              Our History
            </h2>
            <p>
              For many years, <b>Bethany</b> has been baking the most delicious pies at her home. In 2013, we
              opened our first
              store in Brussels (Belgium) in a cosy little street near the Grand Market. People from all over the
              world fell
              in love
              with the soft cakes, heavenly cheese cakes, spicy apple pies... <i>The store became a success in no
                time.</i>
              <br/>
              In 2015, no less than 100 pies were sold every day and Bethany's Pie Shop moved into a larger
              building.
              After receiving many requests, it became clear that our next step was making it possible to order
              pies from the
              comfort of your own home and from anywhere in the world. You are now looking at the result of this:
              our very own
              webstore, making it possible to order Bethany's delicious pies whenever you feel like it!
            </p>
            <p>
              Bethany is famous htmlFor using only the best ingredients. This way, we can make sure
              that our pies are absolutely the best.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage;