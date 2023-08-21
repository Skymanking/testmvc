var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindVT').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tenvt').val();
            var IDWH = $('#kho').val();
            var type = $('#type').val();
            //var type = $('#type').val();
            if (IDWH == "Null") {
                alert("Chưa chọn Kho");     
            }
            else {                
                $.ajax({
                    url: "/WarehouseTransaction/FindNameNoQRCode",
                    data: { name: name, IDWH: IDWH, type: type },
                    dataType: "json",
                    type: "POST",
                    success: function (response) {
                        console.log(response);
                        var lankanListArray = JSON.parse(response.status);
                        $("#abc").find("option").remove();
                        if (lankanListArray == null) {
                            $("textarea[id=abc]").val("Mã QR không khớp hoặc vật tư không có trong vị tri");
                        } else {
                            $("#abc").append($("<option></option>").val("").html("Chọn vật tư"));
                            $.each(lankanListArray, function (index, value) {
                                $("#abc").append($("<option></option>").val(this.MaterialCode).html(this.MaterialCode + ":" + this.Name + ": -- Còn :" + this.Amount + ":" + this.DVT + ": Kho:" + this.NameLocation));
                            });
                        }
                    }
                });
            }
        })
    }
};
item.init();