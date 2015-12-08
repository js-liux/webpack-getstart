/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/12/8
 * @description
 *
 */
import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList.jsx'

export default class TodoApp extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      items: [],
      title: 'TO DO ',
      text: '说点什么吧'
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    var newItems = this.state.items.concat({
      text: this.state.text,
      id: Date.now()
    })
    this.setState({
      items: newItems,
      text: ''
    })
  }
  onChange (e){
    e.preventDefault();
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.onChange}/>
        </form>
      </div>
    )
  }
};

ReactDOM.render(<TodoApp />, document.getElementById('app3'));
  