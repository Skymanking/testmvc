$(document).ready(function () {
    $("tenvt").change(function () {
        var IDitem = $('#tenvt').val();
        $.ajax({
            url: "/WarehouseTransaction/FindNameItem",
            data: { IDitem: IDitem },
            dataType: "json",
            type: "POST",
            success: function (response) {
                console.log(response);
                var lankanListArray = JSON.parse(response.status);
                $("#abc").find("value").remove();
                $.each(lankanListArray, function (index, value) {
                    $("#abc").append().val().html(this.ItemName + "[" + this.UnitId + "]-" + this.ItemId)
                });
            }
        });
    });
});