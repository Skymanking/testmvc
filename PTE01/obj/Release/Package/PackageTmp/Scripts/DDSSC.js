function CheckCreate() {
    let checkFactory = document.getElementById("Factory").value;
    let checkName = document.getElementById("Name").value;
    let checkDateTarget = document.getElementById("datetarget").value;
    if (checkName == "") {
        alert("Chưa nhập tên");
        event.preventDefault();
    }
    else if (checkFactory == "0") {
        alert("Chưa chọn Xưởng");
        event.preventDefault();
    }
    else if (checkDateTarget == ""){
        alert("Chưa nhập ngày");
        event.preventDefault();
    }
    else {
        $("form").submit();
    }
}
function CreateDetailTable(IDME, IDDetail, jsUser) {
    var body = "<tr style='height: 20px; background-color:transparent; border:none' id='" + IDDetail+"'>";
    body += "<td style='width: 200px'><input onchange='EditDetail(" + IDDetail + ")' id='prob_" + IDDetail +"' class='form-control' style='background-color: #00bcd41f' /></td>";
    body += "<td style='width: 200px'><input onchange='EditDetail(" + IDDetail + ")' id='att_" + IDDetail +"' class='form-control' style='background-color: #00bcd41f' /></td>";
    body += "<td style='width: 200px'><input onchange='EditDetail(" + IDDetail + ")' id='act_" + IDDetail +"' class='form-control' style='background-color: #00bcd41f' /></td>";
    body += "<td style='width: 100px'> <select id='owner_" + IDDetail + "' onchange='EditDetail(" + IDDetail +")' class='form-control'></select></td >";
    body += "<td style='width: 100px'><input onchange='EditDetail(" + IDDetail + ")' id='due_" + IDDetail +"' type='text' class='form-control date' readonly ></td>";
    body += "<td style='width: 30px' id='CreateTask_" + IDDetail + "'><a title='CreateTask' onclick='CreateTask(" + IDDetail + ")' style='float: left'><i class='fa fa-plus-circle' style=' color: red'></i></a></td>";
    body += "<td style='width: 30px'><a title='Delete' onclick='DelDetail(" + IDDetail +")' style='float: left'><i class='fa fa-trash' style=' color: red'></i></a></td>";
    body += "</td>";
    $("#gvCustomers_" + IDME).append(body);
    $("#due_" + IDDetail).datepicker()
    var ListUser = JSON.parse(jsUser);
    $("#owner_" + IDDetail).append($("<option></option>").val("").html("Chưa chọn"));
    $.each(ListUser, function (index, value) {
        $("#owner_" + IDDetail).append($("<option></option>").val(this.ID).html(this.ID + ":" + this.Name));
    });
}
function ChangeTarget(IDDMS, IDMe, IDLine) {
    let target = document.getElementById("target_" + IDMe + "+" + IDLine).value;
    let actual = document.getElementById("actual_" + IDMe + "+" + IDLine).value;
    let date = document.getElementById("date").value;
    $.ajax({
        url: "/DDSSC/ChangeTarget",
        data: { IDDMS: IDDMS, IDMe: IDMe, IDLine: IDLine, target: target, actual: actual, date: date},
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response == 1) {
            }
            else {
            }
        }
    });
}
function EditDetail(IDDetail) {
    let prob = document.getElementById("prob_" + IDDetail).value;
    let att = document.getElementById("att_" + IDDetail).value;
    let act = document.getElementById("act_" + IDDetail).value;
    let owner = document.getElementById("owner_" + IDDetail).value;
    let due = document.getElementById("due_" + IDDetail).value;
    $.ajax({
        url: "/DDSSC/EditDetail",
        data: { IDDetail: IDDetail, prob: prob,att:att, act: act, owner: owner, due: due },
        dataType: "text",
        type: "POST",
        success: function (response) {
        }
    });    
}
function DelDetail(IDDetail) {    
    $.ajax({
        url: "/DDSSC/DelDetail",
        data: { Detail: IDDetail },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response != 0) {
                $(".TableDetail").find("tr[id=" + IDDetail + "]").remove();
            }
        }
    });
}
function CreateDetail(IDDMS, IDMe) {
    let date = document.getElementById("date").value;
    $.ajax({
        url: "/DDSSC/CreateDetail",
        data: { IDDMS: IDDMS, IDMe: IDMe, date: date },
        dataType: "text",
        type: "POST",
        success: function (response) {
            var temp = JSON.parse(response);            
            if (temp.TypePer != 0) {
                CreateDetailTable(IDMe, temp.TypePer, temp.status);
            }            
        }
    });
}
function CreateTask(IDDetail) {
    let prob = document.getElementById("prob_" + IDDetail).value;
    let att = document.getElementById("att_" + IDDetail).value;
    let act = document.getElementById("act_" + IDDetail).value;
    let owner = document.getElementById("owner_" + IDDetail).value;
    let date = document.getElementById("due_" + IDDetail).value;
    if (prob == "" || act == "" || owner == "" || date == "") {
        alert("Chưa nhập đủ thông tin");
    }
    else {
        $.ajax({
            url: "/DDSSC/CreateTask",
            data: { IDDetail: IDDetail },
            dataType: "text",
            type: "POST",
            success: function (response) {
                if (response != 0) {
                    alert(response);
                    $("#CreateTask_" + IDDetail).find("a").remove();
                    var body = "<a title='CreateTask' href='/Task/Edit/" + response + "' style='float: left' target='_blank'><i class='fa fa-tasks' style=' color: #03a9f4'>"
                    $("#CreateTask_" + IDDetail).append(body);
                    document.getElementById("prob_" + IDDetail).setAttribute("disabled", "disabled");;
                    document.getElementById("act_" + IDDetail).setAttribute("disabled", "disabled");;
                    document.getElementById("owner_" + IDDetail).setAttribute("disabled", "disabled");;
                    document.getElementById("due_" + IDDetail).setAttribute("disabled", "disabled");;
                }
            }
        });
    }
}