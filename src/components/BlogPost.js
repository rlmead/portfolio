import React from 'react';
import Article from './Article.js'

function BlogPost(props) {
    return (
        <> // React.Fragment 
            <div> // class = col-md-4 mb-4
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
        </> // React.Fragment 
    );
}

export default BlogPost;