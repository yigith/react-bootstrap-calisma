import { Button, Container, Row, Col, Carousel } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <div className="border-bottom py-3">
          <h1 className="mt-3">Web Sayfam</h1>
          <span className="text-muted">Hep daha ileriye..</span>
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/666/800/300"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/933/800/300"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/167/800/300"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row className="mt-4">
          <Col sm={4}>
            <h3>Güvenilir</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus magni ratione enim eaque quia.</p>
            <div className="text-end"><Button size="sm">Devamı..</Button></div>
          </Col>
          <Col sm={4}>
            <h3>Ekonomik</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus magni ratione enim eaque quia.</p>
            <div className="text-end"><Button size="sm">Devamı..</Button></div>
          </Col>
          <Col sm={4}>
            <h3>Hızlı</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus magni ratione enim eaque quia.</p>
            <div className="text-end"><Button size="sm">Devamı..</Button></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
