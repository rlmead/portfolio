import React from 'react';

function Article(props) {
    let postContent = [];
    // add a paragraph for each item stored as a string
    for (let p = 0; p < props.data.length; p++) {
        if ((typeof props.data[p]) === 'string') {
            postContent.push(
                <p key={'str-'+p}>{props.data[p]}</p>
            )
            // add a list for each item stored as an array (here detected as object)
        } else if ((typeof props.data[p]) === 'object') {
            postContent.push(
                <ul key={'ul-'+p}>
                    {
                        props.data[p].map((i, n) => {
                            return (
                                <li key={'li-' + n}>{i}</li>
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