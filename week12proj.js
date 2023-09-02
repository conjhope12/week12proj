// Here's my link to my ajax.

const URL_ENDPOINT = 'http://localhost:3000/lightWeight'

// This function allows me to go to the db and edit data from the db to the app.

$.get(URL_ENDPOINT).then(data => {
    data.map(unit => {
      $('tbody').append(
        $(`
        <tr>
          <td>${unit.id}</td>
          <td>${unit.unitName}</td>
          <td>${unit.specificLift}</td>
          <td>
            <button class="btn btn-outline-danger" onclick="deleteUser(${unit.id})">X</button>
          </td>
        </tr>
        `)
      )
    })
  })

// This click function allows me to make changes to the app that will effect the db.
// >> .post allows me to add data to the existing table.

    $('#submitButton').on('click',function () {
  
      $.post(URL_ENDPOINT, {
        unitName: $('#newUnitName').val(),
        specificLift: $('#newLift').val(),
      })
    })

   // The deleteUser function allows me to make changes to the app that will effect the db.
   // >> This function allows me to remove data from the table by id.

  function deleteUser (id) {

    $.ajax(`${URL_ENDPOINT}/${id}`, {
      method: 'DELETE'
    })
  }

  // The updateUser function allows me to make changes in the data already in the data base.
  // >> PUT allows me to push changes to existing data.

  function updateUser() {
    let id = $('#unitID').val();
    $.ajax(`${URL_ENDPOINT}/${id}`, {
      method: 'PUT',
      data: {
        unitName: $('#updateUnitName').val() ,
        specificLift: $('#updateLift').val() ,
      }
    })
  }
  
  // This line allows me to connect the above function to the update button.

  $('#submitUpdateButton').on('click',updateUser)

  // for (let i = "a"; i !== "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; i += "a") {
  //   console.log(i)
  // }