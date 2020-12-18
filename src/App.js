import React from "react"
import { Container, Row } from "reactstrap"
import Header from "./components/Header"
import ProjectBox from "./components/ProjectBox"
import Article from "./components/Article"
import projectsData from "./data/projects"
import aboutData from "./data/about"

function App() {
    return (
        <>
            <Header />
            <Container>
                {/* <Article
                    data={aboutData}
                /> */}
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