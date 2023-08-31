// const URL_ENDPOINT = "https://64ee21d51f87218271425a8e.mockapi.io/Promineo_Tech_API/weight_room"
const URL_ENDPOINT = 'http://localhost:3000/lightWeight'

$.get(URL_ENDPOINT).then(data => {
    data.map(unit => {
      $('tbody').append(
        $(`
        <tr>
          <td>${unit.id}</td>
          <td>${unit.newUnitName}</td>
          <td>${unit.newLift}</td>
          <td>
            <button class="btn btn-outline-danger" onclick="deleteUser(${unit.id})">X</button>
          </td>
        </tr>
        `)
      )
    })
  })

  // $(document).ready(function() {
    $('#submitButton').click(function () {
  
      $.post(URL_ENDPOINT, {
        unitName: $('#newUnitName').val(),
        specificLift: $('#newLift').val(),
      })
    })
  // })
  function deleteUser (id) {

    $.ajax(`${URL_ENDPOINT}/${id}`, {
      method: 'DELETE'
    })
  }

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
  
  $('#submitUpdateButton').click(updateUser)