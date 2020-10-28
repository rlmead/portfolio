import React from 'react';
import { Row, Column } from 'reactstrap';
import Article from './Article.js'

function Blog(props) {
    let content = [];
    for (let p = 0; p < props.data.length; p++) {
        content.push(
            <div
                className='card col-md-4'
                onClick={() => props.toggleDisplay(props.data[p].date)}
            >
                {props.data[p].title}
                {/* 
                            div
                                class = card
                                click eventListener article_column.classList.toggle('hidden')
                                style - cursor: pointer
        
                                div
                                    class = card-body
                                    img
        
                        */}
            </div>
        )
    }
    return (
        <>
            {content}
        </>
    );
}

export default Blog;