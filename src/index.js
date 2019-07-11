import React from 'react';
import ReactDOM from 'react-dom';
import InfoAgreement from './InfoAgreement';
import InfoAgreement_md from './InfoAgreement_md';
import MedicalConfirmation from './MedicalConfirmation';
import MedicalConfirmation_md from './MedicalConfirmation_md';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MedicalConfirmation_md />, document.getElementById('root'));

serviceWorker.unregister();