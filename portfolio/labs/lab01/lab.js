/*

*/


function start(e) {
    var  name = [
        {
            char: '楊',
            big5: 'B7A8',
            cns: '1-644E',
            unicode: '694A'
        },
        {
            char: '毅',
            big5: 'BCDD',
            cns: '1-6D47',
            unicode: '6BC5'
        },
        {
            char: '邦',
            big5: 'A8B9',
            cns: '1-4B5A',
            unicode: '90A6'
        }
     ];






/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/

var word = document.getElementById("div1");

    for(var i=0 ; i<3 ; i++ ) {

    word.innerHTML += name[i].char;
    word.innerHTML += ' big5 = ';
    word.innerHTML += name[i].big5;
    word.innerHTML += ' cns= ';
    word.innerHTML += name[i].cns;
    word.innerHTML += ' unicode = ';
    word.innerHTML += name[i].unicode;
    word.innerHTML += '<br>';


    }
}
window.addEventListener( "load", start, false );
