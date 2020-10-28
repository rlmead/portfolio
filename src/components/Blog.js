import React from 'react';
import { Row, Column } from 'reactstrap';
import Article from './Article.js'

function Blog(props) {
  let content = [];
  let rowArray = [];
  for (let p = 0; p <= props.data.length; p++) {
    // create new rows only for blog posts that are to be displayed
    // and append all rows to content array once all blog posts are included
    if ((props.blogState[p] && props.blogState[p].display) || p === props.data.length) {
      if (rowArray.length > 0) {
        content.push(
          <Row
            key={'row' + p}>
            {rowArray}
          </Row >
        );
        rowArray = [];
      }
    }
    if (p != props.data.length) {
      rowArray.push(
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
  }
  return (
    <>
      {content}
    </>
  );
}

export default Blog;