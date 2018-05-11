var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var pinid = getUrlParameter('id');

$(function () {
    $.ajax({
        url: 'https://soaproductapi.herokuapp.com/products/'+ pinid,
        type: 'GET'
    }).then(function (data) {
        var row = '<tr><td><a href="view.html?id=' + data.id + '">' + data.name + '</a></td><td>' + data.description + 
            '</td><td><img  class="card-img-top"  src="' +data.photo + '"></td><td>'
            + data.price + '</td><td>'+ data.weight + '</td></tr>'; 
         $('#one').append(row);
    });
});
$(function () {
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        url: 'https://api-payment.herokuapp.com/api/payment',
        type: 'GET'
       

    }).then(function (data) {
        
        for (var i = 0; i < data.length; i++) {
            if(parseInt(data[i].userId)===parseInt(pinid)){
        var row = '<tr><td>' + data[i].orderId + '</a></td><td>' + data[i].webName + 
            '</td><td>' + data[i].price + '</td><td>'+ data[i].dateTime + '</td></tr>';
    
         $('#two').append(row);
        }
    }
    
});
});