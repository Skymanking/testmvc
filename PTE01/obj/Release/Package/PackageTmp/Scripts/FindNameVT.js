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
                url: "/Item/FindNameVT",
                data: { name:name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#abc").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#abc").append($("<option></option>").val(this.ItemId).html(this.ItemName + "[" + this.UnitId + "]-" + this.ItemId));
                    });
                  

                }
            });
        });
    }
}
item.init();