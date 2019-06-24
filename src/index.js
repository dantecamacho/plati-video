import React from 'react';
import {render} from 'react-dom';
//import './index.css';

import * as serviceWorker from './serviceWorker';
import data from './api.json'
import Playlist from './Playlist/playlist.js'

const app=document.getElementById('root')

render(<Playlist data={data}/>,app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
