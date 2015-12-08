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
import marked from 'marked'


class MarkdownEditor extends React.Component{
  constructor(){
    super()
    this.state = {
      text: 'type some markdown here!'
    }
    this.onChange = this.onChange.bind(this);
    this.rawMarkup = this.rawMarkup.bind(this);

  }
  onChange(e){
    this.setState({text: this.refs.text1.value})
  }
  rawMarkup(){
    return {
      __html: marked(this.state.text, {sanitize: true})
    }
  }

  render(){
    return (
      <div>
      <h2>Input markdown</h2>
      <textarea ref="text1" value={this.state.text} onChange={this.onChange}/>

        <h3>Output234343</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.rawMarkup()}
        />
      </div>
    )
  }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById('app4'));

  