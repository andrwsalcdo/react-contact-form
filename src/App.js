import React, { Component } from 'react'
// inject global styles from styled-components. border-sizing, body. 
import { injectGlobal } from 'styled-components'
// holds all components
import Main from './views/Main/Main'

injectGlobal`
  * {
    box-sizing: border-box; 
  }
  body { 
    line-height: 1.6; 
    font-family: Tahoma, Geneva, Verdana, sans-serif; 
    padding: 1em; 
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App