'use strict'

$(document).ready(function(){

  console.log("my calculator sucks");
  $('button').on('click', function(){
    console.log("but it is improving");
    console.log($(this).text());
    var display = [];
    display.push($(this).text());
    $('#result').append(display);
  });
  
});