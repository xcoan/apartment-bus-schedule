$(document).ready(function() {
  clearTable();
});

function populateTimeTable(time, building) {
  clearTable();
  $('table').show();
  $('#clear').show();
  $('#info').show();
  $('#title').text(building.toUpperCase());
  var data;
  var jqxhr = $.getJSON( "js/schedule.json", function(json) {
    data = json;
  })
    .done(function() {
      var location = data[time][building]["times"];
      location.forEach(function(time) {
        var markup="<tr><td>" + time + "</tr></td>";
        $("table tbody").append(markup);
        console.log(time);
      });
    })
    .fail(function() {
      console.log( "error" );
    })
}

function clearTable() {
  $('table').hide();
  $('table tbody').empty();
  $('#clear').hide();
  $('#info').hide();
  $('#title').text('Copper Beech/Baywater Bus Schedule');
}
