/*

dropdown.empty();

dropdown.append('<option selected="true" disabled>Concessionário</option>');
dropdown.prop('selectedIndex', 0);

const url = 'csvjson.json';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
  })
});*/

let dropdown = $('.local-list');
let dropdown2 = $('.concessionario-list');

$.getJSON('dist/js/csvjson.json', function(data) {
    $.each(data, function (key, entry) {
        dropdown.append($('<option class="local'+key+'">'+entry.localidade+'</option>'));
        dropdown2.append($('<option class="local'+key+'">'+entry.name+'</option>'));
        console.log(entry.localidade);
    })
});