let localDropdown = $('.local-list');
let concessionarioDropdown = $('.concessionario-list');
let localList = $( ".local-list" );
let option = $( ".local-list option:selected" );
let data2 = null;
let localArray = [];
let arr = [];


$.getJSON('dist/js/csvjson.json', function(data) {
    $.each(data, function (key, entry) {
        localDropdown.append($('<option data-key="'+key+'">'+entry.localidade+'</option>'));
        concessionarioDropdown.append($('<option data-key="'+key+'">'+entry.name+'</option>'));
        //console.log(entry.localidade);
    });

    data2 = [... data];

});

localList.click(function() {
    localArray = [];
    localArray.push($(".local-list :selected").val());

    const filteredArray = data2.filter(d => d.localidade == localArray[0]);
    console.log('Filter', filteredArray);

    concessionarioDropdown.empty();
    concessionarioDropdown.append($('<option data-key="0">Concessionário</option>'));
    $.each(filteredArray, function (key, entry) {
        concessionarioDropdown.append($('<option data-key="'+key+'">'+entry.name+'</option>'));
    });

    console.log(localArray);
});

