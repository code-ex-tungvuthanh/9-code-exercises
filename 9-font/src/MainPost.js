import React from 'react'
import {Container, Row, Col, Card, Button, Image} from 'react-bootstrap'

export default function mainPost() {
  return (<Container>
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <Card className="mt-3">
          <Row className="align-items-center" md={{offset: 1}}>
            <Col md={1}>
              <Image src="https://via.placeholder.com/35" roundedCircle fluid/>
            </Col>
            <Col>
              <h5>Edgar</h5>
            </Col>
          </Row>
          <Card.Body>
            <Card.Text>
              Serei Gosouki (精霊幻想記) manga chapter 36 
            </Card.Text>
            <Card.Text>
              <a href="https://mangaclash.com/manga/seirei-gensouki-konna-sekai-de-deaeta-kimi-ni/chapter-36/">https://mangaclash.com/manga/seirei-gensouki-konna-sekai-de-deaeta-kimi-ni/chapter-36/</a>
            </Card.Text>
            <Card.Img src="https://live.staticflickr.com/65535/51490891117_08313fbb7d_o.jpg" />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>)
}