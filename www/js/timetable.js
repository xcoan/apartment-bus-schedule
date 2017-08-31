function populateTimeTable(time, building) {
  clearTable();
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
  $('table tbody').empty();
}
