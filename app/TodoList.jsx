/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/12/8
 * @description
 *
 */
import React from 'react'

export default class TodoList extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    var createItem  = (item) => {
      return <li key={item.id}>{item.text}</li>
    }
    return <ul>{this.props.items.map(createItem)}</ul>
  }
};


  