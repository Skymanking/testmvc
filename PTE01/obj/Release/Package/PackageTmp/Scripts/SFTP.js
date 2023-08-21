let IDRef = 1;
let TypeRef = 1;
let IDCre = 1;
function CreateFolder() {
    $.ajax({
        url: "/SFTP/GetPerUser",
        data: { ID: IDCre },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response >= 2) {
                var reason = prompt("Tên thư mục");
                if (reason == "") {
                    alert("Điền tên thư mục");
                }
                if (reason == "Trash") {
                    alert("Tên thư mục không hợp lệ");
                }                
                else {
                    var note = prompt("Ghi chú");
                    $.ajax({
                        url: "/SFTP/Create",
                        data: { name: reason, ID: IDCre, note: note, type: TypeRef },
                        dataType: "text",
                        type: "POST",
                        success: function (response) {
                        }
                    });
                    refresh();
                }
            }
            else {
                alert("Bạn không có quyền tạo folder");
            }
        }
    });
}

function OpenFoder(ID, type) {
    OpenFoder1(ID, type);
    IDRef = ID;
    TypeRef = type;
}

function OpenFoder1(ID, type) {
    var body1 = "";
    $.ajax({
        url: "/SFTP/OpenFoder",
        data: { ID: ID, type: type },
        dataType: "json",
        type: "POST",
        success: function (response) {
            var lankanListArray = JSON.parse(response.status);
            IDCre = response.IDCre;
            $("#gvCustomers2").find("tr").remove();
            if (lankanListArray.length == 0) {
                body1 += "<tr ondblclick=OpenFoder(" + ID + "," + 1 + ")> ";
                body1 += "<td>...</td > ";
                body1 += "<td></td>";
                body1 += "<td></td>";
                body1 += "<td></td > ";
                body1 += "<td></td>";
                body1 += "</tr>";
                $("#gvCustomers2").append(body1);
                document.getElementById("IDValue").value = ID;
            }
            else {
                document.getElementById("IDValue").value = lankanListArray[0].ID;
            }
            $.each(lankanListArray, function (index, value) {
                var time = this.EditDate;
                time = time.replace(/\D/g, '');
                var date = new Date(Number(time));
                var lastmodified = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay() + " " + date.getHours() + ":" + date.getMinutes();
                if (body1 == "" && lankanListArray[0].LinkFile != "TEST_SFTP/") {
                    body1 += "<tr id='row_" + this.ID + "' ondblclick=OpenFoder(" + this.ID + "," + 2 + ") onclick='Property(" + this.ID + ")' class='rows'> ";
                    body1 += "<td>...</td > ";
                    body1 += "<td></td>";
                    body1 += "<td></td>";
                    body1 += "<td></td > ";
                    body1 += "<td></td>";
                    body1 += "</tr>";
                    $("#gvCustomers2").append(body1);
                }
                if (this.Type == 0) {
                    var body = '<tr id="row_' + this.ID + '" title="' + this.Note + '" ondblclick=OpenFoder(' + this.ID + ',' + 0 + ') onclick="Property(' + this.ID + ')" class="rows"> ';
                    body += '<td><i class="fa fa-folder" style="color: cornflowerblue"></i> &ensp;<span>' + this.NameShow + '</span > </td > ';
                    body += '<td>-</td>';
                    body += '<td>Folder</td>';
                    body += '<td>' + lastmodified + '</td > ';
                    body += '<td>-</td>';
                    body += '</tr>';
                }
                else {
                    let typename = this.Name + "";
                    const arr = typename.split(".");
                    var body = '<tr id="row_' + this.ID + '" title="' + this.Note + '" ondblclick=DownLoad(' + this.ID + ') onclick="Property(' + this.ID + ')" class="rows"> ';
                    body += '<td><i class="fa fa-file" style="color: cadetblue"></i> &ensp;<span>' + this.Name + '</span > </td > ';
                    body += '<td>-</td>';
                    body += '<td>' + arr[arr.length - 1].toUpperCase() + ' File</td > ';
                    body += '<td>' + lastmodified + '</td > ';
                    body += '<td onclick=DownLoad("' + this.ID + '")><i class="fa fa-download"></i></td>';
                    body += '</tr>';
                }
                $("#gvCustomers2").append(body);
            });

        }
    });
}

function DownLoad(ID) {
    $.ajax({
        url: "/SFTP/GetPerUser",
        data: { ID: ID },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response > 0) {
                let text = "Download file " + ID + "?";
                $("#select_logo").click(function (e) {
                    e.preventDefault();
                    $("#logo").trigger('click');
                });
                if (confirm(text) == true) {
                    $.ajax({
                        url: "/SFTP/DownLoad",
                        data: { ID: ID },
                        dataType: "text",
                        type: "POST",
                        success: function (response) {
                            var x = response.includes("true");
                            if (x) {
                                alert("Download thành công, vui lòng di chuyển file đến thư mục khác");
                            }

                            else {
                                alert("Download không thành công");
                            }
                        }
                    });
                }
            }
            else {
                alert( "Bạn không có quyền Download" );
            }
        }
    });
}
function Upload(files, ID, Callback) {
    $("#select_logo").click(function (e) {
        e.preventDefault();
        $("#logo").trigger('click');
    });
    $.ajax({
        url: "/SFTP/Checkfile",
        data: { name: files, ID: ID, type: TypeRef },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response.includes("true")) {
                let text = "Ghi đè file đã có";
                if (confirm(text) == true) {
                    $.ajax({
                        url: "/SFTP/Upload",
                        data: { source: files, ID: ID, check: 1, type: TypeRef },
                        dataType: "text",
                        type: "POST",
                        success: function (response) {
                        }
                    });
                }
            }
            else {
                $.ajax({
                    url: "/SFTP/Upload",
                    data: { source: files, ID: ID, check: 0, type: TypeRef },
                    dataType: "text",
                    type: "POST",
                    success: function (response) {

                    }
                });
            }
            Callback();
        }
    });
}
function importData() {
    let IDChose = $('#IDValue').val();
    $.ajax({
        url: "/SFTP/GetPerUser",
        data: { ID: IDChose },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response >= 2) {
                let ID = IDRef;
                let input = document.createElement('input');
                input.type = 'file';
                input.onchange = _ => {
                    let files = (input.files[0].name);
                    Upload(files, ID, function () { OpenFoder1(ID, TypeRef) });
                };
                input.click();
            }
            else {
                alert("Bạn không có quyền Upload");
            }
        }
    });
}
function refresh() {
    OpenFoder1(IDRef, TypeRef);
}
function Home() {
    OpenFoder1(1, -99);
    IDCre = 1;
    IDRef = 1;
    TypeRef = 1;
}
function Property(ID) {
    $.ajax({
        url: "/SFTP/Property",
        data: { ID: ID },
        dataType: "json",
        type: "POST",
        success: function (response) {
            var lankanListArray = JSON.parse(response.status);
            $("#Property").find("div").remove();
            var body = "<div >";
            body += "<h3 class='card-title' style='text-align:right; font-size:30px; background-color:grey'>Property</h3>";
            body += '<h3 class="card-title" style="font-size:18px">Name: ' + lankanListArray.Name + ' </h3>';
            body += '<br />';
            body += '<h3 class="card-title" style="font-size: 18px">Description: ' + lankanListArray.Note + ' </h3>';
            body += '<br />';
            body += '<h3 class="card-title" style="font-size: 18px">Creator: ' + lankanListArray.CreateBy + ' </h3>';
            body += '<br />';
            body += '<h3 class="card-title" style="font-size: 18px">Link: ' + lankanListArray.LinkFile + ' </h3>';
            body += '<br />';
            body += '<input id="IDChose" value="' + lankanListArray.ID + '" hidden/>';
            if (response.TypePer >= 2) {
                body += 'Sửa: <button type="button" data-toggle="modal" data-target="#toolModalRename" style="color: dodgerblue; width: 30px; height: 30px; border-radius: 50%;"><span class="fa fa-wrench"></span></button>';
                body += '           Xoá: <button type="button" data-toggle="modal" data-target="#toolModalDelete" style="color: orangered; width: 30px; height: 30px; border-radius: 50%;"><span class="fa fa-trash"></span></button>';
                body += '<br />';
                body += '<br />';
            }
            if (response.TypePer >= 3) {
                body += '<button type="button" onclick="Permision(' + lankanListArray.ID + ')" data-toggle="modal" data-target="#toolModalPermision" style="color:saddlebrown; border-radius: 10%; background-color: #03a9f4" class="btn btn-primary" >Phân quyền <span class="fa fa-user"></span></button>';
            }
            body += '</div>';
            $("#Property").append(body);
            if (lankanListArray.Type == 1) {
                document.getElementById("NameChoseShow").value = lankanListArray.Name;
                document.getElementById("NameChoseShow1").value = lankanListArray.Name;
                document.getElementById("NameChoseShow2").value = lankanListArray.Name;
            }
            else {
                document.getElementById("NameChoseShow").value = lankanListArray.NameShow;
                document.getElementById("NameChoseShow1").value = lankanListArray.NameShow;
                document.getElementById("NameChoseShow2").value = lankanListArray.NameShow;
            }
        }
    });
}
function Permision(ID) {
    $.ajax({
        url: "/SFTP/ListUserInPer",
        data: { ID: ID },
        dataType: "json",
        type: "POST",
        success: function (response) {
            var lankanListArray = JSON.parse(response.status);
            $("#PermisionTable").find("tr").remove();
            $.each(lankanListArray, function (index, value) {
                let userper = "";
                switch (this.Type) {
                    case 0: userper = "View";
                        break;
                    case 1: userper = "Download";
                        break;
                    case 2: userper = "Edit";
                        break;
                    case 3: userper = "Manager";
                        break;
                    case -1: userper = "BLOCK";
                        break;
                }
                var body = "<tr>";
                body += "<td>" + this.Username + "</td>";
                body += "<td>" + this.User + "</td>";
                body += "<td>" + userper + "</td>";
                body += '<td><button type="button" onclick="DelPer(' + this.ID + ')" style="color: orangered; width: 30px; height: 30px; border-radius: 50%;"><span class="fa fa-trash"></span></button></td>';
                body += "</tr>";
                $("#PermisionTable").append(body);
            });
        }
    });
}
function AddPer() {
    let staff = $('#ListStaff').val();
    let per = $('#permission').val();
    let ID = $('#IDChose').val();
    $.ajax({
        url: "/SFTP/AddPer",
        data: { Staff: staff, per: per, ID: ID },
        dataType: "text",
        type: "POST",
        success: function (response) {
            Test();
            $("#close").click();
        }
    });
}
function Test() {
    var searchSel = document.getElementsByClassName("search-choice-close");
    for (var i = 0; i <= searchSel.length; i++) {
        searchSel[0].click();
    }
}
function Rename() {
    let ID = $('#IDChose').val();
    let NewName = $('#NewName').val();
    $.ajax({
        url: "/SFTP/Rename",
        data: { ID: ID, Name: NewName },
        dataType: "text",
        type: "POST",
        success: function (response) {
            document.getElementById("NewName").value = "";
            $("#closerename").click();
            refresh();
        }

    });
}
function Delete() {
    let ID = $('#IDChose').val();
    $.ajax({
        url: "/SFTP/Delete",
        data: { ID: ID },
        dataType: "text",
        type: "POST",
        success: function (response) {
            $("#closedel").click();
            refresh();
        }
    });
}
function DelPer(ID) {
    let IDChose = $('#IDChose').val();
    $.ajax({
        url: "/SFTP/DeletePer",
        data: { ID: ID },
        dataType: "text",
        type: "POST",
        success: function (response) {
            $.ajax({
                url: "/SFTP/ListUserInPer",
                data: { ID: IDChose },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    var lankanListArray = JSON.parse(response.status);
                    $("#PermisionTable").find("tr").remove();
                    $.each(lankanListArray, function (index, value) {
                        let userper = "";
                        switch (this.Type) {
                            case 0: userper = "View";
                                break;
                            case 1: userper = "Download";
                                break;
                            case 2: userper = "Edit";
                                break;
                            case 3: userper = "Manager";
                                break;
                            case -1: userper = "BLOCK";
                                break;
                        }
                        var body = "<tr>";
                        body += "<td>" + this.Username + "</td>";
                        body += "<td>" + this.User + "</td>";
                        body += "<td>" + userper + "</td>";
                        body += '<td><button type="button" onclick="DelPer(' + this.ID + ')" style="color: orangered; width: 30px; height: 30px; border-radius: 50%;"><span class="fa fa-trash"></span></button></td>';
                        body += "</tr>";
                        $("#PermisionTable").append(body);
                    });
                }
            });
        }
    });
}
