import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import fruits from "./foods"
import { choice, remove } from "./helpers"

// Randomly draw a fruit from the array
const randomFruit = choice(fruits);

// Log the messages
console.log(`I'd like one ${randomFruit}, please.`)
console.log(`Here you go: ${randomFruit}`)
console.log(`Delicious! May I have another?`)

// Remove the fruit from the array of fruits
remove(fruits, randomFruit)

console.log(`I'm sorry, we're all out. We have ${fruits.length} fruits left.`)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
