$(document).ready(function () {
    $("#abc").change(function () {
        var IDItem = $('#abc option:selected').val();
        var IDWH = $('#kho').val();
        var type = $('#type').val();
        if (type == 0) {
            $.ajax({
                url: "/WarehouseTransaction/FindLocation",
                data: { IDItem: IDItem,IDWH: IDWH },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    var x = document.getElementById("location");
                    x.remove(x.selectedIndex);
                    $("#location").find("option").remove().end().append('<option selected = "selected" value="">chưa chọn</option>').val('');
                    if (response.status == '[]') {
                        $("#location").append($("<option></option>").val("").html("Chưa có location"));
                    }
                    else {
                        $.each(lankanListArray, function (index, value) {
                            $("#location").append($("<option></option>").val(this.ID).html(this.Name + ", " + this.NameItem + " Còn: " + this.Amount + " " + this.DVT));
                        });
                    }
                }
            });
        }
        else {
            $.ajax({
                url: "/WarehouseTransaction/FindLocation1",
                data: {  IDWH: IDWH },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    var x = document.getElementById("location");
                    x.remove(x.selectedIndex);
                    $("#location").find("option").remove().end().append('<option selected = "selected" value="">chưa chọn</option>').val('');
                    if (response.status == '[]') {
                        $("#location").append($("<option></option>").val("").html("Chưa có location"));
                    }
                    else {
                        $.each(lankanListArray, function (index, value) {
                            $("#location").append($("<option></option>").val(this.ID).html(this.Name));
                        });
                    }
                }
            });
        }
    });
    $("#kho1").change(function () {
        var IDWH = $('#kho1').val();
        $.ajax({
            url: "/WarehouseTransaction/FindLocation1",
            data: { IDWH: IDWH },
            dataType: "json",
            type: "POST",
            success: function (response) {
                console.log(response);
                var lankanListArray = JSON.parse(response.status);
                var x = document.getElementById("location1");
                x.remove(x.selectedIndex);
                $("#location1").find("option").remove().end().append('<option selected = "selected" value="">chưa chọn</option>').val('');
                if (response.status == '[]') {
                    $("#location1").append($("<option></option>").val("").html("Chưa có location"));
                }
                else {
                    $.each(lankanListArray, function (index, value) {
                        $("#location1").append($("<option></option>").val(this.ID).html(this.Name));
                    });
                }
            }
        });
    });
});
