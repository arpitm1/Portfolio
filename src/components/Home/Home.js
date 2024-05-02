import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/arpit.jpg";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Arpit Mishra</strong>
              </h1>

              <p className="heading-description blockquote">
              I possess a strong passion for web development and programming, coupled with a keen understanding of current trends in these domains. In addition to technical proficiency, I excel in communication and leadership. Adaptable and efficient, I prioritize continuous learning and am equipped to tackle any technology within my domain.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
