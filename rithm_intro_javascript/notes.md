1 Javascript is  an implementation of the ECMAscript standard
ECMAscript is the standard way to implement Javscript

2 brendan eich
  the creator of javascript originally called mocha and it changed names
  several times

3 show and hide the console 
command alt i

4 created a page
simple_page.html

5 prompt and confirm research them 

prompt allows you to get text input from a user

var person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}

confirm returns true if press ok or false if you press cancel 

its to perform logic to go down different paths in javascript

var txt;
var r = confirm("Press a button!");
if (r == true) {
    txt = "You pressed OK!";
} else {
    txt = "You pressed Cancel!";
}
