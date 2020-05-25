import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Contexts from './contexts.tsx';
import Namespaces from './namespaces.tsx';

try {
  require('electron-reloader')(module);
} catch (_) { }

ReactDOM.render(<div>
  <Contexts />
  <Namespaces />
</div>, document.getElementById('container'));
