$(document).ready(function () {

  $("td").click(function () {
    //  var redbground = $(this).addClass("red")
    $("#addPalletModal").toggleClass("is-active");

    //No Selector on Pallet Modal
    $("#noModal").click(function () {
      $("#addPalletModal").removeClass("is-active");
    });

    // Yes button on Pallet Modal
    $("#yesModal").click(function () {
      $("#addPalletModal").removeClass("is-active");
      $("#palletDescriptionModal").addClass("is-active");
    });

    //Submit Description
    $("#submitBtn").click(function () {
      if ($("#palletinfo").val() === "") {
        alert("Please enter a description");
      } else {
        console.log($("#palletinfo").val());
        return $(this).addClass("red");
      }
    });

    //Close Description
    $("#closeBtn").click(function () {
      $("#palletDescriptionModal").removeClass("is-active");
    });
  });
});
