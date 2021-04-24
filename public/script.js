//API CALLS
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
    return response;
  });
}

//GET pallet
function getPallet(location) {
  var settings = {
    url: "/api/cooler/" + location,
    method: "GET",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    if (response) {
      $("#palletTable tbody tr").remove();
      console.log("hey");
      var rows = "";
      response.forEach(function (res) {
        rows +=
          "<tr id=" +
          res._id +
          "><td>" +
          res.Product +
          "</td><td>" +
          res.Unit +
          "</td><td>" +
          res.Quantity +
          "</td><td>" +
          res.Julian +
          "</td><td>" +
          "<button id='deleteBtn'>" +
          "DELETE" +
          "</button></td></tr>";
      });

      $(rows).appendTo("#palletTable tbody");
    } else {
      $("#palletTable tr").remove();
    }
  });
}

// GET Pallets
function getAll() {
  var settings = {
    url: "/api/cooler/",
    method: "GET",
  };

  $.ajax(settings).done(function (response) {
    var found = response
      .filter((e) => e.Filled === true)
      .map((e) => e.Location);

    $("#table")
      .find("td")
      .each(function () {
        if (found.includes(this.id)) {
          this.classList.add("red");
        }
      });
  });
}

//DELETE Pallet
function deletePallet(id) {
  var settings = {
    url: "/api/cooler/" + id,
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
  var addPalletModal = $("#addPalletDescriptionModal");
  var deleteBtn = $("#deleteBtn");
  var id;
  var farmsList = ["40", "LA", "WO", "CO", "NU"];
  var submitAlert = $("#spaceSubmitResponse");
  var palletTableModal = $("#palletTableModal");
  var palletTable = $("#palletTable");
  var closePalletTableModal = $("#closePalletTableModal");
  var openAddModal = $("#openAddModal");
  var openDetailsModal = $("#openDetailsModal");
  var palletInitModal = $("#palletInitModal");
  var closeInitPalletModal = $("#closeInitPalletModal");

  //Creates farmsList drop down
  function createFarmLis() {
    for (i = 0; i < farmsList.length; i++) {
      select = document.getElementById("unitForm");
      var opt = document.createElement("option");
      opt.value = farmsList[i];
      opt.innerHTML = farmsList[i];
      select.appendChild(opt);
    }
  }

  createFarmLis();

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
    const palletadd = palletFunction(id);
    add_pallet(palletadd);
    getAll();
  });

  //NOT WORKING
  //Delete Button
  deleteBtn.click(function () {
    console.log("yoyo");
    //deletePallet(this.id);

    clearForm();
  });

  $(document).on("change", palletTable, function () {
    $("td").click(function () {
      console.log("yoyoyo");
    });
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
    palletInitModal.addClass("is-active");
  });

  closePalletTableModal.click(function () {
    palletTableModal.removeClass("is-active");
  });

  openAddModal.click(function () {
    addPalletModal.addClass("is-active");
    palletInitModal.removeClass("is-active");
  });

  closeInitPalletModal.click(function () {
    palletInitModal.removeClass("is-active");
  });

  openDetailsModal.click(function () {
    palletTableModal.addClass("is-active");
    palletInitModal.removeClass("is-active");
  });
});
