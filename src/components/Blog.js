import React from 'react';
import { Row, Col } from 'reactstrap';
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
        <Col
          md='4'
          key={p}
          className='card'
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
        </Col>
      )
      if ((props.blogState[p] && props.blogState[p].display)) {
        rowArray.push(
          <Article/>
        )
      }
    }
  }
  return (
    <>
      {content}
    </>
  );
}

export default Blog;