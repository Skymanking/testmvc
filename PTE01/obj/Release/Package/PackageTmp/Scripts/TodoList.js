
function CheckUser(type) {
    let title = 'title';
    if (type == 2) {
        title = 'edittitle';
    }
    if (document.getElementById(title).value == "") {
        alert("Chưa nhập tên");
        event.preventDefault();
    }
    else {
        if (type == 1) {
            let text = "";
            var options1 = document.getElementById('newmember').selectedOptions;
            var values1 = Array.from(options1).map(({ value }) => value);
            values1.forEach(myFunction);
            function myFunction(item, index) {
                text += item + ",";
            }
            document.getElementById("tag").value = text.substring(0, text.length - 1);
            let share = "";
            var options = document.getElementById('share').selectedOptions;
            var values = Array.from(options).map(({ value }) => value);
            values.forEach(myFunction1);
            function myFunction1(item, index) {
                share += item + ",";
            }
            document.getElementById("shareList").value = share.substring(0, share.length - 1);
        }
        else {
            let text = "";
            var options1 = document.getElementById('editmember').selectedOptions;
            var values1 = Array.from(options1).map(({ value }) => value);
            values1.forEach(myFunction);
            function myFunction(item, index) {
                text += item + ",";
            }
            document.getElementById("edittag").value = text.substring(0, text.length - 1);
            let editshare = "";
            var options = document.getElementById('editshare').selectedOptions;
            var values = Array.from(options).map(({ value }) => value);
            values.forEach(myFunction2);
            function myFunction2(item, index) {
                editshare += item + ",";
            }
            document.getElementById("editListshare").value = editshare.substring(0, editshare.length - 1);
        }
    }
}
function EditTag(id) {
    $.ajax({
        url: "/TodoList/ViewDetailTag",
        data: { id: id },
        dataType: "text",
        type: "POST",
        success: function (response) {
            let tag = JSON.parse(response).status
            console.log(tag);
            document.getElementById('editnametag').value = tag.Name;
            document.getElementById('editcolortag').value = tag.Color;
            document.getElementById('editIDtag').value = tag.ID;
        }
    });
}

function HiddenTag() {
    let id = document.getElementById('editIDtag').value;
    $.ajax({
        url: "/TodoList/HiddenTag",
        data: { id: id },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (JSON.parse(response).status) {
                location.reload();
            }
        }
    });
}
$(document).ready(function () {
    $('#editmember').change(function () {
        document.getElementById('oldtags').textContent = "";
    });
    $('#editshare').change(function () {
        document.getElementById('oldshare').textContent = "";
    });
});
function EditTask(id) {
    $.ajax({
        url: "/TodoList/ViewDetail",
        data: { id: id },
        dataType: "text",
        type: "POST",
        success: function (response) {
            let status = JSON.parse(response).status;
            let Task = JSON.parse(status);
            var element = document.getElementById('editmember');
            var values = Task.Tags;
            for (var i = 0; i < element.options.length; i++) {
                element.options[i].selected = values.indexOf(element.options[i].value) >= 0;
            }
            var share = document.getElementById('editshare');
            var valueshare = Task.User;
            for (var i = 0; i < share.options.length; i++) {
                share.options[i].selected = valueshare.indexOf(share.options[i].value) >= 0;
            }
            document.getElementById('editID').value = Task.ID;
            document.getElementById('oldtags').textContent = Task.Tags;
            document.getElementById('oldshare').textContent = Task.User;
            document.getElementById('edittitle').value = Task.Name;
            document.getElementById('editpri').value = Task.Priority;
            document.getElementById('select2-editpri-container').textContent = Task.Priority;
            document.getElementById('select2-editpri-container').title = Task.Priority;
            document.getElementById('editdes').textContent = Task.Description;
        }
    });
}
function ChangeImportant(id) {
    $.ajax({
        url: "/TodoList/Important",
        data: { id: id },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (JSON.parse(response).status) {
                var body = '<i class="fa fa-2x fa-star" style="color: #ffc30e"></i>'
                $("#important_" + id).find("i").remove();
                $("#important_" + id).append(body);
            }
            else {
                var body = '<i class="fa fa-star-o" style="color: #ffeb3b"></i>'
                $("#important_" + id).find("i").remove();
                $("#important_" + id).append(body);
            }
        }
    });
}
function Hidden(id, type) {
    $.ajax({
        url: "/TodoList/Hidden",
        data: { id: id, type: type },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (JSON.parse(response).status) {
                $("#Task_" + id).remove();
            }
        }
    });
}
function Done(id) {
    $.ajax({
        url: "/TodoList/Done",
        data: { id: id },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (JSON.parse(response).status) {
                var body = '<i class="fa fa-check" style="color:red" ></i>'
                $("#done_" + id).find("i").remove();
                $("#done_" + id).append(body);
            }
            else {
                var body = '<i class="fa fa-times-circle"></i>'
                $("#done_" + id).find("i").remove();
                $("#done_" + id).append(body);
            }
        }
    });
}
function Search(search) {
    var tags = document.getElementById("searchTag").value;
    if (tags.includes(search)) {
        var remove = search + ","
        tags = tags.replace(remove, "");
    }
    else {
        tags += search + ",";
    }
    document.getElementById("searchTag").value = tags;
    document.getElementById("btnSearch").click();
}