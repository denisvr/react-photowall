import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import './styles/stylesheet.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducer';
import thunk from 'redux-thunk'
import {database} from './database/config'



const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>,
    document.getElementById('root'));