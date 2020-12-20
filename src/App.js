import React from "react";
import { Container, Row } from "reactstrap";
import Header from "./components/Header";
import ProjectBox from "./components/ProjectBox";
import projectsData from "./data/projects";

function App() {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    {
                        projectsData.map((item, index) =>
                            <ProjectBox data={item} key={index} />
                        )
                    }
                </Row>
            </Container>
        </>
    )
}

export default App;