var db = firebase.firestore();

function getavailability(){
   // console.log(db.collection("trains").doc("001").data())
//    var id = document.getElementById("train").value;
//    console.log("id"+id)
//     db.collection("trains").doc(id).onSnapshot(doc=> {
//         console.log(doc.data().available_seats)
//         document.getElementById("available_seats").innerHTML = "THE AVAILABLE TICKETS ARE: "+doc.data().available_seats;  
//     })
    var no = document.getElementById("train").value;
    console.log("no  ="+no)
  //  console.log(num)

    db.collection("trains").doc(no).onSnapshot(doc=> {
        console.log(doc.data())
        var available = doc.data().available_seats;
      document.getElementById("available_seats").innerHTML = "THE AVAILABLE TICKETS ARE: "+available;
      

})
}
function gettrains()
{
    db.collection("trains").get().then((docs) => {
        console.log(docs)
        i=0;
        docs.forEach((doc, index)=> {
          //  console.log(doc.data(), doc.id)
            id=doc.id;
            name=doc.data().train_name;
            c=id.concat(name);
           // console.log(c)
            var x = document.getElementById("train");
            var opt = document.createElement("option");
            opt.appendChild( document.createTextNode(id) );
            // set value property of opt
            opt.value = id; 
            // add opt to end of select box (sel)
            x.appendChild(opt); 
            i++;
        })
       
      })
}
var i = 0; /* Set Global Variable i */
function increment(){
i += 1; /* Function for automatic increment of field's "Name" attribute. */
}
/*
---------------------------------------------

Function to Remove Form Elements Dynamically
---------------------------------------------

*/
function removeElement(parentDiv, childDiv){
if (childDiv == parentDiv){
alert("The parent div cannot be removed.");
}
else if (document.getElementById(childDiv)){
var child = document.getElementById(childDiv);
var parent = document.getElementById(parentDiv);
parent.removeChild(child);
}
else{
alert("Child div has already been removed or does not exist.");
return false;
}
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Name text field.

----------------------------------------------------------------------------
*/
function add()
{
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Name");
    var g = document.createElement("IMG");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);

    var r = document.createElement('span');
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Contact");
    var g = document.createElement("IMG");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);

    var r = document.createElement('span');
    var y = document.createElement("INPUT");
    var g = document.createElement("IMG");
    y.setAttribute("type", "TEXT");
    y.setAttribute("placeholder", "GENDER");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    r.setAttribute("id", "id_" + i);
    // document.getElementById("myForm").appendChild(r);

    // document.getElementById("myForm").innerHTML("\n");
}





function resetElements(){
// document.getElementById('myForm').innerHTML = '';
}
