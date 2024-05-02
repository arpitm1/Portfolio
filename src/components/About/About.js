import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/developer.jpg";
import Rating from "react-rating"

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            <img src={developer} alt="about" className="image-style" />
          </Col>
        </Row>
        <Row className="skill-tools-wrapper">
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
                ReactJs
              </Col>
              <Col xs={6}>
                <Rating
                  readonly
                  start={0}
                  stop={5}
                  initialRating='4'
                />
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
                JavaScript
              </Col>
              <Col xs={6}>
                <Rating
                  readonly
                  start={0}
                  stop={5}
                  initialRating='3'
                />
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
                HTML
              </Col>
              <Col xs={6}>
                <Rating
                  readonly
                  start={0}
                  stop={5}
                  initialRating='4'
                />
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
                CSS
              </Col>
              <Col xs={6}>
                <Rating
                  readonly
                  start={0}
                  stop={5}
                  initialRating='4'
                />
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
                Java
              </Col>
              <Col xs={6}>
                <Rating
                  readonly
                  start={0}
                  stop={5}
                  initialRating='4'
                />
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
                C
              </Col>
              <Col xs={6}>
                <Rating
                  readonly
                  start={0}
                  stop={5}
                  initialRating='4'
                />
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
                MySql
              </Col>
              <Col xs={6}>
                <Rating
                  readonly
                  start={0}
                  stop={5}
                  initialRating='4'
                />
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
                Git
              </Col>
              <Col xs={6}>
                <Rating
                  readonly
                  start={0}
                  stop={5}
                  initialRating='4'
                />
              </Col>
             </Row>
          </Col>
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
              <ul className="tool-name">
                <li>Visual Studio Code</li>
                <br></br>
                <li>Git</li>
                <br></br>
                <li>Chrome DevTools</li>
                <br></br>
                <li>NPM (Node Package Manager)</li>
                <br></br>
                <li>Sblime Text</li>
                <br></br>
                <li>IntelliJ IDEA</li>
              </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
