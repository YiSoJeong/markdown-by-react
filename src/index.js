import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InfoAgreement from './InfoAgreement';
import MedicalConfirmation from './MedicalConfirmation';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MedicalConfirmation />, document.getElementById('root'));

serviceWorker.unregister();
