let localDropdown = $('.local-list');
let concessionarioDropdown = $('.concessionario-list');
let localList = $( ".local-list" );
let option = $( ".local-list option:selected" );
let legalBtn = $('.legal');
let legalModal = $('.modal');
let closeModal = $('.close-modal');
let data2 = null;
let localArray = [];
let arr = [];
let sendData = $('.send-data');


//GET INFO FROM JSON AND POPULATES DROPDOWNS
$.getJSON('dist/js/csvjson.json', function(data) {
    $.each(data, function (key, entry) {
        localDropdown.append($('<option data-key="'+key+'">'+entry.localidade+'</option>'));
        concessionarioDropdown.append($('<option data-key="'+key+'">'+entry.name+'</option>'));
        //console.log(entry.localidade);
    });

    //DUPLICATES DATA ARRAY
    data2 = [... data];

});

//RUNS ON CLICK 
localList.click(function() {
    localArray = []; // CLEARS SELECTED ARRAY
    localArray.push($(".local-list :selected").val()); //ADDS SELECTED OPTION TO ARRAY

    //FILTERS ARRAY
    const filteredArray = data2.filter(d => d.localidade == localArray[0]);

    concessionarioDropdown.empty(); //CLEARS DROPDOWN
    concessionarioDropdown.append($('<option data-key="0">Concessionário</option>')); //ADDS DEFAULT OPTION TO DROPDOWN
    
    //ADDS FILTERED OPTIONS TO DROPDOWN FROM FILTERED ARRAY
    $.each(filteredArray, function (key, entry) {
        concessionarioDropdown.append($('<option data-key="'+key+'">'+entry.name+'</option>'));
    });
});


//OPENS MODAL
legalBtn.click(function() {
    legalModal.addClass('legal-on');
});

//CLOSES MODAL
closeModal.click(function() {
    legalModal.removeClass('legal-on');
});

// HELPS MODAL FROM NOT SHOWING AT START
$( document ).ready(function() {
    legalModal.show();
    legalModal.css('display', 'flex');
});

//SENDS FORM DATA TO CONSOLE AS TABLE
sendData.click(function() {
    console.table([
        ["Nome", $(".form-name").val()],
        ["Telefone", $(".form-tel").val()],
        ["Localidade", $(".local-list").val()],
        ["Email", $(".form-mail").val()],
        ["Concessionário", $(".concessionario-list").val()],
    ]);
});