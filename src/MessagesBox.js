import React from 'react'
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem
  } from 'reactstrap';

export default function MessagesBox ({ item, toggleClass }) {
  let options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
  }

  return (
    <Row>
      <Col lg={12}>
        <ListGroup className={toggleClass}>
          <ListGroupItem className="item-list">
            {item.author}
          </ListGroupItem>
          <ListGroupItem className="item-list">
            {item.message}
          </ListGroupItem>
          <ListGroupItem className="item-list">
            {
              (new Date(parseInt(item.timestamp))).toLocaleString('en-DE', options)
            }
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  )
}
