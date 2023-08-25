function register(){
    // var name = document.getElementById("userName").value;
    var mail = document.getElementById("userMail").value;
    // var phNo = document.getElementById("mNumber").value;
    // var pass = document.getElementById("password").value;
    // var city = document.getElementById("city").value;
    // var pin = document.getElementById("pincode").value;
    // var ref = document.getElementById("refcode").value;
    // var cbox = document.getElementById("cBox").value;
    // var userName = /[A-z]{5}/
    var email = /[a-z]{5}/
    // var mob = /^[6-9]{1}[0-9]{9}$/
    // var pas = /^[A-Z]{5}+[a-z]{8}+\d{3}+[0-9]{3}$/
    // var town = /^[A-Z]{1}+[a-z]{9}$/
    // var code = /[0-9]{6}/
    // var rcode = /^[0-9]{5}/
    // console.log(name)
    // if (userName.test(name) ){
    //     console.log("username test passed");
    // }
    // else{
    //     console.log("username test failed");
    // }
    if(email.test(mail)){
        console.log("email is valid")
    }
}