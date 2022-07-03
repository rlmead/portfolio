import React from "react";
import { Container, Row, Col } from "reactstrap";

function About() {
  return (
    <Container>
      <Row className="mt-4 mb-5">
        <Col md={{ size: 6, offset: 3 }}>
          <h3>work</h3>
          <p>i am a data engineer with full-stack skills. i'm driven to design and build robust, functional, maintainable software. i live for creative collaboration, i love learning, and i specialize in solving puzzles.</p>
          <p>my background in Linguistics led me work in speech technology for a few years. during that time i advanced my technical skills while cultivating an interest in building data pipelines for machine learning research and development.</p>
          <p>in 2020 i transitioned into web development, specializing in backend work.</p>
          <p>my experience ranges from data management technologies (SQL, NoSQL, Data Version Control, AWS, API implementation & development) to web development (PHP, WordPress, Golang, JavaScript, TypeScript, React) to other common languages and tools (Python, Git, Bash, Docker).</p>
          <h3>life</h3>
          <p>i love making stuff, especially clothes - i usually have a few knitting and sewing projects underway at once. i often improvise my designs. when i do follow patterns, i tend to modify them. i enjoy repurposing materials that would otherwise go to waste.</p>
          <p>my wild garden is overflowing with lettuce, beans, tomatoes, cilantro, oregano, rosemary, parsley, mint, thyme, and three varieties of basil. i also have a mulberry tree, an overflowing raspberry patch, and four young blueberry bushes that should start producing in a few years. and i'm lucky enough to live in a neighborhood with community gardens where i can forage from the abundant fig, cherry, plum, and persimmon trees.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About;