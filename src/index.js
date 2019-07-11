import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InfoAgreement from './InfoAgreement';
import Test from './Test';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<InfoAgreement />, document.getElementById('root'));

serviceWorker.unregister();
