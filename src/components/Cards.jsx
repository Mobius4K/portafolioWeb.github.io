import "./Cards.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
export const Cards = (props) => {
  return (
    <Container fluid className="container-card">
    <Row xs={1} sm={1} md={2} lg={3}>
      <Col>
      <a  href="#habilidades">

        <Card className="card1">

          <Card.Body>
            <Card.Title className="title">{props.title1}</Card.Title>
          </Card.Body>

        </Card>
        </a>

      </Col>
      <Col>
      <a href="#proyectos">
        <Card className="card2">
          <Card.Body>
            <Card.Title className="title">{props.title2}</Card.Title>
          
          </Card.Body>
        </Card>
        </a>
      </Col>
      <Col>
      <a href="#certificados">
        <Card className="card3">
          <Card.Body>
            <Card.Title className="title">{props.title3}</Card.Title>
          </Card.Body>
        </Card>
        </a>
      </Col>
    </Row>
  </Container>

  );
};
