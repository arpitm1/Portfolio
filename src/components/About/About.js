import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/developer.jpg";
import { 
  FaReact,
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaCuttlefish,
  FaDatabase,
  FaGithub
 } from "react-icons/fa";


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
              <FaReact style={{ marginBottom: "2px", marginRight:"6px"}} size={"40"} /> ReactJs
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
              <FaJsSquare style={{ marginBottom: "2px", marginRight:"6px"}} size={"40"} /> JavaScript
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
              <FaHtml5 style={{ marginBottom: "2px", marginRight:"6px"}} size={"40"} /> HTML
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
              <FaCss3Alt style={{ marginBottom: "2px", marginRight:"6px"}} size={"40"} /> CSS
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
              <FaJava style={{ marginBottom: "2px", marginRight:"6px"}} size={"40"} /> Java
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
              <FaCuttlefish style={{ marginBottom: "2px", marginRight:"6px"}} size={"40"} /> C
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
              <FaDatabase style={{ marginBottom: "2px", marginRight:"6px"}} size={"40"} /> MySql
              </Col>
             </Row>
             <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col className="skill-name" xs={4}>
              <FaGithub style={{ marginBottom: "2px", marginRight:"6px"}} size={"40"} /> Git
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
