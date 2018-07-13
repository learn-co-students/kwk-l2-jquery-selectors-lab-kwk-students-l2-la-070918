'use-strict';
//write h1Selector function that select all <h1> elements and returns them using an element selector

function h1Selector(){
 return $("h1");
}

//write a function liInOlSelector that selects and returns all <li> inside of <ol> using descendant selector

function liInOlSelector(){
  return $("ol>li");
}

//write a funtion linkSelector that selects and returns <a> that is inside of the element that has both an id of box4 and a class of box 5
function linkSelector(){
  return $("#box4.box5 a ");
}

function imageSelector(){
return $('img[alt= "cat sleeping"]');
}

function checkboxInputSelector(){
  return $('[type= "checkbox"]');
}