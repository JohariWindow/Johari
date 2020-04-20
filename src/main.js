var list=[];

function synonym(x){

var url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=".concat(x.innerHTML);
//console.log(url);
var settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "902da5d480msh4b9b611c0ad57ecp15c429jsn11386d54f544"
    }
}

$.ajax(settings).done(function (response) {
    //console.log(typeof(response),response.list[0]);
    let ch = response.list[0];
   // alert(ch['definition']);
   //console.log(ch['definition']);
   $("#def").html("<strong>Urban Dictionary meaning : </strong>".concat(ch['definition']));   
});


}

 
function add(x){

const index = list.indexOf(x.innerHTML);
if (index > -1) {
  list.splice(index, 1);
  x.style.background="";
}
else if(list.length<6)
    {
        x.style.background="#e6ffe6";
        list.push(x.innerHTML);
        console.log(list);
    }
else
  {  alert("attributes exceeding !!");
}
}


$(document).ready(function(){
 

$("button").mouseout(function(){
  $("#def").html("");
});


  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } // End if
  });
});

