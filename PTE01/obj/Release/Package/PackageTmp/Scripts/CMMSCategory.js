var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnDevice').off('click').on('click', function (e) {
            e.preventDefault();
            var device = $('#device').val();
            $.ajax({
                url: "/CMMSCategory/FindQRCode",
                data: { id: device},
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#cat").find("option").remove();
                    $("#cat").append($("<option></option>").val("").html("Chưa chọn"));
                    if (lankanListArray == null) {
                        $("#cat").append($("<option></option>").val("").html("Không có thiết bị này"));
                    } else {
                        $.each(lankanListArray, function (index, value) {
                            $("#cat").append($("<option></option>").val(this.ID).html(this.ID + ":" + this.Name));
                        });

                    }
                }
            });
        })

    }
};
item.init();
var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-createCat').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var Device = $('#abcd option:selected').text().split(":");
            var IDDevice = $('#abcd option:selected').val();
            var reason = btn.data('reason');
            var cycle = btn.data('cycle');
            var note = btn.data('note');
            if (Device == "" || reason == "" || cycle == "") {
                alert("Chưa chọn thiết bị");
            }
            else {
                $.ajax({
                    url: "/CMMSCategory/AddCat",
                    data: { reason: reason, cycle: cycle, IDDevice: IDDevice, NameDevice: Device[1], note: note },
                    dataType: "text",
                    type: "POST",
                    success: function (response) {
                    }
                });
                window.location = '/CMMSCategory/Edit/' + IDDevice;
            }
        });
        $('.btn-copydevice').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var newid = btn.data('newid');
            var oldid = btn.data('oldid');
            if (newid == "") {
                alert("Chưa chọn thiết bị");
            }
            else {
                $.ajax({
                    url: "/CMMSCategory/CheckCopy",
                    data: { newid: newid, oldid: oldid },
                    dataType: "text",
                    type: "POST",
                    success: function (response1) {
                        if (response1 != "") {
                            CopyDev(newid, oldid);
                        }
                        else {
                            $.ajax({
                                url: "/CMMSCategory/CopyDeivce",
                                data: { newid: newid, oldid: oldid },
                                dataType: "text",
                                type: "POST",
                                success: function (response) {
                                }
                            });
                            window.location = '/CMMSCategory/Edit/' + newid;
                        }
                    }
                });
            }
        });
        $('.btn-addCat').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var Device = $('#abcd').val();
            var array = Device.split(":");
            var reason = btn.data('reason');
            var cycle = btn.data('cycle');
            var note = btn.data('note');
            $.ajax({
                url: "/CMMSCategory/AddCat",
                data: { reason: reason, cycle: cycle, IDDevice: array[0], NameDevice: array[1], note: note },
                dataType: "text",
                type: "POST",
                success: function (response) {
                }
            });
            window.location.reload();

        });
        $('.btn-editCat').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var reason = btn.data('reasonedit');
            var cycle = btn.data('cycleedit');
            var note = btn.data('noteedit');
            var id = btn.data('idedit');
            $.ajax({
                url: "/CMMSCategory/EditCat",
                data: { id: id, reason: reason, cycle: cycle, note: note },
                dataType: "text",
                type: "POST",
                success: function (response) {
                }
            });
            window.location.reload();
        });
        $('.btn-editItem').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('edititemid');
            var amount = btn.data('edititemamount');
            var note = btn.data('edititemnote');
            $.ajax({
                url: "/CMMSCategory/EditItem",
                data: { id: id, amount: amount, note: note },
                dataType: "text",
                type: "POST",
                success: function (response) {
                }
            });
            window.location.reload();
        });
        $('.table tbody').on('click', '.xoadongR', function () {
            var sodong = $(this).attr("data-sodong") - 1;
            $('#detail_' + sodong + '__ItemID').attr("value", "");
            $(this).closest('tr').hide();
        });
        $(".checkallcat").change(function () {

            if ($('.checkallcat:checked').val() != undefined) {
                $('.abcde').prop('checked', 'checked');
                $(".abcde").ready(function () {
                    ScheduleSetup();
                });
            }
            else {
                $('.abcde').prop('checked', false);
            }
        });
        $(".checkallcat1").change(function () {

            if ($('.checkallcat1:checked').val() != undefined) {
                $('.abcde').prop('checked', 'checked');
                $(".abcde").ready(function () {
                    ScheduleSetup1();
                });
            }
            else {
                $('.abcde').prop('checked', false);
            }

        });
        $("#cat").change(function () {
            var IDcat = $('#cat').val();
            $.ajax({
                url: "/CMMSCategory/FindCat",
                data: { IDcat: IDcat },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#gvCustomers2").find("tr").remove();
                    $.each(lankanListArray, function (index, value) {
                        var x = this.ID
                        var note = "";
                        if (this.Note != null) {
                            note = this.Note;
                        }
                        var body = "<tr>";
                        body += "<td><input type='checkbox' id='" + this.ID + "' class='abcde' name='" + this.ID +"'></td>";
                        body += "<td>" + this.IDItem + "</td>";
                        body += "<td>" + this.Name + "</td>";
                        body += "<td>" + this.Amount + "</td>";
                        body += "<td><input type = 'number' min = 1 value = '" + this.Amount + "' id ='amount_" + this.ID + "' class = 'form-control'></td>";
                        body += "<td>" + this.DVT + "</td>";
                        body += "<td>" + note + "</td>";
                        body += "<td hidden>" + this.IDLink + "</td>";
                        body += "</tr>";
                        body += "<script>$(document).ready(function () {$('#" + this.ID+"').change(function () {ScheduleSetup1();});});</script>";
                        $("#gvCustomers2").append(body);
                    });
                }
            });
        });
    }
}
item.init();
function GetDetailPerform(x, y, z, device, note) {
    var id = x;
    $.ajax({
        url: "/CMMSCategory/FindItemCat",
        data: { id: id },
        dataType: "json",
        type: "POST",
        success: function (response) {
            var galleries = document.getElementsByClassName('rows');
            for (var i = 0; i < galleries.length; i++) {
                galleries[i].style.backgroundColor = "#6bbac7";
            }
            document.getElementById('row_' + x).style.backgroundColor = '#ff9800';
            var lankanListArray = JSON.parse(response.status);
            $("#gvCustomers2").find("tr").remove();
            $.each(lankanListArray, function (index, value) {
                var x = this.ID
                var note = "";
                if (this.Note != null) {
                    note = this.Note;
                }
                var body = "<tr>";
                body += "<td>" + this.IDItem + "</td>";
                body += "<td>" + this.Name + "</td>";
                body += "<td>" + this.Amount + "</td>";
                body += "<td><input type = 'number' min = 1 value = '" + this.Amount + "' class = 'form - control'></td>";
                body += "<td>" + this.DVT + "</td>";
                body += "<td>" + note + "</td>";
                body += "<td hidden>" + this.IDLink + "</td>";
                body += "<td><button type='button' onclick='ConfirmItem(" + this.ID + "," + this.IDLink + "," + this.Amount + ")' class='xoadongCat' style='color: #f44336; width: 30px; height: 30px; border-radius:50%;'><span class='fa fa-check'></span></button></td>";
                body += "</tr>";
                $("#gvCustomers2").append(body);
            });
        }
    });
}
function GetDetailPerform1(x, y, z, device, note) {
    var id = x;
    $.ajax({
        url: "/CMMSCategory/FindItemCat",
        data: { id: id },
        dataType: "json",
        type: "POST",
        success: function (response) {
            var galleries = document.getElementsByClassName('rows');
            for (var i = 0; i < galleries.length; i++) {
                galleries[i].style.backgroundColor = "#6bbac7";
            }
            document.getElementById('row1_' + x).style.backgroundColor = '#ff9800';
            var lankanListArray = JSON.parse(response.status);
            $("#gvCustomers3").find("tr").remove();
            $.each(lankanListArray, function (index, value) {
                var x = this.ID
                var note = "";
                if (this.Note != null) {
                    note = this.Note;
                }
                var body = "<tr>";
                body += "<td>" + this.IDItem + "</td>";
                body += "<td>" + this.Name + "</td>";
                body += "<td>" + this.Amount + "</td>";
                body += "<td><input type = 'number' min = 1 value = '" + this.Amount + "' class = 'form - control'></td>";
                body += "<td>" + this.DVT + "</td>";
                body += "<td>" + note + "</td>";
                body += "<td hidden>" + this.IDLink + "</td>";
                body += "<td><button type='button' onclick='ConfirmItem(" + this.ID + "," + this.IDLink + "," + this.Amount + ")' class='xoadongCat' style='color: #f44336; width: 30px; height: 30px; border-radius:50%;'><span class='fa fa-check'></span></button></td>";
                body += "</tr>";
                $("#gvCustomers3").append(body);
            });
        }
    });
}
function GetDetail(x, y, z, device, note) {
    var id = x;
    $.ajax({
        url: "/CMMSCategory/FindItemCat",
        data: { id: id },
        dataType: "json",
        type: "POST",
        success: function (response) {
            var galleries = document.getElementsByClassName('rows');
            for (var i = 0; i < galleries.length; i++) {
                galleries[i].style.backgroundColor = "#6bbac7";
            }
            document.getElementById('row_' + x).style.backgroundColor = '#ff9800';
            var lankanListArray = JSON.parse(response.status);
            $("#gvCustomers2").find("tr").remove();
            $.each(lankanListArray, function (index, value) {
                var x = this.ID
                var note = "";
                if (this.Note != null) {
                    note = this.Note;
                }
                var body = "<tr>";
                body += "<td>" + this.IDItem + "</td>";
                body += "<td>" + this.Name + "</td>";
                body += "<td>" + this.Amount + "</td>";
                body += "<td>" + this.DVT + "</td>";
                body += "<td>" + note + "</td>";
                body += "<td><button type='button' onclick='EditItem(" + x + ")' data-toggle='modal' data-target='#EditItemForm' style='color: dodgerblue; width: 30px; height: 30px; border-radius: 50%; '><span class='fa fa-wrench'></span></button> </td > "
                body += "<td><button type='button' onclick='deleteItem(" + x + ")' class='xoadongItem' style='color: #f44336; width: 30px; height: 30px; border-radius: 50%; '><span class='fa fa-trash'></span></button> </td > "
                body += "</tr>";
                $("#gvCustomers2").append(body);
            });
            document.getElementById("reason1").value = y;
            document.getElementById("cycle1").value = z;
            document.getElementById("reasonedit").value = y;
            document.getElementById("cycleedit").value = z;
            document.getElementById("noteedit").value = note;
            document.getElementById("idedit").value = x;
            document.getElementById("id1").value = device;
            document.getElementById("id2").value = x;
        }
    });
}

function deleteCat(x) {
    let text = "Xóa hạng mục này?";
    if (confirm(text) == true) {
        $.ajax({
            url: "/CMMSCategory/deleteCat",
            data: { id: x },
            dataType: "text",
            type: "POST",
            success: function (response) {
            }
        });
        $('.table tbody').on('click', '.xoadongCat', function () {
            var sodong = $(this).attr("data-sodong") - 1;
            $('#detail_' + sodong + '__ItemID').attr("value", "");
            $(this).closest('tr').hide();
        });
    }
}
function CopyDev(x, y) {
    let text = "Thiết bị đã có hạng mục bảo trì. Tiếp tục?";
    if (confirm(text) == true) {
        $.ajax({
            url: "/CMMSCategory/CopyDeivce",
            data: { newid: x, oldid: y },
            dataType: "text",
            type: "POST",
            success: function (response) {
            }
        });
        window.location = '/CMMSCategory/Edit/' + x;
    }
}

function deleteItem(x) {
    let text = "Xóa vật tư này?";
    if (confirm(text) == true) {
        $.ajax({
            url: "/CMMSCategory/deleteItem",
            data: { ID: x },
            dataType: "text",
            type: "POST",
            success: function (response) {
            }
        });
        $('.table tbody').on('click', '.xoadongItem', function () {
            var sodong = $(this).attr("data-sodong") - 1;
            $('#detail_' + sodong + '__ItemID').attr("value", "");
            $(this).closest('tr').hide();
        });
    }
}
function EditItem(a) {
    document.getElementById("edititemid").value = a;
}
function Copy(x) {
    $("#copyid").mouseenter(function () {
        $('#copyid').attr("data-newid", x);
        $('#copyid').attr("data-oldid", $('#newid option:selected').val());
    });
}
function ScheduleSetup() {
    var names = $('.parent input:checked').map(function () { return this.name; }).get();
    if (names.length > 0) {
        var arr = names;
        var i = 0
        $('#fileinput').html('');
        for (i = 0; i < names.length; i++) {
            $('#fileinput').html($('#fileinput').html() + '<input type="text" id="chuoi_' + i + '"  name="chuoi[' + i + ']" value="' + arr[i] + '"/>');
        }
    }
};
function ScheduleSetup1() {
    var names = $('.parent input:checked').map(function () { return this.name; }).get();
    if (names.length > 0) {
        var arr = names;
        var i = 0
        $('#fileinput').html('');
        for (i = 0; i < names.length; i++) {
            var amount = document.getElementById("amount_" + arr[i]).value;
            $('#fileinput').html($('#fileinput').html() + '<input type="text" id="chuoi_' + i + '"  name="chuoi[' + i + ']" value="' + arr[i] + ':' + amount + '"/>');
        }
    }
};
function ConfirmCat(x, y) {
    let text = "Xác nhận hoàn thành hạng mục: " + y + " và xác nhận toàn bộ vật tư";
    if (confirm(text) == true) {
        $.ajax({
            url: "/CMMSCategory/ConfirmCat",
            data: { id: x },
            dataType: "text",
            type: "POST",
            success: function (response) {
            }
        });
    }
}
function ConfirmItem(x, y, z) {
    let text = "Xác nhận vật tư: " + x + "," + y + ", số lượng: " + z;
    if (confirm(text) == true) {
        $.ajax({
            url: "/CMMSCategory/ConfirmItem",
            data: { id: x, amount: z, idlink: y },
            dataType: "text",
            type: "POST",
            success: function (response) {
            }
        });
    }
}