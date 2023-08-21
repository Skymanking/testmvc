var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindVT').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tenvt').val();
            $.ajax({
                url: "/WarehouseTransaction/FindNameQRCode2",
                data: { name: name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    var lankanListArray = JSON.parse(response.status);
                    if (lankanListArray == null) {
                        $("textarea[id=abc]").val("Mã QR vật tư không khớp");
                    } else {

                        $("textarea[id=abc]").val(lankanListArray.ItemId + ":" + lankanListArray.ItemName + ":" + lankanListArray.UnitId);
                        $("#btnAddVT").click();
                    }
                }
            });
        })
    }
};
item.init();