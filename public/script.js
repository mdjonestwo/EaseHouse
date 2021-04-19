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

//GET pallet
function getPallet(location) {
  var settings = {
    url: "/api/cooler/" + location,
    method: "GET",
  };

  $.ajax(settings).done(function (response) {
    //console.log(response.Product);
    if (!response) {
      $("#productForm").val("");
      $("#unitForm").val("");
      $("#quantityForm").val("");
      $("#julianForm").val("");
    } else {
      $("#productForm").val(response.Product);
      $("#unitForm").val(response.Unit);
      $("#quantityForm").val(response.Quantity);
      $("#julianForm").val(response.Julian);
    }
  });
}

// // NOT WORKING YET
// // GET Pallets
// function getAll() {
//   var settings = {
//     url: "/api/cooler/",
//     method: "GET",
//   };

//   $.ajax(settings).done(function (response) {
//     console.log(response);
//     var allTable = $("#table td");
//     console.log(allTable);
//     // response.filter(value.Location => );

//     const datamap = new Map(response.map((o) => [o.Location, o]))

//     const

//     // $("#table td").each(function () {
//     //   console.log($(this));
//     //   $(this)
//     //     .find("td")
//     //     .each(function () {
//     //       //do your stuff, you can use $(this) to get current cell
//     //       //console.log($(this));
//     //       var foo = $(this);
//     //       if ($(this)[0].id === oneMore) {
//     //         console.log("hey");
//     //         console.log(foo);
//     //       }
//     //     });
//     // });
//   });
// }

//DELETE Pallet
function deletePallet(location) {
  var settings = {
    url: "/api/cooler/" + location,
    method: "DELETE",
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

//UPDATE Pallet
function updatePallet(location) {
  var settings = {
    url: "/api/cooler/" + location,
    method: "PUT",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

//JQuery DOM manipulation
$(document).ready(function () {
  var td = $("td");
  var palletForm = $(".pallet-form");
  console.log(palletForm);
  var addPalletModal = $("#addPalletDescriptionModal");
  var deleteBtn = $("#deleteBtn");
  var id;

  //Change selected <td> cell color to red
  $("td").click(function (ev) {
    console.log($(this));
    const locationTxt = $(this).text();
    const location = $(this).attr("id", locationTxt);
    id = $(this).attr("id", locationTxt).text();
    getPallet(location[0].id);
  });

  //Pallet Schema
  function palletFunction(id) {
    console.log(id);
    const palletadd = {
      Product: $("#productForm").val(),
      Unit: $("#unitForm").val(),
      Quantity: $("#quantityForm").val(),
      Julian: $("#julianForm").val(),
      Location: id,
    };

    return palletadd;
  }

  //Submit Button on addPalletDesciptionModal
  palletForm.on("submit", function (event) {
    event.preventDefault();
    console.log("form");
    const palletadd = palletFunction(id);
    add_pallet(palletadd);
  });

  //Delete Button
  deleteBtn.click(function () {
    deletePallet(id);
    clearForm();
  });

  //Close Button on addPalletDescriptionModal
  $("#closeBtn").click(function () {
    $("#addPalletDescriptionModal").removeClass("is-active");
    $(location).off("click");
    console.log(location);
    clearForm();
  });

  //Clear Form Function
  function clearForm() {
    $("#productForm").val("");
    $("#unitForm").val("");
    $("#quantityForm").val("");
    $("#julianForm").val("");
  }

  //Open initalPalletModal
  td.click(function () {
    addPalletModal.addClass("is-active");
  });
});
