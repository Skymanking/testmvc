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
            $.ajax({
                url: "/WarehouseTransaction/FindNameVTWH",
                data: { name: name, IDWH: IDWH, type: type },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#abc").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#abc").append($("<option></option>").val(this.ItemId).html(this.MaterialCode + ":" + this.Name + ": -- Còn :" + this.Amount + ":" + this.DVT));
                    });
                  

                }
            });
        });
    }
}
item.init();