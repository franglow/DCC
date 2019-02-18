import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MessagesBox from './MessagesBox'

class MessagesBoxContainer extends Component {

  toggleClass(author) {
    if (author === this.props.currentUser){
      return "item-group item-right"
    } else{
      return "item-group item-left"
    }
  }

  render() {
    return(
      <Container>
        <div className="chat-container">
          {
            this.props.list.map(item => (
              <MessagesBox
                key={item._id}
                item={item}
                toggleClass={this.toggleClass(item.author)}
              />
          ))
          }
        </div>
      </Container>
    )
  }
}

export default MessagesBoxContainer
