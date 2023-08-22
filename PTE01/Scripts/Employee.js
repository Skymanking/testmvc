﻿function CheckIDExit() {
    var id = event.target.id;
    $.ajax({
        url: "/Employee/CheckIDExit",
        data: { ID: event.target.value },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response == "True") {
                alert("Mã Nhân viên đã tồn tại");
                document.getElementById(id).value = "";
            }
        }
    });
}
function Delete(ID) {
    event.preventDefault();
    var text = "Delete?";
    if (confirm(text)) {
        $.ajax({
            url: "/Employee/ChangeStatus",
            data: { ID: ID },
            dataType: "text",
            type: "POST",
            success: function (response) {
                if (response == "True") {
                    alert("Deleted");
                    window.location = '/Employee';
                }
            }
        });
    }
}