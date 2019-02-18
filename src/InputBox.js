import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import serializeForm from 'form-serialize'

class InputBox extends Component {

  handelSubmit = (e) => {
    e.preventDefault()
    const value = serializeForm(e.target, {hash: true})
    e.target.reset()//Clear input form

    if(this.props.onSendMessage)
      this.props.onSendMessage(value)
  }

  render() {
    return(
      <Form onSubmit={this.handelSubmit}>
        <FormGroup className="form">
          <Input type='text' name='message' placeholder='Message'></Input>
          <Button>Send</Button>
        </FormGroup>
      </Form>
    )
  }
}
export default InputBox
