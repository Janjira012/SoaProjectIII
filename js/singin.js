$.validator.setDefaults({
    submitHandler: function() {}
});
$.validator.methods.equal = function(value, element, param) {
    return value == param;
};
$().ready(function() {
    var validator = $("#form").bind("invalid-form.validate", function() {
        $("#summary").html("Your form contains " + validator.numberOfInvalids() + " errors, see details below.");
    }).validate({
        debug: true,
        errorElement: "em",
        errorContainer: $("#warning, #summary"),
        errorPlacement: function(error, element) {
            error.appendTo(element.parent("div").next("span"));
            $("#err").show();
        },
        success: function(label) {
            label.text("").addClass("success");
            $("#err").hide();
        },
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
});
$("#signin").click(function() {
    var url = "https://customer-api-shopping.herokuapp.com/api/customers/";
    url += "name=" + $("#name").val();
    url += "&password=" + $("#password").val();
    console.log(url);
    $.get(url, function(data, status) {
        console.log(data);
        console.log(status);
        if (status == 'success') {
            console.log($("#name").val());
            console.log($("#password").val());
            console.log(data[0].name);
            console.log(data[0].password);
            if($("#username").val() == data[0].name && $("#password").val() == data[0].password){
            $("#suc").show();
            console.log("Success");
            console.log(data.name);
            setTimeout(window.location.href = "index.html?id=" + data[0].id);
            }
        } else {
            $("#err").show();
        
         }
    });
});