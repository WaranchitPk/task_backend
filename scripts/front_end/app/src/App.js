import React, { Component } from 'react';
import TaskContainer from './tasks/containers/task';
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div>
        <TaskContainer/>
      </div>
    );
  }
}

export default hot(module)(App)

