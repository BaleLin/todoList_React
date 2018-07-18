import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './component/todoList';
class App extends Component {
  render() {
    return (
      <div className="App">
              <header className="App-header">
                  <h1 className="App-title"></h1>
              </header>
        <TodoList/>
         </div>
    );
  }
}

export default App;
