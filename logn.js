
var provider = new firebase.auth.GoogleAuthProvider();
var db = firebase.firestore();
function googleSignin() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token)
        console.log(user)

        var user = firebase.auth().currentUser;
        var name, email, photoURL;
        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoURL = user.photoURL;
        }
        db.collection("Users").doc(email).set({
            name: user.displayName,
            photoURL: user.photoURL
        }).then(
            result=> {
                console.log(result);
                alert("login successful !!!");
        window.location.assign("index.html");
        alert("this is a joke");
            }).catch(err=>
                {
                    console.log(err)
                })
        console.log(email)

    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code)
        console.log(error.message)
   });
}

function googleSignout() {
    firebase.auth().signOut().then(function() {
      console.log('Signout Succesfull')
      alert("Signout successful !!!");
   }).catch(function(error) {
      console.log('Signout Failed')  
   });
   window.location.assign("login.html");
}