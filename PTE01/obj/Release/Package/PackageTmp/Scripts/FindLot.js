$(document).ready(function () {
    $("#location").change(function () {
        var IDWH = $('#kho').val();
        var IDlocation = $('#location').val();
        var IDItem = $('#abc option:selected').val();
        var type = $('#type').val();
        if (type == 0) {
            $.ajax({
                url: "/WarehouseTransaction/FindLot1",
                data: { IDWH: IDWH, IDlocation: IDlocation, IDItem: IDItem },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    var x = document.getElementById("IDLot");
                    x.remove(x.selectedIndex);
                    $("#IDLot").find("option").remove().end().append('<option selected = "selected" value="">chưa chọn</option>').val('');
                    if (response.status == '[]') {
                        $("#IDLot").append($("<option></option>").val("").html("Chưa có lô"));
                    }
                    else {
                        $.each(lankanListArray, function (index, value) {
                            if (this.ID != "NoLot") {
                                $("#IDLot").append($("<option></option>").val(this.ID).html("Lô: " + this.ID));
                            }
                        });
                    }
                }
            });
        }
        else
        {
            $.ajax({
                url: "/WarehouseTransaction/FindLot",
                data: { IDWH: IDWH, IDlocation: IDlocation, IDItem: IDItem },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    var x = document.getElementById("IDLot");
                    x.remove(x.selectedIndex);
                    $("#IDLot").find("option").remove().end().append('<option selected = "selected" value="">chưa chọn</option>').val('');
                    if (response.status == '[]') {
                        $("#IDLot").append($("<option></option>").val("").html("Chưa có lô"));
                    }
                    else {
                        $("#IDLot").append($("<option></option>").val("Null").html("Lô mới"));
                        $.each(lankanListArray, function (index, value) {
                            if (this.ID != "NoLot") {
                                $("#IDLot").append($("<option></option>").val(this.ID).html("Lô: " + this.ID));
                            }                        });
                    }
                }
            });
        }
    });
    $("#location1").change(function () {
        var IDWH = $('#kho1').val();
        var IDlocation = $('#location1').val();
        var IDItem = "";
        $.ajax({
            url: "/WarehouseTransaction/FindLot2",
            data: { IDWH: IDWH, IDlocation: IDlocation},
            dataType: "json",
            type: "POST",
            success: function (response) {
                console.log(response);
                var lankanListArray = JSON.parse(response.status);
                var x = document.getElementById("lot1");
                x.remove(x.selectedIndex);
                $("#lot1").find("option").remove().end().append('<option selected = "selected" value="">chưa chọn</option>').val('');
                if (response.status == '[]') {
                    $("#lot1").append($("<option></option>").val("").html("Chưa có lô"));
                }
                else {

                    $.each(lankanListArray, function (index, value) {
                        if (this.ID != "NoLot") {
                            $("#lot1").append($("<option></option>").val(this.ID).html("Lô: " + this.ID));
                        }                    });
                }
            }
        });
    });
});
