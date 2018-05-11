$(function () {
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        url: 'https://soaproductapi.herokuapp.com/products',
        method: 'GET'

    }).then(function (data) {

        addNewRow(data)
    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td><a href="view.html?id=' + data[i].id + '">' + data[i].name + '</a></td><td>' + data[i].description + 
            '</td><td><img  class="card-img-top"  src="' + data[i].photo + '"></td><td>'
            + data[i].price + '</td><td>'+ data[i].weight + '</td></tr>';
            $('#pinlist').append(row);
        }
    }

});