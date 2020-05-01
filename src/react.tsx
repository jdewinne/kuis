import * as React from 'react';
import * as ReactDOM from 'react-dom';

import k8s = require('@kubernetes/client-node');

class App extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = { counter: 0, namespaces: [] };
  }

  componentDidMount() {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    k8sApi.listNamespace().then((res) => {
      this.setState(() => ({ counter: res.body.items.length, namespaces: res.body.items }));
    });
  }

  render() {
    return (
      <div>
        Hello
        microk8s
        !
        { ' '}
        with namespaces:
        {this.state.counter}
        and
        {this.state.namespaces.map((namespace) => {
          console.log(namespace.metadata!.name);
          // Return the element. Also pass key
          return (namespace.metadata!.name);
        })}
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
