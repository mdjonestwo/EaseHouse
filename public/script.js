//const { response } = require("express");

$(document).ready(function () {
  var td = $("td");
  var initialPalletModal = $("#initialPalletModal");
  var addPallet = $("#addDescription");
  var closeWindow = $("#closeInitial");
  var palletDetails = $("#palletDetails");
  var backBtn = $("#backBtn");
  var closeBtn = $("#closeBtn");
  var submitBtn = $("#submitBtn");
  var addPalletModal = $("#addPalletDescriptionModal");
  var currentDetails = $("#currentDetails");
  var palletDescription = $("#palletDescriptionModal");
  var modal = $(".modal");

  $("td").click(function () {
    $(this).addClass("red");
  });

  //Open Iniital Pallet Modal
  td.click(function () {
    initialPalletModal.toggleClass("is-active");
  });

  //Close button on Initial Pallet Modal
  closeWindow.click(function () {
    initialPalletModal.removeClass("is-active");
  });

  // Add button on Initial Pallet Modal
  addPallet.click(function () {
    initialPalletModal.removeClass("is-active");
    addPalletModal.addClass("is-active");
  });

  //Back Button on Add Pallet Description Modal
  $("#backBtn").click(function () {
    $("#addPalletDescriptionModal").removeClass("is-active");
    initialPalletModal.addClass("is-active");
  });

  //Close Button on Add Pallet Description Modal
  $("#closeBtn").click(function () {
    $("#addPalletDescriptionModal").removeClass("is-active");
  });

  //Submit Button
  /*
  submitBtn.click(function () {
    $.ajax({
      url: "/",
      method: "POST",
      data: new PalletInfo(pallet, unit, quantity, julian),
    }).then((response) => {
      console.log(response);
    });
  });
  */
});
