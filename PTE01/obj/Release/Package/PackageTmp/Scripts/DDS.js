var listuser = null;
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
    else if (checkDateTarget == "") {
        alert("Chưa nhập ngày");
        event.preventDefault();
    }
    else {
        $("form").submit();
    }
}
function CreateTask(IDDetail, index) {
    let prob = document.getElementById("prob_" + IDDetail).value;
    let act = document.getElementById("act_" + IDDetail + "_" + index).value;
    let owner = document.getElementById("owner_" + IDDetail + "_" + index).value;
    let date = document.getElementById("due_" + IDDetail + "_" + index).value;
    if (prob == "" || act == "" || owner == "" || date == "") {
        alert("Chưa nhập đủ thông tin");
    }
    else {
        $.ajax({
            url: "/DDSDepartment/CreateTask",
            data: { IDDetail: IDDetail, owner: owner, date: date, act: act },
            dataType: "text",
            type: "POST",
            success: function (response) {
                if (response != 0) {
                    $("#CreateTask_" + IDDetail + "_" + index).find("a").remove();
                    var body = "<a title='CreateTask' href='/Task/Edit/" + response + "' style='float: left' target='_blank'><i class='fa fa-tasks' style=' color: #03a9f4'>"
                    $("#CreateTask_" + IDDetail + "_" + index).append(body);
                    document.getElementById("prob_" + IDDetail).setAttribute("disabled", "disabled");;
                    document.getElementById("att_" + IDDetail).setAttribute("disabled", "disabled");;
                    document.getElementById("owner_" + IDDetail + "_" + index).setAttribute("disabled", "disabled");;
                    document.getElementById("due_" + IDDetail + "_" + index).setAttribute("disabled", "disabled");;
                    document.getElementById("act_" + IDDetail + "_" + index).setAttribute("disabled", "disabled");;
                }
            }
        });
    }
}
function CreateDetailTable(IDLine, IDME, LineName, IDDetail) {
    var body = "<table style='width: 100%; border: none; border-collapse: unset; border-spacing:0px; background-color:transparent' id = 'table_" + IDDetail + "'>";
    body += " <tbody style='border: none' class='TableDetail' id = 'gvCustomers_" + IDDetail + "'>";
    body += "<tr style='height: 20px; background-color:transparent; border:none' id='" + IDDetail + "_1'>";
    body += "<td style='width: 100px' rowspan='1' id ='line_" + IDDetail + "'><input class='form-control' style='background-color: #00bcd41f; text-align:center' value = '" + LineName + "' readonly/></td>";
    body += "<td style='width: 230px' rowspan='1' id ='problem_" + IDDetail + "'>";
    body += "<div class='input-group'>";
    body += "<input onchange = 'EditDetail(" + IDDetail + ")' id = 'prob_" + IDDetail + "' class='form-control' style = 'background-color: #00bcd41f' /> ";
    body += "<div class='input-append'>";
    body += "<a title='Thêm mới' style='float: right' onclick='CreateNewAction(" + IDDetail + ")'><i class='fa fa-plus-circle' style='font-size: 15px; color: red'></i></a>";
    body += " </td > ";
    body += "<td style='width: 190px' rowspan='1' id ='attach_" + IDDetail + "'><input onchange='EditDetail(" + IDDetail + ")' id='att_" + IDDetail + "' class='form-control' style='background-color: #00bcd41f' />";
    body += " </div></div></td > ";
    body += "<td style='width: 200px' id ='acton_" + IDDetail + "_1'><input id='act_" + IDDetail + "_1' class='form-control' style='background-color: #00bcd41f' />";
    body += " </td > ";
    body += "<td style='width: 100px' id ='own_" + IDDetail + "_1'> <select id='owner_" + IDDetail + "_1' class='form-control select2'></select></td >";
    body += "<td style='width: 110px' id ='duedate_" + IDDetail + "_1'><input id='due_" + IDDetail + "_1' type='text' class='form-control date' readonly></td>";
    body += "<td style='width: 30px' id='CreateTask_" + IDDetail + "_1'><a title='CreateTask' onclick='CreateTask(" + IDDetail + "," + 1 + ")' style='float: left'><i class='fa fa-check-circle' style=' color: red'></i></a></td>";
    body += "</td>";
    body += "  </tbody></table >";
    $("#gvCustomers_" + IDME).append(body);
    $("#due_" + IDDetail + "_1").datepicker()
    var ListUser = JSON.parse(listuser);
    $("#owner_" + IDDetail + "_1").append($("<option></option>").val("").html("Chưa chọn"));
    $.each(ListUser, function (index, value) {
        $("#owner_" + IDDetail + "_1").append($("<option></option>").val(this.ID).html(this.ID + ":" + this.Name));
    });
    $('.select2').select2();
}
function CreateNewAction(IDDetailMain) {
    var count = document.getElementById("gvCustomers_" + IDDetailMain).rows.length + 1;
    document.getElementById("line_" + IDDetailMain).rowSpan = count;
    document.getElementById("problem_" + IDDetailMain).rowSpan = count;
    document.getElementById("attach_" + IDDetailMain).rowSpan = count;
    var body = "<tr style='height: 20px; background-color:transparent; border:none' id='" + IDDetailMain + "_" + count + "'>";
    body += "<td style='width: 200px' id ='acton_" + IDDetailMain + "_" + count + "'><input id='act_" + IDDetailMain + "_" + count + "' class='form-control' style='background-color: #00bcd41f' />";
    body += " </td > ";
    body += "<td style='width: 100px' id ='own_" + IDDetailMain + "_" + count + "'> <select id='owner_" + IDDetailMain + "_" + count + "' class='form-control'></select></td >";
    body += "<td style='width: 110px' id ='duedate_" + IDDetailMain + "_" + count + "'><input id='due_" + IDDetailMain + "_" + count + "' type='text' class='form-control date' readonly></td>";
    body += "<td style='width: 30px' id='CreateTask_" + IDDetailMain + "_" + count + "'><a title='CreateTask' onclick='CreateTask(" + IDDetailMain + "," + count + ") ' style='float: left'><i class='fa fa-check-circle' style=' color: red'></i></a></td>";
    body += "</td>";
    $("#gvCustomers_" + IDDetailMain).append(body);
    $("#due_" + IDDetailMain + "_" + count).datepicker()
    if (ListUser == null) {
        $.ajax({
            url: "/DDSDepartment/GetListUser",
            data: {},
            dataType: "text",
            type: "POST",
            success: function (response) {
                var temp = JSON.parse(response);
                var ListUser = JSON.parse(temp.status);
                $("#owner_" + IDDetailMain + "_" + count).append($("<option></option>").val("").html("Chưa chọn"));
                $.each(ListUser, function (index, value) {
                    $("#owner_" + IDDetailMain + "_" + count).append($("<option></option>").val(this.ID).html(this.ID + ":" + this.Name));
                });
            }
        });
    }
    else {
        var ListUser = JSON.parse(listuser);
        $("#owner_" + IDDetailMain + "_" + count).append($("<option></option>").val("").html("Chưa chọn"));
        $.each(ListUser, function (index, value) {
            $("#owner_" + IDDetailMain + "_" + count).append($("<option></option>").val(this.ID).html(this.ID + ":" + this.Name));
        });
    }
}

function ChangeTarget(IDMe, IDLine) {
    let target = document.getElementById("target_" + IDMe + "+" + IDLine).value;
    let actual = document.getElementById("actual_" + IDMe + "+" + IDLine).value;
    let date = document.getElementById("date").value;
    $.ajax({
        url: "/DDSDepartment/ChangeTarget",
        data: { IDMe: IDMe, IDLine: IDLine, target: target, actual: actual, date: date },
        dataType: "text",
        type: "POST",
        success: function (response) {
        }
    });
}
function EditDetail(IDDetail) {
    let prob = document.getElementById("prob_" + IDDetail).value;
    let att = document.getElementById("att_" + IDDetail).value;
    $.ajax({
        url: "/DDSDepartment/EditDetail",
        data: { IDDetail: IDDetail, prob: prob, att: att },
        dataType: "text",
        type: "POST",
        success: function (response) {
        }
    });
}
function CreateDetail(IDLine, IDMe, Name) {
    let date = document.getElementById("date").value;
    $.ajax({
        url: "/DDSDepartment/CreateDetail",
        data: { IDMe: IDMe, IDLine: IDLine, date: date },
        dataType: "text",
        type: "POST",
        success: function (response) {
            var temp = JSON.parse(response);
            listuser = temp.status;
            if (temp.TypePer != 0) {
                CreateDetailTable(IDLine, IDMe, Name, temp.TypePer);
            }
        }
    });
}
function SaveAlign(index) {
    let Topic = document.getElementById("Topic_" + index).value;
    let Description = document.getElementById("Description_" + index).value;
    let date = document.getElementById("date").value;
    let Factory = document.getElementById("Factory").value;;
    $.ajax({
        url: "/DDSDepartment/SaveAlign",
        data: { topic: Topic, description: Description, index: index, date: date, fac: Factory },
        dataType: "text",
        type: "POST",
        success: function (response) {
            var temp = JSON.parse(response);
            let index2 = index + 1;
            $("#Save_" + index).find("a").remove();
            $("#Save_" + index).find("i").remove();
            var body1 = "<a title='Save' onclick = 'EditAlign(" + temp.ID + "," + index + ")'><i class='fa fa-2x fa-save' style=' color: #03a9f4'></i></a><br>"
            body1 += "<button title='Create' onclick = 'CreateNewAlign(" + index2 + ")' id='CreateAlign_" + index2 + "'><i class='fa fa-2x fa-plus-circle' style=' color: red'></i></button>"
            $("#Save_" + index).append(body1);
        }
    });
}
function AddMember() {
    let text = "";
    let member = $(".chosen-select").val();
    member.forEach(myFunction);
    function myFunction(item, index) {
        text += item + ",";
    }
    let Factory = document.getElementById("Factory").value;;
    $.ajax({
        url: "/DDSDepartment/AddMember",
        data: { member: text, fac: Factory },
        dataType: "text",
        type: "POST",
        success: function (response) {
            alert("Saved");
        }
    });
}
function CreateNewAlign(newindex) {
    let index = newindex - 1;
    var bodyAlign = "<tr>";
    bodyAlign += "<td style='width:30%'><input id='Topic_" + newindex + "' class='form-control' /></td>";
    bodyAlign += "<td> <textarea rows='3' id='Description_" + newindex + "' class='form-control'></textarea></td >";
    bodyAlign += "<td style = 'width:30px'; id = 'Save_" + newindex + "' > <a title='Save' onclick='SaveAlign(" + newindex + ")'><i class='fa fa-3x fa-save' style='color:cornflowerblue'></i></a></td >";
    bodyAlign += "</tr >";
    $("#gvAlign").append(bodyAlign);
    $("#Save_" + index).find("button").remove();
}
function EditAlign(ID, indexEdit) {
    let Topic = document.getElementById("Topic_" + indexEdit).value;
    let Description = document.getElementById("Description_" + indexEdit).value;
    $.ajax({
        url: "/DDSDepartment/EditAlign",
        data: { ID: ID, topic: Topic, des: Description },
        dataType: "text",
        type: "POST",
        success: function (response) {
            alert("Saved");
        }
    });
}