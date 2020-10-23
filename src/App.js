import React from 'react'
import Header from './components/Header.js'
import BlogPost from './components/BlogPost.js'
import ProjectButton from './components/ProjectButton.js'
import LinkButton from './components/LinkButton.js'
import Article from './components/Article.js'
import blogData from './data/blog.js'
import projectsData from './data/projects.js'
import linksData from './data/links.js'
import aboutData from './data/about.js'

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
            },
        ];
        this.state = {
            currentPage: 0,
            blogPosts: [],
        };
        this.setPage = this.setPage.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    // function to toggle display for collapsing blog posts
    // this.state.blogPosts data structure:
    // [
    //   {
    //      'date': '10/23/20',
    //      'display': true,
    //   },
    // ]
    toggleDisplay(postDate) {
        let stateUpdates = this.state.blogPosts;
        let postIndex = stateUpdates.findIndex(item => item.date === postDate);
        stateUpdates[postIndex].display = !stateUpdates[postIndex].display;
        this.setState({ blogPosts: stateUpdates });
    }

    // function to change page on navbar button clicks
    setPage(pageNum) {
        this.setState({ currentPage: pageNum })
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
                {/* page header with navbar which updates page state */}
                <Header
                    pages={this.pages}
                    currentPage={this.state.currentPage}
                    setPage={this.setPage}
                />
                {/* page body */}
                <div className='container'>
                    <div id='parent_row' className='row'>
                        {
                            blogData.map((item, index) => {
                                return (
                                    <BlogPost
                                        data={item}
                                        key={index}
                                        toggleDisplay={this.toggleDisplay}
                                    />
                                )
                            })
                        }
                        {/* {
                            switch (this.pages[this.state.currentPage]) {
                                    case projects:
                                        for each object in projects.js:
                                            <ProjectButton {object} />
                                    case links:
                                        for each object in links.js:
                                            <LinkButton {object} />
                                    case about:
                                        <Article {about.js} />
                                default:
                                    <BlogPost />
                        }
                 } */}
                    </div>
                </div>
            </>
        )
    }
}

export default App;