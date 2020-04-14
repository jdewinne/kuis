import * as React from 'react';
import * as ReactDOM from 'react-dom';

import k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();

const Index = () => {
    kc.loadFromDefault();
    return <div>Hello {kc.currentContext}!</div>;
};
 
ReactDOM.render(<Index />, document.getElementById('app'));