import React from 'react'
import Header from './components/Header.js'
import BlogPost from './components/BlogPost.js'
import ProjectButton from './components/ProjectButton.js'
import LinkButton from './components/LinkButton.js'
import Article from './components/Article.js'
import { blogData } from './data/blog.js'
import { projectsData } from './data/projects.js'
import { linksData } from './data/links.js'
import { aboutData } from './data/about.js'

class App extends React.Component {
    constructor() {
        super();
        this.pages = [
            {
                'page': 'blog',
                'component': BlogPost,
                'data': blogData
            },
            {
                'page': 'projects',
                'component': ProjectButton,
                'data': projectsData
            },
            {  
                'page': 'links',
                'component': LinkButton,
                'data': linksData
            },
            {
                'page': 'about',
                'component': Article,
                'data': aboutData
            }
        ];
        this.state = {
            currentPage: 0
        };
        this.setPage = this.setPage.bind(this);
    }

    // function to change page on navbar button clicks
    setPage(pageNum) {
        this.setState({currentPage: pageNum})
    }

    // add check to stay on same page when refreshed
    componentDidMount() {
        let storedPage = window.localStorage.getItem('currentPage')
        if (storedPage) {
            this.setState({ currentPage: JSON.parse(storedPage) })
        } else {
            window.localStorage.setItem('currentPage', JSON.stringify(this.state.currentPage))
        }
    }

    // keep localStorage up to date with this.state.currentPage
    componentDidUpdate() {
        window.localStorage.setItem('currentPage', JSON.stringify(this.state.currentPage))
    }

    render() {
        return (
            <>
                {/* header with navbar which updates page state */}
                <Header
                pages={this.pages}
                currentPage={this.state.currentPage}
                setPage={this.setPage}
                />
                <div className='container'>
                    <div id='parent_row' className='row'>

                    </div>
                </div>
            </>


            // main:
            //    <div class=container>
            //      <div id='parent_row' class='row'>
            //         switch (this.pages[this.state.currentPage])
            //          case blog:
            //             for each object in blog.js:
            //               <BlogPost {object} />
            //          case projects:
            //             for each object in projects.js:
            //                <ProjectButton {object} />
            //          case links:
            //             for each object in links.js:
            //                <LinkButton {object} />
            //          case about:
            //                <Article {about.js} />
            //      </div>
            //    </div>
        )
    }
}

export default App;