import * as React from 'react';
import * as ReactDOM from 'react-dom';

import k8s = require('@kubernetes/client-node');

class Contexts extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = { contexts: [] };
  }

  componentDidMount() {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();
    this.setState(() => ({ contexts: kc.getContexts() }));
  }

  render() {
    return (
      <div>
        Contexts:
        <ul>
          {this.state.contexts.map((context) => {
            return (<li>{context.name}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default Contexts;
