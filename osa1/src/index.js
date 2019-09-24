import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old.
            </p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <h1>>Created footer for the page</h1>
        </div>
    )
}

const App = () => {
    console.log('Hello fron komponentti')
    const name ='Pekka'
    const age = 12

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name ="Pekka" age = {20 + 13} />
            <Hello name ={name} age = {age + 2} />
            <Hello />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));