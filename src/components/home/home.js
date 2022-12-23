import React from 'react'
import "./home.css"
import { Col, Container, Row } from 'react-bootstrap'
import Pallete from '../share/pallete/Pallete'

function Home() {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <p>Home</p>
            <Pallete/>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Home