

$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyDPvFjemvzhTxO0E-kgQuskM-NS1L1i3vk",
        authDomain: "users-e7281.firebaseapp.com",
        databaseURL: "https://users-e7281.firebaseio.com",
        projectId: "users-e7281",
        storageBucket: "users-e7281.appspot.com",
        messagingSenderId: "1022606531230"
      };
      firebase.initializeApp(config);

      var email, password;
      
    $("#signupSection").hide();

    $("#showSignupPage").on('click', function () {
        $("#signupSection").show();
        $("#loginSection").hide();
    });

    $("#showSigninPage").on('click', function () {
        $("#loginSection").show();
        $("#signupSection").hide();
    })

    $("#signInSubmit").on('click', function () {
        email = $("#loginemail").val().trim();
        password = $("#loginpwd").val().trim();

        console.log("Email :: " +email + "  Password :: "+ password);


        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == "auth/invalid-email") {
                console.log("Invalid Email");
                $("#errorText").text("Invalid Email");
            }

            if (errorCode == "auth/user-not-found") {
                console.log("Username Not Found");
                $("#errorText").text("Username Not Found");
            }

            if (errorCode == "auth/wrong-password") {
                console.log("Incorrect Password");
                $("#errorText").text("Incorrect Password");
            }

            else {
                console.log(errorMessage);
                $("#errorText").text(errorMessage);
            }

            return errorCaught = true;
        }).then(function () {
            if (!errorCaught) {
                console.log('dashboard pages display')
                window.open("dashboard.html", "_self")
            }

            else {
                errorCaught = false;
            }

        })
    })
})
