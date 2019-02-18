import React, { Component } from 'react';
import './styles/App.css'
import * as api from './utils/api'
import MessagesBoxContainer from './MessagesBoxContainer'
import InputBox from './InputBox'

class App extends Component {

  state = {
    messages: [],
    // should keep Id rather than user.
    user: 'Fran'//from logged user?
  }

  componentDidMount() {
    // Getting data from API.
    api.getAll().then( messages => {
      this.setState(() => ({ messages }))
    })
  }

  sendMessage(info) {
    // Posting data from Form and updating app state.
    info = {...info, author: this.state.user}
    api.sendMessage(info).then( sendResp => {
      api.getAll().then( messages => {
        this.setState((state) => ({
          messages : state.messages.concat(
            [sendResp])
        }))
      })
    })
  }

  render() {
    const { messages } = this.state
    return (
      <div className="App">
        <main>
          <MessagesBoxContainer
            currentUser={this.state.user}
            list={messages} />
          <InputBox
            onSendMessage={(message) => {
              this.sendMessage(message)
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
