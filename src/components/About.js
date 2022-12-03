import React from "react";
import { Container, Row, Col } from "reactstrap";

function About() {
  return (
    <Container>
      <Row className="mt-4 mb-5">
        <Col md={{ size: 6, offset: 3 }}>
          <h3>work</h3>
          <p>i am a data engineer with full-stack experience. i like to build robust, functional, maintainable software. i live for creative collaboration, i love learning, and i specialize in solving puzzles.</p>
          <p>in 2014, my background in Linguistics led me to a job in speech technology. in this role i advanced my technical skills while cultivating an interest in building data pipelines for machine learning research and development.</p>
          <p>in 2020 i transitioned into web development, mainly doing backend work. on this new path i've developed and implemented APIs, normalized messy data and optimized databases, and worked with a cross-functional agile team to replatform a live website piece-by-piece.</p>
          <p>my experience ranges from data management (SQL, NoSQL, Data Version Control, API implementation & development) to web development (PHP, WordPress, Golang, JavaScript, TypeScript, React, AWS) to other common languages and tools (Git, Python, Bash, Docker).</p>
          <h3>life</h3>
          <p>i love creating, especially clothes - i usually have a few knitting and sewing projects underway at once. i often improvise my designs. when i do follow patterns, i tend to modify them. i enjoy repurposing materials that would otherwise go to waste.</p>
          <p>i grow many things in my unruly garden - lettuce, arugula, beans, tomatoes, nasturtiums, cilantro, oregano, rosemary, parsley, mint, thyme, and three varieties of basil. i also have a mulberry tree, a bountiful raspberry patch, and four young blueberry bushes. and i'm lucky to live in a neighborhood full of community gardens where i can forage from abundant fig, cherry, plum, and persimmon trees.</p>
        </Col>
      </Row>
      <Row className="mb-5 p-2"></Row>
    </Container>
  )
}

export default About;