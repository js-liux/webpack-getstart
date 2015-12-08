/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/11/27
 * @description
 *
 */
import React from 'react';

class HelloSayer extends React.Component {
  render() {
    return <p>Hello {this.props.name}!</p>;
  }
}

export default HelloSayer;
  