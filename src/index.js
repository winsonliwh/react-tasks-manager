import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter basename='/react-tasks-manager'>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);