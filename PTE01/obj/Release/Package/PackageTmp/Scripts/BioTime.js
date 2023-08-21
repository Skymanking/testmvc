function Shift() {
    let text = "";
    var options1 = document.getElementById('shift').selectedOptions;
    var values1 = Array.from(options1).map(({ value }) => value);
    values1.forEach(myFunction);
    function myFunction(item, index) {
        text += item + ",";
    }
    document.getElementById("shifts").value = text;
    var shift = document.getElementById("shifts").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var ListEmp = document.getElementById("ListEmp").value;
    if (text == "" || start == "" || end == "" || ListEmp == "") {
        event.preventDefault();
        alert("Thông tin chưa đầy đủ")
    }
}
function OverTime() {
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var ListEmp = document.getElementById("ListEmp").value;
    if (start == "" || end == "" || ListEmp == "") {
        event.preventDefault();
        alert("Thông tin chưa đầy đủ")
    }
    if (start == end) {
        event.preventDefault();
        alert("Thời gian không phù hợp")
    }
}
function onChange(element) {
    $('#baocom').dataTable().fnFilter('');
    var ListEmp = document.getElementById("ListEmp").value;
    var check = element.id + ",";
    if (ListEmp.includes(check)) {
        ListEmp = ListEmp.replace(check, "");
    }
    else {
        ListEmp += check;
    }
    document.getElementById("ListEmp").value = ListEmp;
    console.log(element.id);
}
function ChangeDept(e) {
    document.getElementById("depID").value = e.value;
    document.getElementById("depChange").click();
}
function ChangeDeptOverTime(e) {
    document.getElementById("depID").value = e.value;
    document.getElementById("depChange").click();
}
function CreatePermision() {
    let text = "";
    var options1 = document.getElementById('User').selectedOptions;
    var values1 = Array.from(options1).map(({ value }) => value);
    values1.forEach(myFunction);
    function myFunction(item, index) {
        text += item + ",";
    }
    document.getElementById("UserName").value = text;
    var UserName = document.getElementById("UserName").value;
    var Permistion = document.getElementById("Permistion").value;
    if (UserName == "" || Permistion == "") {
        event.preventDefault();
        alert("Thông tin chưa đầy đủ")
    }
}
function EditPermision() {
    let text = "";
    var options1 = document.getElementById('User').selectedOptions;
    var values1 = Array.from(options1).map(({ value }) => value);
    values1.forEach(myFunction);
    function myFunction(item, index) {
        text += item + ",";
    }
    document.getElementById("UserName").value = text;
    var Permistion = document.getElementById("Permistion").value;
    if (Permistion == "") {
        event.preventDefault();
        alert("Thông tin chưa đầy đủ")
    }
}
function Revoke(id, username) {
    $.ajax({
        url: "/BioTime/RevokePermision",
        data: { Per: id, UserName: username },
        dataType: "json",
        type: "POST",
        success: function (response) {
            var row = document.getElementById(username);
            row.parentNode.removeChild(row);
        }
    });
}
function ApproveOT(type) {
    document.getElementById("type").value = type;
    let text = "";
    var options1 = document.getElementById('User').selectedOptions;
    var values1 = Array.from(options1).map(({ value }) => value);
    values1.forEach(myFunction);
    function myFunction(item, index) {
        text += item + ",";
    }
    document.getElementById("StrID").value = text;
}