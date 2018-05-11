$("#signup").click(function() {
    var formdata = {
        address: $('#address').val(),
        email: $('#eamil').val(),
        lastname: $('#lastname').val(),
        name: $('#name').val(),
        password: $('#password').val(),
        telno: $('#telno').val(),
    }
    console.log(formdata);
    $(function () {
        $.ajax({
            url: 'https://customer-api-shopping.herokuapp.com/api/customers/',
            type: 'POST',
            data: formdata, //  contentType:"application/json; charset-utf-8"
        }).then(function (data) {
            $('#address').show();
            $('#eamil').val('');
            $('#lastname').val('');
            $('#name').val('');
            $('#password').val('');
            $('#telno').val('');
            console.log('Added');

        });
    });
});