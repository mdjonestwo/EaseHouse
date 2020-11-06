$(document).ready(function(){
    var td = $("td")


    $("td").click(function(){
      var redbground = $(this).toggleClass("red")
      return redbground
      }); 
  
      $("#dryCooler").on("click", function () {
        $("#dryCoolerLayout").toggleClass("is-hidden");
        $("#dryCooler").toggleClass("has-text-grey");
      });
      
  }); 