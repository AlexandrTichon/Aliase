import React from 'react';
import './App.css';

import Modal from './components/modal/modal';
import { textDescr, buttonVal } from './props/login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStage: '',
      score: 0,
    };
  }

  setGameStatus(status) {
    this.setState({
      gameStage: status,
    });
  }

  render() {
    const { gameStage, score } = this.state;
    return (
      <div className="App" setGameStatus={this.setGameStatus}>
        <Modal textDescr={textDescr} buttonVal={buttonVal} />
      </div>
    );
  }
}

export default App;
