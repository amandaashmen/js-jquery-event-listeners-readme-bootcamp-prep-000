//define functions here

function getIt() {
  $('p').on("click", function(){
   alert("Hey!");
});
}

function frameIt() {
  $(document).on("load", function(){
   
});
}

function pressIt() {
  $('input').on("keydown", function(e){
    if (e.key === "G" || "g") {
      alert("G pressed");
    }
});
}

function submitIt() {
  $('h1').on("click", function(){
   alert("Hey!");
});
}

$(document).ready(function(){

// call functions here

});
