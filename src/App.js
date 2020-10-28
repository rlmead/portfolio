import React from 'react'
import Header from './components/Header.js'
import Blog from './components/Blog.js'
import ProjectButton from './components/ProjectButton.js'
import LinkButton from './components/LinkButton.js'
import Article from './components/Article.js'
import blogData from './data/blog.js'
import projectsData from './data/projects.js'
import linksData from './data/links.js'
import aboutData from './data/about.js'
import { Container, Row } from 'reactstrap';

class App extends React.Component {
    constructor() {
        super();
        this.pages = [
            {
                'page': 'blog',
                'component': Blog,
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
            blogState: [],
        };
        this.setPage = this.setPage.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    // function to toggle display for collapsing blog posts
    // this.state.blogState data structure:
    // [
    //   {
    //      'date': '10/23/20',
    //      'display': true,
    //   },
    // ]
    toggleDisplay(postDate) {
        let stateUpdates = this.state.blogState;
        let postIndex = stateUpdates.findIndex(item => item.date === postDate);
        stateUpdates[postIndex].display = !stateUpdates[postIndex].display;
        this.setState({ blogState: stateUpdates });
    }

    // function to change page on navbar button clicks
    setPage(pageNum) {
        this.setState({ currentPage: pageNum })
    }

    // add check to stay on same page when refreshed
    componentDidMount() {
        let storedPage = window.localStorage.getItem('currentPage');
        if (storedPage) {
            this.setState({ currentPage: JSON.parse(storedPage) })
        } else {
            window.localStorage.setItem('currentPage', JSON.stringify(this.state.currentPage))
        }
        let storedBlogPosts = window.localStorage.getItem('blogState');
        if (storedBlogPosts) {
            storedBlogPosts = JSON.parse(storedBlogPosts);
        } else {
            storedBlogPosts = [];
        }
        storedBlogPosts = storedBlogPosts.concat(
            blogData.filter(item =>
                (storedBlogPosts.map(stored => stored.date).indexOf(item.date) === -1))
                .map(item => ({ date: item.date, display: false })))
            .filter(stored => (blogData.map(item => item.date).indexOf(stored.date) != -1));
        this.setState({ blogState: storedBlogPosts });
        window.localStorage.setItem('blogState', JSON.stringify(storedBlogPosts));
    }

    // keep localStorage up to date with this.state.currentPage
    componentDidUpdate() {
        window.localStorage.setItem('currentPage', JSON.stringify(this.state.currentPage));
        window.localStorage.setItem('blogState', JSON.stringify(this.state.blogState));
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
                <Container>
                    <Blog
                        data={blogData}
                        toggleDisplay={this.toggleDisplay}
                        blogState={this.state.blogState}
                    />
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
                </Container>
            </>
        )
    }
}

export default App;