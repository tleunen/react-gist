import React, {Component} from 'react'
import {render} from 'react-dom'

import Gist from '../../src'

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'bedde975e6e92a77e2321487ba45f313',
      file: null
    };
  }

  componentDidMount() {
    // update the gist after 5 seconds
    setTimeout(() => {
      this.setState({id: '5995ea726914f280afb3', file: 'Chef-Dockerfile'});
    }, 5000);

    setTimeout(() => {
      this.setState({id: null, file: null, url: 'https://gist.github.com/ringods/5995ea726914f280afb3'});
    }, 10000);
  }

  render() {
    return <div>
      <h1>React-Gist</h1>
      <p>The following gist will be updated in 5 seconds</p>
      <Gist {...this.state} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
