//counter code
var button = document.getElementById('counter');
var counter=0;

button.onclick = function(){
    
    //make a request to counter input
    //capture the response and store it in a variable
    //Rende the variable in the correr span
    counter=counter+1;
    var span = document.getElementById('counter');

    span.innerHTML = counter.toString();
}