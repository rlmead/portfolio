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
            'blog',
            'projects',
            'links',
            'about',
        ];
        this.state = {
            currentPage: 0,
            blogState: [],
        };
        this.setPage = this.setPage.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.switchPage = this.switchPage.bind(this);
    }

    // toggle display for collapsing blog posts
    toggleDisplay(postDate) {
        let stateUpdates = this.state.blogState;
        let postIndex = stateUpdates.findIndex(item => item.date === postDate);
        stateUpdates[postIndex].display = !stateUpdates[postIndex].display;
        this.setState({ blogState: stateUpdates });
    }

    // change page on navbar button clicks
    setPage(pageNum) {
        this.setState({ currentPage: pageNum })
    }

    // add check to stay on same page when refreshed
    // and keep open blog posts open
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

    // determine what to display based on the currentPage
    switchPage(page) {
        switch (page) {
            case 'projects':
                return (
                    <div>projects</div>
                )
            case 'links':
                return (
                    <div>links</div>
                )
            case 'about':
                return(
                    <Article
                        data={aboutData}
                    />
                )
            default:
                return (
                    <Blog
                        data={blogData}
                        toggleDisplay={this.toggleDisplay}
                        blogState={this.state.blogState}
                    />
                )
        }
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
                    {this.switchPage(this.pages[this.state.currentPage])}
                </Container>
            </>
        )
    }
}

export default App;