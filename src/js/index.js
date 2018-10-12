// import $ from "jquery";
// import 'bootstrap'; //breathecode dom for more explicit errors
// import 'breathecode-dom'; //DOM override to make JS easier to use
import '../style/index.scss';

window.onload = () =>{
    document.querySelector('.card').classList.add(generateRandomSuit());
    document.querySelector('.card').classList.add(generateRandomNumber());
};

let generateRandomNumber = () =>{
    let numbers = ["A", "2", "3", "4", "5", "6","7","8","9","J","Q","K"];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
};

let generateRandomSuit = () =>{
    var suit = ["Diamond", "Spade", "Heart", "Club"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
};