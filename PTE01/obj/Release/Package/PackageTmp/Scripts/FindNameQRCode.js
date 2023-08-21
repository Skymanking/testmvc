var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindVT').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var IDWH = $('#kho').val();
            var name = $('#tenvt').val();
            var IDLocation = $('#location').val();
            var type = $('#type').val();
            if (name == "" || IDLocation == "") {
                //    alert("Chưa quét đủ mã QR");                
            }
            else {
                //Check Location
                $.ajax({
                    url: "/WarehouseTransaction/Checklocation",
                    data: { IDLocation: IDLocation, IDWH: IDWH },
                    dataType: "json",
                    type: "POST",
                    success: function (response) {
                        console.log(response);
                        var lankanListArray = JSON.parse(response.status);
                        if (lankanListArray == null) {
                            alert("Vị trí không thuộc kho này");
                        }
                        else {
                            $.ajax({
                                url: "/WarehouseTransaction/FindNameQRCode",
                                data: { name: name, IDLocation: IDLocation, type: type },
                                dataType: "json",
                                type: "POST",
                                success: function (response) {
                                    console.log(response);
                                    var lankanListArray = JSON.parse(response.status);
                                    if (lankanListArray == null) {
                                        $("textarea[id=abc]").val("Mã QR không khớp hoặc vật tư không có trong vị tri");
                                    } else {
                                        if (lankanListArray.Amount == -999) {
                                            $("textarea[id=abc]").val(lankanListArray.MaterialCode + ":" + lankanListArray.Name + ": -- Không có trong:" + "" + ":" + "" + ": Vị trí: " + lankanListArray.NameLocation);
                                        }
                                        else {
                                            $("textarea[id=abc]").val(lankanListArray.MaterialCode + ":" + lankanListArray.Name + ": -- Còn:" + lankanListArray.Amount + ":" + lankanListArray.DVT + ": Vị trí: " + lankanListArray.NameLocation);
                                        }
                                    }
                                }
                            });
                        }
                    }
                });
                if (type == 0) {
                    $.ajax({
                        url: "/WarehouseTransaction/FindLot1",
                        data: { IDWH: IDWH, IDlocation: IDLocation, IDItem: name },
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
                                    }                                });
                            }
                        }
                    });
                }
                else {
                    $.ajax({
                        url: "/WarehouseTransaction/FindLot",
                        data: {},
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
                                $("#IDLot").append($("<option></option>").val("Null").html("Lô mới"));
                            }
                            else {
                                $("#IDLot").append($("<option></option>").val("Null").html("Lô mới"));
                                $.each(lankanListArray, function (index, value) {
                                    if (this.ID != "NoLot") {
                                        $("#IDLot").append($("<option></option>").val(this.ID).html("Lô: " + this.ID));
                                    }                                });
                            }
                        }
                    });
                }
            }
        });
    }
};
item.init();