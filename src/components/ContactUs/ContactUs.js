import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../SocialMedia";

function ContactUs() {
    return (
        <section>
          <Container fluid className="home-about-section" id="about">
            <Container>
              <Row>
                <Col md={12} className="home-about-social">
                  <h1>Get in Touch</h1>
                  <p>
                    {" "}
                    Whether you want to get in touch, or talk about a project
                    collaboration.
                    <br />
                    <strong>Feel free to connect with me</strong>
                    <p>+91 8887740341</p>
                  </p>
                  <SocialMedia />
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      );
    }

    export default ContactUs;
