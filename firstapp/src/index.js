import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';

const App = () => {
    return <div>
                <h1>Hello to react</h1>
                <h2>This is about frist app</h2>
                <Home/>
            </div>
}

ReactDOM.render(<App/>,document.getElementById('root'))
