import React from 'react';

function Article(props) {
    let postContent = [];
    // add a paragraph for each item stored as a string
    for (let p of props.data.content) {
        if ((typeof p) === 'string') {
            postContent.push(
                <p>{p}</p>
            )
    // add a list for each item stored as an array (here detected as object)
        } else if ((typeof p) === 'object') {
            postContent.push(
                <ul>
                    {
                        p.map((i, n) => {
                            return (
                                <li key={n}>{i}</li>
                            )
                        }
                        )
                    }
                </ul>
            )
        }
    }
    return (
        < article className='mb-4'>{postContent}</article >
    );
}

export default Article;