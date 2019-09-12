import React from 'react';
import {render} from 'react-dom';
//import './index.css';
import Home from '../src/pages/containers/home'
import data from '../src/api.json'


//const app=document.getElementById('root')

render(<Home data={data}/>,document.getElementById('root'));
//render( <Home />,document.getElementById('root'));

