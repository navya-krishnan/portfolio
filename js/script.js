$(document).ready(function(){
    $("#message-form").validate({
        rules:{
            Name:{
                required:true,
                minlength:5,
                nospace:true
            },
            Email:{
                required:true,
                email:true
            },
            Subject:{
                required:true,
                minlength:10
            },
            Message:{
                required:true,
                minlength:50
            }        
        },
        Message:{
            Name:{
                required:"Please Enter your name",
                minlength:"Please enter minimum 5 character"
            },
            Email:{
                required:"Please Enter Email",
                email:"Enter Valid Email"
            },
            Subject:{
                required:"Please Enter Subject",
                minlength:"Please Enter Minimum 10 character"
            },
            Message:{
                required:"Please Enter a Message",
                minlength:"Please Enter Minimum 50 character"
            }
        }
    })
})
console.log("Hello");