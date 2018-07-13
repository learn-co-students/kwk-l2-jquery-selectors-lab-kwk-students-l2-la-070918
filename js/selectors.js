'use-strict';
//add your code here
function h1Selector(){
  return $('h1') //short cut
  //return document.querySelector('h1') //long hand
}
function liInOlSelector(){
  return $("ol>li");
}
function linkSelector(){
   return $('#box4.box5 a')
}
 
function imageSelector(){
  return $('img[alt="cat sleeping"]')
}
function checkboxInputSelector(){
  return $('input[type="checkbox"]')
}