import React from 'react'
import ReactDOM from 'react-dom';
import {Counter} from './components/couter_com.js'
import {Provider} from 'react-redux'
import mainstore from './redux/counter-redux/mainstore.js'

ReactDOM.render(
    <Provider store={mainstore}>
    <Counter />
    </Provider>
 ,
    document.getElementById('root')
);