function insert_to_db() {
    var train_id = document.getElementById("train").value
    var tic_no = document.getElementById("ticket").value
    var dt=new Date().getTime();
    var timestamp = []
    var ts = {
        train_no:train_id,
        seats: tic_no,
        dt: dt
    };
    // var user = firebase.auth().currentUser;
    user_id = localStorage.getItem("userid");
    console.log(user_id);
    db.collection("bookings").doc(user_id).get().then(doc => {
        if (doc.data().timestamp) {
            timestamp = doc.data().timestamp; 
        } 
        timestamp.push(ts);
        db.collection("bookings").doc(user_id).set({
            //  train_no: train_id,
            // seats: tic_no,
            timestamp: timestamp
        })

    })


    // db.collection("trains").doc(user_id).collection(ts).add(
    //     {
    //         train_no: train_id,
    //         seats: tic_no
    //     }
    // ).then(
    //     result => {
    //         console.log(result);
    //         alert("booking successful !!!");
    //         //window.location.assign("index.html");
    //         //alert("this is a joke");
    //     }).catch(err => {
    //         console.log(err)
    //     });
}
