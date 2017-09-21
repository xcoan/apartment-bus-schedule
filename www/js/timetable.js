var data;

$(document).ready(function() {
  clearTable();
  var jqxhr = $.getJSON( "js/schedule.json", function(json) {
  })
    .done(function(json) {
      data = json;
    })
    .fail(function() {
      console.log( "error" );
    })
});

function populateTimeTable(time, building) {
  clearTable();
  showTable();
  $('#title').text(building.toUpperCase());
  var location = data[time][building]["times"];
  location.forEach(function(time) {
    var markup="<tr><td>" + time + "</tr></td>";
    $("table tbody").append(markup);
  });
}

function clearTable() {
  $('table').hide();
  $('table tbody').empty();
  $('.clear').hide();
  $('#info').hide();
  $('#title').text('Copper Beech/Baywater Bus Schedule');
}

function showTable() {
  $('table').show();
  $('.clear').show();
  $('#info').show();
}
