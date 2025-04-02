console.log("File begin");

let firstName = "Johnathan";
let birthYear = 1986;
let currentYear = 2025;

function fillInBlanks() {
    console.log("fillInBlanks begin");
    const nameSpan = document.getElementById("name");
    nameSpan.innerText = firstName;
    const yearSpan = document.getElementById("year");
    yearSpan.innerText = birthYear;
    console.log("fillInBlanks end");
}

function howOldAreYou() {
    console.log("howOldAreYou begin");
    let years = currentYear - birthYear;
    alert(`You are either ${years - 1} or ${years} years old.`);
    console.log("howOldAreYou end");
}

function changeGlobals() {
    console.log("changeGlobals begin");
    firstName = "Todd";
    birthYear = 2000;
    currentYear = 2030;
    console.log("changeGlobals end");
}

console.log("File end");
