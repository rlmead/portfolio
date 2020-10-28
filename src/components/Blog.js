import React from 'react';
import Article from './Article.js'

function Blog(props) {
    let content = [];

    return (
        <>
            <div
                className='card col-md-4'
                onClick={() => props.toggleDisplay(props.data.date)}
            >
                {props.data.title}
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
            {/* <Article /> // class = col-md-8 hidden mb-4 */}
        </>
    );
}

export default Blog;