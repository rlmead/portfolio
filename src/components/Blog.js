import React from 'react';
import { Row, Col, Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
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
        >
          <Card
            className='mb-4'
            onClick={() => props.toggleDisplay(props.data[p].date)}>
            <CardBody>
              <CardImg
                src={props.data[p].img_src}
                alt={props.data[p].img_alt}
              />
              <CardText>{props.data[p].date}</CardText>
              <CardTitle>{props.data[p].title}</CardTitle>
              {/* 
                            div
                                class = card
                                click eventListener article_column.classList.toggle('hidden')
                                style - cursor: pointer
        
                                div
                                    class = card-body
                                    img
        
                        */}
            </CardBody>
          </Card>
        </Col>
      )
      if ((props.blogState[p] && props.blogState[p].display)) {
        rowArray.push(
          <Col
            key={'col-'+p}
            md='8'>
            <Article
              data={props.data[p]}
            />
          </Col>
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