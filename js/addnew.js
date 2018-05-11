$(function () {

    $('#alert').hide();

    $('#addnew').click(function () {

        var formdata = {
            Name: $('#name').val(),
            Description: $('#desc').val(),
            Photo: $('#photo').val(),
            Price: $('#price').val(),
            Weight: $('#weight').val(),
        }

        console.log(formdata);


        $(function () {

            $.ajax({

                //CP2. Complete Ajax Code to INSERT new pin data 
                url: 'https://soaproductapi.herokuapp.com/products',
                type: 'POST',
                data: formdata
            }).then(function (data) {

                $('#alert').show();
                $('#name').val('');
                $('#desc').val('');
                $('#photo').val('');
                $('#price').val('');
                $('#weight').val('');
                console.log('Added');

            });
        });
    });
});