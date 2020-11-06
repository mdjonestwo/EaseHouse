$(document).ready(function(){
    var td = $("td")


    $("td").click(function(){
      var redbground = $(this).addClass("red")
      
      
      if(redbground && confirm("Do you want to add a pallet here?") ){
        var pNameQuant = prompt("Enter product name and quantity.")
        console.log(pNameQuant)
      } else {
        alert("You have no products to add.")
      }

      }); 
  
      $("#dryCooler").on("click", function () {
        $("#dryCoolerLayout").toggleClass("is-hidden");
        $("#dryCooler").toggleClass("has-text-grey");
      });
      
      $("#trailer").on("click", function () {
        $("#trailerLayout").toggleClass("is-hidden");
        $("#trailer").toggleClass("has-text-grey");
      });
  }); 
