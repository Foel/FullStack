import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => {
    console.log('Hello called')
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old.
            </p>
        </div>
    )
}

const Footer = () => {
    console.log('Footer called')
    return (
        <div>
            <h1>Created footer for the page</h1>
            <h4>Smaller text</h4>
        </div>
    )
}

const App = () => {
    console.log('Hello App komponentti')
    const name ='Risto'
    const age = 12

    return (
        <div>
            <h1>Greetings</h1>
            <Hello />
            <Hello name ="Pekka" age = {20 + 13} />
            <Hello name ={name} age = {age + 2} />
            <Hello age = {4} />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));