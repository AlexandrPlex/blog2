// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {router} from './router';

import registerServiceWorker from './registerServiceWorker';

const documentGetElementById = document.getElementById('root');
if(documentGetElementById){
    ReactDOM.render(<React.Fragment> {router} </React.Fragment>, documentGetElementById);
}
registerServiceWorker();
