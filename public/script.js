function add_pallet(pallet) {
  var settings = {
    url: "localhost:3001/api/cooler",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(pallet),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

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

  //Pallet Schema
  let palletadd = {
    Product: $("#productForm").val(),
    Unit: $("#unitForm").val(),
    Quantity: $("#quantityForm").val(),
    Julian: $("#julianForm").val(),
  };

  //Submit Button
  submitBtn.click(function () {
    add_pallet(palletadd);
    console.log(palletadd);
  });
});
