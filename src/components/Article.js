import React from 'react';

function Article(props) {
    return (
        < article >
            {props.data.content}
            {/* 
                for p in article_array
                    if p === string
                        <p>
                    else if p ==- array
                        <ul>
                */}
        </article >
    );
}

export default Article;