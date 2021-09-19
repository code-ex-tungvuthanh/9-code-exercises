import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CitySelect from './CitySelect';
import FruitSelect from './FruitSelect';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      <Row></Row>
        <Col>
          <CitySelect />
        </Col>
      <Row>
      <Col>
          <FruitSelect />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
