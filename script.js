$(document).ready(function(){
    var td = $("td")


    $("td").click(function(){
      var redbground = $(this).addClass("red")
      var addPalletModal = $("#addPalletModal").toggleClass("is-active")
      /*
      if(redbground && confirm("Do you want to add a pallet here?") ){
        var pNameQuant = prompt("Enter product name and quantity.")
        console.log(pNameQuant)
      } else {
        alert("You have no products to add.")
        $(this).addClass("beige")
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
      */
     return redbground, addPalletModal
  })
//No Selector on Pallet Modal
  $("#noModal").click(function(){
    $("#addPalletModal").removeClass("is-active")
  })

// Yes button on Pallet Modal 
  $("#yesModal").click(function(){
    $("#addPalletModal").removeClass("is-active")
    $("#palletDescriptionModal").addClass("is-active")
  })

}); 
