function addStudent() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var dept = document.getElementById("dept").value;

    if (name == "" || roll == "" || dept == "") {
        alert("Please fill all fields");
        return;
    }

    var table = document.getElementById("table");
    var row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = roll;
    row.insertCell(2).innerText = dept;

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
}
