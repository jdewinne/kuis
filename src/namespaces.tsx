import * as React from 'react';
import * as ReactDOM from 'react-dom';

import k8s = require('@kubernetes/client-node');

class Namespaces extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = { namespaces: [] };
  }

  componentDidMount() {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    k8sApi.listNamespace().then((res) => {
      this.setState(() => ({ namespaces: res.body.items }));
    });
  }

  render() {
    return (
      <div>
        Namespaces:
        <ul>
          {this.state.namespaces.map((namespace) => {
            return (<li>{namespace.metadata!.name}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default Namespaces;
