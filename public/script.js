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
      $("#tBody").children().remove();
      console.log($("#tBody").children());
      for (i = 0; i < response.length; i++) {
        var row = document.getElementById("tBody").insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4)
        // var cell6 = row.insertCell(5);
        row.setAttribute("id", response[i]._id);
        cell1.innerHTML = response[i].Product;
        cell2.innerHTML = response[i].Unit;
        cell3.innerHTML = response[i].Quantity;
        cell4.innerHTML = response[i].Julian;
        cell5.setAttribute("id", "deletBtn");
        cell5.setAttribute("class", "occupied")
        cell5.innerHTML = "delete";
        // cell6.setAttribute("id", "updateBtn");
        // cell6.setAttribute("class", "occupied")
        // cell6.innerHTML = "update";
      }
      console.log(row);
      //$(rows).appendTo("#palletTable tbody");
    } else {
      $("#tBody").children().remove();
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
          this.classList.add("occupied");
        }
      });

    $("#wetTable1")
      .find("td")
      .each(function () {
        if (found.includes(this.id)) {
          this.classList.add("occupied");
        }
      });  

    $("#wetTable2")
      .find("td")
      .each(function () {
        if (found.includes(this.id)) {
          this.classList.add("occupied");
        }
      });    

      $("#trailerTable")
      .find("td")
      .each(function () {
        if (found.includes(this.id)) {
          this.classList.add("occupied");
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

  getAll();
}

// //UPDATE Pallet
// function updatePallet(id) {
//   var settings = {
//     url: "/api/cooler/" + id,
//     method: "PUT",
//   };

//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });
// }

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
  var updateModal = $("#updatePalletDescriptionModal");
  var closeUpdateBtn = $("#closeUpdateBtn");
  var updateID = $("#updateID");

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

  //Change selected <td> cell color to occupied
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

  //Delete Button
  $("#palletTable").on("click", "#deletBtn ", function () {
    console.log(this.id);
    console.log(this);
    console.log(this.parentNode);
    deletePallet(this.parentNode.id);
    this.parentNode.remove();
  });

  // //Update button
  // $("#palletTable").on("click", "#updateBtn ", function () {
  //   console.log(this.id);
  //   console.log(this);
  //   console.log(this.parentNode);
  //   palletTableModal.removeClass("is-active");
  //   updateModal.addClass("is-active");
  //   console.log(updateID);
  // });

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

  /////////MODAL FUNCTIONALITY
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

  // closeUpdateBtn.click(function () {
  //   updateModal.removeClass("is-active");
  // });


  /////////////////////
});
