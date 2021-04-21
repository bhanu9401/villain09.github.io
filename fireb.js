const firebaseConfig = {
    apiKey: "AIzaSyCqmzN67DSxBA9cVxLnF0lb41v6nvqWJ3A",
    authDomain: "javaw-d0851.firebaseapp.com",
    databaseURL: "https://javaw-d0851-default-rtdb.firebaseio.com",
    projectId: "javaw-d0851",
    storageBucket: "javaw-d0851.appspot.com",
    messagingSenderId: "45959995367",
    appId: "1:45959995367:web:886ac5e6aaeb2aa44da742"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  var dbrf=firebase.database().ref()
 
  function insertf(){
    
    var stname = document.getElementById("name").value;
    var stroll = document.getElementById("rollno").value;
    dbrf.child(stroll).set({
        Name:stname,
        Rollno:stroll
    })
    console.log("Data inserted")
    document.getElementById("data").innerHTML = ""
    document.getElementById("data").innerHTML = "DATA INSERTED"
  }

  function get(){
    table = document.createElement("TABLE");
    table.border = "1"
    table.width = "500"
    row = table.insertRow(0);
    cell1 = row.insertCell(0)
    cell2 = row.insertCell(1)
    cell1.innerHTML = 'Name'
    cell2.innerHTML = 'RollNo'        
    dbrf.on("value",(snap)=>{
      snap.forEach((data)=>{
        row = table.insertRow(-1);
        cell1 = row.insertCell(0)
        cell1.innerHTML = data.val().Name
        cell1 = row.insertCell(1)
        cell1.innerHTML = data.val().Rollno
      })
    })
    document.getElementById("data").innerHTML = ""
    document.getElementById("data").append(table);
  }

  function deletef()
  {
      var roll=window.prompt("Enter rollno to delete")
      var zz = dbrf.child(roll).remove()
      console.log(zz)
      document.getElementById("data").innerHTML = "DATA DELETED"
  }

 function update()
 {
      var roll=document.getElementById("rollno").value;
      var newname=document.getElementById("name").value;
      dbrf.child(roll).update({Name:newname})
      console.log("updated")
      document.getElementById("data").innerHTML = "DATA UPDATED"
 }