//Adding pallet to database
function add_pallet(pallet) {
  console.log("works");
  var settings = {
    url: "/api/cooler",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(pallet),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
//JQuery DOM manipulation
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

  //Change selected <td> cell color to red
  $("td").click(function (event) {
    let locationTxt = $(this).text();
    let location = $(this).attr("id", locationTxt);
    console.log(location);

    $(this).addClass("red");

    //Pallet Schema
    function palletFunction(event) {
      let palletadd = {
        Product: $("#productForm").val(),
        Unit: $("#unitForm").val(),
        Quantity: $("#quantityForm").val(),
        Julian: $("#julianForm").val(),
        Location: location.attr("id"),
      };

      return palletadd;
    }

    //Clear Form Function
    function clearForm() {
      $(".input").val("");
    }

    //Submit Button on addPalletDesciptionModal
    submitBtn.click(function (event) {
      const palletadd = palletFunction(event);
      add_pallet(palletadd);
      console.log(palletadd);
      clearForm();
    });
  });

  //Open initalPalletModal
  td.click(function () {
    initialPalletModal.toggleClass("is-active");
  });
  //Close initialPalletModal
  closeWindow.click(function () {
    initialPalletModal.removeClass("is-active");
  });
  // Add Pallet button on initialPalletModal
  addPallet.click(function () {
    initialPalletModal.removeClass("is-active");
    addPalletModal.addClass("is-active");
  });

  //Back Button on addPalletDescriptionModal
  $("#backBtn").click(function () {
    $("#addPalletDescriptionModal").removeClass("is-active");
    initialPalletModal.addClass("is-active");
  });
  //Close Button on addPalletDescriptionModal
  $("#closeBtn").click(function () {
    $("#addPalletDescriptionModal").removeClass("is-active");
  });
});
