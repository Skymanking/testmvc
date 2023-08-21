
function CheckCreate(type) {
    let title = '';
    if (type == 2) {
        title = 'edit';
    }
    if (document.getElementById(title + "title").value == "") {
        alert("Chưa nhập tên");
        event.preventDefault();
    }
    else {
        if (type == 1) {
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
    $('#editshare').change(function () {
        document.getElementById('oldshare').textContent = "";
    });
});
function EditTask(id) {
    $.ajax({
        url: "/Notes/ViewDetail",
        data: { id: id },
        dataType: "text",
        type: "POST",
        success: function (response) {
            let status = JSON.parse(response).status;
            let Task = JSON.parse(status);
            var share = document.getElementById('editshare');
            var valueshare = Task.User;
            for (var i = 0; i < share.options.length; i++) {
                share.options[i].selected = valueshare.indexOf(share.options[i].value) >= 0;
            }
            document.getElementById('editID').value = Task.ID;
            document.getElementById('oldshare').textContent = Task.User;
            document.getElementById('edittitle').value = Task.Name;
            document.getElementById('editdes').value = Task.Description;
            document.getElementById('edittag').value = Task.Tags;
            document.getElementById('select2-edittag-container').textContent = Task.Tags;
        }
    });
}
function ChangeFavourites(id) {
    $.ajax({
        url: "/Notes/Favourites",
        data: { id: id },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (JSON.parse(response).status) {
                var body = '<i class="fa fa-star" style="color: #ffc30e"></i>'
                $("#favourites_" + id).find("i").remove();
                $("#favourites_" + id).append(body);
            }
            else {
                var body = '<i class="fa fa-star-o" style="color: #ffeb3b"></i>'
                $("#favourites_" + id).find("i").remove();
                $("#favourites_" + id).append(body);
            }
        }
    });
}
function Hidden(id, type) {
    $.ajax({
        url: "/Notes/Hidden",
        data: { id: id, type: type },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (JSON.parse(response).status) {
                $("#Note_" + id).remove();
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
function ChangeTag(tag, id, idtag) {
    $.ajax({
        url: "/Notes/ChangeTag",
        data: { id: id, tag: tag, idtag: idtag },
        dataType: "text",
        type: "POST",
        success: function (response) {
            let color = JSON.parse(response).status;
            if (color) {
                document.getElementById("tag_" + id).style.color = color;
                document.getElementById("card_" + id).style.backgroundColor = color + "26";
            }
        }
    });
}