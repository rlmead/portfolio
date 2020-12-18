import React from 'react'
import { Container, Row } from 'reactstrap'
import Header from './components/Header'
import ProjectButton from './components/ProjectButton'
import Article from './components/Article'
import projectsData from './data/projects'
import aboutData from './data/about'

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
                            <ProjectButton data={item} key={index} />
                        )
                    }
                </Row>
            </Container>
        </>
    )
}

export default App;