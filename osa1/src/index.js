import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            if (props.nimi = null)
                <p>Hello {props.name}</p>
            else
                <p>Hei {props.nimi}</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <h1>Greetings</h1>
            <Hello nimi ="Antti"/>
            <Hello name ="Pekka"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));