$(document).ready(function () {
  var td = $("td");
  var initialPalletModal = $("#initialPalletModal");
  var addPallet = $("#yesModal");
  var closeWindow = $("#noModal");
  var palletDetails = $("#palletDetails");
  var backBtn = $("#backBtn");
  var closeBtn = $("#closeBtn");
  var submitBtn = $("#submitBtn");
  var addPalletModal = $("#addPalletDescriptionModal");
  var currentDetails = $("#currentDetails");
  var palletDescription = $("#palletDescriptionModal");

  $("td").click(function () {
    if ($("#palletinfo").val()) {
      $(this).addClass("red");
    } else {
    }
    
    initialPalletModal.toggleClass("is-active");

    //Close button on Pallet Mod. Modal
    closeWindow.click(function () {
      initialPalletModal.removeClass("is-active");
    });

    // Add button on Pallet Mod. Modal
    addPallet.click(function () {
      initialPalletModal.removeClass("is-active");
      addPalletModal.addClass("is-active");
    });
    //Back Button
    $("#backBtn").click(function () {
      $("#addPalletDescriptionModal").removeClass("is-active");
      initialPalletModal.addClass("is-active");
    });
    //Close Description
    $("#closeBtn").click(function () {
      $("#addPalletDescriptionModal").removeClass("is-active");
    });
  });
});

