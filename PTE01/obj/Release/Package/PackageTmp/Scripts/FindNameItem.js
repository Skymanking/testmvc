//Dung cho CMMS
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
                data: { name: name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#abc").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#abc").append($("<option></option>").val(this.ItemId).html(this.ItemId + ": " + this.ItemName + ":" + this.UnitId));
                    });
                }
            });
        });
        $('.btnFindTB').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tentb').val();
            $.ajax({
                url: "/CMMSCategory/FindNameTB",
                data: { name: name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#abcd").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#abcd").append($("<option></option>").val(this.ItemId).html(this.ItemId + ": " + this.ItemName + ":" + this.UnitId));
                    });
                }
            });
        });
        $('.btnFindTBcopy').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tentb').val();
            $.ajax({
                url: "/CMMSCategory/FindNameTB",
                data: { name: name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#newid").find("option").remove();
                    $("#newid").append($("<option></option>").val("").html("Chưa chọn"));
                    $.each(lankanListArray, function (index, value) {
                        $("#newid").append($("<option></option>").val(this.ItemId).html(this.ItemId + ": " + this.ItemName + ":" + this.UnitId));
                    });
                }
            });
        });
    }
}
item.init();